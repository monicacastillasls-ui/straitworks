import { whatsappLink } from "@/content/business";
import type { Dictionary } from "@/content/dictionaries/en";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function WhatsAppFloat({ t }: { t: Dictionary }) {
  return (
    <a
      href={whatsappLink(t.whatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappFloat}
      title={t.whatsappFloat}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-900"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
