<template>
  <p>input 1:</p>
  <div><input type="text" v-model="input1" /></div>
  <br />
  <p>input 2:</p>
  <div><input type="text" v-model="input2" /></div>
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
    C
  </button>
  <button
    v-on:click="kurang()"
    class="
      bg-yellow-500
      hover:bg-blue-700
      text-white
      font-bold
      py-2
      px-4
      rounded-full
    "
  >
    -
  </button>
  <button
    v-on:click="kali()"
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
    x
  </button>
  <button
    v-on:click="bagi()"
    class="
      bg-blue-500
      hover:bg-red-500
      text-white
      font-bold
      py-2
      px-4
      rounded-full
    "
  >
    /
  </button>
  <button
    v-on:click="tambah()"
    class="
      bg-blue-500
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
  <div>
    <p>Hasil : {{ hasil }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: 0,
      input2: 0,
      hasil: 0,
    };
  },
  methods: {
    tambah() {
      this.hasil = parseInt(parseInt(this.input1) + parseInt(this.input2));
    },
    bagi() {
      this.hasil = this.input1 / this.input2;
    },
    kali() {
      this.hasil = this.input1 * this.input2;
    },
    kurang() {
      this.hasil = this.input1 - this.input2;
    },
    hapus() {
      this.input1 = "";
      this.input2 = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>