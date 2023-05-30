<template>
  <div>
    Lista Itens {{ tipo }}
    <hr />
    <item v-for="(item, index) in itens" :key="index" :dados="item" />
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import { mapState } from "vuex";
export default {
  name: "LISTAITENS",
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
          return this.$store.getters.filtroSocorristaTurno;
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