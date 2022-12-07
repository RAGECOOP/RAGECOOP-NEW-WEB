<template>
  <Line class="chart"
    :data="{ ...chartData, ...chartData.datasets[0].data = stats }"
    :width="200"
    :height="100"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale)

export default {
  data: () => ({
    chartData: {
      labels: [
        "-60",
        "-50",
        "-40",
        "-30",
        "-20",
        "-10"
      ],
      datasets: [{
        label: "Players",
        pointBackgroundColor: "#4caf50",
        pointBorderColor: "rgba(0, 0, 0, .35)",
        pointRadius: 5,
        borderWidth: 3,
        backgroundColor: "#4caf50",
        data: [0, 0, 0, 0, 0, 0]
      }]
    }
  }),
  components: { Line },
  props: {
    stats: {
      type: Array,
      default: ["0", "0", "0", "0", "0", "0"]
    }
  }
}
</script>