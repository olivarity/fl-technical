import pg from "pg";
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
  pool: new pg.Pool({
    database: "interview",
    host: "localhost",
    user: "olivarity",
    port: 5432,
    max: 10,
  }),
});

export const db = new Kysely({ dialect });
