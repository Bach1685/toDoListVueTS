<template>
  <section class="section">
    <div class="list">
      <h2>To do</h2>
      <tasks-list :list="toDoList" />
    </div>
    <div class="list">
      <h2>Done</h2>
      <tasks-list :list="doneList" />
    </div>
    <adding-form />
  </section>
</template>

<script lang="ts">
import tasksList from "./components/tasksList.vue";
import addingForm from "./components/addingForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    tasksList,
    addingForm,
  },
  computed: mapGetters(["toDoList", "doneList"]),
};
</script>

<style>
.section {
  display: flex;
  gap: 50px;
}

.list {
  width: 300px;
}
</style>
