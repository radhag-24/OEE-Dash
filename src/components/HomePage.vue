<template>
  <div class="home-page">
    <NavBar />
    <div class="charts-container">
      <!-- Donut charts container -->
      <div class="donut-charts-container">
        <div class="chart" v-for="(data, index) in chartData" :key="index">
          <div class="donut-charts-background">
            <div class="donut-charts-box">
              <DonutChart
                :donutChartData="data.donutChartData"
                :title="data.title"
                :backgroundColor="data.backgroundColor"
                :colors="data.colors"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Bar chart box -->
      <div class="bar-chart-box">
        <BarChartsOeeLoss />
      </div>

      <!-- Shiftwise chart -->
      <div class="shiftwise-chart-box">
        <ShiftWiseChart />
      </div>
    </div>

    <HomeMachine />
  </div>
</template>


<script>
import { ref } from "vue";
import DonutChart from "@/components/DonutChart.vue"; 
import BarChartsOeeLoss from "../components/BarChartsOeeLoss.vue";
import HomeMachine from "../components/HomeMachine.vue";
import ShiftWiseChart from "../components/ShiftWiseChart.vue";

export default {
  name: "HomePage",
  components: {
    DonutChart, 
    BarChartsOeeLoss,
    HomeMachine,
    ShiftWiseChart
  },
  setup() {
    const chartData = ref([
      {
        title: "OEE",
        donutChartData: [
          { name: "Availability", y: 70 },
          { name: "Performance", y: 10 },
          { name: "Quality", y: 20 },
        ],
        colors: ["#99bbff", "#99ffff", "#bf80ff"],
        backgroundColor: "white",
      },
      {
        title: "Availability",
        donutChartData: [
          { name: "Available", y: 85 },
          { name: "Not Available", y: 15 },
        ],
        colors: ["#99bbff", "#e6e6e6"],
        backgroundColor: "white",
      },
      {
        title: "Performance",
        donutChartData: [
          { name: "Optimal", y: 90 },
          { name: "Suboptimal", y: 10 },
        ],
        colors: ["#99ffff", "#e6e6e6"],
        backgroundColor: "white",
      },
      {
        title: "Quality",
        donutChartData: [
          { name: "Good Quality", y: 95 },
          { name: "Bad Quality", y: 5 },
        ],
        colors: ["#bf80ff", "#e6e6e6"],
        backgroundColor: "white",
      },
    ]);

    return {
      chartData,
    };
  },
};
</script>

<style scoped>
.home-page .charts-container {
  display: flex; 
  margin-top: 25px;
}
.home-page .donut-charts-container {
  display: flex; 
  margin-top: 10px;
  flex-wrap: wrap;
}

.home-page .donut-chart-container {
  width: 200px;
  height: 230px;
  border: 2px solid #ccc;
}


</style>
