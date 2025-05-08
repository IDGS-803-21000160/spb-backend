// models/inicioRutaModel.js
const db = require("../../config/db"); // Configuración de la BD

const insertInicioRuta = async (inicioRutaData) => {
  const query = `CALL usp_insert_inicio_ruta(?, ?, ?, ?, ?)`;

  // Convertir undefined en null para parámetros opcionales
  const params = [
    inicioRutaData.id_ruta_operador, // requerido
    inicioRutaData.doc_manifiesto ?? null,
    inicioRutaData.kilometraje_inicial ?? null,
    inicioRutaData.imagen_kilometraje ?? null,
    inicioRutaData.fecha_inicio ?? null,
  ];

  try {
    const [result] = await db.execute(query, params);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar el inicio de ruta: " + error.message);
  }
};

module.exports = {
  insertInicioRuta,
};
