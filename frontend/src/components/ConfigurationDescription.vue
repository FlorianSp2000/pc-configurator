<template>

  <div class="description-container">
    <h3>{{ name }}</h3>
    <p class="description-text">{{ description }}</p>
    <table class="table table-borderless">
      <tbody>
      <tr>
        <th scope="row">CPU</th>
        <td>{{ cpu }}</td>
      </tr>
      <tr>
        <th scope="row">GPU</th>
        <td>{{ gpu }}</td>
      </tr>
      <tr>
        <th scope="row">RAM</th>
        <td colspan="2">{{ ram }}</td>
      </tr>
      <tr>
        <th scope="row">Mainboard</th>
        <td colspan="2">{{ mainboard }}</td>
      </tr>
      <tr>
        <th scope="row">Festplatte</th>
        <td colspan="2">{{ disk_storage }}</td>
      </tr>

      </tbody>
    </table>
    <div class="align-text-button">
      <p class="price-text"> {{ price }}€</p>
      <button type="button" class="btn btn-primary">Komponenten ändern</button>
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
  padding: 1.25rem 1rem 1.25rem 0rem;
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
</style>