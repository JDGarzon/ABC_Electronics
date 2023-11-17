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
    CustomerId SERIAL PRIMARY KEY,
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
    OrderNumber SERIAL PRIMARY KEY,
    CustomerId INTEGER REFERENCES CUSTOMERS(CustomerId),
    OrderDate DATE,
    ShippedDate DATE,
    PaymentDate DATE,
    CONSTRAINT fk_customer_id FOREIGN KEY (CustomerId) REFERENCES CUSTOMERS(CustomerId)
);

-- Crear la tabla ORDER_DETAIL
CREATE TABLE ORDER_DETAIL (
    OrderNumber INTEGER REFERENCES ORDERS(OrderNumber),
    ProductId INTEGER REFERENCES PRODUCTS(ProductId),
    Quantity INTEGER,
    Price DECIMAL(10, 2),
    PRIMARY KEY (OrderNumber, ProductId),
    CONSTRAINT fk_order_number FOREIGN KEY (OrderNumber) REFERENCES ORDERS(OrderNumber),
    CONSTRAINT fk_product_id FOREIGN KEY (ProductId) REFERENCES PRODUCTS(ProductId)
);
