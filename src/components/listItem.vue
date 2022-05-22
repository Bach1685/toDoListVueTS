<template>
  <div>
    <p>{{ item.value }}</p>
    <button v-if="!item.isDone" @click="mark(item.id)">Сделать</button>
    <button @click="remove(item.id)">Удалить</button>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
export default {
  props: {
    item: {
      required: true,
    },
  },
  methods: {
    ...mapMutations(["mark", "remove"]),
  },
};
</script>