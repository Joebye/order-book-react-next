DO $$ BEGIN
 CREATE TYPE "status" AS ENUM('pending', 'completed', 'cancelled');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "orders" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"quantity" integer,
	"order_time" timestamp DEFAULT now(),
	"status" "status"
);
