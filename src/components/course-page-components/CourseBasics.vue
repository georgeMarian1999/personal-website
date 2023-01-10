<script setup>
import MicrosoftIcon from "@/components/svg-components/MicrosoftIcon.vue";
import CloudIcon from "@/components/svg-components/CloudIcon.vue";
</script>

<template>
  <div class="row align-content-center justify-content-around">
    <div class="col-6 col-lg-3 course-page-card">
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Course type</div>
        <div class="col-12 mt-2">Online</div>
        <div class="col-12 mt-2">
          <CloudIcon />
        </div>
      </div>
    </div>
    <div class="col-6 col-lg-3 course-page-card">
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Teams code</div>
        <div class="col-12 mt-2">
          <MicrosoftIcon />
        </div>
        <div class="col-12 mt-2"><b>AxBv56</b></div>
      </div>
    </div>
    <div class="col-12 col-lg-3 course-page-card">
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Grading</div>
        <div class="col-12 mt-2">40% Project</div>
        <div class="col-12 mt-2">30% Laboratories</div>
        <div class="col-12 mt-2">30% Final exam</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
