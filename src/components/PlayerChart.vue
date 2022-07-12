<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="{ labels: [ -60, -50, -40, -30, -20, -10 ], datasets: [ { label: 'Player count', backgroundColor: '#4caf50', borderColor: '#4caf50', data: stats } ] }"
    :chart-id="chartId"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

export default {
  data: () => ({
    chartOptions: {
      responsive: true,
      maintainAspectRatio: true
    }
  }),
  components: { Line },
  props: {
    stats: {
      type: Array,
      default: ["0", "1", "0", "7", "0", "0"]
    },
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 100
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  }
}
</script>