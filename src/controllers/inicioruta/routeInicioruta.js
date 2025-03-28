// controllers/inicioRutaController.js
const inicioRutaModel = require("../../models/modelInicioRuta/routesInicioruta");

const insertInicioRuta = async (req, res) => {
  console.log("Body recibido:", req.body);
  
  try {
    const result = await inicioRutaModel.insertInicioRuta(req.body);
    res.status(201).json({ message: "Inicio de ruta registrado exitosamente", result });
  } catch (error) {
    console.error("Error al insertar inicio de ruta:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  insertInicioRuta,
};
