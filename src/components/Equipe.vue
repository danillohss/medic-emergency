<template>
  <div class="row">
    <div class="col-2" v-text="dados.enfermeiro"></div>
    <div class="col-2" v-text="dados.socorrista"></div>
    <div class="col-2" v-text="dados.medico"></div>
    <div class="col-2" v-text="dados.ambulancia"></div>
    <div class="col-2" v-text="dados.telefone"></div>
    <div class="col-2" v-text="dados.kitMedico"></div>
  </div>
</template>
  
  <script>
export default {
  name: "LISTAEQUIPES",
  props: { dados: Object },
};
</script>