<script setup>
import PaperIcon from "@/components/svg-components/PaperIcon.vue";
import CpuIcon from "@/components/svg-components/CpuIcon.vue";
import PenIcon from "@/components/svg-components/PenIcon.vue";
import CastIcon from "@/components/svg-components/CastIcon.vue";

const props = defineProps(["rule"]);
</script>

<template>
  <div
    class="course-rule position-relative row mt-2 mb-2 align-content-center justify-content-center"
  >
    <div class="col-2 rule-picture">
      <div class="row height-full align-content-center justify-content-center">
        <div class="col-12">
          <div
            class="row align-content-center justify-content-center height-full"
          >
            <PaperIcon v-if="props.rule.id === 1"></PaperIcon>
            <CpuIcon v-if="props.rule.id === 2"></CpuIcon>
            <CastIcon v-if="props.rule.id === 3"></CastIcon>
            <PenIcon v-if="props.rule.id === 4"></PenIcon>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 rule-description">
      <div class="row rule-title">
        <h5>{{ props.rule.title }}</h5>
      </div>
      <div class="row rule-text">
        <p>{{ rule.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.course-rule {
  padding: 25px 25px;
  font-size: 12px;
  transition: all 0.5s ease-in-out;
  border-radius: 20px;
  max-width: 800px;
}

@media (max-width: 600px) {
  .course-rule:hover {
    .rule-picture {
      transform: translateY(0);
    }

    .rule-description {
      transform: translateY(0);
    }
  }
}

@media (min-width: 600px) {
  .course-rule:hover {
    .rule-picture {
      transform: translateX(-50px);
    }

    .rule-description {
      transform: scale(1.05);
    }
  }
}

.rule-picture {
  width: 120px;
  transition: all 0.5s ease-in-out;
  height: 120px;
  border-radius: 50%;
  background: var(--primary-color);
  margin-right: 25px;
}

.rule-description {
  transition: all 0.5s ease-in-out;
  margin-left: 25px;
  min-height: 120px;
}

.rule-text {
  font-size: 13px;
}
</style>
