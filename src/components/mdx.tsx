import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { OssImage } from '@/components/posts-image';
import { ImageComparison } from '@/components/posts-image-comparison';
import { ImageSequenceSlider } from '@/components/posts-image-sequence-slider';


export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    OssImage,
    ImageComparison,
    ImageSequenceSlider,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
