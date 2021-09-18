<template>
  <div class="categoria">
    <div class="container">
      <h4>Cadastro de Categorias</h4>

      <form class="row g-3" @submit.prevent="salvar">
        <div class="col-md-4">
          <label class="form-label">Nome da Categoria</label>
          <input type="text" class="form-control" v-model="categoria.titulo" required />
        </div>
        <div class="col-md-12">
          <label class="form-label">Descrição da Categoria</label>
          <textarea class="form-control" rows="3" v-model="categoria.descricao" required></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-success" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>

  <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Descricao</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria of categorias" :key="categoria.id">
          <th>{{ categoria.id }}</th>
          <th>{{ categoria.titulo }}</th>
          <td>{{ categoria.descricao }}</td>
          <td>
            <button @click="editar(categoria)" type="button" class="btn btn-primary btn-sm">Editar</button> |
            <button @click="remover(categoria)" type="button" class="btn btn-danger btn-sm">Apagar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Categorias from "../services/Categorias";
export default {
  data() {
    return {
      categoria: {
        id: "",
        titulo: "",
        descricao: "",
      },
      categorias: [],
    };
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Categorias.listaCategorias().then((resposta) => {
        console.log(resposta.data);
        this.categorias = resposta.data;
      });
    },

    salvar() {
      if (!this.categoria.id) {
        Categorias.salvaCategoria(this.categoria).then((resposta) => {
          this.categoria = {};
          console.log(resposta);
          alert("Categoria cadastrada!");
          this.listar();
        });
      } else {
        Categorias.atualizaCategoria(this.categoria, this.categoria.id).then(
          (resposta) => {
            this.categoria = {};
            console.log(resposta);
            alert("Atualizado com sucesso!");
            this.listar();
          }
        );
      }
    },

    editar(categoria) {
      this.categoria = categoria;
    },

    remover(categoria) {
      if (confirm("Deseja realmente excluir a categoria?")) {
        Categorias.removeCategoria(categoria.id).then((resposta) => {
          alert("Categoria removida!");
          this.listar();
          console.log(resposta);
        });
      }
    },
  },
};
</script>