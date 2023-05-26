<template>
  <div>
    Lista Itens {{ tipo }}
    <hr />
    <item v-for="(item, index) in itens" :key="index" :dados="item"/>
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
      socorristas: (state) => state.socorristas,
      medicos: (state) => state.medicos,
      equipamentos: (state) => state.equipamentos,
    }),
    itens() {
      switch (this.tipo) {
        case "enfermeiros":
          return this.enfermeiros;
        case "socorristas":
          return this.socorristas;
        case "medicos":
          return this.medicos;
      }
      return [];
    },
  },
};
</script>