<template>
<nav class="navbar navbar-expand-sm navbar-dark">
<div class="container">
  <router-link to="/"  class="navbar-brand">PC-Konfigurator</router-link>
  <div class="collapse navbar-collapse" id="navBarNav">
    <ul class="navbar-nav me-3">
      <li class="nav-item active">
      <a href="#"  class="nav-link">Login</a>
      </li>
      <li class="nav-item active">
        <a href="#"  class="nav-link">Register</a>
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
.container{
  background-color: #141a1f;
  display:flex;
  justify-content: space-between;
}
.container > div {
  flex-direction: row-reverse;
}
.navbar-expand-sm{
  padding-bottom: 0;
}

</style>