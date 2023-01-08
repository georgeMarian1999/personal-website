<script setup></script>

<template>
  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div
      id="successToast"
      aria-atomic="true"
      aria-live="assertive"
      class="toast"
      role="alert"
    >
      <div class="toast-header">
        <strong class="me-auto">Success</strong>
        <small>Just now!</small>
        <button
          aria-label="Close"
          class="btn-close"
          data-bs-dismiss="toast"
          type="button"
        ></button>
      </div>
      <div class="toast-body">The message was sent successfully.</div>
    </div>
  </div>
</template>

<style lang="scss">
.toast-header {
  color: white;
  background: var(--primary-color);
}

#successToast {
  top: 0;
  background: var(--component-background-color);
}
</style>
