import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./lib/auth-schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL ?? "",
	},
	migrations: {
		schema: "drizzle",
		table: "drizzle_migrations",
	},
	casing: "snake_case",
	breakpoints: true,
	verbose: true,
	strict: true,
});
