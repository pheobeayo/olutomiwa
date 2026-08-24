"use client";

import { clients } from "@/lib/data";

/* Endless scrolling row of employers / clients. */
export function LogoMarquee() {
  return (
    <section aria-label="Worked with" className="bg-paper pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="px-6 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-ink-dark sm:text-4xl">
          Portfolio
        </h1>
        <p className="mt-3 text-ink-dark/60">Selected projects and the teams behind them</p>
      </div>

      <div className="pause-on-hover relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {clients.map((name) => (
                <li
                  key={name}
                  className="px-10 text-xl font-semibold tracking-tight whitespace-nowrap text-ink-dark/70 md:px-14 md:text-2xl"
                >
                  {name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
