#  Meltsan - Prueba Técnica

Este repositorio contiene la prueba técnica para **Meltsan Solutions**, estructurada como un **monorepo** con dos componentes principales:

- Backend (Prueba_Tecnica_BackEnd): Se recomienda usar un IDE como IntelliJ IDEA.
- Frontend (Prueba_Tecnica_FrontEnd): Se recomienda usar Visual Studio Code (VSC).
- Base de datos (productos.sql): Se recomienda crear la base de datos antes de iniciar la aplicación.

## Haz una clonación o descarga del proyecto


> 🔍 **IMPORTANTE**: Cada carpeta (`Prueba_Tecnica_BackEnd` y `Prueba_Tecnica_FrontEnd`) contiene su propio `README.md` o `HELP.md` con instrucciones detalladas para levantar cada proyecto.  


## Instalación del Backend  
(Consulta el archivo `HELP.md` para más detalles)

- Asegúrate de crear la base de datos ejecutando primero el script `productos.sql`.
- En el archivo `HELP.md` encontrarás una guía detallada para configurar la conexión a la base de datos, incluyendo una opción con Docker, si lo prefieres.
- Como primer paso, instala las dependencias de Maven
  **Configura las propiedades de conexión:**
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

  **Consulta la documentación de la API:**
   - Puedes ver la documentación interactiva generada por Swagger en [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html).


## Instalación del Frontend  
(Consulta el archivo `README.md` del frontend para instrucciones más detalladas)
- Reconstruye los módulos de Node.js antes de iniciar el proyecto.
- Para instalar las dependencias, ejecuta uno de los siguientes comandos: `bun install`, `npm install`, `yarn install`. Se recomienda usar Bun o Yarn porque suelen ser más rápidos que NPM.
- Asegúrate de que el backend esté levantado antes de iniciar el frontend, ya que este necesita consumir los datos de la API.
- Para iniciar la aplicación con `bun run dev`, `npm run dev`, `yarn dev`.
