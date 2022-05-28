<template>
  <div>
    <h3>Belajar {{ subject }}</h3>
    <button
      @click="makeItfun()"
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
      "
    >
      Make it fun
    </button>
  </div>
</template>

<script>
export default {
  subject: "Vuehs",
  data() {
    return {
      subject: "Vuejs",
    };
  },
  methods: {
    makeItfun() {
      this.subject = this.subject + "!!!!";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>