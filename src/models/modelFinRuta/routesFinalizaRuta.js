const db = require("../../config/db"); // Configuración de la BD

const insertarCierreRuta = async (params) => {
  const query = `
    CALL usp_insertar_cierre_ruta(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  // Convertir undefined en null para parámetros opcionales
  const queryParams = [
    params.idRutaOperador, // requerido
    params.capturaSimplieroute2 ?? null,
    params.lpsExitosos ?? null,
    params.lpsFallidos ?? null,
    params.remisionesFinales ?? null,
    params.fechaCierre ?? null,
    params.kilometrajeFinal ?? null,
    params.imagenKilometraje ?? null,
    params.visitados ?? null,
    params.cancelados ?? null,
  ];

  try {
    const [results] = await db.execute(query, queryParams);
    return results;
  } catch (error) {
    console.error("Error en MySQL:", error);
    throw new Error("Error al insertar el cierre de ruta: " + error.message);
  }
};

module.exports = {
  insertarCierreRuta,
};
