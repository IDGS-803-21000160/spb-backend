const pool = require("../config/db");

const getUserByUsername = async (usuario, contrasena) => {
  const [rows] = await pool.query(
    "SELECT * FROM Usuario WHERE usuario = ? AND contrasena = ?",
    [usuario, contrasena]
  );
  return rows.length > 0 ? rows[0] : null;
};

const getOperatorDetails = async (id_persona) => {
  const [rows] = await pool.query(
    "SELECT * FROM Persona WHERE id_persona = ?",
    [id_persona]
  );
  return rows.length > 0 ? rows[0] : null;
};

module.exports = { getUserByUsername, getOperatorDetails };
