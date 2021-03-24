<template>
  <div class="header-main">
    <header>
      <div class="row justify-between">
        <div class="logo q-my-auto">
          <router-link to="/">Badar Abdullah</router-link>
        </div>
        <nav class="q-my-auto">
          <ul>
            <router-link to="#home">Home</router-link>
            <router-link to="#about">About</router-link>
            <router-link to="#skills">Skiils</router-link>
            <router-link to="#experience">Experience</router-link>
            <router-link to="#portfolio">Education</router-link>
            <router-link to="#contact">Contact Us </router-link>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.header-main {
  background-color: #000000;
}
nav ul li a {
  @media (max-width: 597px) {
    padding: 0px;
  }
}
.logo {
  a {
    font-size: 25px;
  }
  @media (max-width: 597px) {
    margin: auto;
  }
}
header {
  display: flex;
  flex-direction: row;
  margin: auto;
  max-width: 1200px;
  width: 100%;
  padding: 5px;
  background-color: #000000;
  a {
    padding-right: 20px;
    font-size: 18px;
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
