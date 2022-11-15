DROP DATABASE IF EXISTS collaboratr;
CREATE DATABASE collaboratr;

\c collaboratr;

DROP TABLE IF EXISTS artists; 
CREATE TABLE artists(
    artist_id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    email TEXT NOT NULL
);