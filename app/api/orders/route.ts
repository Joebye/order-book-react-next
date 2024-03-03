export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { db, schema } from '@/db'

export async function GET(request: NextRequest) {
  const orderResult = await db.select().from(schema.orders)
  return new NextResponse(JSON.stringify(orderResult), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function POST(request: NextRequest) {

  const data = await request.json();
  await db.insert(schema.orders).values(data)
  console.log(data);
  
  
  return new NextResponse('',{
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
  
