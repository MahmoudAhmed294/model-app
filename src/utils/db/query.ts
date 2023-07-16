/**
 * This file contains SQL queries to create the database tables.
 */

export const DATABASE_TABLE_QUERY = [
  `CREATE TABLE IF NOT EXISTS models (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        code TEXT NOT NULL,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        cost REAL NOT NULL,
        category TEXT,
        description TEXT,
        imageUrl TEXT
        );
`,
  `
      CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        by TEXT NOT NULL,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        details TEXT NOT NULL,
        model_id INTEGER NOT NULL,
        FOREIGN KEY (model_id) REFERENCES models(id)
      );
`,
];
