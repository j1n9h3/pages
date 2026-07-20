import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ScrollSequence } from 'react-scroll-media';

import { OssImage } from '@/components/posts-image';
import { ImageComparison } from '@/components/posts-image-comparison';


export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    OssImage,
    ImageComparison,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
