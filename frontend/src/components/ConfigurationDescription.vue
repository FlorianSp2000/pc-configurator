<template>

  <div class="description-container">
    <h3 v-if="name != ''">{{ name }}</h3>
    <h3 v-else>Deine Konfiguration 001</h3>
    <p class="description-text">{{ description }}</p>
    <table class="table table-borderless">
      <tbody>
      <tr>
        <th scope="row">CPU</th>
        <td><span> {{ cpu }} </span><sup><a target="_blank" v-bind:href="`https://www.amazon.de/s?k=${cpu}`"><img alt="b" :src="'/amazon_icon.svg'"></a></sup></td>

      </tr>
      <tr>
        <th scope="row">GPU</th>
        <td><span> {{ gpu }} </span><sup><a target="_blank" v-bind:href="`https://www.amazon.de/s?k=${cpu}`"><img alt="b" :src="'/amazon_icon.svg'"></a></sup></td>
      </tr>
      <tr>
        <th scope="row">RAM</th>
        <td colspan="2"><span> {{ ram }} </span><sup><a target="_blank" v-bind:href="`https://www.amazon.de/s?k=${cpu}`"><img alt="b" :src="'/amazon_icon.svg'"></a></sup></td>
      </tr>
      <tr>
        <th scope="row">Mainboard</th>
        <td colspan="2"><span> {{ mainboard }} </span><sup><a target="_blank" v-bind:href="`https://www.amazon.de/s?k=${cpu}`"><img alt="b" :src="'/amazon_icon.svg'"></a></sup></td>
      </tr>
      <tr>
        <th scope="row">Festplatte</th>
        <td colspan="2"><span> {{ disk_storage }} </span><sup><a target="_blank" v-bind:href="`https://www.amazon.de/s?k=${cpu}`"><img alt="b" :src="'/amazon_icon.svg'"></a></sup></td>
      </tr>

      </tbody>
    </table>
    <div class="align-text-button">
      <div>
        <p class="price-text" v-show="price != undefined"> {{ price }}€</p>
        <button type="button" class="btn btn-outline-warning" v-show="price == undefined">
          <a target="_blank" v-bind:href="`https://pcbuilder.net/?s=${cpu}`">Kompatibilitätscheck</a>
        </button>
      </div>
      <div>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary" v-show="price != undefined">Komponenten ändern</button>
          <button type="button" class="btn btn-light">Konfiguration speichern</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  props: [
    'name',
      'description',
      'cpu',
      'gpu',
      'ram',
      'mainboard',
      'disk_storage',
      'price'
  ]
}

</script>

<style scoped>
.description-container {
  background: rgb(128, 128, 128,0.3);
  border-radius: 5px;
  padding: 1.25rem 1.25rem 1.25rem 1.25rem;
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1.5rem;
  font-weight:600;
}
table {
  margin-bottom: 2rem;
}
button {
  position: relative;
  left: 27%;
}

.align-text-button {
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 58vw;
  margin-bottom: 0.5em;
  max-height: 50px;
}

.price-text {
  font-size: 1.875rem;
  color: #42BD91;
  margin-right: 0.75em;
}
img {
  width: 18px;
  height: 18px;
}
span {
  margin-right: 8px;
}
a {
  color: #ffc107;
  text-decoration: None;
}
button:hover > a {
  color: #000;
  transition: 0.3s color ease-in-out;
}
</style>