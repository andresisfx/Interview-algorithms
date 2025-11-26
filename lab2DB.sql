-- Crear tabla Productos
CREATE TABLE productos (
  id_producto NUMBER PRIMARY KEY,
  nombre VARCHAR2(50),
  precio NUMBER,
  stock NUMBER
);


-- Insertar datos en la tabla productos 
INSERT ALL
  INTO productos (id_producto, nombre, precio, stock) VALUES (1, 'Producto A', 50, 100)
  INTO productos (id_producto, nombre, precio, stock) VALUES (2, 'Producto B', 75, 80)
  INTO productos (id_producto, nombre, precio, stock) VALUES (3, 'Producto C', 60, 120)
  INTO productos (id_producto, nombre, precio, stock) VALUES (4, 'Producto D', 90, 60)
SELECT * FROM dual;

-- Crear tabla registro_ventas
CREATE TABLE registro_ventas (
  id_venta NUMBER PRIMARY KEY,
  id_producto NUMBER,
  cantidad NUMBER,
  fecha_venta DATE,
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);


-- Insertar algunos registros en la tabla registro_ventas
INSERT ALL
  INTO registro_ventas (id_venta, id_producto, cantidad, fecha_venta)
    VALUES (1, 1, 3, DATE '2025-01-05')
  INTO registro_ventas (id_venta, id_producto, cantidad, fecha_venta)
    VALUES (2, 2, 1, DATE '2025-01-08')
  INTO registro_ventas (id_venta, id_producto, cantidad, fecha_venta)
    VALUES (3, 3, 4, DATE '2025-01-10')
  INTO registro_ventas (id_venta, id_producto, cantidad, fecha_venta)
    VALUES (4, 1, 2, DATE '2025-01-12')
  INTO registro_ventas (id_venta, id_producto, cantidad, fecha_venta)
    VALUES (5, 4, 5, DATE '2025-01-15')
SELECT * FROM dual;

-- Creación del Cursor
CREATE OR REPLACE PROCEDURE calcular_total_ventas IS
  total NUMBER := 0;
  
  CURSOR c IS
    SELECT v.cantidad * p.precio AS subtotal
    FROM registro_ventas v
    JOIN productos p ON p.id_producto = v.id_producto;
BEGIN
  FOR item IN c LOOP
    total := total + item.subtotal;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Total ventas: ' || total);
END;
/

-- Creación de Función obtener_stock_producto

CREATE OR REPLACE FUNCTION obtener_stock_producto (
    p_id_producto IN NUMBER
) RETURN NUMBER IS
    v_stock NUMBER;
BEGIN
    SELECT stock
    INTO v_stock
    FROM productos
    WHERE id_producto = p_id_producto;

    RETURN v_stock;
END;
/


-- Uso de Procedimientos para Actualizar Stock

CREATE OR REPLACE PROCEDURE actualizar_stock (
    p_id_producto IN NUMBER,
    p_cantidad_vendida IN NUMBER
) AS
BEGIN
    UPDATE productos
    SET stock = stock - p_cantidad_vendida
    WHERE id_producto = p_id_producto;
      
END;
/

-- Creación de un Disparador (TRIGGER)

CREATE OR REPLACE TRIGGER trg_actualizar_stock
BEFORE INSERT ON registro_ventas
FOR EACH ROW
DECLARE
    v_stock NUMBER;
BEGIN
    -- Obtener el stock actual del producto
    SELECT stock INTO v_stock
    FROM productos
    WHERE id_producto = :NEW.id_producto;

    -- Validar stock suficiente
    IF v_stock < :NEW.cantidad THEN
        RAISE_APPLICATION_ERROR(
            -20010,
            'No hay suficiente stock para registrar esta venta.'
        );
    END IF;

    -- Si hay stock suficiente, actualizarlo
    actualizar_stock(:NEW.id_producto, :NEW.cantidad);
END;
/
