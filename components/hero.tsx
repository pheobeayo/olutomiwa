"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { WarpBackground } from "@/components/warp-background";
import { person } from "@/lib/data";

/*
  Above the fold: full-bleed visual, the navigation, and one line.
  The line splits to the edges as the thesis statement rises to meet it.
*/
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = scrollYProgress;

  const sideX = useTransform(p, [0.15, 0.4], ["0vw", reduced ? "0vw" : "26vw"]);
  const sideXNeg = useTransform(p, [0.15, 0.4], ["0vw", reduced ? "0vw" : "-26vw"]);
  const sideOpacity = useTransform(p, [0.6, 0.72], [1, reduced ? 1 : 0]);

  const statementY = useTransform(
    p,
    [0.05, 0.35, 0.6, 0.82],
    reduced ? ["0vh", "0vh", "0vh", "0vh"] : ["60vh", "0vh", "-30vh", "-120vh"],
  );
  const statementOpacity = useTransform(p, [0.05, 0.18], [reduced ? 1 : 0, 1]);

  const boxTop = useTransform(p, [0.55, 0.85], ["0vh", reduced ? "0vh" : "6vh"]);
  const boxBottom = useTransform(p, [0.55, 0.85], ["0vh", reduced ? "0vh" : "13vh"]);
  const boxSide = useTransform(p, [0.55, 0.85], ["0vw", reduced ? "0vw" : "9vw"]);
  const boxRadius = useTransform(p, [0.55, 0.8], ["0rem", "1.75rem"]);
  const rayScale = useTransform(p, [0, 0.5], [1, reduced ? 1 : 1.12]);
  const hintOpacity = useTransform(p, [0, 0.08], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[300vh] bg-paper">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          className="absolute overflow-hidden bg-ground-deep"
          style={{
            top: boxTop,
            bottom: boxBottom,
            left: boxSide,
            right: boxSide,
            borderRadius: boxRadius,
          }}
        >
          <motion.div style={{ scale: rayScale }} className="absolute inset-0">
            <WarpBackground />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,6,17,0.55)_75%)]" />
        </motion.div>

        {/* The one line */}
        <motion.div
          style={{ opacity: sideOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <h1 className="relative w-full text-center">
            <motion.span
              style={{ x: sideXNeg }}
              className="inline-block text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl md:text-3xl lg:text-4xl"
            >
              Uptime is not luck.
            </motion.span>
            <span className="inline-block w-2 sm:w-3" />
            <motion.span
              style={{ x: sideX }}
              className="inline-block text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl md:text-3xl lg:text-4xl"
            >
              It is maintained.
            </motion.span>
          </h1>
        </motion.div>

        {/* The thesis, rising */}
        <motion.div
          style={{ y: statementY, opacity: statementOpacity }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="max-w-3xl text-center">
            <p className="text-3xl leading-[1.1] font-semibold tracking-[-0.02em] text-white text-balance sm:text-4xl md:text-5xl">
              Ten years keeping systems running.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {person.positioning}
            </p>
            <Link
              href="/portfolio"
              className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-accent transition-colors hover:text-white"
            >
              See the work
              <span aria-hidden>→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.25em] text-white/40 uppercase"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
