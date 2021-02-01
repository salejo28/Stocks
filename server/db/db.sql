CREATE DATABASE Dashboard_Actions;

USE Dashboard_Actions;

-- Table Users
CREATE TABLE users(
    id INT(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    fullname VARCHAR(50) NOT NULL,
    username VARCHAR(40) NOT NULL,
    imgURI VARCHAR(100) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE users;

-- Table Actions Colombia
CREATE TABLE actions(
    id INT(11) NOT NULL,
    name VARCHAR(50) NOT NULL,
    symbol VARCHAR(6) NOT NULL
);

ALTER TABLE actions 
    ADD PRIMARY KEY (id);

ALTER TABLE actions
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE actions;

-- table actions_users
CREATE TABLE actions_users(
    id INT(11) NOT NULL,
    name VARCHAR(50) NOT NULL,
    date_trade DATE NOT NULL,
    quantity VARCHAR(40) NOT NULL,
    price VARCHAR(100) NOT NULL,
    brokerage VARCHAR(60) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT(11)
);

ALTER TABLE actions_users
    ADD PRIMARY KEY (id);

ALTER TABLE actions_users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE actions_users;