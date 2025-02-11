<template>
  <div class="dropbox">
    <h2 class="title">Overall Plant OEE</h2>

    <!-- Dropdown menu aligned to the right -->

    <select
      v-model="selectedMachine"
      class="dropdown"
      @change="redirectToMachine"
    >
      <option value="" disabled>Select a Machine</option>
      <option v-for="machine in machines" :key="machine" :value="machine">
        {{ machine }}
      </option>
    </select>

    <!-- Form for selecting datetime with submit button beside -->
    <form @submit.prevent="handleSubmit" class="datetime-form">
      <label for="datetime">Select Date and Time:</label>
      <div class="datetime-container">
        <input
          type="datetime-local"
          id="datetime"
          v-model="datetime"
          required
        />
        <button type="submit" class="sub">Submit</button>
      </div>
    </form>
  </div>

  <div class="donut-charts-container">
    <div class="chart">
      <div class="donut-charts-background">
        <div class="donut-charts-box">
          <DonutChart
            v-for="(data, index) in chartData"
            :key="index"
            :donutChartData="data.donutChartData"
            :title="data.title"
            :backgroundColor="data.backgroundColor"
            :colors="data.colors"
          />
        </div>
      </div>
    </div>

    <!-- OEE Loss Chart -->
    <div class="losschart">
      <div class="loss-donut-background">
        <div class="loss-donut-box">
          <div class="chart-box">
            <DonutChart
              :donutChartData="chartlossData[0].donutChartData"
              :title="chartlossData[0].title"
              :backgroundColor="chartlossData[0].backgroundColor"
              :colors="chartlossData[0].colors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bar Chart Section -->
  <div class="chart">
    <BarChart
      v-for="(data, index) in barChartData"
      :key="index"
      :chartData="data.donutChartData"
      :title="data.title"
      :colors="data.colors"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import DonutChart from "./DonutChart.vue";
import BarChart from "./BarChart.vue";

export default {
  name: "OeePage",
  components: {
    DonutChart,
    BarChart,
  },
  setup() {
    const router = useRouter(); 

    const selectedMachine = ref(""); 
    const machines = ref([
      "MCV-450",
      "MONO-200",
      "MAZAK H400",
      "STALLION-200",
      "SCHAUBLIN",
    ]);
    const datetime = ref(""); 
    const submitted = ref(false); 
    const errorMessage = ref(""); 

    // Chart data
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

    // OEE Loss chart data
    const chartlossData = ref([
      {
        title: "OEE Loss",
        donutChartData: [
          { name: "OEE", y: 70 },
          { name: "Loss", y: 30 },
        ],
        colors: ["#ff6666", "#e6e6e6"],
        backgroundColor: "#ffe6e6",
      },
    ]);

    // Bar chart data
    const barChartData = ref([
      {
        title: "OEE Performance",
        donutChartData: [
          { name: "OEE", y: 75 },
          { name: "Availability", y: 85 },
          { name: "Performance", y: 90 },
          { name: "Quality", y: 95 },
        ],
        colors: ["#3CB371", "#FFD700", "#FF6347", "#32CD32"],
      },
      {
        title: "Production Data",
        donutChartData: [
          { name: "ProductionRate", y: 80 },
          { name: "Downtime", y: 20 },
        ],
        colors: ["#32CD32", "#FF6347"],
      },
    ]);

    // Formatted datetime (computed property)
    const formattedDatetime = computed(() => {
      if (datetime.value) {
        const dateObj = new Date(datetime.value);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        const hours = String(dateObj.getHours()).padStart(2, "0");
        const minutes = String(dateObj.getMinutes()).padStart(2, "0");
        return `${day}-${month}-${year} ${hours}:${minutes}`;
      }
      return "";
    });

    // Handle form submission
    const handleSubmit = () => {
      if (datetime.value) {
        submitted.value = true;
        errorMessage.value = "";
      } else {
        errorMessage.value = "Please select a valid date and time.";
      }
    };

    // Redirect to selected machine's page
    const redirectToMachine = () => {
      if (selectedMachine.value) {
        router.push({
          name: "machine",
          params: { machineName: selectedMachine.value },
        });
      }
    };

    return {
      selectedMachine,
      machines,
      datetime,
      submitted,
      errorMessage,
      chartData,
      chartlossData,
      barChartData,
      formattedDatetime,
      handleSubmit,
      redirectToMachine,
    };
  },
};
</script>

<style scoped>
.dropbox {
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  width: 100%; 
  gap: 20px; 
}

.title {
  font-size: 30px;
  font-weight: bold;
  color: #4a1f1f;
  white-space: nowrap;
  margin-left: 50px;
}

/* Styling for the dropdown */
.dropdown {
  font-size: 18px;
  padding: 10px;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  background-color: white;
  color: #333;
  cursor: pointer;
  width: 200px;
  margin-left: 55%;
  margin-top: 30px;
}

.datetime-form {
  display: flex;
  flex-direction: column; 
  gap: 10px;
  align-items: flex-start; 
}

.datetime-container {
  display: flex;
  gap: 15px; 
}

input[type="datetime-local"] {
  width: 230px; 
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button.sub {
  padding: 10px 15px;
  font-size: 16px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.sub:hover {
  background-color: #45a049;
}

.donut-charts-container {
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 50px;
}

.donut-charts-background,
.loss-donut-background {
  background-color: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.chart,
.losschart {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
}

.donut-charts-box {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.loss-donut-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
