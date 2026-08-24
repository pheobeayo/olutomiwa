"use client";

import { useEffect, useRef } from "react";


export function WarpBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0, height = 0, cx = 0, cy = 0, raf = 0, maxDist = 0;

    type Streak = { angle: number; dist: number; speed: number; length: number; width: number; hue: number };
    type Beam = { angle: number; width: number; alpha: number; hue: number; drift: number };

    const streaks: Streak[] = [];
    const beams: Beam[] = [];
    const STREAK_COUNT = 520;
    const BEAM_COUNT = 46;

    const resetStreak = (s: Streak, initial = false) => {
      s.angle = Math.random() * Math.PI * 2;
      s.dist = initial ? Math.random() * maxDist * 0.7 : Math.random() * 30;
      s.speed = 2.5 + Math.random() * 7;
      s.length = 80 + Math.random() * 320;
      s.width = 0.6 + Math.random() * 2.6;
      s.hue = Math.random();
    };

    const initBeams = () => {
      beams.length = 0;
      for (let i = 0; i < BEAM_COUNT; i++) {
        beams.push({
          angle: Math.random() * Math.PI * 2,
          width: 1 + Math.random() * 3.5,
          alpha: 0.08 + Math.random() * 0.3,
          hue: Math.random(),
          drift: (Math.random() - 0.5) * 0.0006,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cx = width / 2;
      cy = height * 0.46;
      maxDist = Math.hypot(Math.max(cx, width - cx), Math.max(cy, height - cy));
      ctx.fillStyle = "#03070f";
      ctx.fillRect(0, 0, width, height);
    };

    resize();
    initBeams();
    for (let i = 0; i < STREAK_COUNT; i++) {
      const s = {} as Streak;
      resetStreak(s, true);
      streaks.push(s);
    }

    const trailClear = () => {
      ctx.fillStyle = "rgba(3, 7, 15, 0.32)";
      ctx.fillRect(0, 0, width, height);
    };

    const paintGlow = () => {
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height) * 0.75);
      glow.addColorStop(0, "rgba(59, 130, 246, 0.18)");
      glow.addColorStop(0.3, "rgba(29, 78, 216, 0.08)");
      glow.addColorStop(1, "rgba(3, 7, 15, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);
    };

    const drawBeams = () => {
      for (const b of beams) {
        b.angle += b.drift;
        const x2 = cx + Math.cos(b.angle) * maxDist;
        const y2 = cy + Math.sin(b.angle) * maxDist;
        const grad = ctx.createLinearGradient(cx, cy, x2, y2);
        const c = b.hue > 0.5
          ? `rgba(96, 165, 250, ${b.alpha})`
          : `rgba(232, 240, 254, ${b.alpha})`;
        grad.addColorStop(0, "rgba(255,255,255,0.25)");
        grad.addColorStop(0.15, c);
        grad.addColorStop(1, "rgba(3,7,15,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = b.width;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    };

    const drawStreaks = () => {
      for (const s of streaks) {
        const x1 = cx + Math.cos(s.angle) * s.dist;
        const y1 = cy + Math.sin(s.angle) * s.dist;
        const x2 = cx + Math.cos(s.angle) * (s.dist + s.length);
        const y2 = cy + Math.sin(s.angle) * (s.dist + s.length);
        const fade = Math.min(1, s.dist / 90);
        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        const c = s.hue > 0.55
          ? `rgba(96, 165, 250, ${0.8 * fade})`
          : `rgba(244, 248, 255, ${0.75 * fade})`;
        grad.addColorStop(0, "rgba(3, 7, 15, 0)");
        grad.addColorStop(1, c);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        if (!reduced) {
          s.dist += s.speed * (1 + s.dist / 200);
          if (s.dist > maxDist) resetStreak(s);
        }
      }
    };

    const paintCore = () => {
      const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
      bloom.addColorStop(0, "rgba(214, 232, 255, 0.65)");
      bloom.addColorStop(0.35, "rgba(59, 130, 246, 0.30)");
      bloom.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = bloom;
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.fill();

      const heart = ctx.createRadialGradient(cx, cy, 0, cx, cy, 90);
      heart.addColorStop(0, "rgba(255, 255, 255, 1)");
      heart.addColorStop(0.35, "rgba(235, 244, 255, 0.85)");
      heart.addColorStop(1, "rgba(59, 130, 246, 0)");
      ctx.fillStyle = heart;
      ctx.beginPath();
      ctx.arc(cx, cy, 90, 0, Math.PI * 2);
      ctx.fill();
    };

    const frame = () => {
      trailClear();
      paintGlow();
      drawBeams();
      drawStreaks();
      paintCore();
      if (!reduced) raf = requestAnimationFrame(frame);
    };

    frame();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 size-full" />;
}
