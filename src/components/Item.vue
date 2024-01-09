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
              @click="mostrarDescricao(dados.descricao)"
              class="bi bi-info-circle"
              style="cursor: pointer"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
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
  <!-- Modal -->
  <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Descrição
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="limparDescricao"
            ></button>
          </div>
          <div class="modal-body" v-if="descricao">{{ descricao }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="limparDescricao"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
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

  data() {
    return {
      descricao: "", // inicialize a propriedade descricao
    };
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
    mostrarDescricao(descricao) {
      this.descricao = descricao;
    },
    limparDescricao() {
      this.descricao = "";
    },
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