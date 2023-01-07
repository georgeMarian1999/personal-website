<script setup></script>

<template>
  <div class="contact-footer row align-content-center">
    <div class="col-3 email-contact height-full">
      <div class="row justify-content-center">Please email me at:</div>
      <div class="row justify-content-center">mariangeorge@scs.ubbcluj.ro</div>
    </div>
    <div class="col-6 location-contact height-full"></div>
    <div class="col-3 phone-contact height-full"></div>
  </div>
</template>

<style lang="scss">
.contact-footer {
  color: var(--headings-text);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 60px;
  border-top: 1px solid var(--primary-color);
}

.email-contact {
  background: var(--component-background-color);
  color: var(--headings-text);
  font-weight: 500;
  padding-top: 6px;
  border-right: 1px solid var(--primary-color);
}

.location-contact {
  border-right: 1px solid var(--primary-color);
  background: var(--component-background-color);
}

.phone-contact {
  background: var(--component-background-color);
}
</style>
