import { neon } from "@neondatabase/serverless";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { betterAuth } from "better-auth/minimal";
import { openAPI } from "better-auth/plugins";
import { drizzle } from "drizzle-orm/neon-http";
import * as authSchema from "./auth-schema";

const sql = neon(process.env.DATABASE_URL ?? "");
const db = drizzle({ client: sql });


export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: authSchema,
	}),
	socialProviders: {
		github: {
			clientId: process.env.GITHUB_CLIENT_ID || "",
			clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
		},
	},
	plugins: [
		openAPI(),
	],
	session: {
    	cookieCache: {
      		enabled: true,
      		maxAge: 5 * 60, // 5 minutes
    	},
  },
});
