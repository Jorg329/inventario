import express from "express";
import cors from "cors"
 /* importamos al framework express*/ 
import categoriaRoutes from "./routes/categorias.routes.js"
 /* aisgnamos a app toda la funcionalidad para el server web */

 const app = express();

/* setear un puerto a mi web server*/
app.set("port",5000)

app.use(cors());
/* routes*/
app.use("/api/categorias", categoriaRoutes)


/* hacemos disponible a ni server app para toda la aplicacion */
export default app;

