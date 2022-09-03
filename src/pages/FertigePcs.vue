<template>
  <div class="Uebersicht">
    <br><br>
    <h1> Durchstöbere bereits fertige Konfigurationen</h1>
    <br><br>
  </div>


  <select class="form-select" v-model="selectedPC" >
    <option value="0"> Wählen Sie einen vorkonfigurierten PC </option>
    <option value="4KIHE">4K Gaming PC -INTEL</option>
    <option value="4KAHE">2K Gaming PC - Intel</option>
    <option value="3">2K Gaming PC -AMD</option>
    <option value="4">Flugsimulator</option>
    <option value="5">Mittlere Bereich HD Gaming PC- Intel</option>
    <option value="6">Mittlere Bereich HD Gaming PC- AMD</option>
  </select>
  <br><br><br>

  <div class="specifications" v-if="specification">
    <ConfigurationDescription :name="specification.title" :description="specification.description" :cpu="specification.cpu"
              :gpu="specification.gpu" :ram="specification.ram" :mainboard="specification.mainboard">
    </ConfigurationDescription>

  </div>



</template>


<script setup>
import ConfigurationDescription from "@/components/ConfigurationDescription";

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
    "gpu": "Nvidia RTX 3080",
    "ram": "16 GB DDR4",
    "mainboard": "AMD"
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
  //console.log("pc",pcs.value["4KIHE"]),
  specification.value= pcs.value[selectedPC.value]

});

</script>


<style scoped>


</style>