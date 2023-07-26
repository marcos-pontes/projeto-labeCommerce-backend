-- Active: 1687390462412@@127.0.0.1@3306
CREATE TABLE if NOT EXISTS users (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL
);
INSERT INTO users (id, name, email, password, created_at)
VALUES
    (
     "u001",
     "Samuel",
     "samuel@gmail.com",
     "samuel123",
     "2023-06-19T13:28:45.123Z"
     ),
     (
     "u002",
     "Ruan",
     "ruan@gmail.com",
     "ruan123",
     "2023-06-19T14:05:12.987Z"
     ), 
    (
        "u003",
        "Dhouglas",
        "dhouglas@gmail.com",
        "dhouglass123",
        "2023-06-19T16:42:30.456Z"
    );
SELECT *
FROM users;
DELETE FROM users
WHERE id = "u003";
--------------------------------------------- PRODUCTS
CREATE TABLE if NOT EXISTS products (
    id TEXT PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL
);
INSERT INTO products (id, name, price, description, image_url)
VALUES
     (
     "prod001",
     "Mouse gamer",
     250,
     "Melhor mouse do mercado!",
     "https://picsum.photos/seed/Mouse%20gamer/400"
     ),
     (
     "prod002",
     "Monitor",
     900,
     "Monitor LED Full HD 24 polegadas",
     "https://picsum.photos/seed/Monitor/400"
     ),
     (
     "prod003",
     "Teclado Mecânico RGB",
     350,
     "Teclado mecânico com retroiluminação RGB personalizável",
     "https://picsum.photos/seed/Teclado%20Mecânico/400"
     ),
     (
     "prod004",
     "Headset Gamer com Microfone",
     400,
     "Headset gamer com som imersivo e microfone integrado",
     "https://picsum.photos/seed/Headset%20Gamer/400"
     ),
    (
        "prod005",
        "Cadeira Gamer Ergonômica",
        800,
        "Cadeira gamer ergonômica com ajustes de altura e inclinação",
        "https://picsum.photos/seed/Cadeira%20Gamer/400"
    );

CREATE TABLE IF NOT EXISTS purchases(
    id TEXT PRIMARY KEY NOT NULL,
    buyer TEXT NOT NULL,
    total_price REAL NOT NULL,
    created_at TEXT NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

CREATE TABLE if NOT EXISTS purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity REAL NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

SELECT *
FROM products AS funcionalidade1;
SELECT *
FROM products AS funcionalidade1
WHERE name LIKE '%gamer%';
DELETE FROM products AS deleteProduct
WHERE id = "prod005";
UPDATE products
SET name = 'teste',
    price = 999,
    description = 'teste',
    image_url = 'teste'
WHERE id = 'prod005';



SELECT * FROM purchases;

    UPDATE purchases 
    SET total_price = 25.99
    WHERE buyer = 'user1' AND id = '1';

SELECT purchases.id,
purchases.buyer,
users.name,
users.email,
purchases.total_price,
purchases.created_at
FROM users
JOIN purchases ON users.id = purchases.buyer;



SELECT * FROM purchases_products;

INSERT INTO purchases (id, buyer , total_price , created_at)
VALUES   ('c001', 'u002', 19.99, '2023-06-26 10:30:00'),
    ('c002', 'u003', 49.99, '2023-06-26 15:45:00'),
    ('c003', 'u001', 9.99, '2023-06-27 09:15:00');

INSERT INTO purchases_products (purchase_id, product_id, quantity)
VALUES ('c001', 'prod001', 2),
('c002', 'prod004', 1),
('c003', 'prod001', 3);

SELECT * FROM purchases
JOIN purchases_products on purchases.id = purchases_products.purchase_id;


