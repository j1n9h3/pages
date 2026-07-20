'use client';

import Image from 'next/image';
import { useState } from 'react';

type ImageFrame =
  | string
  | {
      src: string;
      alt?: string;
      label?: string;
    };

interface ImageSequenceSliderProps {
  images: ImageFrame[];
  initialIndex?: number;
  width?: number;
  height?: number;
  className?: string;
  showCounter?: boolean;
  processing?: '2webp' | 'none';
}

const OSS_BASE_URL = 'https://j1n9h3.oss-cn-hangzhou.aliyuncs.com';

function getImageUrl(src: string, processing: '2webp' | 'none') {
  if (/^https?:\/\//i.test(src)) return src;

  const path = src.startsWith('/') ? src.slice(1) : src;
  const url = `${OSS_BASE_URL}/${path}`;

  if (processing === 'none' || path.toLowerCase().endsWith('.svg')) return url;
  return `${url}?x-oss-process=style/2webp`;
}

export function ImageSequenceSlider({
  images,
  initialIndex = 0,
  width = 1920,
  height = 1080,
  className = '',
  showCounter = false,
  processing = '2webp',
}: ImageSequenceSliderProps) {
  const lastIndex = Math.max(images.length - 1, 0);
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.min(Math.max(initialIndex, 0), lastIndex),
  );

  if (images.length === 0) return null;

  const frame = images[Math.min(currentIndex, lastIndex)];
  const src = typeof frame === 'string' ? frame : frame.src;
  const alt = typeof frame === 'string' ? `Image ${currentIndex + 1}` : (frame.alt ?? `Image ${currentIndex + 1}`);
  const label = typeof frame === 'string' ? undefined : frame.label;

  return (
    <figure className={`not-prose my-8 ${className}`}>
      <div className="relative overflow-hidden rounded-lg bg-stone-900">
        <Image
          src={getImageUrl(src, processing)}
          alt={alt}
          width={width}
          height={height}
          className="block h-auto w-full object-contain"
        />

        {label && (
          <figcaption className="absolute bottom-3 left-3 rounded bg-black/60 px-3 py-1 text-sm text-white">
            {label}
          </figcaption>
        )}
      </div>

      <div className="mt-3 flex items-center gap-3">
        <input
          type="range"
          min={0}
          max={lastIndex}
          step={1}
          value={Math.min(currentIndex, lastIndex)}
          disabled={images.length < 2}
          aria-label="选择当前图片"
          onChange={(event) => setCurrentIndex(Number(event.target.value))}
          className="h-2 min-w-0 flex-1 cursor-pointer accent-fd-primary disabled:cursor-not-allowed disabled:opacity-50"
        />

        {showCounter && (
          <span className="min-w-14 text-right text-sm tabular-nums text-fd-muted-foreground">
            {currentIndex + 1} / {images.length}
          </span>
        )}
      </div>
    </figure>
  );
}
