<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>
          Enfermeiro: <strong>{{ equipe.enfermeiros }}</strong>
        </p>
        <p>
          Socorrista: <strong>{{ equipe.socorristas }}</strong>
        </p>
        <p>
          Médico: <strong>{{ equipe.medico }}</strong>
        </p>
        <p>
          Carro: <strong>{{ equipe.ambulancia }}</strong>
        </p>
        <p>
          Telefone: <strong>{{ equipe.telefone }}</strong>
        </p>
        <p>
          Kit de reanimação:
          <strong>{{ equipe.kitMedico }}</strong>
        </p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="require('@/assets/ambulancias/indefinida.png')"
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="button" class="btn btn-primary">Montar equipe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapState } from "vuex";
export default {
  name: "CONFIGURACAOEQUIPE",
  computed: {
    equipe() {
      return this.$store.state.equipe;
    },
  },
};
</script>
