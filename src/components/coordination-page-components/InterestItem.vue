<script setup>
import RobotIcon from "@/components/svg-components/RobotIcon.vue";
import AspectIcon from "@/components/svg-components/AspectIcon.vue";
import BookIcon from "@/components/svg-components/BookIcon.vue";

const props = defineProps(["interest"]);
</script>

<template>
  <div
    class="row mt-5 interest-item justify-content-center align-content-around"
  >
    <div class="col-12">
      <div class="row align-content-center justify-content-center">
        <BookIcon v-if="props.interest.id === 1" />
        <RobotIcon v-if="interest.id === 2" />
        <AspectIcon v-if="interest.id === 3" />
      </div>
      <div class="row align-content-center justify-content-center">
        <div class="col-12 text-align-center interest-title">
          {{ interest.title }}
        </div>
      </div>
    </div>

    <div class="col-12 interest-description">
      {{ interest.description }}
    </div>
  </div>
</template>

<style lang="scss">
.interest-item:nth-of-type(2) {
  background: var(--primary-color);
}

.interest-item {
  max-width: 280px;
  border-radius: 10px;
  background: var(--background-color);
  min-height: 500px;
}

.interest-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
}

.interest-description {
  text-align: justify;
  text-justify: inter-word;
}
</style>
