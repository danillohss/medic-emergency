<template>
  <div class="container py-4">
    <div v-if="this.alerta" class="alert alert-success" role="alert">
      Profissional cadastrado!
    </div>
    <div v-if="this.alerta == false" class="alert alert-danger" role="alert">
      Preencha os campos destacados com *
    </div>
    <div class="row">
      <div class="col">
        <h4>Cadastre um profissional</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Tipo do profissional *</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="profissional.tipo"
        >
          <option value="enfermeiros">Enfermeiro</option>
          <option value="medicos">Médico</option>
          <option value="socorristas">Socorrista</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Nome completo *</label>
        <div class="input-group mb-3">
          <input type="text" class="form-control" v-model="profissional.nome" />
        </div>
      </div>
      <div class="col">
        <label class="form-label">Turno *</label>
        <select class="form-select" v-model="profissional.turno">
          <option value="12x36">12x36</option>
          <option value="24x48">24x48</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>
      <div class="col">
        <label class="form-label">Informe o documento do profissional *</label>
        <input
          class="form-control"
          v-model="profissional.documento"
          v-maska="'####'"
        />
      </div>
      <div class="col">
        <label class="form-label">Contato *</label>
        <input
          class="form-control"
          v-model="profissional.contato"
          v-maska="'(##) # ####-####'"
        />
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="atualizarTipo">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api";
import {
  mapMutations,
  //, mapActions
} from "vuex";
export default {
  name: "CadastrarProfissional",
  data() {
    return {
      alerta: undefined,
      profissional: {
        tipo: "",
        nome: "",
        turno: "",
        documento: "",
        contato: "",
      },
    };
  },
  methods: {
    ...mapMutations(["cadastroProfissional"]),
    atualizarTipo() {
      this.cadastroProfissional(this.profissional);
      this.cadastrarProfissional();
    },
    async cadastrarProfissional() {
      if (
        this.profissional.tipo == "" ||
        this.profissional.nome == "" ||
        this.profissional.turno == "" ||
        this.profissional.documento == "" ||
        this.profissional.contato == ""
      ) {
        this.alerta = false;
        setTimeout(() => this.alerta = undefined, 3500)
      } else {
        let tipo = this.profissional.tipo;
        console.log(this.profissional.tipo);
        const response = await api.post(`/${tipo}`, this.profissional);
        this.$store.commit("cadastroProfissional", response.data);
        this.alerta = true;
        setTimeout(() => this.alerta = undefined, 3500)
        this.limparForm();
      }
    },
    limparForm() {
      this.profissional.tipo = "";
      this.profissional.nome = "";
      this.profissional.turno = "";
      this.profissional.documento = "";
      this.profissional.contato = "";
    },
  },
};
</script>