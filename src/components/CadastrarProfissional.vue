<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Cadastre um profissional</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Tipo do profissional</label>
        <select class="form-select" aria-label="Default select example">
          <option value="enfermeiro">Enfermeiro</option>
          <option value="medico">Médico</option>
          <option value="socorrista">Socorrista</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Nome</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" />
        </div>
      </div>
      <div class="col">
        <label class="form-label">Turno</label>
        <select class="form-select">
          <option value="12x36">12x36</option>
          <option value="24x48">24x48</option>
        </select>
      </div>
      <div class="col">
        <label class="form-label">Informe o documento do profissional</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col">
        <label class="form-label">Contato</label>
        <input type="number" class="form-control" />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button
          type="submit"
          class="btn btn-primary"
          @click="console.log('teste')"
        >
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CadastrarProfissional",
  data() {
    return {
      teste: null,
    };
  },
};
</script>