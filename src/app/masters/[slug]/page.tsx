import { notFound } from 'next/navigation';
import { getMasterBySlug } from '@/lib/data';
import MasterDetailClient from '@/components/layout/MasterDetailClient';
import type { PageProps } from '@/types';

// Pure server component for data fetching
export default async function MasterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  if (!master) {
    notFound();
  }

  return <MasterDetailClient master={master} />;
}

// Pure server function for SEO metadata generation
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  if (!master) {
    return { title: 'Master Not Found' };
  }

  const { name, field } = master.i18n.en;
  return {
    title: `${name} - ${field} | Tatami Labs`,
    description: `Discover the work and philosophy of ${name}, a master of ${field}.`,
    openGraph: {
      title: `${name} - ${field}`,
      description: `Experience traditional Japanese craftsmanship with ${name}`,
      images: [master.imageUrl],
    },
  };
}