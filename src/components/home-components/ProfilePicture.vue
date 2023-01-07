<script setup>
import profilePicture from "@/assets/pictures/profile.png";
</script>

<template>
  <div class="profile-picture">
    <img :src="profilePicture" alt="profile" class="profile-image" />
  </div>
</template>

<style lang="scss" scoped>
.profile-picture {
  width: 150px;
  background: var(--background-color);
  height: 150px;
  right: 45px;
  top: 15px;
  transform: rotate(45deg);
  position: absolute;
  overflow: hidden;
}

.profile-image {
  max-width: 90%;
  position: absolute;
  top: -20px;
  right: -20px;
  transform: rotate(-45deg);
}
</style>
