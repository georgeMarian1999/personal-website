<script setup>
import BaseLecture from "@/components/course-page-components/BaseLecture.vue";
import LectureViewer from "@/components/course-page-components/LectureViewer.vue";
import { ref } from "vue";

const lectures = [
  {
    id: 1,
    title: "Introduction to web programming",
    description: "This lecture is about the introduction to web programming",
    link: "Lecture1.pdf",
  },
  {
    id: 2,
    title: "Middleware",
    description:
      'Middleware is a type of computer software that provides services to software applications beyond those available from the operating system. It can be described as "software glue".',
    link: "Lecture2.pdf",
  },
  {
    id: 3,
    title: "Web services",
    description:
      "A web service is either: a service offered by an electronic device to another electronic device, communicating with each other via the Internet,",
    link: "Lecture3.pdf",
  },
];

const changeLecture = (lectureId) => {
  currentLecture.value = lectures[lectureId - 1];
};

const currentLecture = ref(lectures[0]);
</script>

<template>
  <div
    class="row align-content-center position-relative justify-content-around"
  >
    <div class="col-12 col-lg-5 course-page-lecture">
      <LectureViewer :lecture="currentLecture" />
    </div>
    <div class="col-12 col-lg-5 course-page-lecture-list">
      <BaseLecture
        v-for="lecture in lectures"
        :key="lecture.id"
        :current-lecture="currentLecture"
        :lecture="lecture"
        @choose-lecture="changeLecture"
      />
    </div>
  </div>
</template>

<style lang="scss">
.course-page-lecture {
  max-width: 100%;
  min-height: 400px;
  max-height: 500px;
  background: var(--primary-color);
  color: white;
  border-radius: 10px;
}

.course-page-lecture-list {
  max-width: 100%;
  min-height: 400px;
  border-radius: 10px;
}
</style>
