import { proofLine } from "@/lib/data";


export function ProofLine() {
  return (
    <section className="bg-paper px-6 pt-4 pb-16 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <p className="mx-auto max-w-3xl text-center text-2xl leading-tight font-semibold tracking-[-0.02em] text-ink-dark text-balance sm:text-3xl md:text-4xl">
          I keep corporate networks and systems available, secure and
          understood
        </p>

        <ul className="mt-14 flex flex-col items-center justify-center gap-3 text-center text-ink-dark/70 sm:flex-row sm:gap-0 md:mt-20">
          {proofLine.map((fact, i) => (
            <li key={fact} className="flex items-center text-[15px] sm:text-base">
              {i > 0 && (
                <span aria-hidden className="mx-4 hidden text-ink-dark/25 sm:inline">
                  ·
                </span>
              )}
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
