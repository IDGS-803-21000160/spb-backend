const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const routeRegistrationRoutes = require("./routes/routesRoutes");
const routesRoutesConsult = require("./routes/routesRoutesConsult");
const inicioRutaRoutes = require("./routes/routeIniciarRuta");
const routesFinRuta = require("./routes/routesFinRuta");


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/routes", routeRegistrationRoutes);
app.use("/api/consult", routesRoutesConsult);
app.use("/api/inicioRuta", inicioRutaRoutes);
app.use("/api/finRuta", routesFinRuta);  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
