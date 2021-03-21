<template>
  <Header />
  <router-view />
  <Footer id="contact" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
export default defineComponent({
  name: "Home",
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
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
</style>
