<script setup>
import News1Picture from "@/components/svg-components/News1Picture.vue";
import News2Picture from "@/components/svg-components/News2Picture.vue";
import News3Picture from "@/components/svg-components/News3Picture.vue";
import News4Picture from "@/components/svg-components/News4Picture.vue";
import News5Picture from "@/components/svg-components/News5Picture.vue";
import News6Picture from "@/components/svg-components/News6Picture.vue";
import PhoneIcon from "@/components/svg-components/PhoneIcon.vue";
import { useRouter } from "vue-router";
import PaperIcon from "@/components/svg-components/PaperIcon.vue";

const props = defineProps(["news"]);
const router = useRouter();

function navigateToNews() {
  router.push({ name: "news-detail", params: { id: props.news.id } });
}
</script>

<template>
  <div class="news-card mt-4 col-12 col-md-6">
    <div class="row align-content-around justify-content-center height-full">
      <div
        class="news-card-photo row align-content-center justify-content-center"
      >
        <News1Picture v-if="news.id === 1" />
        <News2Picture v-if="news.id === 2" />
        <News3Picture v-if="news.id === 3" />
        <News4Picture v-if="news.id === 4" />
        <News5Picture v-if="news.id === 5" />
        <News6Picture v-if="news.id === 6" />
      </div>
      <div
        class="news-card-title align-content-center justify-content-start row"
      >
        {{ props.news.title }}
      </div>
      <div class="row mt-2 mb-2 align-content-center justify-content-between">
        <div class="col-4 news-card-type">
          <PhoneIcon v-if="news.type === 'Course'" />
          <PaperIcon v-else />
        </div>
        <div class="col-5">
          <button class="btn btn-primary" @click="navigateToNews">
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.news-card {
  border-radius: 20px;
  min-height: 400px;
  max-width: 320px;
  background: var(--background-color);
  padding: 0.9em;

  button {
    font-size: 12px;
  }
}

.news-card-type {
  padding-left: 20px;

  svg {
    width: 30px;
    height: 30px;
  }
}

.news-card-photo {
  height: 60%;
  border-radius: 6px 6px 0 0;

  svg {
    transition: all 0.5s ease-in-out;
  }

  svg:hover {
    transform: scale(0.9);
  }
}

.news-card-title {
  padding-left: 20px;
  font-size: 15px;
}
</style>
