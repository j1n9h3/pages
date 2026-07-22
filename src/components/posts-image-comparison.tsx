"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface ImageComparisonProps {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function ImageComparison({
  before,
  after,
  beforeAlt = "对比图一",
  afterAlt = "对比图二",
  beforeLabel = "处理前",
  afterLabel = "处理后",
}: ImageComparisonProps) {
  return (
    <div className="my-8">
        <ReactCompareSlider
        className="not-prose my-0 block aspect-video w-full overflow-hidden"
        itemOne={
            <div className="relative h-full w-full">
            <ReactCompareSliderImage
                src={`https://j1n9h3.oss-cn-hangzhou.aliyuncs.com/${before}?x-oss-process=style/2webp`}
                alt={beforeAlt}
                className="h-full w-full object-cover"
            />

            <span className="absolute left-4 bottom-4 bg-black/60 px-3 py-1 text-sm text-white">
                {beforeLabel}
            </span>
            </div>
        }
        itemTwo={
            <div className="relative h-full w-full">
            <ReactCompareSliderImage
                src={`https://j1n9h3.oss-cn-hangzhou.aliyuncs.com/${after}?x-oss-process=style/2webp`}
                alt={afterAlt}
                className="h-full w-full object-cover"
            />

            <span className="absolute right-4 bottom-4 bg-black/60 px-3 py-1 text-sm text-white">
                {afterLabel}
            </span>
            </div>
        }
        />
    </div>
  );
}
