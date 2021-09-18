import { http } from "./config";

export default {
     listaCategorias: () => {
          return http.get("/categorias");
     },

     salvaCategoria: (categoria) => {
          return http.post("/categorias", categoria);
     },

     atualizaCategoria: (categoria, id) => {
          return http.put("/categorias/" + id, categoria);
     },

     removeCategoria: (id) => {
          return http.delete("/categorias/" + id);
     },
};
