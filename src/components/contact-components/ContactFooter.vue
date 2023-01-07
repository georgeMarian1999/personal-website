<script setup></script>

<template>
  <div class="contact-footer row align-content-center">
    <div class="col-6 d-none d-lg-block col-md-3 email-contact">
      <div class="row height-full align-content-center justify-content-center">
        <div class="row justify-content-center">Please email me at:</div>
        <div class="row justify-content-center">
          mariangeorge@scs.ubbcluj.ro
        </div>
      </div>
    </div>
    <div class="col-12 d-none d-lg-block col-md-6 location-contact">
      <div class="row align-content-center justify-content-center">
        You can find me Monday, Tuesday, Thursday and Friday in the FSEGA
        building.
      </div>
      <div class="row align-content-center justify-content-center">
        Please see the detailed schedule for all the hours.
      </div>
      <div class="row align-content-center mb-3 justify-content-center">
        <div class="col-4">
          <button class="btn btn-primary">See schedule</button>
        </div>
      </div>
    </div>
    <div class="col-6 d-none d-lg-block col-md-3 phone-contact">
      <div class="row height-full align-content-center justify-content-center">
        <div class="row align-content-center justify-content-center">
          In case of emergencies text me at:
        </div>
        <div class="row align-content-center justify-content-center">
          + 1 (313) (4048) (290)
        </div>
      </div>
    </div>

    <div class="col-12 d-lg-none col-lg-6 location-contact">
      <div class="row align-content-center justify-content-center">
        You can find me Monday, Tuesday, Thursday and Friday in the FSEGA
        building.
      </div>
      <div class="row align-content-center justify-content-center">
        Please see the detailed schedule for all the hours.
      </div>
      <div class="row align-content-center mb-2 justify-content-center">
        <div class="col-4">
          <button class="btn btn-primary mb-1">See schedule</button>
        </div>
      </div>
    </div>
    <div class="col-6 d-lg-none col-lg-3 email-contact">
      <div class="row height-full align-content-center justify-content-center">
        <div class="row justify-content-center">Please email me at:</div>
        <div class="row justify-content-center">
          mariangeorge@scs.ubbcluj.ro
        </div>
      </div>
    </div>
    <div class="col-6 d-lg-none col-lg-3 phone-contact">
      <div class="row align-content-center justify-content-center">
        In case of emergencies text me at:
      </div>
      <div class="row align-content-center justify-content-center">
        + 1 (313) (4048) (290)
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contact-footer {
  color: var(--headings-text);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  margin: auto;
  min-height: 60px;
  border-top: 1px solid var(--primary-color);
}

.email-contact {
  background: var(--component-background-color);
  color: var(--headings-text);
  font-weight: 500;
  padding-top: 6px;
  min-height: 60px;
  border-right: 1px solid var(--primary-color);
}

.location-contact {
  text-align: center;
  border-right: 1px solid var(--primary-color);
  background: var(--component-background-color);
  min-height: 60px;

  .row:nth-child(2) {
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .row:nth-child(3) {
    margin-top: 10px;
  }

  button {
    background: var(--primary-color);
  }
}

.d-lg-none.location-contact {
  border-bottom: 1px solid var(--primary-color);
  border-right: none;
}

.phone-contact {
  min-height: 60px;
  background: var(--component-background-color);
  color: var(--headings-text);
  font-weight: 500;
  text-align: center;
  padding-top: 6px;
}
</style>
