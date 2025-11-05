-- Crear tabla CLIENTE
CREATE TABLE CLIENTE (
  id NUMBER PRIMARY KEY,
  nombre VARCHAR2(50),
  apellido1 VARCHAR2(50),
  apellido2 VARCHAR2(50),
  ciudad VARCHAR2(50),
  categoria NUMBER(15)
);

-- Crear tabla COMERCIAL
CREATE TABLE COMERCIAL (
  id NUMBER PRIMARY KEY,
  nombre VARCHAR2(50),
  apellido1 VARCHAR2(50),
  apellido2 VARCHAR2(50),
  comision NUMBER(15)
);

-- Crear tabla PEDIDO
CREATE TABLE PEDIDO (
  id NUMBER PRIMARY KEY,
  total NUMBER(15,2),
  fecha DATE,
  id_cliente NUMBER,
  id_comercial NUMBER,
  FOREIGN KEY (id_cliente) REFERENCES CLIENTE(id),
  FOREIGN KEY (id_comercial) REFERENCES COMERCIAL(id)
);



--Insertar datos dentro de la tabla CLIENTE
INSERT ALL
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (1, 'Aarón', 'Rivero', 'Gómez', 'Almería', 100)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (2, 'Adela', 'Salas', 'Díaz', 'Granada', 200)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (3, 'Adolfo', 'Rubio', 'Flores', 'Sevilla', 300)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (4, 'Adrián', 'Suárez', NULL, 'Jaén', 300)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (5, 'Marcos', 'Loyola', 'Méndez', 'Almería', 200)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (6, 'María', 'Santana', 'Moreno', 'Cádiz', 100)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (7, 'Pilar', 'Ruiz', NULL, 'Sevilla', 300)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (8, 'Pepe', 'Ruiz', 'Santana', 'Huelva', 200)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (9, 'Guillermo', 'López', 'Gómez', 'Granada', 225)
  INTO CLIENTE (id, nombre, apellido1, apellido2, ciudad, categoria) VALUES (10, 'Daniel', 'Santana', 'Loyola', 'Sevilla', 125)
SELECT * FROM dual;


--insetar datos en la tabla COMERCIAL
INSERT ALL
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (1, 'Daniel', 'Sáez', 'Vega', 0.15)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (2, 'Juan', 'Gómez', 'López', 0.13)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (3, 'Diego', 'Flores', 'Salas', 0.11)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (4, 'Marta', 'Herrera', 'Gil', 0.14)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (5, 'Antonio', 'Carretero', 'Ortega', 0.12)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (6, 'Manuel', 'Domínguez', 'Hernández', 0.13)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (7, 'Antonio', 'Vega', 'Hernández', 0.11)
  INTO COMERCIAL (id, nombre, apellido1, apellido2, comision) VALUES (8, 'Alfredo', 'Ruiz', 'Flores', 0.05)
SELECT * FROM dual;

--Insertar datos dentro de la tabla PEDIDO

INSERT ALL
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (1, 150.5, TO_DATE('05/10/2017', 'DD/MM/YYYY'), 5, 2)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (2, 270.65, TO_DATE('10/09/2016', 'DD/MM/YYYY'), 1, 5)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (3, 65.26, TO_DATE('05/10/2017', 'DD/MM/YYYY'), 2, 1)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (4, 110.5, TO_DATE('17/08/2016', 'DD/MM/YYYY'), 8, 3)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (5, 948.5, TO_DATE('10/09/2017', 'DD/MM/YYYY'), 5, 2)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (6, 2400.6, TO_DATE('27/07/2016', 'DD/MM/YYYY'), 7, 1)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (7, 5760, TO_DATE('10/09/2015', 'DD/MM/YYYY'), 2, 1)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (8, 1983.43, TO_DATE('10/10/2017', 'DD/MM/YYYY'), 4, 6)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (9, 2480.4, TO_DATE('10/10/2017', 'DD/MM/YYYY'), 8, 3)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (10, 250.45, TO_DATE('27/06/2015', 'DD/MM/YYYY'), 8, 2)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (11, 75.29, TO_DATE('17/08/2016', 'DD/MM/YYYY'), 3, 7)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (12, 3045.6, TO_DATE('25/04/2017', 'DD/MM/YYYY'), 2, 1)
  INTO PEDIDO (id, total, fecha, id_cliente, id_comercial) VALUES (13, 545.75, TO_DATE('25/01/2019', 'DD/MM/YYYY'), 6, 1)
SELECT * FROM dual;

--* Consultas
/*Devuelve un listado con todos los pedidos que se han realizado. Los pedidos deben estar ordenados por la fecha de realización, mostrando en primer lugar los pedidos más recientes.*/

SELECT *
FROM pedido
ORDER BY fecha DESC;


/*Devuelve un listado de todos los pedidos cuya cantidad total sea entre 300 y 600 ordenado por la fecha ascendente.*/

SELECT *
FROM pedido
WHERE total BETWEEN 300 AND 600
ORDER BY fecha ASC;

/*Devuelve el identificador, nombre y primer apellido de aquellos clientes cuyo segundo apellido es NULL. El listado deberá estar ordenado alfabéticamente por apellidos y nombre.*/

SELECT id, nombre, apellido1
FROM cliente
WHERE apellido2 IS NULL
ORDER BY apellido1 ASC, nombre ASC;

/*Devuelve un listado con el identificador, nombre y los apellidos de todos los clientes que han realizado algún pedido. El listado debe estar ordenado alfabéticamente y se deben eliminar los elementos repetidos (consultar la cláusula DISTINCT).*/

SELECT DISTINCT c.id, c.nombre, c.apellido1, c.apellido2
FROM cliente c
JOIN pedido p ON c.id = p.id_cliente
ORDER BY c.apellido1 ASC, c.apellido2 ASC, c.nombre ASC;

/*Devuelve el nombre y los apellidos de todos los comerciales que ha participado en algún pedido realizado por María Santana Moreno y se deben eliminar los elementos repetidos (consultar la cláusula DISTINCT).*/

SELECT DISTINCT co.nombre, co.apellido1, co.apellido2
FROM comercial co
JOIN pedido p ON co.id = p.id_comercial
JOIN cliente c ON c.id = p.id_cliente
WHERE c.nombre = 'María'
  AND c.apellido1 = 'Santana'
  AND c.apellido2 = 'Moreno';

/*Crear una vista llamada ResumenPedidos que integré información clave de las tablas PEDIDO, CLIENTE y COMERCIAL.*/

CREATE OR REPLACE VIEW ResumenPedidos AS
SELECT 
    p.id AS id_pedido,
    p.fecha,
    p.total,
    c.id AS id_cliente,
    c.nombre AS nombre_cliente,
    c.apellido1 AS apellido1_cliente,
    c.apellido2 AS apellido2_cliente,
    co.id AS id_comercial,
    co.nombre AS nombre_comercial,
    co.apellido1 AS apellido1_comercial,
    co.apellido2 AS apellido2_comercial
FROM pedido p
JOIN cliente c ON p.id_cliente = c.id
JOIN comercial co ON p.id_comercial = co.id;

/*Teniendo en cuenta la vista anterior generar una consulta que muestre el total de ventas, el promedio de ventas y la cantidad de pedidos realizados por cada comercial, la consulta debe presentarse ordenada por el total de ventas.*/

SELECT 
    id_comercial,
    nombre_comercial,
    apellido1_comercial,
    apellido2_comercial,
    ROUND(SUM(total), 2) AS total_ventas,
    ROUND(AVG(total), 2) AS promedio_ventas,
    COUNT(id_pedido) AS cantidad_pedidos
FROM ResumenPedidos
GROUP BY 
    id_comercial, 
    nombre_comercial, 
    apellido1_comercial, 
    apellido2_comercial
ORDER BY total_ventas DESC;

