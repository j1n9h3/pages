import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me',
  description: '关于 J1N9H3 与 Alpha3D。',
};

export default function AboutMePage() {
  return (
    <main  className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Hello World</h1>
    </main>
  );
}
