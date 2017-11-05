DROP DATABASE IF EXISTS kids;
CREATE DATABASE kids;

\c kids;

CREATE TABLE scores (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  score INTEGER
);

INSERT INTO scores (name, score)
  VALUES ('Tyler', 0);