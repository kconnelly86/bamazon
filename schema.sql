DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
itemid INT AUTO_INCREMENT NOT NULL,
productname VARCHAR(100) NOT NULL,
departmentname VARCHAR(100) NOT NULL,
price DECIMAL(10, 2) NOT NULL,
stockquantity INT (10) NOT NULL,
PRIMARY KEY(itemid)
);

SELECT * FROM bamazon.products;

INSERT INTO products
  (productname, departmentname, price, stockquantity)

VALUES
("peanuts", "food",.99, 5),
("peas", "food",1.99, 8),
("steak", "food",2.99, 10),
("carrots", "food",3.99, 13),
("beans", "food",4.99, 37),
("celery", "food",5.99, 30),
("bread", "food",6.99, 7),
("candy", "food",7.99, 40),
("reeses", "food",8.99, 60), 
("snickers", "food",9.99, 23);
