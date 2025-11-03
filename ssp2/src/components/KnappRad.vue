<script setup>
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const { alternatives, computerChoise, reset } = storeToRefs(useGameStore())

function setUserChoise(e) {
  for (const button of document.querySelectorAll('button')) {
    button.classList.remove('selected')
  }
  e.target.classList.add('selected')
  let index = alternatives.value.indexOf(e.target.innerText)
  useGameStore().userChoise(index)
}

watch(computerChoise, () => {
  for (const button of document.querySelectorAll('button')) {
    button.classList.remove('computer')
  }
  if (computerChoise.value > -1) {
    let text = alternatives.value[computerChoise.value]
    for (let button of document.querySelectorAll('button')) {
      if (button.innerText === text) {
        button.classList.add('computer')
      }
    }
  }
})
watch(reset, () => {
  if (reset.value) {
    for (let button of document.querySelectorAll('button')) {
      button.classList.remove('computer')
      button.classList.remove('selected')
    }
  }
})
</script>
<template>
  <div class="knapprad">
    <button v-for="knapp in alternatives" :key="knapp" @click="setUserChoise">{{ knapp }}</button>
  </div>
</template>
<style scoped>
.selected {
  background-color: pink;
}
.computer {
  border: 2px solid red;
}
.knapprad {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
button {
  font-size: 1.5rem;
}
</style>
