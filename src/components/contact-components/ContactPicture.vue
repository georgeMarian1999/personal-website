<script>
import { defineComponent } from "vue";
import ContactMe from "@/components/svg-components/ContactMe.vue";

export default defineComponent({
  components: { ContactMe },
});
</script>
<template>
  <div class="row position-relative">
    <ContactMe class="contact-me" />
  </div>
</template>

<style scoped>
.contact-me {
  position: absolute;
  left: 30px;
  top: 5px;
}
</style>
