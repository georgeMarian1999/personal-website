<script>
import { defineComponent } from "vue";
import ContactForm from "@/components/contact-components/ContactForm.vue";
import ContactPicture from "@/components/contact-components/ContactPicture.vue";

export default defineComponent({
  components: { ContactPicture, ContactForm },
});
</script>

<template>
  <div class="section-card container-fluid height-full contact-content">
    <div class="row height-full">
      <div class="col-12 col-lg-6 contact-form-col">
        <ContactForm />
      </div>
      <div class="col-12 col-lg-6">
        <ContactPicture />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-content {
  height: auto;
}

.contact-form-col {
  border-right: 1px solid var(--primary-color);
}
</style>
