<template>
  <div class="produto">
    <div class="container">
      <h4>Cadastro de Produtos</h4>

      <form class="row g-3" @submit.prevent="salvar">
        <div class="col-md-4">
          <label class="form-label">Nome do Produto</label>
          <input type="text" class="form-control" v-model="produto.nome" required />
        </div>
        <div class="col-md-3">
          <label class="form-label">Quantidade</label>
          <input type="number" class="form-control" v-model="produto.quantidade" required />
        </div>
        <div class="col-md-3">
          <label class="form-label">Valor</label>
          <input type="text" class="form-control" v-model="produto.valor" required />
        </div>
        <div class="col-md-2">
          <label class="form-label">Categoria</label>
          <input type="text" class="form-control" v-model="produto.categoria_id" required />
        </div>
        <div class="col-md-12">
          <label class="form-label">Descrição do Produto</label>
          <textarea class="form-control" rows="3" v-model="produto.descricao" required></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-success" type="submit">Enviar</button>
        </div>
      </form>
    </div>

    <div class="container mt-4">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Descricao</th>
            <th scope="col">Categoria</th>
            <th scope="col">Valor</th>
            <th scope="col">Quantidade</th>
            <th scope="col"> Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto of produtos" :key="produto.id">
            <th>{{ produto.id }}</th>
            <th>{{ produto.nome }}</th>
            <td>{{ produto.descricao }}</td>
            <td>{{ produto.categoria_id }}</td>
            <td>{{ produto.valor }}</td>
            <td>{{ produto.quantidade }}</td>
            <td><button @click="editar(produto)" type="button" class="btn btn-primary btn-sm">Editar</button></td>
            <td><button @click="remover(produto)" type="button" class="btn btn-danger btn-sm">Apagar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Produto from "../services/Produtos";
export default {
  data() {
    return {
      produto: {
        id: "",
        nome: "",
        descricao: "",
        categoria_id: "",
        valor: "",
        quantidade: "",
      },
      produtos: [],
    };
  },

  mounted() {
    this.listar()
  },

  methods: {
    listar() {
      Produto.listaProdutos().then((resposta) => {
        console.log(resposta.data);
        this.produtos = resposta.data;
      });
    },

    salvar() {
      if (!this.produto.id) {
        Produto.salvarProdutos(this.produto).then((resposta) => {
          this.produto = {}
          console.log(resposta);
          alert('Produto cadastrado!');
          this.listar()
        });
      } else {
        Produto.atualizaProduto(this.produto, this.produto.id).then((resposta) => {
          this.produto = {}
          console.log(resposta);
          alert('Atualizado com sucesso!');
          this.listar()
        });
      }
    },

    editar(produto){
      this.produto = produto
    },

    remover(produto){
      if (confirm('Deseja realmente excluir o produto?')) {
        Produto.removeProduto(produto.id).then(resposta => {
          alert('Produto removido')
          this.listar()
          console.log(resposta)
        })
      }
    }
  },
};
</script>
