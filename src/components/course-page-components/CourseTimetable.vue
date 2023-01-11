<script setup>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import rrulePlugin from "@fullcalendar/rrule";

const calendarOptions = {
  initialView: "dayGridMonth",
  plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
  events: [
    {
      title: "Lecture",
      rrule: {
        freq: "weekly",
        interval: 1,
        dtstart: "2023-01-11T13:00:00", // will also accept '20120201T103000'
        until: "2023-03-01", // will also accept '20120201'
      },
      description: "Lecture for the course",
    },
  ],
  eventTimeFormat: {
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short",
  },
  headerToolbar: {
    center: "dayGridMonth,dayGridWeek", // buttons for switching between views
  },
  title: "Timetable",
};
</script>

<template>
  <div class="row mb-4 text-align-center">
    <div class="col-12">
      <h3>Course Timetable</h3>
    </div>
  </div>
  <div class="row align-content-center justify-content-center">
    <div class="col-10">
      <FullCalendar :options="calendarOptions"></FullCalendar>
    </div>
  </div>
</template>

<style lang="scss"></style>
