-- drop schema public cascade;
-- create schema public;

DROP TABLE IF EXISTS todos;


-- INT or INTEGER or SERIAL -> 32bit number
-- BIGINT or BIGINTEGER or BIGSERIAL -> 64bit number


CREATE TABLE todos (
    todo_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title text NOT NULL,
    description text NOT NULL,
    project_group TEXT NOT NULL,
    due_date DATE DEFAULT CURRENT_DATE NOT NULL
);


INSERT INTO todos(title, description, project_group, due_date)
    VALUES
        ('title 1', 'go food shopping', 'urgent', '2021-04-07'),
        ('title 2', 'go to the dentist', 'soon', '2021-04-08'),
        ('title 3', 'learn more about graphs', 'extra projects', '2021-04-09'),
        ('title 4', 'get the lab done', 'epic 1', '2021-04-10');



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

