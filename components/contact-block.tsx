import { contact } from "@/lib/data";

/* Close + contact details on the deep ground. */
export function ContactBlock() {
  return (
    <footer
      id="contact"
      className="relative z-10 flex min-h-[70vh] scroll-mt-24 flex-col items-center justify-center bg-ground-deep px-6 py-20 text-center"
    >
      <p className="mb-4 text-[11px] tracking-[0.25em] text-ink/40 uppercase">
        Ready when you are
      </p>
      <h2 className="mb-10 max-w-2xl text-4xl leading-tight font-semibold sm:text-5xl">
        Tell me what needs fixing.
      </h2>
      <a
        href={`mailto:${contact.email}`}
        className="rounded-full bg-accent px-8 py-4 text-sm font-semibold tracking-widest text-ground-deep uppercase transition-transform hover:-translate-y-0.5"
      >
        Get in touch
      </a>

      <div className="mt-24 grid w-full max-w-3xl gap-10 text-left sm:grid-cols-2 sm:gap-6">
        <div>
          <p className="mb-3 text-lg font-bold text-ink">Email address</p>
          <a
            href={`mailto:${contact.email}`}
            className="text-lg break-all text-ink/60 transition-colors hover:text-ink"
          >
            {contact.email}
          </a>
        </div>
        <div>
          <p className="mb-3 text-lg font-bold text-ink">Phone number</p>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="text-lg text-ink/60 transition-colors hover:text-ink"
          >
            {contact.phone}
          </a>
        </div>
      </div>

      <div className="mt-20 flex w-full max-w-5xl flex-col items-center justify-between gap-4 border-t border-line pt-8 text-[12px] text-ink/40 sm:flex-row">
        <span className="text-base lowercase text-ink/70">olutomiwa</span>
        <span>© {new Date().getFullYear()} Olutomiwa Sanni</span>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-ink/70"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
