<template>
  <div class="container py-4">
    <div v-if="this.alerta" class="alert alert-success" role="alert">
      Equipamento cadastrado!
    </div>
    <div v-if="this.alerta == false" class="alert alert-danger" role="alert">
      Preencha os campos destacados com *
    </div>
    <div class="row">
      <div class="col">
        <h4>Cadastrar um equipamento</h4>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Tipo do equipamento *</label>
        <select
          class="form-select"
          aria-label="Default select example"
          v-model="equipamentoSelecionado"
        >
          <option value="" disabled selected>Selecione uma opção</option>
          <option value="ambulancias">Ambulancia</option>
          <option value="kits-medicos">Kit Médico</option>
        </select>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col" v-if="equipamentoSelecionado == 'ambulancias'">
        <label class="form-label">Modelo do veículo *</label>
        <div class="input-group mb-3">
          <select
            class="form-select"
            v-model="ambulancia.modelo"
            aria-label="Default select example"
          >
            <option value="" disabled selected>Selecione uma opção</option>
            <option value="ducato">Renault Ducato</option>
            <option value="master">Renault Master</option>
            <option value="sprinter">Mercedes Sprinter</option>
          </select>
        </div>
      </div>
      <div class="col" v-if="equipamentoSelecionado == 'ambulancias'">
        <label class="form-label">Placa do veículo *</label>
        <input
          v-maska="'AAA-####'"
          class="form-control"
          v-model="ambulancia.placa"
        />
      </div>
      <div class="col" v-if="equipamentoSelecionado == 'kits-medicos'">
        <label class="form-label">Identificação do kit *</label>
        <input class="form-control" v-maska="'AA-###'" v-model="kits.kit" />
      </div>
    </div>
    <div class="mb-3" v-if="equipamentoSelecionado == 'ambulancias'">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Adicione uma descrição opcional ao equipamento.</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="ambulancia.descricao"
      ></textarea>
    </div>
    <div class="mb-3" v-if="equipamentoSelecionado == 'kits-medicos'">
      <label for="exampleFormControlTextarea1" class="form-label"
        >Adicione uma descrição opcional ao equipamento.</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="kits.descricao"
      ></textarea>
    </div>
    <br />
    <div class="row mt-3">
      <div class="col">
        <button
          v-if="equipamentoSelecionado != ''"
          type="submit"
          class="btn btn-primary"
          @click="
            this.equipamentoSelecionado == 'ambulancias'
              ? cadastrarAmbulancia()
              : cadastrarKit()
          "
        >
          Cadastrar {{ equipamentoBotao }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import api from "@/service/api";
export default {
  name: "CadastrarEquipamentos",
  data() {
    return {
      equipamentoSelecionado: "",
      ambulancia: {
        tipo: "ambulancias",
        placa: "",
        modelo: "",
        descricao: "",
      },
      kits: {
        tipo: "kits-medicos",
        kit: "",
        descricao: "",
      },
      alerta: undefined,
    };
  },

  computed: {
    equipamentoBotao() {
      return this.equipamentoSelecionado == "ambulancias"
        ? "Ambulancia"
        : "Kit Médico";
    },
  },

  watch: {
    equipamentoSelecionado() {
      this.ambulancia.descricao = "";
      this.kits.descricao = "";
    },
  },

  methods: {
    ...mapMutations(["cadastroAmbulancia", "cadastroKit"]),
    cadastrar() {
      this.cadastroAmbulancia(this.ambulancia);
      this.cadastroKit(this.kits);
      this.equipamentoSelecionado == "ambulancias"
        ? this.cadastrarAmbulancia()
        : this.cadastrarKit();
    },
    async cadastrarAmbulancia() {
      if (this.ambulancia.placa == "" || this.ambulancia.placa == "") {
        this.alerta = false;
        setTimeout(() => (this.alerta = undefined), 3500);
      } else {
        const response = await api.post("/ambulancias", this.ambulancia);
        this.$store.commit("cadastroAmbulancia", response.data);
        this.alerta = true;
        this.limparForm();
        setTimeout(() => (this.alerta = undefined), 3500);
      }
    },
    async cadastrarKit() {
      if (this.kits.kit == "") {
        this.alerta = false;
        setTimeout(() => (this.alerta = undefined), 3500);
      } else {
        const response = await api.post("/kits-medicos", this.kits);
        this.$store.commit("cadastroKit", response.data);
        this.alerta = true;
        this.limparForm();
        setTimeout(() => (this.alerta = undefined), 3500);
      }
    },
    limparForm() {
      this.equipamentoSelecionado = "";
      this.ambulancia.placa = "";
      this.ambulancia.modelo = "";
      this.kits.kit = "";
    },
  },
};
</script>
  