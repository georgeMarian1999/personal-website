<script setup></script>

<template>
  <div class="form container padding-top-l">
    <div class="row mb-4 position-relative justify-content-center">
      <input id="formYourName" class="form-control" type="text" />
      <label class="form-label" for="formYourName">Your name</label>
    </div>
    <div class="row mb-4 position-relative justify-content-center">
      <input id="formYourEmail" class="form-control" type="text" />
      <label class="form-label" for="formYourEmail">Your email</label>
    </div>
    <div class="row mb-4 justify-content-center position-relative">
      <select class="form-select">
        <option hidden selected>Choose an option</option>
        <option value="1">Web Programming</option>
        <option value="2">Artificial Intelligence</option>
        <option value="3">Mobile Development</option>
      </select>
      <label>Select the course you are attending.</label>
    </div>
    <div class="row mb-4 justify-content-center position-relative">
      <textarea
        id="formTextArea"
        class="form-control"
        placeholder="Your question"
        rows="3"
      />
    </div>
    <div class="row mb-4 justify-content-center">
      <input id="formTextArea" class="form-control" type="submit" />
    </div>
  </div>
</template>

<style lang="scss">
.form {
  height: 100%;

  .row {
    // border: 1px solid red;
    margin-top: 45px;

    label {
      max-width: 50%;
      text-align: left;
      padding-left: 0 !important;
      position: absolute;
      top: 7px;
      color: var(--body-text);
    }

    input,
    textarea,
    select {
      max-width: 50%;
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
    }
  }
}
</style>
