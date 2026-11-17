"use client";

import { useState } from "react";

export default function LiteYouTube({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="h-[280px] w-full lg:h-[400px]"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="relative block h-[280px] w-full bg-cover bg-center lg:h-[400px]"
      style={{
        backgroundImage: `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg)`,
      }}
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <span className="absolute left-1/2 top-1/2 flex h-16 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg transition-transform group-hover:scale-105">
        <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white" />
      </span>
    </button>
  );
}
