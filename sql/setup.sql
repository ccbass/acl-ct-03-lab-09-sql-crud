-- drop schema public cascade;
-- create schema public;

DROP TABLE IF EXISTS trivia_questions;


-- INT or INTEGER or SERIAL -> 32bit number
-- BIGINT or BIGINTEGER or BIGSERIAL -> 64bit number

CREATE TABLE trivia_questions (
  trivia_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category text NOT NULL,
  type text NOT NULL,
  difficulty text NOT NULL,
  question text NOT NULL,
  correct_answer text NOT NULL,
  incorrect text ARRAY[4]
);


-- CREATE TABLE coffee_orders (
--   order_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   coffee_type TEXT CHECK (LENGTH(coffee_type) < 30),
--   quantity INTEGER CHECK (quantity > 0),
--   order_date DATE DEFAULT CURRENT_DATE ,
--   subscription INTEGER CHECK (subscription < 13),
--   linked_customer_id INT,
  
--   CONSTRAINT customer_fk
--     FOREIGN KEY (linked_customer_id)
--     REFERENCES customers(customer_id)
--     ON DELETE SET NULL
-- );

