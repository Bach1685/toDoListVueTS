<template>
  <ul>
    <li v-for="item in list" :key="item.id">
      <list-item :item="item" />
    </li>
  </ul>
</template>

<script lang="ts">
import listItem from "./listItem.vue";
export default {
  components: {
    listItem,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>