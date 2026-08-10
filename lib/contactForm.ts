export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  }

  if (!data.budget) {
    errors.budget = "Please select a budget range.";
  }

  if (!data.details.trim()) {
    errors.details = "Please tell us a little about your project.";
  } else if (data.details.trim().length < 20) {
    errors.details = "Please add a few more details (at least 20 characters).";
  }

  return errors;
}
