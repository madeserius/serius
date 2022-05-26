<template>
  <div id="vueApp">
    <h3>Belajar Serius {{ subject }}</h3>
    <p>number : {{ number }}</p>
    <p>kadek : {{ kadek }}</p>
    <p>kiki : {{ kiki }}</p>
    <p>fadel : {{ fadel }}</p>
  </div>
</template>

<script>
// vue.createApp(sample).mount("#vueApp");
export default {
  name: "belajar kadek",
  data() {
    const subject = "";
    return {
      subject: "vuejs",
      kadek: "++++++++++",
      kiki: "++",
      fadel: "++++",
      number: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.number++;
      this.kadek = this.kadek + "+";
    }, 1000);

    setInterval(() => {
      this.kiki = this.kiki + "+";
    }, 1500);
    setInterval(() => {
      this.fadel = this.fadel + "+";
    }, 700);
  },
};
</script>

<style lang="scss" scoped>
</style>