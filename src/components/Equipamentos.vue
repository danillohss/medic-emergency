<template>
  <div>
    <div class="row">
      <div class="col">
        <h5><i class="bi-bag me-2"></i>Equipamentos</h5>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'equipamentos', params: { tipo: 'ambulancias' } }"
              >Ambulancias({{ $store.getters.totalAmbulancias }})</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'equipamentos', params: { tipo: 'telefones' } }"
              >Telefones({{ $store.getters.totalTelefones }})</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :to="{ name: 'equipamentos', params: { tipo: 'kits-medicos' } }"
              >Kits Médicos({{ $store.getters.totalKits }})</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span><router-view name="equipamentos" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EQUIPAMENTOS",
};
</script>