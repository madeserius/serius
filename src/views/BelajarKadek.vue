<template>
  <div id="vueApp">
    <h3>Belajar Serius {{ subject }}</h3>
    <button v-on:click="MakeItfune">Make it fun</button>

    <!-- <p>number : {{ number }}</p>
    <p>kadek : {{ kadek }}</p>
    <p>kiki : {{ kiki }}</p>
    <p>fadel : {{ fadel }}</p> -->
  </div>
</template>

<script>
export default {
  name: "belajar kadek",
  data() {
    const subject = {};
    return {
      subject: "vuejs",
      //   kadek: "",
      //   kiki: "",
      //   fadel: "++++",
      //   number: 0,
    };
  },
  mounted() {
    makeItfun();
    this.subject = this.subject + "!!";

    // setInterval(() => {
    //     this.number = this.number + 1;
    //     if (this.number == 20) {
    //       this.kadek = "sekarang angka 20";
    //     } else if (this.number > 25) {
    //       this.kadek =
    //         "tadi udah " + this.kadek + "sekarang angka " + this.number;
    //     } else {
    //       this.kadek = "kadek fadel " + this.number;
    //     }
    //     this.kadek = this.kadek + "kadek fadel " + this.number;
    // });

    // setInterval(() => {
    //   this.kiki = this.kiki + "+";
    // }, 1500);
    // setInterval(() => {
    //   this.fadel = this.fadel + "+";
    // }, 700);
    vue.createApp(sample).mount("#vueApp");
  },
};
</script>

<style lang="scss" scoped>
</style>