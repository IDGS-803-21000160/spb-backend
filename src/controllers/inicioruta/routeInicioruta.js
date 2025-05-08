const {
  insertInicioRuta,
} = require("../../models/modelInicioRuta/routesInicioruta");

const createInicioRuta = async (req, res) => {
  const {
    id_ruta_operador,
    doc_manifiesto,
    kilometraje_inicial,
    imagen_kilometraje,
    fecha_inicio,
  } = req.body;

  // Validación de campo requerido
  if (id_ruta_operador == null) {
    return res.status(400).json({ error: "id_ruta_operador es obligatorio" });
  }

  const inicioRutaData = {
    id_ruta_operador,
    doc_manifiesto,
    kilometraje_inicial,
    imagen_kilometraje,
    fecha_inicio,
  };

  try {
    const result = await insertInicioRuta(inicioRutaData);
    res.status(201).json({
      message: "Inicio de ruta creado exitosamente",
      data: result,
    });
  } catch (error) {
    console.error("Error al crear el inicio de ruta:", error);
    res.status(500).json({
      message: "Error al crear el inicio de ruta",
      error: error.message,
    });
  }
};

module.exports = {
  createInicioRuta,
};
