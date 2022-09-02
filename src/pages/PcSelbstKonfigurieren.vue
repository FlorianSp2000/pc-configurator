<template>

  <div class="PcselbstKonfigurieren">
    <h1> PC hier Selber konfigurieren</h1>

    <div class="table-responsive-sm">
      <table class="table">
        <tbody>
        <tr>
          <th scope="row"><router-link to="/"> CPU </router-link> </th>
          <td><button type="button" class="btn btn-primary">+ Wähle CPU</button> </td>

        </tr>
        <tr>
          <th scope="row"><router-link to="/"> Mainboard </router-link></th>
          <td ><button type="button" class="btn btn-primary">+ Wähle Mainboard </button> </td>
        </tr>

        <tr>
          <th scope="row"><router-link to="/"> Ram </router-link></th>
          <td >+ Wähle Ram</td>
        </tr>
        <tr>
          <th scope="row"><router-link to="/"> Gehäuse </router-link></th>
          <td >+ Wähle Gehäuse</td>
        </tr>
        <tr>
          <th scope="row"><router-link to="/">CPU-Kühler</router-link></th>
          <td >+ Wähle CPU-Kühler </td>
        </tr>
        <tr>
          <th scope="row"><router-link to="/"> Netzteil</router-link></th>
          <td >+ Wähle Netzteil</td>
        </tr>
        <tr>
          <th scope="row"><router-link to="/"> Grafikkarte</router-link></th>
          <td >+ Wähle Grafikkarte </td>
        </tr>
        <tr>
          <th scope="row"><router-link to="/"> Festplatte</router-link></th>
          <td >+ Wähle Festplatte</td>
        </tr>

        </tbody>

      </table>
    </div>
  </div>

</template>

<script>

export default {
  name: "PcSelbstKonfigurieren",
};

</script>

<style scoped>
.table-responsive-sm {
  text-align:left;
}
th{
  color:dodgerblue;

  text-decoration: underline;
}


</style>