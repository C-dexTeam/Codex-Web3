// src/db.ts
import { Pool } from "pg";

const pool = new Pool({
    host: "database",
    port: 5432,
    database: "mydatabase",
    user: "postgres",
    password: "1234"
});


export default pool;
