<template>
  <div class="Uebersicht">
    <br><br>
    <h1> Hier Fertige PCs</h1>
    <br><br>
  </div>


  <select class="form-select" v-model="selectedPC" >
    <option selected> Wählen Sie einen vorkonfigurierten PC </option>
    <option value="4KIHE">4K Gaming PC -INTEL</option>
    <option value="4KAHE">2K Gaming PC - Intel</option>
    <option value="3">2K Gaming PC -AMD</option>
    <option value="4">Flugsimulator</option>
    <option value="5">Mittlere Bereich HD Gaming PC- Intel</option>
    <option value="6">Mittlere Bereich HD Gaming PC- AMD</option>
  </select>
  <br><br><br>
  <div class="card">

  <div class="specifications" v-if="specification">

    <div class="specifications__title">
          {{ specification.title}}
    </div>
    <div class="specifications__description">
{{specification.description}}
    </div>

    <div class="specifications__details">
      hier details
      <div class="specifications__label">
hier label ?

      </div>
      <div class="specifications__value">
        CPU: {{ specification.cpu}}

      </div>

    </div>
  </div>


  </div>

</template>


<script setup>

import {
  ref, watch
} from "vue";
let selectedPC=ref(0)
let pcs=ref(null)

pcs.value={
  "4KIHE": {
    "description":"Dieser PC fliegt wie eine Rakete. ",
    "title": "4K Gaming PC - INTEL",
    "cpu": "Intel Core i9-1200K",
  },
  "4KAHE": {
    "title": "4K Gaming PC- AMD",
    "cpu": "AMD CPU",
  }


}
let specification=ref(null)
specification.value= pcs.value[selectedPC.value]


watch(() => selectedPC.value, () => {
  console.log("selected",selectedPC),
  console.log("pc",pcs.value["4KIHE"]),
  specification.value= pcs.value[selectedPC.value]

});

</script>


<style scoped>


</style>