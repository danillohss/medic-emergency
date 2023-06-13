<template>
  <div>
    <div v-if="tipo == 'socorristas'">
      <select class="form-control form-control-sm" v-model="turno">
        <option value="">Todos</option>
        <option value="manha">Manhã</option>
        <option value="tarde">Tarde</option>
        <option value="noite">Noite</option>
      </select>
    </div>
    <hr />
    <item v-for="(item, index) in itens" :key="index" :dados="item" />
  </div>
  <div v-if="tipo == 'socorristas'">
    Total: ({{ $store.getters.totalSocorristasPorTurno(turno) }})
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapState } from "vuex";
export default {
  name: "LISTAITENS",
  data: () => ({
    turno: "",
  }),
  components: {
    Item,
  },
  props: {
    tipo: String,
  },
  computed: {
    ...mapState({
      enfermeiros: (state) => state.enfermeiros,
      medicos: (state) => state.medicos,
      equipamentos: (state) => state.equipamentos,
      ambulancias: (state) => state.equipamentos.ambulancias,
      kitsMedicos: (state) => state.equipamentos.kitsMedicos,
      telefones: (state) => state.equipamentos.telefones,
    }),
    itens() {
      switch (this.tipo) {
        case "enfermeiros":
          return this.enfermeiros;
        case "socorristas":
          return this.$store.getters.filtroSocorristaTurno(this.turno);
        case "medicos":
          return this.medicos;
        case "ambulancias":
          return this.ambulancias;
        case "kits-medicos":
          return this.kitsMedicos;
        case "telefones":
          return this.telefones;
      }
      return [];
    },
  },
};
</script>