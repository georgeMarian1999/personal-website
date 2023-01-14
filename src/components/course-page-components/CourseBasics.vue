<script setup>
import MicrosoftIcon from "@/components/svg-components/MicrosoftIcon.vue";
import CloudIcon from "@/components/svg-components/CloudIcon.vue";

function openTeams() {
  window.location.href =
    "https://teams.microsoft.com/l/team/19%3aBDS0rHT0wwhup7BM9PIRAOW5kPRZlMJe4MJTnLzFQ8Y1%40thread.tacv2/conversations?groupId=622548c3-bc48-41f8-b53f-d4b61fe975a3&tenantId=5a4863ed-40c8-4fd5-8298-fbfdb7f13095";
}
</script>

<template>
  <div class="row align-content-center justify-content-around">
    <div class="col-6 mt-4 col-lg-3 course-page-card">
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Course type</div>
        <div class="col-12 mt-2">Online</div>
        <div class="col-12 mt-2">
          <CloudIcon />
        </div>
      </div>
    </div>
    <div
      class="col-6 mt-4 col-lg-3 cursor-pointer course-page-card"
      @click="openTeams"
    >
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Teams code</div>
        <div class="col-12 mt-2">
          <MicrosoftIcon />
        </div>
        <div class="col-12 mt-2"><b>AxBv56</b></div>
      </div>
    </div>
    <div class="col-12 mt-4 col-lg-3 course-page-card">
      <div class="row align-content-center height-full text-align-center">
        <div class="col-12">Grading</div>
        <div class="col-12 mt-2">40% Project</div>
        <div class="col-12 mt-2">30% Laboratories</div>
        <div class="col-12 mt-2">30% Final exam</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
