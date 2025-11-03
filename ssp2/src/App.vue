<script setup>
import KnappRad from './components/KnappRad.vue'
import Nollstall from './components/Nollstall.vue'
import PoangRad from './components/PoangRad.vue'
import ResultatRad from './components/ResultatRad.vue'
</script>

<template>
  <KnappRad />
  <ResultatRad />
  <PoangRad />
  <Nollstall />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
