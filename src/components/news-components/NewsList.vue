<script setup>
import { ref } from "vue";
import NewsCard from "@/components/news-components/NewsCard.vue";

const news = ref([
  {
    id: 1,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
  {
    id: 2,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
  {
    id: 3,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "General",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
  {
    id: 4,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
  {
    id: 5,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
  {
    id: 6,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "General",
    typeDescription: "Course descri",
    photo: "news.jpg",
  },
]);
console.log(news);
</script>

<template>
  <div class="row news-list align-content-center justify-content-around">
    <NewsCard v-for="news in news" :key="news.id" :news="news" />
  </div>
</template>

<style lang="scss">
.news-list {
  min-height: 400px;
  background: var(--component-background-color);
  padding: 40px;
}
</style>
