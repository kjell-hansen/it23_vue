<script setup>
import router from '@/router'
import { onMounted, ref } from 'vue'

const location = ref({ name: '', position: { lat: 0, long: 0 }, default: false })
const locationsList = ref([])

onMounted(() => {
  locationsList.value = JSON.parse(localStorage.getItem('locations')) ?? []
})

function remove(location) {
  locationsList.value = locationsList.value.filter((itm) => {
    return itm.position.lat != location.position.lat && itm.position.long != location.position.long
  })
  localStorage.setItem('locations', JSON.stringify(locationsList.value))
}

function save() {
  if (location.value.edit) {
    locationsList.value = locationsList.value.map((itm) => {
      if (itm.edit == true) {
        itm = { ...location.value }
        delete itm.edit
      }
      return itm
    })
  } else {
    locationsList.value.push(location.value)
  }
  location.value = { name: '', position: { lat: 0, long: 0 }, default: false }
  localStorage.setItem('locations', JSON.stringify(locationsList.value))
}

function setDefault(e) {
  locationsList.value.map((itm) => {
    itm.default = e.position.lat == itm.position.lat && e.position.long == itm.position.long
  })
  localStorage.setItem('locations', JSON.stringify(locationsList.value))

  router.push(`/forecast/${e.name}/${e.position.lat}/${e.position.long}`)
}

function editValue(itm) {
  itm.edit = true
  location.value = JSON.parse(JSON.stringify(itm))
}

function reset() {
  location.value = { name: '', position: { lat: 0, long: 0 }, default: false }
}
</script>
<template>
  <h2>Locations</h2>
  <label>
    Namn:
    <input type="text" v-model="location.name" />
  </label>
  <label>
    Lat:
    <input type="number" max="90" min="-90" step=".1" size="5" v-model="location.position.lat" />
  </label>
  <label>
    Long:
    <input type="number" max="180" min="-180" step=".1" size="5" v-model="location.position.long" />
  </label>
  <button @click="save">Save</button>
  <button @click="reset">Reset</button>
  <hr />
  <h3>List</h3>
  <ul>
    <li
      v-for="loc in locationsList"
      :key="loc"
      :class="loc.default ? 'default' : ''"
      @click="setDefault(loc)"
    >
      {{ loc.name }}
      ({{ Math.abs(loc.position.lat).toFixed(2) }}°{{ loc.position.lat > 0 ? 'N' : 'S' }}
      {{ Math.abs(loc.position.long).toFixed(2) }}°{{ loc.position.long > 0 ? 'E' : 'W' }})
      <span class="edit" @click.stop="editValue(loc)" title="Edit location">✒️</span>
      <span class="remove" @click="remove(loc)" title="Remove location">x</span>
    </li>
  </ul>
</template>
<style scoped>
label {
  display: block;
  width: 15em;
  padding-top: 0.5em;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
li {
  padding-left: 0.2em;
  background-color: aquamarine;
}
li:nth-child(odd) {
  background-color: antiquewhite;
}
span.edit {
  position: absolute;
  right: 4em;
  display: inline-block;
  cursor: pointer;
}
span.remove {
  position: absolute;
  font-weight: bold;
  right: 2.5em;
  display: inline-block;
  background-color: red;
  color: antiquewhite;
  padding: 0;
  width: 1em;
  height: 1.5em;
  text-align: center;
  cursor: pointer;
}
.default {
  font-weight: bold;
}
</style>
