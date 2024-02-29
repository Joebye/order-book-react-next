import { drizzle } from 'drizzle-orm/node-postgres'
import { Client } from 'pg'
import * as schema from '@/db/schema'

import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' }) // Update to your local .env file if different from .env.local

if (!process.env.DB_URL) {
  throw new Error('DB_URL environment variable is not set')
}

const client = new Client({
  connectionString: process.env.DB_URL,
})
client.connect()

const db = drizzle(client, { schema })

export { db, client, schema }
