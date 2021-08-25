<template>
  <div class="header-fixed">
    <div class="row header-top q-pa-sm">
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <div class="row full-width">
          <img class="custom-flag" src="@/assets/images/flag.jpeg" />
          <p class="q-my-auto q-px-sm cl-white">AA COLLECTION Oy</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <div class="row full-width justify-end">
          <img class="custom-flag" src="@/assets/images/phone.png" />
          <p class="q-my-auto q-px-sm cl-white">
            <strong>+358 41 3157488</strong>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="header-main">
      <header>
        <div class="row justify-between">
          <div class="logo q-my-auto">
            <router-link to="/">AA COLLECTION</router-link>
          </div>
          <nav class="q-my-auto">
            <ul>
              <a href="#home">Henkilötiedot</a>
              <a href="#about">Työkokemus</a>
              <a href="#skills">Osaamiskansio</a>
              <a href="#contact">Sijainti</a>
            </ul>
          </nav>
        </div>
      </header>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style lang="scss">
.header-fixed {
  position: fixed;
  width: 100%;
}
.header-top {
  background-color: #414141;
  .custom-flag {
    width: 23px;
    height: 23px;
  }
}
.header-main {
  background-color: #ea9a55;
}
nav {
  @media (max-width: 550px) {
    margin: auto;
  }
  overflow: hidden;
  ul {
    @media (max-width: 597px) {
      padding: 0px;
    }
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
  background-color: #ea9a55;
  @media (max-width: 500px) {
    padding: 0px;
  }
  a {
    padding-right: 20px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    @media (max-width: 570px) {
      padding-right: 10px;
      font-size: 16px;
    }
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
