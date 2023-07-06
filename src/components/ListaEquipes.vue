<template>
  <div>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(equipe, index) in equipes"
        :key="index"
      >
        <Equipe :dados="equipe"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Equipe from "@/components/Equipe";
import { mapState } from "vuex";

export default {
  name: "LISTAEQUIPES",
  components: {
    Equipe,
  },
  computed: {
    ...mapState({
      equipes: (state) => state.equipes,
    }),
  },
};
</script>