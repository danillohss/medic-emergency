<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">{{
        $store.state.titulo
      }}</router-link>
      <router-link class="navbar-brand" to="/cadastrar">{{
        $store.state.cadastro
      }}</router-link>
    </div>
  </nav>
</template>
  
  <script>
export default {
  name: "NAVBAR",
};
</script>