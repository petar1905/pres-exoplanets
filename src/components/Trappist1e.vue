<script>
import PlanetTable from './PlanetTable.vue'
export default {
  components: {PlanetTable}
}
</script>

<template>
  <div style='display: flex; justify-content: center;'>
    <PlanetTable name='TRAPPIST-1E'
    distance='40 св.години'
    mass='0.7 пъти Земята'
    radius='0.9 пъти Земята'
    yearspan='6 дни'
    fact='Липсата на водород в атмосферата и температурата,
    която може да поддържа вода на повърхността, са значителни
    фактори за поддържане на живот на тази екзопланета.'/>
    <img v-motion-roll-right :delay=50
    src='/trappist1e/trappist.png'
    style='border-radius: 10px; width: 43%;'><img/>
  </div> 
</template>
