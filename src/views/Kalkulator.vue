<template>
  <div>
    <input type="text" v-model="name" />
    <input type="number" v-model="age" />
    <p>Namanya {{ name }}, umur {{ age }}, {{ expression }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "hilaman",
      age: 100,
    };
  },
  computed: {
    expression() {
      if (this.age > 50) return "tua sekali";
      else return "muda sekali";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>