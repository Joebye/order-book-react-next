import { db, client } from '@/db'
import { orders } from '@/db/schema'

interface Order {
  productId: number
  quantity: number
  status: 'pending' | 'completed' | 'cancelled'
}

const seedDatabase = async () => {
  const sampleOrders: Order[] = [
    { productId: 1, quantity: 100, status: 'pending',  },
    { productId: 2, quantity: 200, status: 'completed' },
    { productId: 3, quantity: 150, status: 'cancelled' },
    { productId: 4, quantity: 50, status: 'pending' },
    { productId: 5, quantity: 300, status: 'completed' },
    { productId: 6, quantity: 75, status: 'cancelled' },
    { productId: 7, quantity: 250, status: 'pending' },
    { productId: 8, quantity: 120, status: 'completed' },
    { productId: 9, quantity: 80, status: 'cancelled' },
    { productId: 10, quantity: 180, status: 'pending' },
    { productId: 11, quantity: 220, status: 'completed' },
    { productId: 12, quantity: 40, status: 'cancelled' },
    { productId: 13, quantity: 90, status: 'pending' },
    { productId: 14, quantity: 160, status: 'completed' },
    { productId: 15, quantity: 110, status: 'cancelled' },
    { productId: 16, quantity: 270, status: 'pending' },
    { productId: 17, quantity: 130, status: 'completed' },
    { productId: 18, quantity: 70, status: 'cancelled' },
    { productId: 19, quantity: 140, status: 'pending' },
    { productId: 20, quantity: 240, status: 'completed' },
  ]

  for (const order of sampleOrders) {
    await db.insert(orders).values(order).execute()
  }

  console.log('Database seeded successfully.')
  client.end()
}

seedDatabase().catch((e: Error) => console.error(`Error seeding database: ${e.message}`))
