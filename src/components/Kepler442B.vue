<script>
import PlanetTable from './PlanetTable.vue'
export default {
  components: {PlanetTable}
}
</script>

<template>
  <div style='display: flex; justify-content: center;'>
    <PlanetTable name='Kepler-442B'
    distance='1206 св.години'
    mass='2.3 пъти Земята'
    radius='1.34 пъти Земята'
    yearspan='112.3 дни'
    fact='Има нужните условия за поддръжка на фотосинтеза.'/>
    <img v-motion-roll-right :delay=50
    src='/kepler442b/kepler.webp'
    style='border-radius: 10px; width: 1600px;'><img/>
  </div> 
</template>

<style scoped>
  * {overflow: hidden;}
</style>
