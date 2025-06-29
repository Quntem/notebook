import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
    database: new Pool({
        connectionString: process.env.AUTH_DATABASE_URL,
    }),
    emailAndPassword: {
        enabled: true,
    }
});

