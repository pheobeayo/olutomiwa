"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import { useNav } from "@/context/nav-context";
import { useScrolled } from "@/hooks/use-scrolled";
import { contact, navTiles, nodes, person } from "@/lib/data";
import { cn } from "@/lib/utils";



const LEAVE_GRACE_MS = 260; // ignore leaves for this long after opening
const LEAVE_DELAY_MS = 180; // wait this long before acting on a leave

/** `tone` is accepted for compatibility but no longer changes the palette:
 *  the nav is always a light pill with dark type. */
export function Navbar(_props: { tone?: "dark" | "light" } = {}) {
  const { menuOpen, toggleMenu, closeMenu } = useNav();
  const scrolled = useScrolled(40);

  const panelRef = useRef<HTMLDivElement>(null);
  const openedAt = useRef(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelLeave = useCallback(() => {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
  }, []);

  // Record when the panel opened, and clear any pending close
  useEffect(() => {
    if (menuOpen) openedAt.current = Date.now();
    cancelLeave();
  }, [menuOpen, cancelLeave]);

  // Clean up on unmount
  useEffect(() => cancelLeave, [cancelLeave]);

  const handlePointerLeave = (e: React.PointerEvent) => {
    if (!menuOpen) return;
    if (e.pointerType !== "mouse") return; // never on touch or pen
    if (Date.now() - openedAt.current < LEAVE_GRACE_MS) return; // still settling

    cancelLeave();
    leaveTimer.current = setTimeout(closeMenu, LEAVE_DELAY_MS);
  };

  // Escape closes; focus is trapped inside the panel while it is open
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  // Click or tap anywhere outside closes — the reliable path on touch
  useEffect(() => {
    if (!menuOpen) return;

    const onDown = (e: PointerEvent) => {
      if (Date.now() - openedAt.current < 150) return; // ignore the opening tap
      if (panelRef.current?.contains(e.target as Node)) return;
      closeMenu();
    };

    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [menuOpen, closeMenu]);

  // The rail is always dark type on a light pill — consistent on every page.
  const railText = "text-ink-dark/70";
  const railHover = "hover:text-ink-dark";

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-[width] duration-500 ease-out",
        menuOpen ? "w-[min(94vw,690px)]" : "w-[min(92vw,560px)]",
      )}
    >
      <div
        ref={panelRef}
        onPointerLeave={handlePointerLeave}
        onPointerEnter={cancelLeave}
        className={cn(
          // Always a light surface, on every page and in every state, so the
          // type stays dark and legible — including over the hero burst.
          "overflow-hidden backdrop-blur-2xl transition-all duration-500",
          menuOpen
            ? "rounded-4xl bg-white/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            : scrolled
              ? "rounded-full bg-white/85 shadow-[0_8px_30px_rgba(12,18,32,0.18)]"
              : "rounded-full bg-white/70 shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
        )}
      >
        {/* The two poles */}
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-500",
            menuOpen ? "px-4 py-4 sm:px-6" : "px-3 py-2",
          )}
        >
          <Link
            href="/portfolio"
            onClick={closeMenu}
            className={cn(
              "px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors",
              railText,
              railHover,
            )}
          >
            Portfolio
          </Link>

          <Link
            href="/"
            onClick={closeMenu}
            aria-label={`${person.name} — home`}
            className="text-xl font-semibold tracking-tight text-ink-dark lowercase transition-colors"
          >
            {person.wordmark}
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="about-overlay"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors",
              railText,
              railHover,
            )}
          >
            About
            <span
              aria-hidden
              className={cn(
                "size-1.5 rounded-full transition-colors duration-300",
                menuOpen ? "bg-accent-deep" : "bg-accent",
              )}
            />
          </button>
        </div>

        {/* The overlay: six tiles */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              id="about-overlay"
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 30 }}
            >
              <div className="mt-6 grid grid-cols-1 border-t border-ink-dark/10 sm:grid-cols-2 md:mt-10">
                {navTiles.map((tile) => (
                  <Link
                    key={tile.label}
                    href={tile.href}
                    onClick={closeMenu}
                    className="block border-b border-ink-dark/10 px-5 py-5 text-center transition-colors hover:bg-white/50 sm:border-r sm:py-7 sm:nth-[2n]:border-r-0"
                  >
                    <span className="block text-base font-semibold text-ink-dark sm:text-[17px]">
                      {tile.label}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-ink-dark/50">
                      {tile.description}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="px-6 pt-8 sm:px-8 md:pt-12">
                <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-ink-dark/50 uppercase">
                  General enquiries
                </p>
                <ul className="space-y-1 text-lg font-semibold text-ink-dark sm:text-xl">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-all transition-colors hover:text-accent-deep"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-accent-deep"
                    >
                      {contact.phone}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-6 pt-8 pb-8 sm:px-8 md:pt-10 md:pb-12">
                <p className="mb-3 text-[12px] font-semibold tracking-[0.22em] text-ink-dark/50 uppercase">
                  Based in
                </p>
                <ul className="space-y-1 text-lg font-semibold text-ink-dark sm:text-xl">
                  {nodes.map((node) => (
                    <li key={node}>{node}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
