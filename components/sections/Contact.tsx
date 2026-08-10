"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";
import {
  ContactFormData,
  validateContactForm,
} from "@/lib/contactForm";
import { contact } from "@/content/site";

const initialData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  details: "",
};

const fieldClass =
  "w-full rounded-lg border border-fog-300/20 bg-navy-900 px-4 py-3 text-sm text-white placeholder:text-fog-600 transition-colors focus:border-electric-light focus:outline-none";

export default function Contact() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  function update<K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K]
  ) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validation = validateContactForm(data);
    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return;
    }

    setStatus("submitting");

    // TODO: connect this to a real submission endpoint (e.g. an email API
    // or form service) once available. No data is sent anywhere yet.
    window.setTimeout(() => {
      setStatus("success");
      setData(initialData);
    }, 700);
  }

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-glow-radial"
        style={{ ["--y" as string]: "0%" }}
        aria-hidden="true"
      />

      <Container className="relative max-w-3xl text-center">
        <Reveal>
          <Eyebrow className="justify-center">{contact.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tightest text-white sm:text-5xl md:text-6xl">
            {contact.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-base leading-relaxed text-fog-400">
            {contact.body}
          </p>
        </Reveal>
      </Container>

      <Container className="relative mx-auto mt-16 max-w-2xl">
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-10">
            {status === "success" ? (
              <div className="py-10 text-center" role="status">
                <p className="font-display text-2xl font-bold text-white">
                  Thank you.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fog-400">
                  Your project request has been prepared. We&apos;ll follow up
                  as soon as a submission channel is connected.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                <FormField label="Name" htmlFor="name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={fieldClass}
                  />
                </FormField>

                <FormField label="Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={fieldClass}
                  />
                </FormField>

                <FormField
                  label="Company / Brand"
                  htmlFor="company"
                  className="sm:col-span-2"
                >
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={data.company}
                    onChange={(e) => update("company", e.target.value)}
                    className={fieldClass}
                  />
                </FormField>

                <FormField
                  label="Service Needed"
                  htmlFor="service"
                  error={errors.service}
                >
                  <select
                    id="service"
                    name="service"
                    value={data.service}
                    onChange={(e) => update("service", e.target.value)}
                    aria-invalid={!!errors.service}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select a service</option>
                    {contact.serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  label="Budget Range"
                  htmlFor="budget"
                  error={errors.budget}
                >
                  <select
                    id="budget"
                    name="budget"
                    value={data.budget}
                    onChange={(e) => update("budget", e.target.value)}
                    aria-invalid={!!errors.budget}
                    className={`${fieldClass} appearance-none`}
                  >
                    <option value="">Select a range</option>
                    {contact.budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormField>

                <FormField
                  label="Project Details"
                  htmlFor="details"
                  error={errors.details}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={data.details}
                    onChange={(e) => update("details", e.target.value)}
                    aria-invalid={!!errors.details}
                    aria-describedby={
                      errors.details ? "details-error" : undefined
                    }
                    placeholder="Tell us about your business, goals and timeline."
                    className={`${fieldClass} resize-none`}
                  />
                </FormField>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full"
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Send Project Request"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
