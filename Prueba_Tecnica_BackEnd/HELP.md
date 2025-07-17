# Instrucciones para ejecutar este proyecto
> ⚠️ **Nota:** La primera vez que ejecutes el proyecto, Maven descargará todas las dependencias necesarias. Este proceso puede tardar unos minutos dependiendo de tu conexión a Internet. Espera a que finalice antes de continuar.

1. **Configura la base de datos:**
   - Asegúrate de tener **MySQL** instalado y en ejecución, o bien, puedes levantar la base de datos utilizando Docker.
   - Crea una nueva base de datos para el proyecto si no usas Docker.
   - Ejecuta el script SQL proporcionado (`product.sql`), ubicado en la raíz del monorepo, para crear las tablas necesarias.
   - Alternativamente, puedes utilizar el archivo `docker-compose.yml` para crear automáticamente la base de datos y las tablas.

2. **Configura las propiedades de conexión:**
   - Abre el archivo `src/main/resources/application.properties`.
   - Modifica las siguientes propiedades con los datos de tu base de datos:
   - Si estás utilizando Docker, asegúrate de que los valores coincidan con los definidos en `docker-compose.yml`. De lo contrario, reemplaza el usuario (`root`), la contraseña (`admin`) y, si es necesario, el puerto del `localhost`.
   - Ejemplo de configuración:
     ```
     spring.datasource.url=jdbc:mysql://localhost:3306/prueba_tecnica_productos
     spring.datasource.username=${MYSQL_USER:root}
     spring.datasource.password=${MYSQL_PASSWORD:admin}
     ```
   - Guarda los cambios.

3. **Compila y ejecuta la aplicación:**
    - Abre una terminal en la raíz del proyecto.
    - Ejecuta el siguiente comando para compilar y correr la aplicación:
      ```
      mvn spring-boot:run
      ``` 
    - Si estás utilizando un IDE como IntelliJ IDEA o Eclipse, puedes ejecutar la clase principal directamente desde el IDE.

4. **Accede a la aplicación:**
    - Por defecto, la aplicación estará disponible en `http://localhost:8080`

5. **Consulta la documentación de la API:**
   - Puedes ver la documentación interactiva generada por Swagger en [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html).
_
