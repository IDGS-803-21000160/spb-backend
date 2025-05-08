// models/inicioRutaModel.js
const db = require("../../config/db"); // Configuración de la BD

const insertInicioRuta = async (inicioRutaData) => {
  const query = `CALL usp_insert_inicio_ruta(?, ?, ?, ?, ?)`;

  try {
    const [result] = await db.execute(query, [
      inicioRutaData.id_ruta_operador,
      inicioRutaData.doc_manifiesto,
      inicioRutaData.kilometraje_inicial,
      inicioRutaData.imagen_kilometraje,
      inicioRutaData.fecha_inicio,
    ]);

    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar el inicio de ruta: " + error.message);
  }
};

module.exports = {
  insertInicioRuta,
};
