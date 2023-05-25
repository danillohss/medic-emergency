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
          Socorrista: <strong>{{ $store.state.team.rescuer }}</strong>
        </p>
        <p>
          Médico: <strong>{{ $store.state.team.doctor }}</strong>
        </p>
        <p>
          Carro: <strong>{{ $store.state.team.ambulance }}</strong>
        </p>
        <p>
          Telefone: <strong>{{ $store.state.team.phone }}</strong>
        </p>
        <p>
          Kit de reanimação:
          <strong>{{ $store.state.team.reanimationKit }}</strong>
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
import { mapState } from "vuex";
export default {
  name: "CONFIGURACAOEQUIPE",
  computed: mapState(["team"]),
};
</script>
