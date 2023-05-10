<script>
import Question from './Question.vue'
export default {
  components: {Question}
}
</script>

<template>
  <Question question='Какво представляват екзопланетите?'
  answer='Екзопланета или извънслънчева планета е планета, 
  която се намира извън Слънчевата система.
  Към април 2021 г. е потвърдено откритието на 4715 екзопланети, 
  от които 297 в т.н. "обитаема" зона. '/>
  
  <Question question='Защо трябва да знаем за екзопланетите?'
  answer='Нашата планета ще бъде разрушена скоро или късно,
  като източника на този катаклизъм може да бъде изкуствен
  (антропогенни действия) или естествен (смъртта на слънцето,
  отделечаване на луната).
  Единственият начин, по който човечеството може да оцелее
  такъв апокалипсис, е като то открие подходяща екзопланета
  и се засели на нея'/>

  <div id='death'>
    <img src='/intro/death3.webp' v-motion-pop :delay=3000><img/>
    <img src='/intro/death2.webp' v-motion-pop :delay=3050><img/>
    <img src='/intro/death1.webp' v-motion-pop :delay=3100><img/>
    <img src='/intro/death4.webp' v-motion-pop :delay=3150><img/>
    <img src='/intro/death5.webp' v-motion-pop :delay=3200><img/>
    <img src='/intro/death6.webp' v-motion-pop :delay=3250><img/>

  </div>
</template>

<style scoped>
  #death {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  #death img {
    border-radius: 10px;
  }
</style>
