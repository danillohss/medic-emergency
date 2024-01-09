<template>
  <div>
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
              @click="mostrarDescricao(dados)"
              class="bi bi-info-circle"
              style="cursor: pointer"
              :data-bs-toggle="'modal'"
              :data-bs-target="'#exampleModal-' + dados.id"
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
    <div v-for="dadosItem in listaDados" :key="dadosItem.id">
      <div
        class="modal fade"
        :id="'exampleModal-' + dadosItem.id"
        tabindex="-1"
        :aria-labelledby="'exampleModalLabel-' + dadosItem.id"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" :id="'exampleModalLabel-' + dadosItem.id">
                Descrição
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" v-if="dadosItem.descricao">{{ dadosItem.descricao }}</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                OK
              </button>
            </div>
          </div>
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
      listaDados: [this.dados],
    };
  },
  methods: {
    ...mapMutations({
      setItemEquipe: "setItemEquipe",
      setItemEquipeVerificacao: (commit, payload) => {
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
    mostrarDescricao(dados) {
      this.listaDados[0] = { ...dados };
    },
  },
};
</script>