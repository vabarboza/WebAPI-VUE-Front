<template>
  <div class="produto">
    <div class="container">
      <h4>Cadastro de Produtos</h4>

      <form class="row g-3">
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label"
            >Nome do Produto</label
          >
          <input type="text" class="form-control" required />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Quantidade</label>
          <input type="number" class="form-control" required />
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">Valor</label>
          <input type="text" class="form-control" required />
        </div>
        <div class="col-md-12">
          <label for="validationDefault03" class="form-label"
            >Descrição do Produto</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-success" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>
