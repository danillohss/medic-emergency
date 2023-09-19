<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Enfermeiro</th>
        <th scope="col">Socorrista</th>
        <th scope="col">Médico</th>
        <th scope="col">Veículo</th>
        <th scope="col">Deletar</th>
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
        <td>
          <i
            class="bi bi-trash3"
            style="cursor: pointer"
            @click="excluirEquipe(dados)"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
  <script>
import api from "@/service/api";
export default {
  name: "LISTAEQUIPES",
  props: { dados: Object },
  methods: {
    async excluirEquipe(equipe) {
      const confirmar = window.confirm(
        `Tem certeza que deseja excluir a equipe de ID Nº ${equipe.id} ?`
      );
      if (confirmar) {
        await api.delete(`/equipesMontadas/${equipe.id}`);
        window.location.reload();
      }
    },
  },
};
</script>
