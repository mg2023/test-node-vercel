Para iniciar:
1. Descargar el repositorio.
2. A nivel del archivo package.json hacer npm install
3. Crear archivo .env y pegar la variable de entorno de la base de datos de vercel POSTGRES_URL
4. Correr el proyecto haciendo node index.js
5. Si todo salio bien, en la terminal saldra "Servidor Express escuchando en el puerto 3000"
6. Abrir el navegador y pegar en la url localhost:3000
7. Y deberia salir la hora leida desde la base de datos en Vercel.
8. Para hacer el deploy del proyecto en el servidor de vercel, se debe agregar el archivo vercel.json y hacer push al repositorio.
9. El servidor de vercel realizara automaticamente el deploy.
10. Hacer clic en la ruta publica que entrega vercel para ver la hora consultada en la base de datos.

