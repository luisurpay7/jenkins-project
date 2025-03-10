const express = require('express');

const app = express();
const PORT = 3000;

// Definir un endpoint GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello, World 77!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
