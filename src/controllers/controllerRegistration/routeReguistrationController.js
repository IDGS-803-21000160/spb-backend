const routeRegistrationModel = require("../../models/routeRegistration/routeReguistration");

const insertMultipleRoutes = async (req, res) => {
  console.log("Body recibido:", req.body); // Verifica el JSON recibido

  // Convertir el JSON a string
  const routesData = JSON.stringify(req.body);

  try {
    const result = await routeRegistrationModel.insertMultipleRoutes(
      routesData
    );
    res.status(201).json({ message: "Rutas insertadas exitosamente", result });
  } catch (error) {
    console.error("Error en la inserción:", error);
    res.status(500).json({ message: error.message });
  }
};

const insertarRutas = async (req, res) => {
  console.log("Body recibido:", req.body); // Verifica el JSON recibido

  // Convertir el JSON a string
  const routesData = JSON.stringify(req.body);

  try {
    const result =
      await routeRegistrationModel.insertRoutesUnitariaYrutaCompartida(
        routesData
      );
    res.status(201).json({ message: "Rutas insertadas exitosamente", result });
  } catch (error) {
    console.error("Error en la inserción:", error);
    res.status(500).json({ message: error.message });
  }
};

// Cambia el estado de la ruta
const changeRutaEstado = async (req, res) => {
  const { idRuta, nuevoEstado } = req.body;

  try {
    const result = await routeRegistrationModel.changeRutaEstado(
      idRuta,
      nuevoEstado
    );
    res.status(200).json({ message: "Estado de ruta actualizado", result });
  } catch (error) {
    console.error("Error al cambiar el estado de la ruta:", error);
    res.status(500).json({ message: error.message });
  }
};

const convertToSharedRoute = async (req, res) => {
  const {
    idRuta,
    lpsTotales,
    remisionesTotales,
    idRutaOperador,
    zonaRutaOperadorActual,
    lpsRutaOperadorActual,
    remisionesRutaOperadorActual,
    operadoresData,
  } = req.body;

  // Validar que los campos requeridos estén presentes
  if (!idRuta || !lpsTotales || !remisionesTotales || !operadoresData) {
    return res.status(400).json({
      message:
        "Faltan datos requeridos: idRuta, capacidadMaxima, capacidadActual, operadoresData",
    });
  }

  try {
    const result = await routeRegistrationModel.convertToSharedRoute(
      idRuta,
      lpsTotales,
      remisionesTotales,
      idRutaOperador,
      zonaRutaOperadorActual,
      lpsRutaOperadorActual,
      remisionesRutaOperadorActual,
      operadoresData
    );
    res
      .status(200)
      .json({ message: "Ruta convertida a compartida exitosamente", result });
  } catch (error) {
    console.error("Error al convertir a ruta compartida:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  insertMultipleRoutes,
  insertarRutas,
  changeRutaEstado,
  convertToSharedRoute,
};
