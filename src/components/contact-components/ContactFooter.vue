<script setup></script>

<template>
  <div class="contact-footer row align-content-center justify-content-between">
    <div class="col-6 d-none d-lg-block col-md-6 email-contact">
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
      <div class="row align-content-center mb-3 justify-content-center">
        <div class="col-4">
          <button
            class="btn btn-primary"
            data-bs-target="#scheduleModal"
            data-bs-toggle="modal"
          >
            See schedule
          </button>
        </div>
      </div>
    </div>

    <div class="col-12 d-lg-none col-md-6 location-contact">
      <div class="row align-content-center justify-content-center">
        You can find me Monday, Tuesday, Thursday and Friday in the FSEGA
        building.
      </div>
      <div class="row align-content-center mb-2 justify-content-center">
        <div class="col-4">
          <button
            class="btn btn-primary mb-1"
            data-bs-target="#scheduleModal"
            data-bs-toggle="modal"
          >
            See schedule
          </button>
        </div>
      </div>
    </div>
    <div class="col-6 d-lg-none col-md-6 email-contact">
      <div class="row height-full align-content-center justify-content-center">
        <div class="row justify-content-center">Please email me at:</div>
        <div class="row justify-content-center">
          mariangeorge@scs.ubbcluj.ro
        </div>
      </div>
    </div>

    <div
      id="scheduleModal"
      aria-hidden="true"
      aria-labelledby="scheduleModalLabel"
      class="modal fade"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              id="exampleModalLabel"
              class="modal-title color-headings-text fs-5"
            >
              Meeting schedule
            </h1>
          </div>
          <div class="modal-body">
            <p>
              You can find me in the FSEGA building: Strada Teodor Mihali 58-60,
              Cluj-Napoca 400591 at these hours
            </p>
            <br />
            <p>Monday: Between 10:00 AM - 12:00 PM and 14:00 PM and 16:00 PM</p>
            <br />
            <p>
              Tuesday: Between 10:00 AM - 12:00 PM and 14:00 PM and 16:00 PM
            </p>
            <br />
            <p>
              Thursday: Between 10:00 AM - 12:00 PM and 14:00 PM and 16:00 PM
            </p>
            <br />
            <p>Friday: Between 10:00 AM - 12:00 PM and 14:00 PM and 16:00 PM</p>
            <br />
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .modal-dialog {
    min-width: 600px;
  }
}

@media (max-width: 600px) {
  .modal-dialog {
    max-width: 550px;
  }
}

.modal-dialog {
  .modal-content {
    z-index: 20 !important;
  }
}

#scheduleModal {
  // background: black;
}

.modal-header {
  background: var(--component-background-color);
}

.modal-body {
  background: var(--component-background-color);
}

.modal-footer {
  background: var(--component-background-color);
}

.contact-footer {
  color: var(--headings-text);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 7;
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

@media (max-width: 600px) {
  .email-contact,
  .phone-contact {
    font-size: 12px;
  }
}
</style>
