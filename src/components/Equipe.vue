<template>
<table class="table">
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

