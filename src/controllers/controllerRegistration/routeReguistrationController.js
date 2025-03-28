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

module.exports = {
  insertMultipleRoutes,
  insertarRutas,
};
