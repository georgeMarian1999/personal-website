<script setup>
import { useRouter } from "vue-router";
import CourseIntroduction from "@/components/course-page-components/CourseIntroduction.vue";
import BaseDivider from "@/components/shared/BaseDivider.vue";
import CourseBasics from "@/components/course-page-components/CourseBasics.vue";
import CourseLectures from "@/components/course-page-components/CourseLectures.vue";
import CourseTimetable from "@/components/course-page-components/CourseTimetable.vue";
import CourseRules from "@/components/course-page-components/CourseRules.vue";

const router = useRouter();

// const courseId = parseInt(router.currentRoute.value.params.id);

console.log("Router params: ", router.currentRoute.value.params);
</script>

<template>
  <div class="course-page">
    <div class="container container-fluid">
      <CourseIntroduction />
      <BaseDivider :reverse="false" />
      <CourseBasics />
      <BaseDivider :reverse="true" />
      <CourseLectures />
      <BaseDivider :reverse="false" />
      <CourseTimetable />
      <BaseDivider :reverse="true" />
      <CourseRules />
    </div>
  </div>
</template>

<style lang="scss">
.course-page {
  min-height: 100vh;

  .container {
    border-top: 1px solid var(--body-text);
    background: var(--component-background-color);
  }
}

.course-page-card {
  min-height: 150px;
  max-width: 150px;
  background: var(--primary-color);
  color: white;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
