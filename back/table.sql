CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT CHECK(length(email) >= 8)  NOT NULL,
  phone TEXT CHECK(length(phone) >= 9) NOT NULL,
  password TEXT CHECK(length(senha) >= 5)  NOT NULL
);