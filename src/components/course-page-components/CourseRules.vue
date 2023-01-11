<script setup>
import BaseRule from "@/components/course-page-components/BaseRule.vue";
import BaseDivider from "@/components/shared/BaseDivider.vue";

const rules = [
  {
    id: 1,
    title: "Grading System",
    description:
      "The grading system is based on the following criteria: 1. Laboratories 2. Project 3. Final Exam." +
      "The project consist of 40% of the final grade" +
      "The laboratories consist of 30% of the final grade" +
      "The final exam consist of 30% of the final grade" +
      "The final grade must be above 5 to pass the course",
  },
  {
    id: 2,
    title: "Laboratories",
    description:
      "Attendance to laboratories is mandatory. You are allowed to miss lectures. If you miss more than 2 seminars or laboratories, you will be allowed only in the retake session." +
      "The laboratories will be held in the computer lab of the department. You are required to bring your own laptop." +
      "The laboratories are homeworks assigned to you each laboratory and must be delivered within 2 weeks after the laboratory session.",
  },
  {
    id: 3,
    title: "Project",
    description:
      "The project is mandatory. It will consist in a web application. Special points are granted if the design is good.",
  },
  {
    id: 4,
    title: "Final Exam",
    description:
      "The final exam will be held on the last day of the semester. The final exam will be online and it will be have 200 questions.",
  },
];
</script>

<template>
  <div class="row align-content-center justify-content-center">
    <div class="col-12 text-align-center">
      <h3>Course Requirements</h3>
    </div>
    <BaseDivider :reverse="false" />
    <BaseRule v-for="rule in rules" :key="rule.id" :rule="rule" class="mt-4" />
  </div>
</template>

<style lang="scss"></style>
