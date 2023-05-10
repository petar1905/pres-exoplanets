<script>
import PlanetTable from './PlanetTable.vue'
export default {
  components: {PlanetTable}
}
</script>

<template>
  <div style='display: flex; justify-content: center;'>
    <PlanetTable name='TOI-700D'
    distance='101 св.години'
    mass='1.72 пъти Земята'
    radius='1.12 пъти Земята'
    yearspan='37 дни'
    fact='За разлика от много други звезди, звездата TOI-700
    не отдава периодични радиационни вълни, следователно
    това с присъствието на океани позволява поддържането на
    живот на TOI-700D.'/>
    <img v-motion-roll-right :delay=50
    src='/toi700d/toi.jpg'
    style='border-radius: 10px; width: 100%;'><img/>
  </div>
</template>

<style scoped>
  * {overflow: hidden}
</style>
