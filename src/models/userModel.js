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
      "SELECT * FROM Persona WHERE tipo= 'Operador' OR tipo = 'EncargadoCR' "
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener operadores:", error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el controlador
  }
};

const getRutaOperadoresByRutaId = async (id_ruta) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Ruta_Operador WHERE id_ruta = ? ORDER BY id_ruta_operador ASC",
      [id_ruta]
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener Ruta_Operador por id_ruta:", error);
    throw error;
  }
};

module.exports = {
  getUsers,
  getUserById,
  getOperadores,
  getRutaOperadoresByRutaId,
};
