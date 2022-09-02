<link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
<template>
  <div>
    <TheNavbar></TheNavbar>
    <TheNavbar2></TheNavbar2>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>

</template>

<script>
import TheNavbar2 from "@/components/TheNavbar2";
import TheNavbar from "@/components/TheNavbar";


export default {
  name: 'App',
  components: {
    TheNavbar2, TheNavbar,
  },
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "@fortawesome/fontawesome-free/css/all.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
