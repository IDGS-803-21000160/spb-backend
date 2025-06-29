const db = require("../../config/db"); // Configuración de la BD

const insertCierreRuta = async (cierreRutaData) => {
  const query = `
    INSERT INTO cierreruta (
      id_ruta_operador,
      captura_simplieroute2,
      lps_exitosos,
      lps_fallidos,
      remisiones_finales,
      fecha_cierre,
      kilometraje_final,
      imagen_kilometraje,
      visitados,
      cancelados
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const [result] = await db.execute(query, [
      cierreRutaData.id_ruta_operador=1,
      cierreRutaData.captura_simplieroute2,
      cierreRutaData.lps_exitosos,
      cierreRutaData.lps_fallidos,
      cierreRutaData.remisiones_finales,
      cierreRutaData.fecha_cierre,
      cierreRutaData.kilometraje_final,
      cierreRutaData.imagen_kilometraje,
      cierreRutaData.visitados,
      cierreRutaData.cancelados,
    ]);
    return result;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar el cierre de ruta: " + error.message);
  }
};

module.exports = {
  insertCierreRuta,
};
