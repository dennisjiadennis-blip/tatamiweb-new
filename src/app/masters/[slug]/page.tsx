import { notFound } from 'next/navigation';
import { getMasterBySlug } from '@/lib/data';
import MasterDetailClient from '@/components/layout/MasterDetailClient'; // 导入新的客户端组件
import type { PageProps } from '@/types';

// 这是纯粹的服务器组件，负责获取数据
export default async function MasterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);

  if (!master) {
    notFound();
  }

  return <MasterDetailClient master={master} />; // 渲染客户端组件，并将数据作为prop传入
}

// 这是纯粹的服务器函数，负责生成SEO元数据
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