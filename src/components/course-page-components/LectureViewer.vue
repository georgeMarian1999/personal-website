<script setup>
import VuePdfEmbed from "vue-pdf-embed";
import { ref, watch } from "vue";
import ArrowLeft from "@/components/svg-components/ArrowLeft.vue";
import LectureLoader from "@/components/course-page-components/LectureLoader.vue";

const props = defineProps(["lecture"]);

const currentPage = ref(null);
const isLoading = ref(true);
const pageCount = ref(1);
const showAllPages = ref(false);

const pdfRef = ref(null);
const handleDocumentRender = () => {
  isLoading.value = false;
  pageCount.value = pdfRef.value.pageCount;
};
watch(showAllPages, () => {
  currentPage.value = showAllPages.value ? null : 1;
});
// const handlePasswordRequest = (callback, retry) => {
//   callback(prompt(retry ? "Enter password again" : "Enter password"));
// };
</script>

<template>
  <div class="lecture-viewer position-relative">
    <LectureLoader v-if="isLoading" class="lecture-loader" />
    <div v-else class="text-align-center mb-3 lecture-controls">
      <div class="row align-content-center justify-content-around">
        <div class="col-3">Lecture Viewer</div>
        <div v-if="currentPage" class="col-6 lecture-pagination">
          <div class="row align-content-center justify-content-center">
            <div class="col-3">
              <ArrowLeft @click="currentPage--" />
            </div>
            <div class="col-6">{{ currentPage }} / {{ pageCount }}</div>
          </div>
        </div>
        <div v-else class="col-6 lecture-pagination">
          <div class="row align-content-center justify-content-center">
            <div class="col-6">Total pages: {{ pageCount }}</div>
          </div>
        </div>

        <div class="col-3"></div>
      </div>
    </div>
    <vue-pdf-embed
      ref="pdfRef"
      :page="currentPage"
      :source="props.lecture.link"
      @rendered="handleDocumentRender"
    />
    <div>Pagination</div>
  </div>
</template>

<style lang="scss">
.lecture-viewer {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding-top: 15px;

  .lecture-controls {
    font-size: 14px;
  }
}

.lecture-pagination {
  .pagination {
    margin: 0;
  }
}

.lecture-loader {
  position: absolute;
  margin: auto;
  top: 5px;
  right: 0;
  left: 0;
  min-height: 60px;
}
</style>
