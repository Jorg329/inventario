import { Connection } from "promise-mysql"
import getConnection from "../db/database.js"
const getCategorias =  async (req, res)=>{
    try {
        const connetion =  await getConnection();
    const result =  await connetion.query("SELECT CategoriaID, CategoriaNombre, Descripcion,Imagen FROM categorias")
   res.json(result);
    } catch (error) {
        console.error("ERROR 500");
        
    }

}
export const methodHTTP = {
    getCategorias
}