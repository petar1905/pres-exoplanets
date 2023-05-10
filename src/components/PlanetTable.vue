<script>
  export default {
    props: ['name', 'distance',
    'mass', 'radius', 'yearspan',
    'fact']
  }
</script>

<template>
  <table>
    <tr v-motion-roll-left :delay=50>
      <th>Име</th>
      <td>{{this.name}}</td>
    </tr>

    <tr v-motion-roll-left :delay=100>
      <th>Разстояние</th>
      <td>{{this.distance}}</td>
    </tr>

    <tr v-motion-roll-left :delay=150>
      <th>Маса</th>
      <td>{{this.mass}}</td>
    </tr>

    <tr v-motion-roll-left :delay=200>
      <th>Радиус</th>
      <td>{{this.radius}}</td>
    </tr>

    <tr v-motion-roll-left :delay=250>
      <th>Година</th>
      <td>{{this.yearspan}}</td>
    </tr>

    <tr v-motion-roll-left :delay=300>
      <th>Интересен факт</th>
      <td>{{this.fact}}</td>
    </tr>
  </table>
</template>

<style scoped>
th, td {
  border: 1px white solid;
  padding: 10px;
}

table {
  width: 100%;
}
</style>
