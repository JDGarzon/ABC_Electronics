-- Crear la tabla CATEGORY_PRODUCTS
DROP TABLE CUSTOMERS CASCADE;
DROP TABLE ORDERS CASCADE;
DROP TABLE ORDER_DETAIL CASCADE;
DROP TABLE CATEGORY_PRODUCTS CASCADE; 
DROP TABLE PRODUCTS CASCADE;

CREATE TABLE CATEGORY_PRODUCTS (
    Code VARCHAR(25) PRIMARY KEY,
    Description VARCHAR(255) NOT NULL
);

-- Crear la tabla PRODUCTS
CREATE TABLE PRODUCTS (
    Product_Id SERIAL PRIMARY KEY,
    category_code VARCHAR(25) REFERENCES CATEGORY_PRODUCTS(Code),
    Description VARCHAR(255) NOT NULL,
    Quantity_Available INTEGER,
    Cost DECIMAL(10, 2),
    Selling_Price DECIMAL(10, 2),
    CONSTRAINT fk_category_code FOREIGN KEY (category_code) REFERENCES CATEGORY_PRODUCTS(Code)
);

-- Crear la tabla CUSTOMERS
CREATE TABLE CUSTOMERS (
    customer_Id SERIAL PRIMARY KEY,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Address VARCHAR(255),
    Date_Of_Birth DATE,
    Email VARCHAR(255),
    Home_Phone VARCHAR(15),
    Cell_Phone VARCHAR(15)
);

-- Crear la tabla ORDERS
CREATE TABLE ORDERS (
    order_number SERIAL PRIMARY KEY,
    customer_Id INTEGER REFERENCES CUSTOMERS(customer_Id),
    order_date DATE,
    shipped_date DATE,
    payment_date DATE,
    CONSTRAINT fk_customer_Id FOREIGN KEY (customer_Id) REFERENCES CUSTOMERS(customer_Id)
);

-- Crear la tabla ORDER_DETAIL
CREATE TABLE ORDER_DETAIL (
    order_number INTEGER REFERENCES ORDERS(order_number),
    Product_Id INTEGER REFERENCES PRODUCTS(Product_Id),
    Quantity INTEGER,
    Price DECIMAL(10, 2),
    PRIMARY KEY (order_number, Product_Id),
    CONSTRAINT fk_order_number FOREIGN KEY (order_number) REFERENCES ORDERS(order_number),
    CONSTRAINT fk_product_id FOREIGN KEY (Product_Id) REFERENCES PRODUCTS(Product_Id)
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