GESAP - Sistema de Gestión de Autenticación y Perfiles
Descripción del Proyecto
GESAP es un sistema backend desarrollado para gestionar la autenticación de usuarios (login) y sus perfiles. El objetivo principal es proporcionar una API REST funcional que permita a los usuarios iniciar sesión de manera segura utilizando correo electrónico y contraseña. A futuro, el proyecto incluirá más funcionalidades como roles de usuario, registro de nuevos usuarios y un frontend para interactuar con la API.

Este repositorio está diseñado para ser escalable y fácil de configurar, ideal para proyectos que requieran autenticación básica en sus aplicaciones web o móviles.

Tecnologías Utilizadas
El proyecto utiliza las siguientes tecnologías:

Node.js : Entorno de ejecución para construir el servidor backend.
Express.js : Framework minimalista para crear APIs RESTful.
MySQL : Base de datos relacional para almacenar información de usuarios.
bcrypt : Biblioteca para cifrar contraseñas y garantizar la seguridad de los datos.
dotenv : Manejo de variables de entorno para configuraciones sensibles.
Postman : Herramienta utilizada para probar los endpoints de la API.
Git/GitHub : Control de versiones y colaboración en el desarrollo del proyecto.
Características Actuales
Autenticación de Usuarios :
Endpoint /login para verificar credenciales de usuario.
Validación de correo electrónico y contraseña cifrada.
Base de Datos :
Tabla users con campos para correo electrónico y contraseña cifrada.
API REST :
Endpoint /users para listar todos los usuarios registrados.
Instrucciones de Instalación
Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. Clona el Repositorio
bash
Copy
1
2
git clone https://github.com/chechoinformatico/gesap.git
cd gesap
2. Instala las Dependencias
Asegúrate de tener Node.js y npm instalados. Luego, ejecuta:

bash
Copy
1
npm install
3. Configura la Base de Datos
Crea una base de datos MySQL llamada gesap.
Importa el archivo SQL (gesap_users.sql) para crear la tabla users y añadir datos iniciales:
bash
Copy
1
mysql -u root -p gesap < db/gesap_users.sql
4. Configura las Variables de Entorno
Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

env
Copy
1
2
3
4
5
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña_de_mysql
DB_NAME=gesap
5. Inicia el Servidor
Ejecuta el siguiente comando para iniciar el servidor:

bash
Copy
1
node src/server.js
El servidor estará disponible en http://localhost:3000.

Endpoints Disponibles
GET /users
Descripción : Obtiene una lista de todos los usuarios registrados.
Respuesta :
json
Copy
1
2
3
4
5
6
⌄
⌄
[
  {
    "id": 1,
    "email": "admin@example.com"
  }
]
POST /login
Descripción : Verifica las credenciales de un usuario.
Cuerpo de la solicitud :
json
Copy
1
2
3
4
⌄
{
  "email": "admin@example.com",
  "password": "tu_contraseña"
}
Respuesta exitosa :
json
Copy
1
2
3
4
5
6
7
⌄
⌄
{
  "message": "Login exitoso",
  "user": {
    "id": 1,
    "email": "admin@example.com"
  }
}
Futuras Mejoras
Registro de Usuarios : Permitir a los usuarios crear nuevas cuentas.
Roles de Usuario : Implementar diferentes niveles de acceso (administrador, usuario regular, etc.).
Frontend : Desarrollar una interfaz web para interactuar con la API.
Autenticación JWT : Añadir tokens de autenticación para sesiones seguras.
Contribuciones
¡Este proyecto está diseñado para ser open source! Si deseas contribuir, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama para tus cambios:
bash
Copy
1
git checkout -b feature/nueva-funcionalidad
Realiza tus cambios y envía un pull request.
Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
