// 1.IMPORTS
// 1.1 librerias npm
const express = require("express")
const cors = require("cors");
// 1.2 documentos del proyecto
const { connectMongo } = require('./src/data/mongo')
// 1.3 las rutas:
const anuncioRouter = require('./src/api/routes/anuncio.routes');
const guardianRouter = require('./src/api/routes/guardian.routes');
const maletaRouter = require('./src/api/routes/maleta.routes');
const reservaRouter = require('./src/api/routes/reservas.routes');
const tarifaRouter = require('./src/api/routes//tarifa.routes');
const ubicacionRouter = require('./src/api/routes/ubicacion.routes');
const usuarioRouter = require('./src/api/routes/usuario.routes');
const fichaRouter = require("./src/api/routes/ficha.routes");
const { notFoundHandler, errorHandler } = require('./src/api/middleware/error.middleware');


require("dotenv").config();
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectMongo();



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// 2.3 cors 
app.use(cors()); // no hay restricciones
/*
 * La linea inferior sería un ejemplo de uso de cors, en el que solo
 * permitimos peticiones de esas dos direcciones IP
 * Este concepto se conoce como whitelisting
 */
/* app.use(cors({
  origin: ['http://localhost:3002'
})); */

// 3. ENDPOINTS

// 3.1 endpoint
app.get("/", (req, res) => {
    res.send("Server is up");
});
// 3.2 las rutas
app.use('/anuncio', anuncioRouter);
app.use('/guardian', guardianRouter);
app.use('/ficha', fichaRouter);
app.use('/maleta', maletaRouter);
app.use('/reserva', reservaRouter);
app.use('/tarifa', tarifaRouter);
app.use('/ubicacion', ubicacionRouter);
app.use('/usuarios', usuarioRouter);


// 4. MANEJO DE ERRORES
app.use(notFoundHandler);
app.use(errorHandler);


// 5. "ARRANCA" EL SERVIDOR
app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`);
});