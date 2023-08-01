<template>
  <Navbar /><br />
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-file-person me-2"></i>Cadastrar</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastrar/profissional"
              >Cadastrar Profissional</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cadastrar/equipamento"
              >Cadastrar equipamentos</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
import Navbar from "./Navbar.vue";
export default {
  name: "CADASTRAR",
  components: {
    Navbar,
  },
};
</script>