SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

CREATE DATABASE IF NOT EXISTS prueba_tecnica_productos
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE prueba_tecnica_productos;

CREATE TABLE producto (
    cantidad INTEGER NOT NULL,
    precio DECIMAL(12,2) NOT NULL,
    id BIGINT NOT NULL AUTO_INCREMENT,
    categoria VARCHAR(50) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO producto (id, nombre, categoria, cantidad, precio) VALUES
(1, 'Laptop Lenovo', 'Tecnología', 15, 899.99),
(2, 'Mouse Logitech', 'Tecnología', 50, 29.99),
(3, 'Silla ergonómica', 'Muebles', 10, 199.90),
(4, 'Teclado mecánico', 'Tecnología', 25, 89.50),
(5, 'Monitor LG 24"', 'Tecnología', 20, 159.99),
(6, 'Escritorio madera', 'Muebles', 5, 320.00),
(7, 'Cámara web HD', 'Tecnología', 30, 45.00),
(8, 'Audífonos JBL', 'Electrónica', 40, 79.99),
(9, 'Cargador USB-C', 'Accesorios', 60, 19.90),
(10, 'Smartphone Samsung', 'Electrónica', 12, 699.00),
(11, 'Botella térmica', 'Hogar', 35, 15.99),
(12, 'Lámpara de escritorio', 'Hogar', 22, 34.50),
(13, 'Almohada ortopédica', 'Hogar', 18, 27.99),
(14, 'Mochila impermeable', 'Accesorios', 28, 49.90),
(15, 'Tablet Android', 'Tecnología', 16, 279.90),
(16, 'Impresora HP', 'Tecnología', 8, 129.99),
(17, 'Reloj inteligente', 'Electrónica', 14, 199.99),
(18, 'Cafetera programable', 'Hogar', 9, 99.99),
(19, 'Ventilador portátil', 'Electrodomésticos', 25, 39.99),
(20, 'Cámara deportiva', 'Electrónica', 7, 259.99),
(21, 'Bocina Bluetooth', 'Electrónica', 30, 59.90),
(22, 'Cuchillo de chef', 'Cocina', 20, 24.99),
(23, 'Tetera eléctrica', 'Cocina', 12, 44.50),
(24, 'Sartén antiadherente', 'Cocina', 17, 35.00),
(25, 'Toalla de microfibra', 'Hogar', 50, 12.99),
(26, 'Cinta LED RGB', 'Decoración', 40, 22.50),
(27, 'Organizador de escritorio', 'Oficina', 30, 18.90),
(28, 'Papelera reciclable', 'Oficina', 15, 14.75),
(29, 'Cuaderno A5', 'Oficina', 60, 7.99),
(30, 'Estuche multiusos', 'Accesorios', 45, 11.50),
(31, 'Bocina portátil impermeable', 'Electrónica', 20, 55.00),
(32, 'Botella de acero inoxidable 1L', 'Hogar', 25, 21.99),
(33, 'Silla gamer ergonómica con reposapiés', 'Muebles', 7, 279.99),
(34, 'Laptop gamer MSI 17” 32GB RAM', 'Tecnología', 4, 1899.00),
(35, 'Reloj de oro 18K edición limitada', 'Joyería', 1, 4200.00),
(36, 'GoPro Hero 11 Black con accesorios', 'Electrónica', 3, 459.99),
(37, 'Bocina Bluetooth JBL Xtreme 3', 'Electrónica', 10, 99.90),
(38, 'Botella térmica 750ml con filtro', 'Hogar', 18, 19.50),
(39, 'Silla gamer edición especial negra/roja', 'Muebles', 5, 310.00),
(40, 'Laptop gamer ASUS ROG Ryzen 9', 'Tecnología', 2, 2100.00);
