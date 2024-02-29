import { migrate } from 'drizzle-orm/postgres-js/migrator'

import { db, client } from '@/db'

const runMigration = async () => {
  await migrate(db, { migrationsFolder: 'db/migrations' })
  client.end()
}

runMigration().catch((e) => console.error(`Unhandled error: ${e.message}`))
