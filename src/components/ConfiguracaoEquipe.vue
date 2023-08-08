<template>
  <div>
    <div class="row">
      <div class="col">
        <h3 style="color: rgb(219, 31, 31)">
          <i class="bi-boxes me-2"></i>Configuração da equipe
        </h3>
        <br />
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <p>
          Enfermeiro: <strong>{{ equipe.enfermeiro }}</strong>
        </p>
        <p>
          Socorrista: <strong>{{ equipe.socorrista }}</strong>
        </p>
        <p>
          Médico: <strong>{{ equipe.medico }}</strong>
        </p>
        <p>
          Carro: <strong>{{ equipe.ambulancia }}</strong>
        </p>
        <p>
          Kit Médico:
          <strong>{{ equipe.kitMedico }}</strong>
        </p>
      </div>
      <div class="col-4 text-center">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src="
                require(`@/assets/ambulancias/${this.imgTipoAmbulancia}.png`)
              "
            />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button
              type="button"
              class="btn btn-danger"
              style="margin: 0 15px"
              @click="limparEquipe"
            >
              Limpar Equipe
            </button>
            <button type="button" class="btn btn-primary" @click="montarEquipe">
              Montar equipe
            </button>
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
  computed: {
    ...mapState({
      kitMedico: (state) => state.equipe.kitMedico,
      ambulancia: (state) => state.equipe.ambulancia,
      equipe: (state) => state.equipe,
      equipes: (state) => state.equipes,
    }),
    imgTipoAmbulancia() {
      if (this.kitMedico) {
        return "uti";
      }
      if (this.ambulancia) {
        return "simples";
      }
      return "indefinida";
    },
  },
  methods: {
    limparEquipe() {
      this.$store.commit("limparEquipe");
    },
    montarEquipe() {
      let equipe = Object.assign({}, this.equipe);
      this.$store.commit("adicionarEquipe", equipe);
    },
  },
};
</script>
