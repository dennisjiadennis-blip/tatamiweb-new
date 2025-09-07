'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import { getMasterBySlug } from '@/lib/data';
import type { PageProps, Master } from '@/types';

// 这是客户端组件，负责渲染页面
export default function MasterDetailPage({ params }: PageProps) {
  // 在客户端组件中，使用 'use' hook 来处理Promise
  const { slug } = use(params);
  const master = getMasterBySlug(slug);

  if (!master) {
    notFound();
  }

  const { name, field, bio, philosophy } = master.i18n.en;

  return (
    <motion.main
      className="bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-80 md:h-96">
        <Image
          src={master.works[0] || master.imageUrl}
          alt={`Work by ${name}`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Container className="py-12 md:py-16">
        <Link href="/" className={buttonVariants({ variant: "ghost", className: "mb-8" })}>
          &larr; Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <aside className="md:col-span-1 space-y-6">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-soft">
              <Image src={master.imageUrl} alt={name} fill className="object-cover" />
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold leading-tight">{name}</h1>
              <h2 className="text-primary text-xl mt-2">{field}</h2>
            </div>
            <div className="space-y-4">
               <Button size="lg" className="w-full">Book Experience</Button>
               <Button size="lg" variant="outline" className="w-full">View Gallery</Button>
            </div>
          </aside>

          <div className="md:col-span-2">
            <section className="prose prose-lg max-w-none text-foreground/80">
              <h2>Biography</h2>
              <p>{bio}</p>
              <h2>Master's Philosophy</h2>
              <blockquote className="border-l-4 border-primary pl-4 italic">
                <p>"{philosophy}"</p>
              </blockquote>
              
              <h2>Craft Experience</h2>
              <p>Join {name.split(' ')[0]} for an immersive journey into traditional Japanese craftsmanship. This exclusive experience combines hands-on learning with deep cultural insights.</p>
              
              <h3>What You'll Learn</h3>
              <ul>
                <li>Traditional techniques passed down through generations</li>
                <li>The philosophy behind Japanese craftsmanship</li>
                <li>Hands-on creation of your own masterpiece</li>
                <li>Cultural insights into Japanese artistry</li>
              </ul>
              
              <h3>Experience Details</h3>
              <ul>
                <li>Duration: 3-4 hours</li>
                <li>Language: English & Japanese</li>
                <li>Group size: Maximum 6 participants</li>
                <li>Includes: Materials & tea ceremony</li>
              </ul>
            </section>
          </div>
        </div>
        
        {/* 底部行动号召 */}
        <div className="mt-16 text-center bg-primary/5 rounded-xl p-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Experience the profound connection between artisan and craft. Book your exclusive session with {name} and discover the timeless wisdom of Japanese craftsmanship.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/">
                Explore More Masters
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </motion.main>
  );
}

// 这是服务器端函数，负责生成SEO元数据
// 它必须是 async 的，并且可以直接 await params
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