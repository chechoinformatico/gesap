const bcrypt = require('bcrypt');

const password = 'tu_contraseña'; // Cambia esto por la contraseña que quieras usar
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log(hash); // Copia este hash y úsalo en la base de datos
});