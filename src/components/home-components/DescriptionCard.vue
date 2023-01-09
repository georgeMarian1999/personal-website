<script setup>
import ProfilePicture from "@/components/home-components/ProfilePicture.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToContact = () => {
  router.push({ name: "contact" });
};
</script>
<template>
  <div class="section-card">
    <div class="container height-full padding-left-l">
      <div
        class="row height-full align-content-center justify-content-around"
        style="min-height: 250px"
      >
        <div class="col-12 col-md-7 description-text">
          <div
            class="text-row row height-full align-content-around position-relative"
          >
            <div class="row">
              <div class="col">Marian Mihailescu George</div>
            </div>
            <div class="row">
              <h2 class="col">University Professor</h2>
            </div>
            <div class="row">
              <h5 class="col">Babes-Bolyai University</h5>
            </div>
            <div class="row">
              <h6 class="col">Faculty of Mathematics and Informatics</h6>
            </div>
            <div class="row">
              <div class="col">
                <button
                  class="btn btn-primary"
                  style="margin-top: 10px"
                  type="button"
                  @click="navigateToContact"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 profile-picture-col">
          <div class="row mt-3 align-content-center justify-content-center">
            <ProfilePicture></ProfilePicture>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.description-text {
  z-index: 2;
  background: var(--component-background-color);
}

@media (max-width: 768px) {
  .text-row {
    margin-top: 1.5rem !important;

    .row {
      text-align: center;
    }
  }
}
</style>
