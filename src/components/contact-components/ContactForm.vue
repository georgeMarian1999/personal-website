<script setup>
import { ref } from "vue";
import * as bootstrap from "bootstrap/dist/js/bootstrap";
import ContactToast from "@/components/contact-components/ContactToast.vue";
import * as emailjs from "emailjs-com";

const serviceID = "service_k5eaprq";
const templateID = "template_o0sdkln";
const userID = "9ioZXMTRxCIp1rje6";

const name = ref("");
const email = ref("");
const topic = ref("");
const message = ref("");

const sendEmail = (e) => {
  try {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, e.target, userID);
    const toastLiveExample = document.getElementById("successToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
    name.value = "";
    email.value = "";
    topic.value = "";
    message.value = "";
  } catch (error) {
    console.log({ error });
  }
};
</script>

<template>
  <form class="form container padding-top-l" @submit="sendEmail">
    <div class="row mb-4 position-relative justify-content-center">
      <input
        id="formYourName"
        v-model="name"
        class="form-control"
        name="name"
        type="text"
      />
      <label
        :class="{ focused: name.length !== 0 }"
        class="form-label"
        for="formYourName"
        >Your name</label
      >
    </div>
    <div class="row mb-4 position-relative justify-content-center">
      <input
        id="formYourEmail"
        v-model="email"
        class="form-control"
        name="email"
        type="text"
      />
      <label
        :class="{ focused: email.length !== 0 }"
        class="form-label"
        for="formYourEmail"
        >Your email</label
      >
    </div>
    <div class="row mb-4 justify-content-center position-relative">
      <select v-model="topic" class="form-select" name="topic">
        <option hidden selected>Choose an option</option>
        <option value="Course: Web Programming">Course: Web Programming</option>
        <option value="Course: Artificial Intelligence">
          Course: Artificial Intelligence
        </option>
        <option value="Course: Mobile Development">
          Course: Mobile Development
        </option>
        <option value="Bachelor/Dissertation collaboration">
          Bachelor/Dissertation collaboration
        </option>
      </select>
      <label>Select the topic</label>
    </div>
    <div class="row mb-4 justify-content-center position-relative">
      <textarea
        id="formTextArea"
        v-model="message"
        class="form-control"
        name="message"
        placeholder="Your question"
        rows="3"
      />
    </div>
    <div class="row mb-4 justify-content-center">
      <input
        id="formTextArea"
        :disabled="
          email.length === 0 ||
          name.length === 0 ||
          topic.length === 0 ||
          message.length === 0
        "
        class="form-control"
        type="submit"
      />
    </div>
  </form>
  <ContactToast />
</template>

<style lang="scss">
.form {
  height: 100%;

  .row {
    // border: 1px solid red;
    margin-top: 45px;

    label {
      max-width: 70%;
      text-align: left;
      padding-left: 1px !important;
      position: absolute;
      top: 7px;
      color: var(--body-text);
    }

    input,
    textarea,
    select {
      max-width: 70%;
      background: var(--component-background-color);
      color: var(--headings-text);
      border-right: none;
      padding-left: 2px !important;
      border-left: none;
      border-top: none;
      border-radius: 0;

      option[selected] {
        color: var(--headings-text);
        background-color: var(--headings-text);
      }
    }

    input[type="text"] + label {
      transition: all 0.3s ease-in-out;
    }

    input[type="text"]:focus + label {
      font-size: 11px;
      color: var(--headings-text);
      transform: translateY(-17px);
    }

    select + label {
      transition: all 0.3s ease-in-out;
      top: -23px;
    }

    select:focus + label {
      font-size: 11px;
      color: var(--headings-text);
      transform: translateY(8px);
    }

    input:focus,
    select:focus,
    textarea:focus {
      box-shadow: none;
    }

    input[type="submit"] {
      background: var(--primary-color);
      border: none !important;
      max-width: 50%;
    }

    input[type="submit"]:disabled {
      background: gray;
    }
  }

  label.focused {
    font-size: 11px;
    color: var(--headings-text);
    transform: translateY(-17px);
  }
}

@media (max-width: 768px) {
  .form {
    .row {
      label {
        // min-
      }
    }
  }
}
</style>
