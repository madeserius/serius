<template>
  <div>
    <input type="text" v-model="subject" />
    <h3>Belajar {{ subject }}</h3>
    <button
      v-on:click="makeItfun()"
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
    <button
      v-on:click="check()"
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
    >
      Check Subject
    </button>
    <button
      v-on:click="hapus()"
      class="
        bg-red-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
    >
      hapus
    </button>
    <button
      v-on:click="fajri()"
      class="
        bg-pink-900
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
    >
      fajri
    </button>
    <button
      v-on:click="fadel()"
      class="
        bg-green-500
        hover:bg-red-500
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
    >
      +
    </button>
    <p>nilai {{ score }}</p>
  </div>
</template>

<script>
export default {
  // subject: "VueJs",
  data() {
    return {
      subject: "VueJs",
      score: 0,
    };
  },
  methods: {
    fadel() {
      this.subject = "fadel";
      this.score = this.score + 20;
    },
    fajri() {
      this.subject = "fajri";
      this.score = this.score + 90 / 10;
    },
    hapus() {
      this.subject = "";
      this.score = 0;
    },
    makeItfun() {
      this.subject = this.subject + "!!!!";
    },
    check() {
      console.log("cek masuk");
      if (this.subject === "fajri") {
        this.score = 100;
      } else {
        this.score = -50;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>