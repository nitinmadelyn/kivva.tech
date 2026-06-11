"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface CulturePhoto {
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
  priority?: boolean;
  objectPosition?: string;
}

const ARROW_LEFT  = "M15.75 19.5 8.25 12l7.5-7.5";
const ARROW_RIGHT = "m8.25 4.5 7.5 7.5-7.5 7.5";
const CLOSE_ICON  = "M6 18 18 6M6 6l12 12";

export default function CultureGallery({ photos }: { photos: CulturePhoto[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev  = useCallback(() => setActive((i) => i === null ? null : (i - 1 + photos.length) % photos.length), [photos.length]);
  const next  = useCallback(() => setActive((i) => i === null ? null : (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      close();
      if (e.key === "ArrowLeft")   prev();
      if (e.key === "ArrowRight")  next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <>
      {/* ── Photo grid ─────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[220px]">
        {photos.map(({ src, alt, caption, wide, priority, objectPosition }, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Open photo: ${caption}`}
            onClick={() => setActive(index)}
            className={[
              "group relative rounded-2xl overflow-hidden bg-light-surface border border-light-border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
              wide ? "col-span-2" : "col-span-1",
            ].join(" ")}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={
                wide
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 680px"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 340px"
              }
              priority={priority}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: objectPosition ?? "center" }}
            />
            {/* Caption slides up on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-end p-4 pointer-events-none">
              <p className="text-xs text-white font-medium leading-snug drop-shadow">{caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox ───────────────────────────────────────────────────── */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo slideshow"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={close}
        >
          {/* Panel — stop propagation so clicking the image doesn't close */}
          <div
            className="relative flex flex-col items-center w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              type="button"
              aria-label="Close slideshow"
              onClick={close}
              className="absolute -top-10 right-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={CLOSE_ICON} />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full" style={{ height: "min(75vh, 700px)" }}>
              <Image
                src={photos[active].src}
                alt={photos[active].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain rounded-xl"
              />
            </div>

            {/* Caption + counter */}
            <div className="mt-4 text-center">
              <p className="text-sm text-white font-medium">{photos[active].caption}</p>
              <p className="text-xs text-white/40 mt-1">{active + 1} / {photos.length}</p>
            </div>

            {/* Prev / Next */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_LEFT} />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d={ARROW_RIGHT} />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex gap-1.5 mt-5">
              {photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to photo ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={[
                    "w-1.5 h-1.5 rounded-full transition-all duration-200",
                    i === active ? "bg-white w-4" : "bg-white/30 hover:bg-white/60",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
