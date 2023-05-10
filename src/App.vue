<script>
</script>

<template>
  <div id='nav'>
    <router-link to='/introduction'>
    <h3>Увод</h3>
    </router-link>

    <router-link to='/kepler-442b'>
      <h3>Kepler-442B</h3>
    </router-link>
    
    <router-link to='/trappist-1e'>
      <h3>TRAPPIST-1E</h3>
    </router-link>

    <router-link to='/toi-700d'>
      <h3>TOI-700D</h3>
    </router-link>

    <router-link to='/conclusion'>
      <h3>Conclusion</h3>
    </router-link>
  </div>
  <router-view/>
</template>

<style scoped>
  * {
    text-align: center;
  }
  #nav {
    display: flex;
    gap: 20px;
    background: linear-gradient(135deg, 
    hsla(262, 35%, 20%, 1) 0%, 
    hsla(240, 33%, 24%, 1) 100%);
  }

  #nav * {
    width: 100%;
    text-decoration: none;
    padding: 0px 5px;
  }

  #nav h3 {
    transition: .3s cubic-bezier(0.86,0,0.07,1) transform;
    color: white;
    font-size: 1em;
    font-weight: bolder;
  }

  #nav h3:hover {
    transform: rotate(30deg);
  }

</style>
