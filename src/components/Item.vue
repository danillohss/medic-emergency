<template>
  <table class="table">
    <tbody>
      <tr>
        <th>{{ dados.id }}</th>
        <td v-if="dados.nome">{{ dados.nome }}</td>
        <td v-if="dados.contato">{{ dados.contato }}</td>
        <td v-if="dados.turno">{{ dados.turno }}</td>
        <td v-if="dados.kit">{{ dados.kit }}</td>
        <td v-if="dados.modelo">{{ dados.modelo }}</td>
        <td v-if="dados.placa">{{ dados.placa }}</td>
        <td>
          <i
            class="bi-check2-square"
            style="cursor: pointer"
            @click="adcItemEquipe"
          ></i>
        </td>
        <td>
          <i
            class="bi bi-trash3"
            style="cursor: pointer"
            @click="excluirItem(dados)"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import api from "@/service/api";
import { mapMutations } from "vuex";
export default {
  name: "ITEM",
  props: {
    dados: Object,
    tipo: String,
  },
  methods: {
    ...mapMutations({
      setItemEquipe: "setItemEquipe",
      //evento commit para o vuex
      setItemEquipeVerificacao: (commit, payload) => {
        /*
          Camada de lógica, somente efetuar o commit com base em algumas condições por exemplo
        */
        commit("setItemEquipe", payload);
      },
    }),
    adcItemEquipe() {
      let item = {
        tipo: this.tipo,
        dados: this.dados,
      };
      this.setItemEquipeVerificacao(item);
    },
    async excluirItem(dados) {
      const confirmar = window.confirm(
        `Deseja realmente excluir o item ${dados.nome} ?`
      );
      if (confirmar) {
        await api.delete(`/${this.dados.tipo}/${this.dados.id}`);
        window.location.reload();
      }
    },
  },
};
</script>