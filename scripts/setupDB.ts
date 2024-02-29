import { Client } from 'pg'

const setupDatabase = async () => {
  const defaultClient = new Client({
    connectionString: 'postgres://:@localhost:5432/postgres',
  })

  await defaultClient.connect()

  try {
    await defaultClient.query(`CREATE DATABASE "scouterzChallenge"`)
    console.log("Database 'scouterzChallenge' created successfully.")
  } catch (e: any) {
    console.error(`Database creation error: ${e.message}`)
  } finally {
    await defaultClient.end()
  }
}

setupDatabase().catch((e) => console.error(`Unhandled error: ${e.message}`))
