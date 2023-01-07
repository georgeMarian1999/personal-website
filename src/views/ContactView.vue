<template>
  <div class="contact">
    <ContactContent />
    <ContactFooter />
  </div>
</template>
<script setup>
import ContactFooter from "@/components/contact-components/ContactFooter.vue";
import ContactContent from "@/components/contact-components/ContactContent.vue";
</script>

<style>
.contact {
  margin-bottom: 70px;
}
</style>
