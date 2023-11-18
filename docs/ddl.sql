-- Crear la tabla CATEGORY_PRODUCTS
CREATE TABLE CATEGORY_PRODUCTS (
    Code SERIAL PRIMARY KEY,
    Description VARCHAR(255) NOT NULL
);

-- Crear la tabla PRODUCTS
CREATE TABLE PRODUCTS (
    ProductId SERIAL PRIMARY KEY,
    category_code INTEGER REFERENCES CATEGORY_PRODUCTS(Code),
    Description VARCHAR(255) NOT NULL,
    QuantityAvailable INTEGER,
    Cost DECIMAL(10, 2),
    SellingPrice DECIMAL(10, 2),
    CONSTRAINT fk_category_code FOREIGN KEY (category_code) REFERENCES CATEGORY_PRODUCTS(Code)
);

-- Crear la tabla CUSTOMERS
CREATE TABLE CUSTOMERS (
    customer_id SERIAL PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Address VARCHAR(255),
    DateOfBirth DATE,
    Email VARCHAR(255),
    HomePhone VARCHAR(15),
    CellPhone VARCHAR(15)
);

-- Crear la tabla ORDERS
CREATE TABLE ORDERS (
    order_number SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES CUSTOMERS(customer_id),
    order_date DATE,
    shipped_date DATE,
    payment_date DATE,
    CONSTRAINT fk_customer_id FOREIGN KEY (customer_id) REFERENCES CUSTOMERS(customer_id)
);

-- Crear la tabla ORDER_DETAIL
CREATE TABLE ORDER_DETAIL (
    order_number INTEGER REFERENCES ORDERS(order_number),
    ProductId INTEGER REFERENCES PRODUCTS(ProductId),
    Quantity INTEGER,
    Price DECIMAL(10, 2),
    PRIMARY KEY (order_number, ProductId),
    CONSTRAINT fk_order_number FOREIGN KEY (order_number) REFERENCES ORDERS(order_number),
    CONSTRAINT fk_product_id FOREIGN KEY (ProductId) REFERENCES PRODUCTS(ProductId)
);

INSERT INTO CATEGORY_PRODUCTS (Code, Description) VALUES ('TEC', 'Tecnologia');

-- Insert 2
INSERT INTO CATEGORY_PRODUCTS (Code, Description) VALUES ('INM', 'Inmobiliaria');

-- Insert 3
INSERT INTO CATEGORY_PRODUCTS (Code, Description) VALUES ('MED', 'Medicina');

-- Insert 4
INSERT INTO CATEGORY_PRODUCTS (Code, Description) VALUES ('HOGAR', 'Del Hogar');

-- Insert 5
INSERT INTO CATEGORY_PRODUCTS (Code, Description) VALUES ('COCINA', 'Cocina');

INSERT INTO public.customers (firstname, lastname, address, dateofbirth, email, homephone, cellphone)
VALUES ('Juan', 'Pérez', 'Calle A, Ciudad B', '1990-05-15', 'juan.perez@email.com', '123-456-7890', '987-654-3210');

-- Insertar un cliente sin dirección ni teléfono
INSERT INTO public.customers (firstname, lastname, dateofbirth, email)
VALUES ('María', 'Gómez', '1985-08-20', 'maria.gomez@email.com');

-- Insertar un cliente solo con nombre y dirección
INSERT INTO public.customers (firstname, address)
VALUES ('Carlos', 'Avenida X, Ciudad Y');

-- Insertar un cliente con número de teléfono de casa y celular
INSERT INTO public.customers (firstname, lastname, homephone, cellphone)
VALUES ('Ana', 'López', '555-1234', '555-5678');

-- Insertar un cliente con fecha de nacimiento y dirección
INSERT INTO public.customers (firstname, lastname, dateofbirth, address)
VALUES ('Pedro', 'Ramírez', '1978-12-10', 'Calle Z, Ciudad W');

-- Insertar orden 1
INSERT INTO ORDERS (order_number, customer_id, order_date, shipped_date, payment_date)
VALUES (1001, 1, '2023-01-10', '2023-01-15', '2023-01-20');

-- Insertar orden 2
INSERT INTO ORDERS (order_number, customer_id, order_date, shipped_date, payment_date)
VALUES (1002, 2, '2023-02-05', '2023-02-10', '2023-02-15');

-- Insertar orden 3
INSERT INTO ORDERS (order_number, customer_id, order_date, shipped_date, payment_date)
VALUES (1003, 3, '2023-03-20', '2023-03-25', '2023-04-01');

-- Insertar orden 4
INSERT INTO ORDERS (order_number, customer_id, order_date, shipped_date, payment_date)
VALUES (1004, 4, '2023-04-15', '2023-04-20', '2023-04-25');

-- Insertar orden 5
INSERT INTO ORDERS (order_number, customer_id, order_date, shipped_date, payment_date)
VALUES (1005, 5, '2023-05-01', '2023-05-05', '2023-05-10');

INSERT INTO public.order_detail (order_number, product_id, price, quantity)
VALUES (1, 1001, 19.99, 2);

-- Insertar otro detalle de orden con cantidades diferentes
INSERT INTO public.order_detail (order_number, product_id, price, quantity)
VALUES (1, 1002, 29.99, 1);

-- Insertar un detalle de orden con un producto diferente
INSERT INTO public.order_detail (order_number, product_id, price, quantity)
VALUES (2, 1003, 39.99, 3);

-- Insertar un detalle de orden con un precio diferente
INSERT INTO public.order_detail (order_number, product_id, price, quantity)
VALUES (3, 1004, 49.99, 1);

-- Insertar un detalle de orden con una cantidad mayor
INSERT INTO public.order_detail (order_number, product_id, price, quantity)
VALUES (3, 1005, 59.99, 5);