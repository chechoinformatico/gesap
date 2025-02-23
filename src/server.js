// src/server.js

// Importar módulos necesarios
const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Express
const app = express();

// Definir el puerto del servidor
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());

// Crear una conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

// Endpoint para obtener todos los usuarios
app.get('/users', (req, res) => {
  const query = 'SELECT id, email FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).send('Error interno del servidor');
    }
    res.json(results);
  });
});

// Endpoint para el login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar que se proporcionaron email y password
  if (!email || !password) {
    return res.status(400).json({ message: 'Email y contraseña son requeridos' });
  }

  // Consulta la base de datos para verificar el usuario
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      return res.status(500).send('Error interno del servidor');
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const user = results[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.json({ message: 'Login exitoso', user: { id: user.id, email: user.email } });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});