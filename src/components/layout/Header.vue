<template>
  <div>
    <div class="row header-top q-pa-sm header-fixed">
      <div class="col-xs-6 q-my-auto">
        <div class="row full-width">
          <img class="custom-flag" src="@/assets/images/flag.jpeg" />
          <router-link to="/" class="no-underline">
            <p
              :style="currentWidth <= 500 ?? 'font-size: 14px'"
              class="q-my-auto q-px-sm cl-white"
            >
              <strong>AA COLLECTION Oy</strong>
            </p>
          </router-link>
        </div>
      </div>
      <div class="col-xs-6 q-my-auto">
        <div class="row full-width justify-end">
          <img class="custom-flag" src="@/assets/images/phone.png" />
          <strong>
            <a
              :style="currentWidth <= 500 ?? 'font-size: 14px'"
              class="cursor-pointer q-my-auto q-px-sm cl-white no-underline"
              href="tel:+358-41-315-7488"
              >+358 41 3157488</a
            >
          </strong>
        </div>
      </div>
    </div>
    <div class="header-main">
      <header>
        <div class="row center-mobile-responsive-menu">
          <div class="q-my-auto">
            <div class="logo q-my-auto">
              <router-link to="/">AA COLLECTION</router-link>
            </div>
          </div>
          <div v-if="currentWidth >= 550">
            <div class="row full-width">
              <router-link to="/gallery/dresses">
                <h6 class="q-my-sm">Mittatilausompelu</h6>
              </router-link>
              <router-link to="/gallery/makrama">
                <h6 class="q-my-sm">Makramesolmeulu ja - Kurssit</h6>
              </router-link>
              <router-link to="/gallery/mandi">
                <h6 class="q-my-sm">Hennatatuointi</h6>
              </router-link>
            </div>
          </div>
          <div v-else class="col-xs-6 text-right mobile-menu-icon q-my-sm">
            <q-btn icon="menu" @click="$emit('button-clicked')" />
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['button-clicked'],

  setup() {
    const currentWidth = window.innerWidth;

    return {
      currentWidth,
    };
  },
});
</script>

<style lang="scss">
.mobile-menu-icon {
  i {
    color: white;
  }
}
.center-mobile-responsive-menu {
  justify-content: space-between;
  @media (max-width: 950px) {
    justify-content: center;
  }
}
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
  padding-top: 39px;
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
}
header {
  display: flex;
  flex-direction: row;
  margin: auto;
  // max-width: 1200px;
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
    color: white;
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
