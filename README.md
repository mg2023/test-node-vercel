
PRERREQUISITOS:
  Crear base de datos en vercel
1. En Overview --> Storage --> crear database --> Postgres --> Darle nombre y region.
2. Luego en https://vercel.com/dashboard/stores seleccionar la base de datos creada.
3. Hacer clic en .env.local y copiar POSTGRES_URL en el .env en el proyecto local.
   
Para correr el proyecto en local:
1. Descargar el repositorio.
2. A nivel del archivo package.json hacer npm install  
4. Crear archivo .env y pegar la variable de entorno de la base de datos de vercel POSTGRES_URL
5. Correr el proyecto haciendo node index.js
6. Si todo salio bien, en la terminal saldra "Servidor Express escuchando en el puerto 3000"
7. Abrir el navegador y pegar en la url localhost:3000
8. Y deberia salir la hora leida desde la base de datos en Vercel.

Para hacer deploy en vercel
   
1. Ir a la pagina de Vercel.
2. En Overview - Add New  Project.
3. Importar repositorio git.
4. Agregar la variable de entorno POSTGRES_URL
5. En el proyecto local, se debe agregar el archivo vercel.json y hacer push al repositorio.
6. El servidor de vercel realizara automaticamente el deploy.
7. Hacer clic en la ruta publica que entrega vercel para ver la hora consultada en la base de datos.


