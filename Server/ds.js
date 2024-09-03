import pg from "pg";


const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Tracker",
    password: "harsha123",
    port: "5432",
  });
  
  db.connect();

export default db;