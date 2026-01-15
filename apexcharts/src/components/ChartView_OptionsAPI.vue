<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'ChartViewOptions',
  components: {
    apexCharts: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
}
</script>

  <template>
    <div class="example">
      <apexCharts
        width="500"
        height="350"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexCharts>
    </div>
  </template>

<style scoped></style>
