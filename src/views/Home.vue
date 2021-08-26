<template>
  <div class="home-page">
    <Slider>
      <q-carousel-slide
        :name="1"
        :style="
          `background-image: url(${require(`@/assets/images/Header/header2.jpg`)})`
        "
      />
    </Slider>
    <div class="row justify-center q-my-xl">
      <div style="width: 300px" class="header-box text-center cl-white">
        <h5 class="info-semi-bold q-my-sm">Tietoa yrityksestä</h5>
      </div>
    </div>
    <div class="row max-width-center">
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <div class="row full-width justify-center">
          <img
            class="custom-image"
            src="@/assets/images/profile2.jpeg"
            alt="profile-pic"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <h6 class="q-ma-sm">
          Olen kuopiolainen ompelualan yrittäjä ja ompelen unelmiesi vaatteen
          ammattitaidolla ja laadukkaasti. Minulla on vahva kokemus alalta ja
          päivitän taitojani jatkuvasti. Kun kaipaat kotiisi uutta
          sisustuselementtiä voin valmistaa sen sinulle makrame-solmeilulla.
          Samalla tekniikalla voin tehdä myös asuusi sopivat korut ja laukun.
          Juhlan ja arjen hemmottelun mausteeksi voit tilata minulta
          luonnonmukaisen henna-tatuoinnin.
        </h6>
      </div>
    </div>
    <div class="row max-width-center q-mb-sm q-mt-lg ">
      <img
        class="category-header-image"
        src="@/assets/images/Category/01.jpg"
      />
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="header-box text-center cl-white">
        <h5 class="info-semi-bold q-my-sm">Tuotteet Ja Palvelut</h5>
      </div>
    </div>
    <div class="row max-width-center q-mt-xl">
      <div class="col-xs-12 col-sm-4 q-px-md q-pt-md">
        <router-link to="/gallery/dresses">
          <img
            class="custom-image-edited"
            src="@/assets/images/Category/edited-images/01.png"
          />
        </router-link>
      </div>
      <div class="col-xs-12 col-sm-4 q-px-md q-pt-md">
        <router-link to="/gallery/makrama">
          <img
            class="custom-image-edited"
            src="@/assets/images/Category/edited-images/03.png"
          />
        </router-link>
      </div>
      <div class="col-xs-12 col-sm-4 q-px-md q-pt-md">
        <router-link to="/gallery/mandi">
          <img
            class="custom-image-edited"
            src="@/assets/images/Category/edited-images/02.png"
          />
        </router-link>
      </div>
    </div>
    <div class="row justify-center q-mt-xl">
      <div class="header-box text-center cl-white">
        <h5 class="info-semi-bold q-my-sm">Suositus</h5>
      </div>
    </div>
    <InfoContainer>
      <div class="col-2"></div>
      <div class="col-8 text-center">
        <h5>
          ”Voin lämpimästi suositella AA Collecsonia, mikäli tarvitset kaunista,
          linjakasta ja uudenlaista vaatetusta itsellesi. Työnjälki on
          ainutlaatuista ja toimitus nopeaa” Artenomi Leena Valtonen ””
        </h5>
      </div>
      <div class="col-2"></div>
    </InfoContainer>
    <div class="row justify-center q-my-xl">
      <div class="header-box text-center cl-white">
        <h5 class="info-semi-bold q-my-sm">Yhteystiedot</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Slider from '../components/general/Slider.vue';
import InfoContainer from '../components/general/InfoContainer.vue';

export default defineComponent({
  components: {
    InfoContainer,
    Slider,
  },
});
</script>

<style scopped>
.header-box {
  background-color: #e99a54;
  width: 200px;
  height: 50px;
}
.home-page {
  padding-top: 0px;
}
.text-border-cl {
  background-color: aqua;
  color: black;
}
.custom-image {
  max-width: 141px;
  border-radius: 60%;
  width: 190px;
  height: 190px;
  border: 2px solid #fff;
  box-shadow: 0 6px 5px #ccc;
  border-radius: 190px;
}
.custom-image-edited {
  border-radius: 7%;
  max-width: 500px;
  width: 100%;
}
li {
  font-size: 14px;
}
.basic-info-font {
  font-size: 14px !important;
}
.categories-img {
  max-width: 395px;
  height: 300px;
  width: 100%;
}
.category-header-image {
  max-width: 1200px;
  width: 100%;
}

.self-center {
  align-self: center;
}

.grid-pat {
  display: grid;
  align-items: center;
  height: 100%;
  margin: auto 0;
}

.profile-img {
  max-width: 141px;
  border-radius: 60%;
  width: 190px;
  height: 190px;
  border: 2px solid #fff;
  -moz-box-shadow: 0px 6px 5px #ccc;
  -webkit-box-shadow: 0px 6px 5px #ccc;
  box-shadow: 0px 6px 5px #ccc;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
  border-radius: 190px;
}
</style>
