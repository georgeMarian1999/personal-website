<script>
import { defineComponent } from "vue";
import ContactMe from "@/components/svg-components/ContactMe.vue";

export default defineComponent({
  components: { ContactMe },
});
</script>
<template>
  <div class="container contact-me-container">
    <div class="row height-full position-relative">
      <ContactMe class="contact-me" />
    </div>
  </div>
</template>

<style scoped>
.contact-me-container {
  min-height: 500px;
  z-index: 1;
}

.contact-me {
  position: absolute;
  left: 30px;
  top: 5px;
}
</style>
