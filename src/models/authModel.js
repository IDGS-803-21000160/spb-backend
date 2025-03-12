const pool = require("../config/db");

const getUserByUsername = async (usuario, contrasena) => {
  const [rows] = await pool.query(
    "SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?",
    [usuario, contrasena]
  );
  return rows.length > 0 ? rows[0] : null;
};

const getOperatorDetails = async (id_usuario) => {
  const [rows] = await pool.query(
    "SELECT * FROM operadores WHERE id_usuario = ?",
    [id_usuario]
  );
  return rows.length > 0 ? rows[0] : null;
};

const getEncargadoDetails = async (id_usuario) => {
  const [rows] = await pool.query(
    "SELECT * FROM encargados_cr WHERE id_usuario = ?",
    [id_usuario]
  );
  return rows.length > 0 ? rows[0] : null;
};

module.exports = { getUserByUsername, getOperatorDetails, getEncargadoDetails };
