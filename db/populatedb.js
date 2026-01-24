#! populatedb.js

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_name VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  date DATE DEFAULT CURRENT_DATE
);
INSERT INTO messages (user_name, text) 
VALUES
  ('Amando', 'Hi dummy!' ),
  ('Charles', 'Hello world!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
