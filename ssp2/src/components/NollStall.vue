<script setup>
import { useGameStore } from '@/stores/gameStore';


function nolla() {
  useGameStore().nollstall();
}
</script>
<template>
  <button class="nollstall" @click="nolla">Nollstall</button>
</template>
<style scoped>
.nollstall {
  display: block;
  font-size: 1.5rem;
  padding: .5rem 1rem;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
  margin: auto;
}
</style>
