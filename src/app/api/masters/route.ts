import { NextResponse } from 'next/server';
import { getMasters, getMasterBySlug } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (slug) {
    const master = getMasterBySlug(slug);
    if (master) {
      return NextResponse.json(master);
    }
    return NextResponse.json({ error: 'Master not found' }, { status: 404 });
  }

  const masters = getMasters();
  return NextResponse.json(masters);
}