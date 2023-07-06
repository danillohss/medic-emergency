<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ListaItens tipo="equipes-montadas" />
        <ListaEquipes />
      </div>
    </div>
  </div>
</template>

<script>
import ListaItens from "@/components/ListaItens";
import ListaEquipes from "@/components/ListaEquipes";

export default {
  name: "EQUIPES",
  components: {
    ListaItens,
    ListaEquipes,
  },
};
</script>