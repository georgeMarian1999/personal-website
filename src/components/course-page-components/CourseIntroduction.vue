<script setup>
function openDisciplineFile() {
  window.location.href =
    "https://www.cs.ubbcluj.ro/files/curricula/2022/syllabus/MIR_sem6_MLR5015_ro_diana.sotropa_2022_7339.pdf";
}
</script>

<template>
  <div class="row align-content-center justify-content-center">
    <div class="col-6">
      <div class="row">
        <div class="col-12 mt-4 text-align-center">
          <h1>Course page</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-align-center">
          <p>
            Web development is the work involved in developing a website for the
            Internet or an intranet. Web development can range from developing a
            simple single static page of plain text to complex web applications,
            electronic businesses, and social network services
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-align-center">
          <button class="btn btn-primary" @click="openDisciplineFile">
            Discipline file
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
