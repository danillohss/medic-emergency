<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Cadastrar um equipamento</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Tipo do equipamento</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="equipamentoSelecionado"
        >
          <option selected>Selecione...</option>
          <option value="ambulancia">Ambulancia</option>
          <option value="kit-medico">Kit Médico</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col" v-if="equipamentoSelecionado == 'ambulancia'">
        <label class="form-label">Modelo do veículo</label>
        <div class="input-group mb-3">
          <select
            class="form-select"
            v-model="modeloVeiculo"
            aria-label="Default select example"
          >
            <option selected>Selecione...</option>
            <option value="ducato">Renault Ducato</option>
            <option value="master">Renault Master</option>
            <option value="sprinter">Mercedes Sprinter</option>
          </select>
        </div>
      </div>
      <div class="col" v-if="equipamentoSelecionado == 'ambulancia'">
        <label class="form-label">Placa do veículo</label>
        <input type="number" class="form-control" />
      </div>
      <div class="col" v-if="equipamentoSelecionado == 'kit-medico'">
        <label class="form-label">Identificação do kit</label>
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
  name: "CadastrarEquipamentos",
  data() {
    return {
      equipamentoSelecionado: "Selecione...",
      modeloVeiculo: "Selecione...",
    };
  },
};
</script>