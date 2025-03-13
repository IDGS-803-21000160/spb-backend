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

module.exports = {
  insertMultipleRoutes,
};
