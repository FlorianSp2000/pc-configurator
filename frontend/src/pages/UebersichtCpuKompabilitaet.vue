<template>
  <div class="Uebersicht">
    <h2 :style="{marginTop: ['20px']}">Übersicht der CPU Kompabilitäten</h2>
    <br><br>
    <img alt="bla" :src="'/table_amd.jpeg'">
    <img alt="bla" :src="'/table_intel.jpeg'">
  </div>
</template>


<script>

export default {
  name: "UebersichtCpu",
};

</script>

<style scoped>
img {
  width: 60vw;
}

@media (max-width: 700px){
img {
  width: 80vw;
}
}

</style>