const inicioRutaModel = require("../../models/modelInicioRuta/routesInicioruta");

const insertInicioRuta = async (req, res) => {
  try {
    const { id_ruta_operador, kilometraje_inicial, fecha_inicio } = req.body;

    const capturaPath = req.files["captura_simplieroute"][0].path.replace("uploads/", "");
    const imagenKmPath = req.files["imagen_kilometraje"][0].path.replace("uploads/", "");

    const data = {
      id_ruta_operador,
      kilometraje_inicial,
      fecha_inicio,
      captura_simplieroute: capturaPath,
      imagen_kilometraje: imagenKmPath,
    };

    const result = await inicioRutaModel.insertInicioRuta(data);
    res.status(201).json({ message: "Inicio de ruta registrado exitosamente", result });
  } catch (error) {
    console.error("Error al insertar inicio de ruta:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  insertInicioRuta,
};
