<template>
<nav class="navbar navbar-expand-lg navbar-dark">
<div class="container">
  <router-link to="/"  class="navbar-brand">PC-Konfigurator</router-link>
  <div class="collapse navbar-collapse" id="navBarNav">
    <ul class="navbar-nav me-3">
      <li class="nav-item active">
        <router-link to="/auth"  class="navbar-brand router-link-style">Login</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/auth"  class="navbar-brand router-link-style">Registrierung</router-link>
      </li>
    </ul>
</div>
</div>
</nav>
</template>

<script>

export default {
  name: "UpperNavbar",
};

</script>

<style scoped>

.router-link-style {
  color: rgba(255,255,255,0.5) !important;
}
.router-link-style:hover {
  color: rgba(255,255,255, 0.99) !important;
}
.container{
  background-color: #141a1f;
  display:flex;
  justify-content: space-between;
  max-width: 100vw;
}
.container > div {
  flex-direction: row-reverse;
}
.navbar-expand-lg{
  padding-bottom: 0;
}
ul > li {
  display: flex;
}

</style>