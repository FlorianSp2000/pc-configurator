<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <div class="collapse navbar-collapse" id="navBarNavLow">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/FertigePcs"  class="nav-link">Fertige PCs</router-link>
          </li>
          <!--
          <li class="nav-item active">
            <router-link to="/PcSelbstKonfigurieren"  class="nav-link">PC Selbst Konfigurieren</router-link>
          </li>
          -->
          <li class="nav-item active">
            <router-link to="/UebersichtCpuKompabilitaet"  class="nav-link pl-0">Übersicht CPU Kompabilität </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "LowerNavbar",
};

</script>

<style scoped>
.container {
  background-color: #2c3e50;
}
.router-link-active {
  color: #fff !important;
  background: rgb(234,182,118,0.2)
;
}
.navbar-expand-lg{
  padding-bottom: 0;
  padding-top: 0;
}
.container {
  max-width: 100vw;
}
</style>