<script setup>
import VuePdfEmbed from "vue-pdf-embed";
import { ref, watch } from "vue";
import ArrowLeft from "@/components/svg-components/ArrowLeft.vue";
import ArrowRight from "@/components/svg-components/ArrowRight.vue";

const props = defineProps(["lecture"]);

const currentPage = ref(1);
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

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
const nextPage = () => {
  if (currentPage.value < pageCount.value) {
    currentPage.value++;
  }
};

// const handlePasswordRequest = (callback, retry) => {
//   callback(prompt(retry ? "Enter password again" : "Enter password"));
// };
</script>

<template>
  <div class="row justify-content-center lecture-viewer position-relative">
    <div class="text-align-center mb-3 lecture-controls">
      <div class="row align-content-center justify-content-around">
        <div class="col-3">Lecture Viewer</div>
        <div v-if="currentPage" class="col-5 lecture-pagination">
          <div class="row align-content-center justify-content-center">
            <div class="col-3">
              <ArrowLeft @click="previousPage" />
            </div>
            <div class="col-4">{{ currentPage }} / {{ pageCount }}</div>
            <div class="col-3">
              <ArrowRight class="bi-cursor" @click="nextPage" />
            </div>
          </div>
        </div>
        <div v-else class="col-5 lecture-pagination">
          <div class="row align-content-center justify-content-center">
            <div class="col-6">Total pages: {{ pageCount }}</div>
          </div>
        </div>

        <div class="col-4 d-none d-sm-block">
          <div class="form-check">
            <input
              id="showAllPagesCheck"
              v-model="showAllPages"
              class="form-check-input"
              type="checkbox"
            />
            <label class="form-check-label" for="showAllPagesCheck">
              Show all pages
            </label>
          </div>
        </div>
      </div>
    </div>
    <vue-pdf-embed
      ref="pdfRef"
      :disable-annotation-layer="true"
      :disable-text-layer="true"
      :page="currentPage"
      :source="props.lecture.link"
      @rendered="handleDocumentRender"
    />
  </div>
</template>

<style lang="scss">
.lecture-viewer {
  height: 100%;
  overflow: auto;
  padding-top: 15px;

  .lecture-controls {
    font-size: 14px;
  }

  .form-check {
    display: flex;
    justify-content: space-around;
    align-items: center;
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

.vue-pdf-embed {
  canvas {
    height: auto !important;
    width: 100% !important;
  }
}

@media (max-width: 768px) {
  .vue-pdf-embed {
    canvas {
      width: 100% !important;
    }
  }
}
</style>
