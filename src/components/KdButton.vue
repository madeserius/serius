<template>
  <div class="bg-blue-500 mt-2 mp-2">
    <button
      class="
        bg-red-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
      v-on:click="count++"
    >
      <slot></slot> you click me{{ count }} times.
    </button>
    <p>ini angka nya {{ count }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "KdButton",
  data() {
    return {
      count: 0,
    };
  },
};
</script>
