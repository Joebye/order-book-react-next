import { integer, pgEnum, pgTable, serial, timestamp } from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('status', ['pending', 'completed', 'cancelled'])

// Orders table schema
export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  productId: integer('product_id'), // Assuming a separate products table exists
  quantity: integer('quantity'),
  orderTime: timestamp('order_time').defaultNow(),
  status: statusEnum('status'), // Enum for order status
  customer: integer ('customer_id').default(123)

}
)
