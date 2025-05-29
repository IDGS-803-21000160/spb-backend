const db = require("../../config/db"); // Asegúrate de que la conexión a la base de datos esté configurada en este archivo

const insertMultipleRoutes = async (routesData) => {
  const query = `CALL InsertarRutasDesdeJSON(?)`;

  try {
    const result = await db.query(query, [routesData]);
    console.log("Resultado de MySQL:", result);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar las rutas: " + error.message);
  }
};

const insertRoutesUnitariaYrutaCompartida = async (routesData) => {
  const query = `CALL InsertarRutasUnitariaYrutaCompartida(?)`;

  try {
    const result = await db.query(query, [routesData]);
    console.log("Resultado de MySQL:", result);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar las rutas: " + error.message);
  }
};

const changeRutaEstado = async (idRuta, nuevoEstado) => {
  const query = `CALL uspChangeRutaEstado(?, ?)`;

  try {
    const result = await db.query(query, [idRuta, nuevoEstado]);
    console.log("Resultado de MySQL:", result);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al cambiar el estado de la ruta: " + error.message);
  }
};

const convertToSharedRoute = async (
  idRuta,
  lpsTotales,
  remisionesTotales,
  idRutaOperador,
  zonaRutaOperadorActual,
  lpsRutaOperadorActual,
  remisionesRutaOperadorActual,
  operadoresData
) => {
  const query = `CALL sp_convertir_a_ruta_compartida(?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    const result = await db.query(query, [
      idRuta,
      lpsTotales,
      remisionesTotales,
      idRutaOperador,
      zonaRutaOperadorActual,
      lpsRutaOperadorActual,
      remisionesRutaOperadorActual,
      JSON.stringify(operadoresData),
    ]);
    console.log("Resultado de MySQL:", result);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al convertir a ruta compartida: " + error.message);
  }
};

module.exports = {
  insertMultipleRoutes,
  insertRoutesUnitariaYrutaCompartida,
  changeRutaEstado,
  convertToSharedRoute,
};
