const cierreRutaModel = require("../../models/modelFinRuta/routesFinalizaRuta");

const insertCierreRuta = async (req, res) => {
  try {
    const {
      id_ruta_operador,
      lps_exitosos,
      lps_fallidos,
      remisiones_finales,
      fecha_cierre,
      kilometraje_final,
      visitados,
      cancelados
    } = req.body;

    const capturaPath = req.files["captura_simplieroute2"][0].path.replace("uploads/", "");
    const imagenKmPath = req.files["imagen_kilometraje"][0].path.replace("uploads/", "");

    const data = {
      id_ruta_operador,
      captura_simplieroute2: capturaPath,
      lps_exitosos,
      lps_fallidos,
      remisiones_finales,
      fecha_cierre,
      kilometraje_final,
      imagen_kilometraje: imagenKmPath,
      visitados,
      cancelados
    };

    const result = await cierreRutaModel.insertCierreRuta(data);
    res.status(201).json({ message: "Cierre de ruta registrado exitosamente", result });
  } catch (error) {
    console.error("Error al insertar cierre de ruta:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  insertCierreRuta,
};
