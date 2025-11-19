import { Router } from "express";
/*Creamos el enrutador */
import { methodHTTP as categoriasController} from "../controllers/categorias.controllers.js";
const router = Router();

/*configuramos respuesta server metodo http get*/
router.get("/", categoriasController.getCategorias)

/*lo hacemos visible*/
export default router;