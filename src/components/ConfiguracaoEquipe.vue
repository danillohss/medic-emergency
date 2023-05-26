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
          Enfermeiro: <strong>{{ team.nurse }}</strong>
        </p>
        <p>
          Socorrista: <strong>{{ team.rescuer }}</strong>
        </p>
        <p>
          Médico: <strong>{{ team.doctor }}</strong>
        </p>
        <p>
          Carro: <strong>{{ team.ambulance }}</strong>
        </p>
        <p>
          Telefone: <strong>{{ team.phone }}</strong>
        </p>
        <p>
          Kit de reanimação:
          <strong>{{ team.reanimationKit }}</strong>
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
    team() {
      return this.$store.state.team;
    },
  },
};
</script>
