<template>
  <div class="header-main">
    <header>
      <div class="row justify-between">
        <div class="logo q-my-auto">
          <router-link to="/">AA COLLECTION</router-link>
        </div>
        <nav class="q-my-auto">
          <ul>
            <router-link to="#home">Koti</router-link>
            <router-link to="#about">Noin</router-link>
            <router-link to="#skills">Taidot</router-link>
            <router-link to="#experience">Kokea</router-link>
            <router-link to="#portfolio">Salkku</router-link>
            <router-link to="#contact">Ottaa yhteyttä </router-link>
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
  background-color: #540103;
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
  background-color: #540103;
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
