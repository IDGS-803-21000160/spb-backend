const pool = require("../../config/db");

const getRoutesByDateAndUser = async (date, userId) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Ruta WHERE fecha_registro = ? AND id_usuario = ? AND id_estatus = 1 OR id_estatus = 2",
      [date, userId]
    );
    return rows;
  } catch (error) {
    console.error(
      "Error al obtener rutas por fecha, usuario y estado asignada:",
      error
    );
    throw error;
  }
};

const getRutaInfo = async (idRuta, fecha) => {
  try {
    const [rows] = await pool.query("CALL uspGetRutaInfo(?,?)", [
      idRuta,
      fecha,
    ]);
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

const updateRutaUnitaria = async (idRuta, lps, remisiones, zona) => {
  try {
    const [result] = await pool.query("CALL sp_update_ruta_unitaria(?,?,?,?)", [
      idRuta,
      lps,
      remisiones,
      zona,
    ]);
    return result;
  } catch (error) {
    console.error("Error al actualizar la ruta unitaria:", error);
    throw error;
  }
};

const updateRutaOperador = async (idRutaOperador, idOperador) => {
  try {
    const [result] = await pool.query("CALL sp_update_ruta_operador(?, ?)", [
      idRutaOperador,
      idOperador,
    ]);
    return result;
  } catch (error) {
    console.error("Error al actualizar el operador de la ruta:", error);
    throw error;
  }
};

module.exports = {
  getRoutesByDateAndUser,
  getRutaInfo,
  getRouteAssignedToOperator,
  getDataFromTheCrThatAssignedRoute,
  updateRutaUnitaria,
  updateRutaOperador,
};
