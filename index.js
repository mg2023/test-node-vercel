const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 3000;

//    // Configura la conexión a la base de datos PostgreSQL
//    const pool = new Pool({
//      user: 'tu_usuario',
//      host: 'localhost',
//      database: 'nombre_de_la_base_de_datos',
//      password: 'tu_contraseña',
//      port: 5432,
//    });

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: true,
  })
);

// Ruta de ejemplo
app.get("/", (req, res) => {
  pool.query("SELECT NOW()", (error, results) => {
    if (error) {
      throw error;
    }
    res.send(`La fecha y hora actual es: ${results.rows[0].now}`);
  });
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
