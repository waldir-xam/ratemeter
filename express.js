const express = require("express");
const app = express();
const path = require("path");

// Configuración del servidor

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta para la ruta raíz
app.get("/", (req, res) => {
  // Envía el archivo HTML como respuesta
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Express Runing on http://127.0.0.1:${port}`);
});
