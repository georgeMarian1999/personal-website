<script setup>
import BaseLecture from "@/components/course-page-components/BaseLecture.vue";
import LectureViewer from "@/components/course-page-components/LectureViewer.vue";
import { ref } from "vue";
import SquareIcon from "@/components/svg-components/SquareIcon.vue";

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
const secondLectures = [
  {
    id: 4,
    title: "CSS",
    description: "This lecture is about CSS",
    link: "Lecture1.pdf",
  },
  {
    id: 5,
    title: "JQuery",
    description: "This lecture is about css",
    link: "Lecture2.pdf",
  },
];

const lectureCarousel = ref(null);

const allLectures = ref(lectures.concat(secondLectures));
const currentLecturePage = ref(1);
const changeLecturePage = (pageNumber) => {
  currentLecturePage.value = pageNumber;
};

const changeLecture = (lectureId) => {
  currentLecture.value = allLectures.value[lectureId - 1];
};

const currentLecture = ref(lectures[0]);
</script>

<template>
  <div
    class="row align-content-center position-relative justify-content-around"
  >
    <div class="col-12 col-lg-8 col-xl-5 course-page-lecture">
      <LectureViewer :lecture="currentLecture" />
    </div>
    <div
      id="lectureCarousel"
      ref="lectureCarousel"
      class="col-12 col-xl-5 mt-3 course-page-lecture-list carousel slide"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <BaseLecture
            v-for="lecture in lectures"
            :key="lecture.id"
            :current-lecture="currentLecture"
            :lecture="lecture"
            @choose-lecture="changeLecture"
          />
        </div>
        <div class="carousel-item">
          <BaseLecture
            v-for="lecture in secondLectures"
            :key="lecture.id"
            :current-lecture="currentLecture"
            :lecture="lecture"
            @choose-lecture="changeLecture"
          />
        </div>
      </div>

      <div class="row mt-2 mb-2 align-content-center justify-content-around">
        <div class="col-3">
          <div
            class="row justify-content-center active"
            data-bs-slide-to="0"
            data-bs-target="#lectureCarousel"
          >
            <SquareIcon
              :class="{ 'item-active': currentLecturePage === 1 }"
              class="pagination-square"
              @click="changeLecturePage(1)"
            />
          </div>
        </div>
        <div class="col-3">
          <div
            class="row justify-content-center"
            data-bs-slide-to="1"
            data-bs-target="#lectureCarousel"
          >
            <SquareIcon
              :class="{ 'item-active': currentLecturePage === 2 }"
              class="pagination-square"
              @click="changeLecturePage(2)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.course-page-lecture {
  max-width: 100%;
  min-height: 500px;
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

.pagination-square {
  transition: all 0.5s ease-in-out;
}

.pagination-square:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.pagination-square.item-active {
  fill: var(--primary-color);
}

#lectureCarousel {
  .carousel-inner {
    min-height: 500px;
  }
}
</style>
