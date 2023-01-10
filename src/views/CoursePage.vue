<script setup>
import { useRouter } from "vue-router";
import CourseIntroduction from "@/components/course-page-components/CourseIntroduction.vue";
import BaseDivider from "@/components/shared/BaseDivider.vue";
import CourseBasics from "@/components/course-page-components/CourseBasics.vue";
import CourseLectures from "@/components/course-page-components/CourseLectures.vue";

const router = useRouter();

// const courseId = parseInt(router.currentRoute.value.params.id);

console.log("Router params: ", router.currentRoute.value.params);

// const courses = [
//   {
//     id: 1,
//     name: "Web programming",
//     description: "Web programming description",
//     teamsCode: "askda922",
//     teamsLink:
//       "https://teams.microsoft.com/l/team/19%3aBDS0rHT0wwhup7BM9PIRAOW5kPRZlMJe4MJTnLzFQ8Y1%40thread.tacv2/conversations?groupId=622548c3-bc48-41f8-b53f-d4b61fe975a3&tenantId=5a4863ed-40c8-4fd5-8298-fbfdb7f13095",
//     resource: {
//       name: "W3Schools",
//       link: "https://www.w3schools.com/html/default.asp",
//     },
//     lectures: [
//       {
//         id: 1,
//         title: "Introduction to web programming",
//         pdf: "",
//       },
//       {
//         id: 2,
//         title: "Introduction to web programming",
//         pdf: "",
//       },
//       {
//         id: 3,
//         title: "Introduction to web programming",
//         pdf: "",
//       },
//     ],
//   },
// ];
</script>

<template>
  <div class="course-page">
    <div class="container container-fluid">
      <CourseIntroduction />
      <BaseDivider :reverse="false" />
      <CourseBasics />
      <BaseDivider :reverse="true" />
      <CourseLectures />
    </div>
  </div>
</template>

<style lang="scss">
.course-page {
  min-height: 100vh;

  .container {
    border-top: 1px solid var(--body-text);
    background: var(--component-background-color);
    padding-bottom: 50px;
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
