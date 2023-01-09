<script setup>
import mobilePicture from "@/assets/pictures/mobile.jpg";
</script>

<template>
  <div class="section-card position-relative">
    <div class="container height-full">
      <div class="row align-content-center height-full justify-content-end">
        <div class="about-me-image d-none d-sm-block">
          <img :src="mobilePicture" alt="Mobile" height="250" />
        </div>
        <div class="col-12 col-md-8 about-me-description">
          <div class="row">
            <h2>Who I am</h2>
          </div>
          <div class="row align-content-center justify-content-center">
            <p>
              I am a university professor currently teaching at Babes-Bolyai
              University, Faculty of Mathematics and Informatics. My domain of
              interests are Artificial Intelligence and Web Programming. I am
              teaching Web Programming and AI in the first semester, and in the
              second semester I am teaching Mobile App Development.
            </p>
          </div>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>

<style lang="scss">
.about-me-image {
  position: absolute;
  z-index: 0;
  left: 0;
  padding-left: 0 !important;
  top: 0;
}

.about-me-description {
  position: relative;
  z-index: 3;
  min-height: 180px;
  // margin-top: 10px;
  border-radius: 3px;
  padding-left: 25px !important;
  padding-top: 25px;
  // margin-right: 45px;
  background: var(--component-background-color);
}
</style>
