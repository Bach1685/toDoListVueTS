<template>
  <div>
    <div class="form">
      <input type="text" v-model="inputValue" @keyup.enter="add(inputValue)" />
      <button @click="add(inputValue)">Добавить</button>
    </div>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    ...mapMutations(["add"]),
  },
};
</script>

<style>
.form {
  display: flex;
}
</style>
