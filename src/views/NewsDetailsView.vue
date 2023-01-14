<script setup>
import NewsDetailsHeader from "@/components/news-details-component/NewsDetailsHeader.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import BaseDivider from "@/components/shared/BaseDivider.vue";
import NewsDescription from "@/components/news-details-component/NewsDescription.vue";

const news = ref([
  {
    id: 1,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
  {
    id: 2,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
  {
    id: 3,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "General",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
  {
    id: 4,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
  {
    id: 5,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "Course",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
  {
    id: 6,
    title: "The lecture this week is postponed!",
    date: "2021-01-01",
    type: "General",
    description:
      "A lecture scheduled to take place at FSEGA, class 304 on 13.02.2023 has been postponed due to unforeseen circumstances. The lecturer, George, apologizes for any inconvenience this may cause and will provide further information on a later date. Those who have already registered for the event will be refunded the full amount. We apologize for the inconvenience and thank you for your patience. Stay tuned for further updates!",
    photo: "news.jpg",
  },
]);

const router = useRouter();
const newsId = parseInt(router.currentRoute.value.params.id);

const newsDetails = ref(news.value.find((n) => n.id === newsId));

console.log(newsDetails);
</script>

<template>
  <div class="container">
    <NewsDetailsHeader :news="newsDetails" />
    <BaseDivider :reverse="true" />
    <NewsDescription :news="newsDetails" />
  </div>
</template>

<style lang="scss"></style>
