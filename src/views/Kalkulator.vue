<template>
  <div class="container">
    <h3>Belajar Vue.Js</h3>
    <ol start="12" :class="{ active: isActive }">
      <li v-for="subject in subjects" v-bind:key="subject.title">
        {{ subject.title }}-type-{{ subject.type }}
      </li>
    </ol>
    <button @click="berubah()">Active</button>
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
      isActive: true,
    };
  },
  methods: {
    berubah() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style>
.active {
  color: blue;
}
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