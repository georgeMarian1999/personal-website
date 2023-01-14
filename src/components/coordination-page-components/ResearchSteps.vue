<script setup>
import { ref } from "vue";
import StepsList from "@/components/coordination-page-components/StepsList.vue";

const steps = ref([
  {
    id: 1,
    title: "Understand the Research Paper Assignment",
    description:
      "Before starting your research paper, it is important to understand the assignment. Read the instructions carefully and make sure you understand them. If you have any questions, ask your professor for clarification",
  },
  {
    id: 2,
    title: "Choose an Engaging Topic for Your Research Paper",
    description:
      "Brainstorm some research topics and select one that interests you. Consider the scope of your topic and make sure it is appropriate for the length of your paper.",
  },
  {
    id: 3,
    title: "Start Searching for Reputable Sources",
    description:
      " Look for sources that are relevant to your topic and can be used to support your thesis. Use online databases, library catalogs, and other resources to find the materials you need.",
  },
  {
    id: 4,
    title: "Gather the Relevant Materials",
    description:
      "Collect the materials you’ve found and read them thoroughly to understand the topic more deeply. Use notes to identify the most important points and to keep track of the sources you’ve used.",
  },
  {
    id: 5,
    title: "Organize Your Research",
    description:
      "Take the time to organize your research material. Create an outline that will help you structure your paper.",
  },
  {
    id: 6,
    title: "Formulate a Thesis Statement",
    description:
      "After doing some background research and gathering materials, develop a thesis statement. This statement will serve as the main idea for your paper.",
  },
  {
    id: 7,
    title: "Write the First Draft of Your Research Paper",
    description:
      "Now it’s time to write your rough draft. This is the first version of your paper and should be written as quickly as possible. It doesn’t have to be perfect, but it should include all the main points you’ve gathered in your research.",
  },
  {
    id: 8,
    title: "Revise, Edit, and Proofread Your Paper",
    description:
      " After completing the rough draft, go back and make revisions. Make sure your paper is well-structured and free of grammar and spelling errors.",
  },
  {
    id: 9,
    title: "Finalize Your Research Paper",
    description:
      "Once you have revised and edited your paper, it’s time to finalize it. Make sure that all the sources you’ve used are properly cited, and that your paper follows the required format.",
  },
]);
</script>

<template>
  <div class="row research-steps-description">
    <div class="col-12">
      <h3>Steps in writing a research paper</h3>
    </div>
    <div class="col-12">
      <StepsList :items="steps" />
    </div>
  </div>
</template>

<style lang="scss">
.research-steps-description {
  min-height: 500px;
  padding: 40px;
  background: var(--component-background-color);

  .col-12 {
    background: var(--background-color);
    color: var(--headings-text);
    padding: 40px 120px;
    font-size: 22px;
  }
}
</style>
