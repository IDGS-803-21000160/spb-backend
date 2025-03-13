const pool = require("../../config/db");

const getRoutesByDateAndUser = async (date, userId) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Ruta WHERE fecha_registro = ? AND id_usuario = ?",
      [date, userId]
    );
    return rows;
  } catch (error) {
    console.error("Error al obtener rutas por fecha y usuario:", error);
    throw error;
  }
};

module.exports = { getRoutesByDateAndUser };
