CREATE DATABASE Stocks_Dashboard;

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
CREATE TABLE stocks(
    id INT(11) NOT NULL,
    company VARCHAR(50) NOT NULL,
    ticker VARCHAR(6) NOT NULL,
    sector VARCHAR(20) NOT NULL
);

ALTER TABLE stocks 
    ADD PRIMARY KEY (id);

ALTER TABLE stocks
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE stocks;

-- table trade
CREATE TABLE trade(
    id INT(11) NOT NULL,
    company VARCHAR(50) NOT NULL,
    ticker VARCHAR(10) NOT NULL,
    sector VARCHAR(30) NOT NULL,
    date_trade VARCHAR(70) NOT NULL,
    quantity VARCHAR(40) NOT NULL,
    unit_price VARCHAR(100) NOT NULL,
    brokerage VARCHAR(60) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    color VARCHAR(50) NOT NULL,
    total VARCHAR(100),
    sold BOOLEAN NOT NULL,
    user_id INT(11),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE trade
    ADD PRIMARY KEY (id);

ALTER TABLE trade
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE trade
    ADD actual_value VARCHAR(20);

DESCRIBE trade;