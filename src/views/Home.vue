<template>
  <div class="home">
    <Header/>
    <div class="container">
      <div class="spread">
        <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Dashboard</h1>
        <div class="toggle" :class="{'light-box' : isDarkMode, 'dark-box' : !isDarkMode}">
          <div ref="days" class="days" @click="toggleDays">Days</div>
          <div ref="weeks" class="weeks" @click="toggleWeeks">Week</div>
          <div ref="months" class="months" @click="toggleMonths">Month</div>
        </div>
      </div>
      <apexchart width="100%" height="300px" type="area" :options="chartOptions" :series="series"></apexchart>
      <iframe
        v-if="isDarkMode"
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/1E-VVD68LbwjTfwaYkrVyIDLbpD86cT8s/page/zfFr"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
      <iframe
        v-if="!isDarkMode"
        width="600"
        height="450"
        src="https://datastudio.google.com/embed/reporting/1-0_qK_CHrk7i9Ayvd08H33p_yEvXp0Hd/page/zfFr"
        frameborder="0"
        style="border:0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  components: {
    Header,
    apexchart: VueApexCharts
  },
  data() {
    return {
      chartOptions: {
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.$store.getters.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        chart: {
          id: "users"
        },
        xaxis: {
          type: "datetime"
        }
      },
      series: [
        {
          name: "active users",
          data: [
            [new Date("January 1, 2019"), 30],
            [new Date("January 5, 2019"), 40]
          ]
        },
        {
          name: "new users",
          data: [
            [new Date("January 1, 2019"), 80],
            [new Date("January 5, 2019"), 20]
          ]
        }
      ]
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56CCF2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56CCF2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56CCF2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding-left: 10%;
  padding-right: 10%;
  max-width: 960px;
}

.spread {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  width: 100%;
  margin-bottom: 40px;
}

h1.dark {
  @include heading-3($black);
}

h1.light {
  @include heading-3($white);
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  height: 40px;
  width: 224px;
  border-radius: 6px;
  padding: 2px;
  display: flex;
  flex-wrap: nowrap;

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}

.days {
  @include toggle-settings;
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}
</style>
