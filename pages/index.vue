<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.mainMethod();
  },
  methods: {
    mainMethod() {
      console.log("Home Page");
    },
  },
};
</script>
