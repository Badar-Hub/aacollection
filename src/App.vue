<template>
  <q-layout view="hHh lpR fFf">
    <Header @button-clicked="leftDrawerOpen = !leftDrawerOpen" />

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <div class="row menu-mobile q-mt-md">
        <h6 class="q-my-sm">AA COLLECTION Oy</h6>
      </div>
      <hr class="full-width" />
      <div class="row menu-mobile q-mt-md">
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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer id="contact" />
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      leftDrawerOpen,
    };
  },
});
</script>

<style lang="scss">
.cl-white {
  color: white !important;
}
.cl-black {
  color: black !important;
}

.no-underline {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
body {
  a {
    font-family: Montserrat;
  }
  h6 {
    font-family: Montserrat;
  }
  h5 {
    font-family: Montserrat;
  }
  h4 {
    font-family: Montserrat;
  }
  h3 {
    font-family: Montserrat;
  }
  h2 {
    font-family: Montserrat;
  }
  h1 {
    font-family: Montserrat;
  }
  p {
    font-family: Montserrat;
  }
  li {
    font-family: Montserrat;
  }
}
.info-bold {
  font-weight: 800;
}
.max-width-center {
  max-width: 1200px;
  margin: auto;
}
.info-semi-bold {
  font-weight: 600;
}
.q-carousel__slide {
  background-position: unset !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  @media (max-width: 750px) {
    background-size: contain !important;
  }
}

#slide {
  -webkit-animation: slide 0.5s forwards;
  -webkit-animation-delay: 2s;
  animation: slide 0.5s forwards;
  animation-delay: 2s;
}

@-webkit-keyframes slide {
  100% {
    left: 0;
  }
}

@keyframes slide {
  100% {
    left: 0;
  }
}
$color: #ea9a55;

.menu-mobile {
  margin-left: 40px;
  a {
    color: black;
    text-decoration: none;
    font-size: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
