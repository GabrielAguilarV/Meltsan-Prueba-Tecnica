CREATE DATABASE prueba_tecnica_productos;
USE prueba_tecnica_productos;
CREATE TABLE producto (
        cantidad integer not null,
        precio decimal(12,2) not null,
        id bigint not null auto_increment,
        categoria varchar(50) not null,
        nombre varchar(100) not null,
        primary key (id)
    );

INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (1, 'Laptop Lenovo', 'Tecnología', 15, 899.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (2, 'Mouse Logitech', 'Tecnología', 50, 29.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (3, 'Silla ergonómica', 'Muebles', 10, 199.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (4, 'Teclado mecánico', 'Tecnología', 25, 89.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (5, 'Monitor LG 24"', 'Tecnología', 20, 159.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (6, 'Escritorio madera', 'Muebles', 5, 320.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (7, 'Cámara web HD', 'Tecnología', 30, 45.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (8, 'Audífonos JBL', 'Electrónica', 40, 79.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (9, 'Cargador USB-C', 'Accesorios', 60, 19.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (10, 'Smartphone Samsung', 'Electrónica', 12, 699.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (11, 'Botella térmica', 'Hogar', 35, 15.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (12, 'Lámpara de escritorio', 'Hogar', 22, 34.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (13, 'Almohada ortopédica', 'Hogar', 18, 27.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (14, 'Mochila impermeable', 'Accesorios', 28, 49.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (15, 'Tablet Android', 'Tecnología', 16, 279.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (16, 'Impresora HP', 'Tecnología', 8, 129.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (17, 'Reloj inteligente', 'Electrónica', 14, 199.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (18, 'Cafetera programable', 'Hogar', 9, 99.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (19, 'Ventilador portátil', 'Electrodomésticos', 25, 39.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (20, 'Cámara deportiva', 'Electrónica', 7, 259.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (21, 'Bocina Bluetooth', 'Electrónica', 30, 59.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (22, 'Cuchillo de chef', 'Cocina', 20, 24.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (23, 'Tetera eléctrica', 'Cocina', 12, 44.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (24, 'Sartén antiadherente', 'Cocina', 17, 35.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (25, 'Toalla de microfibra', 'Hogar', 50, 12.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (26, 'Cinta LED RGB', 'Decoración', 40, 22.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (27, 'Organizador de escritorio', 'Oficina', 30, 18.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (28, 'Papelera reciclable', 'Oficina', 15, 14.75);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (29, 'Cuaderno A5', 'Oficina', 60, 7.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (30, 'Estuche multiusos', 'Accesorios', 45, 11.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (31, 'Bocina portátil impermeable', 'Electrónica', 20, 55.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (32, 'Botella de acero inoxidable 1L', 'Hogar', 25, 21.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (33, 'Silla gamer ergonómica con reposapiés', 'Muebles', 7, 279.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (34, 'Laptop gamer MSI 17” 32GB RAM', 'Tecnología', 4, 1899.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (35, 'Reloj de oro 18K edición limitada', 'Joyería', 1, 4200.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (36, 'GoPro Hero 11 Black con accesorios', 'Electrónica', 3, 459.99);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (37, 'Bocina Bluetooth JBL Xtreme 3', 'Electrónica', 10, 99.90);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (38, 'Botella térmica 750ml con filtro', 'Hogar', 18, 19.50);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (39, 'Silla gamer edición especial negra/roja', 'Muebles', 5, 310.00);
INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES (40, 'Laptop gamer ASUS ROG Ryzen 9', 'Tecnología', 2, 2100.00);