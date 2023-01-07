<script setup>
import { ref } from "vue";
import * as emailjs from "emailjs-com";

const serviceID = "service_k5eaprq";
const templateID = "template_o0sdkln";
const userID = "9ioZXMTRxCIp1rje6";

const name = ref("");
const email = ref("");
const topic = ref("");
const message = ref("");

const modalShow = ref(false);
const sendEmail = (e) => {
  try {
    emailjs.sendForm(serviceID, templateID, e.target, userID, {
      name: name,
      email: email,
      topic: topic,
      message: message,
    });

    modalShow.value = true;
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
      <select v-model="topic" class="form-select">
        <option hidden selected>Choose an option</option>
        <option value="1">Web Programming</option>
        <option value="2">Artificial Intelligence</option>
        <option value="3">Mobile Development</option>
      </select>
      <label>Select the topic</label>
    </div>
    <div class="row mb-4 justify-content-center position-relative">
      <textarea
        id="formTextArea"
        v-model="message"
        class="form-control"
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

  <b-modal v-model="modalShow">Hello From Modal!</b-modal>
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
