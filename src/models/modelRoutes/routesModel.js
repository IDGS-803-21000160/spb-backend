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

const getRutaInfo = async (idRuta, fecha) => {
  try {
    const [rows] = await pool.query("CALL GetRutaInfo(?,?)", [idRuta, fecha]);
    return rows;
  } catch (error) {
    console.error("Error al obtener ruta por id:", error);
    throw error;
  }
};

const getRouteAssignedToOperator = async (idOperador, fecha) => {
  try {
    const [rows] = await pool.query("CALL GetRutaPorOperador(?,?)", [
      idOperador,
      fecha,
    ]);
    return rows;
  } catch (error) {
    console.error("Error al obtener rutas asignadas al operador:", error);
    throw error;
  }
};

const getDataFromTheCrThatAssignedRoute = async (idCr) => {
  try {
    const [rows] = await pool.query("CALL GetDatosCRQueAsignoRuta(?)", [idCr]);
    return rows;
  } catch (error) {
    console.error("Error al obtener rutas asignadas al operador:", error);
    throw error;
  }
};

module.exports = {
  getRoutesByDateAndUser,
  getRutaInfo,
  getRouteAssignedToOperator,
  getDataFromTheCrThatAssignedRoute,
};
