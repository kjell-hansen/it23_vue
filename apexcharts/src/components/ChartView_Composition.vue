<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    id: 'basic-bar',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
})
const series = ref([
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
])
</script>

<template>
  <div class="example">
    <VueApexCharts
      width="500"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<style scoped></style>
