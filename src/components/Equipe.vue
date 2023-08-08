<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col" v-if="dados.enfermeiro">Enfermeiro</th>
      <th scope="col" v-if="dados.socorrista">Enfermeiro</th>
      <th scope="col" v-if="dados.medico">Médico</th>
      <th scope="col" v-if="dados.ambulancia">Placa do veículo</th>
      <th scope="col" v-if="dados.kit">Nº Kit médico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>{{ dados.id }}</th>
      <td v-if="dados.enfermeiro">{{ dados.enfermeiro }}</td>
      <td v-if="dados.socorrista">{{ dados.socorrista }}</td>
      <td v-if="dados.medico">{{ dados.medico }}</td>
      <td v-if="dados.ambulancia">{{ dados.ambulancia }}</td>
      <td v-if="dados.kit">{{ dados.kit }}</td>
    </tr>
  </tbody>
</table>
</template>
  
  <script>
export default {
  name: "LISTAEQUIPES",
  props: { dados: Object },
};
</script>

