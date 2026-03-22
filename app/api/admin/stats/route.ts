import { NextResponse } from 'next/server';
import { getApiStats } from '@/lib/store';

export async function GET() {
  const stats = getApiStats();
  return NextResponse.json(stats);
}
