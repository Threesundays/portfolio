"use client";
import React from "react";

// ТВОИ РАБОТЫ (оставь свои пути)
const WORKS = [
  { id: "w1", src: "/images/works/work-01.webp" },
  { id: "w2", src: "/images/works/work-02.webp" },
  { id: "w3", src: "/images/works/work-03.webp" },
  { id: "w4", src: "/images/works/work-04.webp" },
  { id: "w5", src: "/images/works/work-05.webp" },
  { id: "w6", src: "/images/works/work-06.webp" },
  { id: "w7", src: "/images/works/work-07.webp" },
  { id: "w8", src: "/images/works/work-08.webp" },
  { id: "w9", src: "/images/works/work-09.webp" },
  { id: "w10", src: "/images/works/work-10.webp" },
  { id: "w11", src: "/images/works/work-11.webp" },
  { id: "w12", src: "/images/works/work-12.webp" },
  { id: "w13", src: "/images/works/work-13.webp" },
  { id: "w14", src: "/images/works/work-14.webp" },
  { id: "w15", src: "/images/works/work-15.webp" },
  { id: "w16", src: "/images/works/work-16.webp" },
];

export default function Page() {
  const youtubeUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const videoSrc = "/showreel.mp4";
  const poster = "/poster.jpg";

  // ЛАЙТБОКС
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const openAt = (i) => { setIndex(i); setIsOpen(true); };
  const close = () => setIsOpen(false);
  const prev = (e) => { e?.stopPropagation?.(); setIndex(i => (i - 1 + WORKS.length) % WORKS.length); };
  const next = (e) => { e?.stopPropagation?.(); setIndex(i => (i + 1) % WORKS.length); };

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      {/* Navbar */}


      {/* Hero (16:9 контейнер) */}
     <section className="relative">
  <div className="relative w-full" style={{ aspectRatio: "2.35 / 1" }}>
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={videoSrc}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent" />

    {/* кнопка YouTube */}
    <div className="absolute bottom-4 right-4">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20"
      >
        ▶ Смотреть шоурил
      </a>
    </div>
  </div>
</section>

      {/* Работы */}
      <section id="works" className="w-full py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight px-4">Works</h2>
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 2xl:columns-4 gap-4 [column-fill:_balance] px-2 md:px-4">
          {WORKS.map((w, i) => (
            <figure
              key={w.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 cursor-zoom-in"
              onClick={() => openAt(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? openAt(i) : null)}
            >
              <img
                src={w.src}
                alt=""
                loading="lazy"
                className="h-auto w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* Лайтбокс */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={close}
          aria-modal="true"
          role="dialog"
        >
          <button onClick={close} className="absolute top-4 right-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20" aria-label="Закрыть">✕</button>
          <button onClick={prev} className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xl hover:bg-white/20" aria-label="Предыдущий">‹</button>
          <button onClick={next} className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xl hover:bg-white/20" aria-label="Следующий">›</button>
          <div className="max-h-[90vh] max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <img src={WORKS[index].src} alt="" className="h-auto w-auto max-h-[90vh] max-w-[92vw] object-contain" draggable={false} />
          </div>
        </div>
      )}

      
    </main>
  );
}
