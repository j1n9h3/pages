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
          src={imageSrc}
          alt={page.data.title}
          width={320}
          height={180}
          className="aspect-21/9 w-full rounded-md object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          className="aspect-21/9 w-full rounded-md bg-fd-muted"
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