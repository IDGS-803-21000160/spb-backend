const pool = require("../config/db");
const { get } = require("../routes/routesRoutes");

const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM Usuario");
  return rows;
};

const getUserById = async (id) => {
  const [rows] = await pool.query(
    "SELECT * FROM Usuario WHERE id_persona = ?",
    [id]
  );
  return rows[0];
};

const getOperadores = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Persona WHERE tipo= 'Operador'"
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener operadores:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el controlador
  }
};

module.exports = { getUsers, getUserById, getOperadores };
