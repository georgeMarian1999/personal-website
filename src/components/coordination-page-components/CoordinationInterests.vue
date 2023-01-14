<script setup>
import { ref } from "vue";
import InterestItem from "@/components/coordination-page-components/InterestItem.vue";

const interests = ref([
  {
    id: 1,
    title: "Natural Language Processing",
    description:
      "Can be projects like Anomaly and Reuse Detection in Software Engineering, or even a project like the one I did in my internship at the University of Waterloo.",
  },
  {
    id: 2,
    title: "Machine learning",
    description:
      "Can be projects like Anomaly and Reuse Detection in Software Engineering, or even a project like the one I did in my internship at the University of Waterloo.",
  },
  {
    id: 3,
    title: "Extreme web design",
    description:
      "Can be projects like Anomaly and Reuse Detection in Software Engineering, or even a project like the one I did in my internship at the University of Waterloo.",
  },
]);
</script>

<template>
  <div class="row section-card interests">
    <div class="col-12 text-align-center">
      <h2>Domain of Interests</h2>
    </div>
    <div class="col-12">
      <div class="row justify-content-around align-content-center">
        <InterestItem
          v-for="interest in interests"
          :key="interest.id"
          :interest="interest"
          class="col-lg-3 col-12"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.interests {
  padding: 30px;
}
</style>
