<template>
  <div class="container">
    <h3>Belajar Vue.Js</h3>
    <ol start="12" v-if="statusJangan">
      <li v-for="subject in subjects" v-bind:key="subject.title">
        {{ subject.title }}-type-{{ subject.type }}
      </li>
    </ol>
    <div v-else>
      <p>ok</p>
    </div>
    <button
      v-on:click="changeStatus()"
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      subjects: [
        { title: "JavaScript", type: "Native" },
        { title: "Vue", type: "Framework" },
        { title: "React", type: "Framework" },
      ],
      statusJangan: false,
    };
  },
  methods: {
    changeStatus() {
      this.statusJangan = !this.statusJangan;
    },
  },
};
</script>

<style>
ol,
ul {
  list-style-type: decimal;
  list-style-position: inside;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 0px;
}
</style>