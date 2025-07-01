const routesModel = require("../../models/modelRoutes/routesModel");
const { get } = require("../../routes/routesRoutesConsult");

const getAllRoutes = async (req, res) => {
  const { date, userId } = req.params;
  try {
    const routes = await routesModel.getRoutesByDateAndUser(date, userId);
    res.json(routes);
  } catch (error) {
    console.error("Error al obtener rutas:", error);
    res.status(500).json({ message: "Error al obtener rutas" });
  }
};

const getRouteInfo = async (req, res) => {
  const { idRuta, fecha } = req.params;
  try {
    const routeInfo = await routesModel.getRutaInfo(idRuta, fecha);
    res.json(routeInfo);
  } catch (error) {
    console.error("Error al obtener información de la ruta:", error);
    res
      .status(500)
      .json({ message: "Error al obtener información de la ruta" });
  }
};

const getRouteAssignedToOperator = async (req, res) => {
  const { idOperador, fecha } = req.params;
  try {
    const routes = await routesModel.getRouteAssignedToOperator(
      idOperador,
      fecha
    );
    console.log("ruta", routes);

    res.json(routes);
  } catch (error) {
    console.error("Error al obtener rutas asignadas al operador:", error);
    res
      .status(500)
      .json({ message: "Error al obtener rutas asignadas al operador" });
  }
};

const getDataFromTheCrThatAssignedRoute = async (req, res) => {
  const { idCr } = req.params;
  try {
    const data = await routesModel.getDataFromTheCrThatAssignedRoute(idCr);
    res.json(data);
  } catch (error) {
    console.error("Error al obtener datos del CR que asignó la ruta:", error);
    res
      .status(500)
      .json({ message: "Error al obtener datos del CR que asignó la ruta" });
  }
};

const getRouteAndCrData = async (req, res) => {
  const { idOperador, fecha } = req.params;
  try {
    // Obtener rutas asignadas al operador
    const [routes] = await routesModel.getRouteAssignedToOperator(
      idOperador,
      fecha
    );
    if (routes.length === 0) {
      return res.status(404).json({
        message:
          "No se encontraron rutas para el operador en la fecha especificada",
      });
    }

    // Suponiendo que el idCr está en el primer resultado de las rutas
    const idCr = routes[0].cr_que_registro;

    // Obtener datos del CR que asignó la ruta
    const [crData] = await routesModel.getDataFromTheCrThatAssignedRoute(idCr);

    res.json({ routes, crData });
  } catch (error) {
    console.error("Error al obtener datos de rutas y CR:", error);
    res.status(500).json({ message: "Error al obtener datos de rutas y CR" });
  }
};

const updateRutaUnitaria = async (req, res) => {
  const { idRuta } = req.params;
  const { lps, remisiones, zona } = req.body;
  try {
    const result = await routesModel.updateRutaUnitaria(
      idRuta,
      lps,
      remisiones,
      zona
    );
    res.json({ message: "Ruta unitaria actualizada correctamente", result });
  } catch (error) {
    console.error("Error al actualizar la ruta unitaria:", error);
    res.status(500).json({ message: "Error al actualizar la ruta unitaria" });
  }
};

const updateRutaOperador = async (req, res) => {
  const { idRutaOperador, idOperador } = req.body;
  try {
    const result = await routesModel.updateRutaOperador(
      idRutaOperador,
      idOperador
    );
    res.json({
      message: "Operador de la ruta actualizado correctamente",
      result,
    });
  } catch (error) {
    console.error("Error al actualizar el operador de la ruta:", error);
    res
      .status(500)
      .json({ message: "Error al actualizar el operador de la ruta" });
  }
};

const getRutasPorFechaWeb = async (req, res) => {
  const { fecha } = req.params;
  try {
    const rutas = await routesModel.getRutasPorFechaWeb(fecha);
    res.json(rutas);
  } catch (error) {
    console.error("Error al obtener rutas por fecha (web):", error);
    res.status(500).json({ message: "Error al obtener rutas por fecha (web)" });
  }
};

const getRutaOperadorDetalleWeb = async (req, res) => {
  const { idOperador } = req.params;
  try {
    const detalle = await routesModel.getRutaOperadorDetalleWeb(idOperador);
    res.json(detalle);
  } catch (error) {
    console.error(
      "Error al obtener detalle de ruta del operador (web):",
      error
    );
    res
      .status(500)
      .json({ message: "Error al obtener detalle de ruta del operador (web)" });
  }
};

module.exports = {
  getAllRoutes,
  getRouteInfo,
  getRouteAssignedToOperator,
  getDataFromTheCrThatAssignedRoute,
  getRouteAndCrData,
  updateRutaUnitaria,
  updateRutaOperador,
  getRutasPorFechaWeb,
  getRutaOperadorDetalleWeb,
};
