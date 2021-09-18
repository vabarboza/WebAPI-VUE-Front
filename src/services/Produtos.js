import { http } from "./config";

export default {
     listaProdutos: () => {
          return http.get("/produtos");
     },

     salvarProdutos: (produto) => {
          return http.post("/produtos", produto);
     },

     atualizaProduto: (produto, id) => {
          return http.put("/produtos/" + id, produto);
     },

     removeProduto: (id) => {
          return http.delete("/produtos/" + id);
     },

     listarCategorias: () => {
          return http.get("/categorias");
     },
};
