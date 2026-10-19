import React, { useEffect, useRef } from 'react';

/*
 * Fondo tipo circuito electrónico: pistas ortogonales/diagonales con
 * pulsos de luz que viajan a lo largo de ellas.
 * - Las pistas estáticas se dibujan una sola vez en un canvas offscreen.
 * - Cada frame solo se pintan los pulsos (barato).
 * - Se pausa fuera de pantalla y respeta prefers-reduced-motion.
 */

const CELL = 36;
const DIRS = [
  [1, 0], [-1, 0], [0, 1], [0, -1],
  [1, 1], [1, -1], [-1, 1], [-1, -1],
];

function buildPaths(w, h) {
  const cols = Math.ceil(w / CELL);
  const rows = Math.ceil(h / CELL);
  const count = Math.max(18, Math.round((cols * rows) / 38));
  const paths = [];

  for (let i = 0; i < count; i += 1) {
    let gx = Math.floor(Math.random() * cols);
    let gy = Math.floor(Math.random() * rows);
    let dir = Math.floor(Math.random() * DIRS.length);
    const pts = [{ x: gx * CELL, y: gy * CELL }];
    const steps = 5 + Math.floor(Math.random() * 8);

    for (let s = 0; s < steps; s += 1) {
      /* Giros suaves: mantener o girar 45° */
      const turn = [0, 0, 1, -1][Math.floor(Math.random() * 4)];
      dir = (dir + turn + DIRS.length) % DIRS.length;
      const len = 1 + Math.floor(Math.random() * 4);
      gx += DIRS[dir][0] * len;
      gy += DIRS[dir][1] * len;
      pts.push({ x: gx * CELL, y: gy * CELL });
    }

    const cum = [0];
    for (let k = 1; k < pts.length; k += 1) {
      cum.push(cum[k - 1] + Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y));
    }
    paths.push({
      pts,
      cum,
      total: cum[cum.length - 1],
      pos: Math.random(),
      speed: 0.00006 + Math.random() * 0.00012,
      trail: 90 + Math.random() * 120,
    });
  }
  return paths;
}

function pointAt(path, d) {
  const { pts, cum, total } = path;
  const dist = Math.max(0, Math.min(total, d));
  let k = 1;
  while (k < cum.length - 1 && cum[k] < dist) k += 1;
  const seg = cum[k] - cum[k - 1] || 1;
  const t = (dist - cum[k - 1]) / seg;
  return {
    x: pts[k - 1].x + (pts[k].x - pts[k - 1].x) * t,
    y: pts[k - 1].y + (pts[k].y - pts[k - 1].y) * t,
  };
}

function CircuitBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let paths = [];
    let base = null;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let last = performance.now();

    const drawBase = () => {
      base = document.createElement('canvas');
      base.width = w * dpr;
      base.height = h * dpr;
      const b = base.getContext('2d');
      b.scale(dpr, dpr);
      b.lineJoin = 'round';
      b.lineCap = 'round';

      paths.forEach((p) => {
        b.beginPath();
        b.moveTo(p.pts[0].x, p.pts[0].y);
        p.pts.slice(1).forEach((pt) => b.lineTo(pt.x, pt.y));
        b.strokeStyle = 'rgba(190, 48, 63, 0.22)';
        b.lineWidth = 1.4;
        b.stroke();

        /* Pads en extremos y nodos intermedios */
        p.pts.forEach((pt, idx) => {
          const end = idx === 0 || idx === p.pts.length - 1;
          b.beginPath();
          b.arc(pt.x, pt.y, end ? 3.4 : 1.8, 0, Math.PI * 2);
          if (end) {
            b.strokeStyle = 'rgba(232, 90, 106, 0.5)';
            b.lineWidth = 1.2;
            b.stroke();
          } else {
            b.fillStyle = 'rgba(190, 48, 63, 0.35)';
            b.fill();
          }
        });
      });
    };

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paths = buildPaths(w, h);
      drawBase();
      render(0);
    };

    const render = (dt) => {
      ctx.clearRect(0, 0, w, h);
      if (base) ctx.drawImage(base, 0, 0, w, h);

      ctx.lineCap = 'round';
      paths.forEach((p) => {
        p.pos = (p.pos + p.speed * dt) % 1.25; /* pausa breve entre ciclos */
        const head = p.pos * p.total;
        if (head > p.total + p.trail) return;

        const steps = 14;
        for (let s = 0; s < steps; s += 1) {
          const d0 = head - (p.trail * s) / steps;
          const d1 = head - (p.trail * (s + 1)) / steps;
          if (d1 > p.total || d0 < 0) continue;
          const a = pointAt(p, d0);
          const b = pointAt(p, d1);
          const alpha = (1 - s / steps) * 0.95;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255, 120, 135, ${alpha})`;
          ctx.lineWidth = 2.2 - (s / steps) * 1.2;
          ctx.shadowColor = 'rgba(255, 70, 90, 0.9)';
          ctx.shadowBlur = 10;
          ctx.stroke();
        }
        ctx.shadowBlur = 0;

        if (head >= 0 && head <= p.total) {
          const hp = pointAt(p, head);
          ctx.beginPath();
          ctx.arc(hp.x, hp.y, 2.6, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.shadowColor = 'rgba(255, 90, 110, 1)';
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    };

    const loop = (now) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (running) render(dt);
      raf = requestAnimationFrame(loop);
    };

    let resizeRaf = 0;
    const safeResize = () => {
      cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        resize();
      });
    };

    resize();
    if (!reduce) raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(safeResize);
    ro.observe(canvas.parentElement);
    const io = new IntersectionObserver(([e]) => { running = e.isIntersecting; });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="circuit-canvas" aria-hidden="true" />;
}

export default CircuitBackground;
