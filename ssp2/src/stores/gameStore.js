import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('game', () => {
  const score = ref({ user: 0, computer: 0 })
  const alternatives = ref(['sten', 'sax', 'påse', 'lizard', 'spock'])
  const message = ref('Dags för spel')
  const computerChoise = ref(-1)
  const reset = ref(true)

  function updateMessage(winner) {
    if (winner === 'user') {
      message.value = 'Du vann!'
    } else if (winner === 'computer') {
      message.value = 'Datorn vann'
    } else {
      message.value = 'Oavgjort'
    }
  }

  function userChoise(choise) {
    reset.value=false
    computerChoise.value = Math.floor(Math.random() * alternatives.value.length)

    determineWinner(choise, computerChoise.value)
  }

  function determineWinner(user, computer) {
    if (user === computer) {
      updateMessage('draw')
    } else if (user % 2 === computer % 2) {
      // Samma paritet - högsta värdet vinner
      if (user > computer) {
        updateMessage('user')
        score.value.user++
      } else {
        updateMessage(computer)
        score.value.computer++
      }
    } else {
      // Olika paritet - lägsta värdet vinner
      if (user < computer) {
        updateMessage('user')
        score.value.user++
      } else {
        updateMessage(computer)
        score.value.computer++
      }
    }
  }

  function nollstall() {
    reset.value=true
    score.value.user = 0
    score.value.computer = 0
    message.value = 'Dags för spel!'
  }

  return { score, alternatives, message, computerChoise, userChoise, nollstall, reset }
})
