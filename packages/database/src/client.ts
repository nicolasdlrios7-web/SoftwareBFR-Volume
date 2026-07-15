import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

/**
 * Connection setup only — no schema defined yet. Schema and migrations
 * land in Phase 1/2 alongside the modules that need them.
 * See docs/roadmap/PHASE_1_VERTICAL_SLICE.md.
 */
export function createDatabaseClient(connectionString: string) {
  const client = postgres(connectionString);
  return drizzle(client);
}
