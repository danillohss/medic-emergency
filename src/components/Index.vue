<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 p">
          <profissionais />
        </div>

        <div class="col-6">
          <equipamentos />
        </div>
      </div>

      <div class="row mt-5 mb-5 bg-light p-2">
        <div class="col">
          <configuracao-equipe />
        </div>
      </div>

      <div class="row mt-5 mb-5">
        <div class="col">
          <equipes />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfiguracaoEquipe from "./ConfiguracaoEquipe.vue";
import Equipamentos from "./Equipamentos.vue";
import Equipes from "./Equipes.vue";
import Navbar from "./Navbar.vue";
import Profissionais from "./Profissionais.vue";
import api from "../service/api";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "INDEX",
  components: {
    ConfiguracaoEquipe,
    Equipamentos,
    Equipes,
    Profissionais,
    Navbar,
  },
  props: {
    msg: String,
  },
  methods: {
    ...mapMutations(["setEnfermeiros", "setSocorristas", "setMedicos"]),
    ...mapActions([
      "adicionarAmbulancias",
      "adicionarKitsMedicos",
      "adicionarTelefones",
    ]),
    async getEnfermeiros() {
      const response = await api.get("/enfermeiros");
      this.$store.commit("setEnfermeiros", response.data);
    },
    async getSocorristas() {
      const response = await api.get("/socorristas");
      this.$store.commit("setSocorristas", response.data);
    },
    async getMedicos() {
      const response = await api.get("/medicos");
      this.$store.commit("setMedicos", response.data);
    },
  },
  async created() {
    this.adicionarAmbulancias("adicionarAmbulancias");
    this.adicionarKitsMedicos("adicionarKitsMedicos");
    this.adicionarTelefones("adicionarTelefones");
    this.getEnfermeiros();
    this.getSocorristas();
    this.getMedicos();
  },
};
</script>


