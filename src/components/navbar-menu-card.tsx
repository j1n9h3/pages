import Image from 'next/image';
import { source } from '@/lib/source';
import { NavbarMenuLink } from 'fumadocs-ui/layouts/home/navbar';

interface NavbarMenuCardProps {
  slug: string[];
  imageSrc?: string;
}

export function NavbarMenuCard({
  slug,
  imageSrc,
}: NavbarMenuCardProps) {
  const page = source.getPage(slug);

  if (!page) return null;

  return (
    <NavbarMenuLink href={page.url}>
      {imageSrc ? (
        <Image
          src={`https://j1n9h3.oss-cn-hangzhou.aliyuncs.com/${imageSrc}?x-oss-process=style/2webp`}
          alt={page.data.title}
          width={320}
          height={180}
          className="aspect-21/9 w-full object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="aspect-21/9 w-full bg-fd-muted"
        />
      )}

      <div className="text-xl uppercase">
        {page.data.title}
      </div>
      <div className="text-sm text-fd-muted-foreground">
        {page.data.description}
      </div>
    </NavbarMenuLink>
  );
}
