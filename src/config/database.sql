CREATE DATABASE IF NOT EXISTS flower_shop; 

USE flower_shop;

CREATE TABLE flowers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    flower_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (flower_id) REFERENCES flowers(id)
);

INSERT INTO flowers (name, stock, price) VALUES 
('Rosa', 100, 2.50),
('Tulipán', 150, 1.80),
('Girasol', 200, 3.00),
('Lirio', 80, 2.20),
('Orquídea', 50, 5.00);

