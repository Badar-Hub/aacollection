<template>
  <div>
    <Slider id="home">
      <q-carousel-slide
        :name="1"
        :style="
          `background-image: url(${require(`@/assets/images/Header/header1.jpg`)})`
        "
      />
    </Slider>
    <InfoContainer id="about">
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-md info-semi-bold">
          Noin
        </h5>
        <h6 class="q-my-sm basic-info-font">
          Hei, olen Afshan Faisal, ammattimainen pukeutumissuunnittelija<br /><br />
          lahjakas ja asiakaslähtöinen suunnittelija, jolla on silmäys
          kaupalliseen muotiin ja yksityiskohtiin tuotteiden muotoilussa, yli 8
          vuoden kokemus.
        </h6>
      </div>
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-md info-semi-bold">Perustiedot</h5>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              IKÄ:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">31</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              EMAIL:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">afshan1790@gmail.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              PUHELIN:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">+358 41 3157488</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              OSOITE:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">
              Kaikukatu 82 as 2, 70600, kuopio
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              KIELI:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">
              Englanti, Urdu, Punjabi, Suomalainen
            </p>
          </div>
        </div>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">Ammattitaito</h5>
    <InfoContainer>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            Suunnittelu ja käsitteelliset taidot
          </li>
          <li>Erinomainen tyyli- ja väritaju</li>
          <li>
            Rakennustekniikat
          </li>
        </div>
      </div>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            Moniajo
          </li>
          <li>Organisaatio</li>
          <li>
            Ajanhallinta
          </li>
        </div>
      </div>
      <div class="col col-xs-4">
        <div class="q-px-sm">
          <li>
            Luonnos
          </li>
          <li>
            Johtajuus
          </li>
          <li>
            Viestintä
          </li>
          <li>
            Esitys
          </li>
        </div>
      </div>
    </InfoContainer>
    <h5 id="experience" class="text-center info-semi-bold">Työkokemus</h5>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            11-02-2020 - Jatkuu edelleen
            <br />
            <strong>
              Työharjoittelussa
              <br />
              NY yritys
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Kokea</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2kk
            <br />
            <strong>
              Työharjoittelussa
              <br />
              Tukeva säätiö
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Kokea</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            1kk
            <br />
            <strong>
              Työharjoittelussa
              <br />
              Alliina Iisalmessa Olen
            </strong>
          </h6>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Kokea</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2009 - 2016
            <br />
            <strong>
              yrittäjänä
              <br />
              Pakistanissa
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Kokea</h5>
        <p>
          Olen ollut vaatetusalan yrittäjänä Pakistanissa. (2009_2016)
        </p>
      </div>
    </InfoContainer>
    <h5 id="portfolio" class="text-center info-semi-bold">salkun</h5>
    <div class="row max-width-center q-my-sm ">
      <img
        class="category-header-image"
        src="@/assets/images/Category/01.jpg"
      />
    </div>
    <div class="row max-width-center">
      <HoverImage />
      <!-- <div class="col-sm-4">
        <img class="categories-img" src="@/assets/images/Category/02.jpg" />
      </div>
      <div class="col-sm-4">
        <img class="categories-img" src="@/assets/images/Category/03.png" />
      </div>
      <div class="col-sm-4">
        <img class="categories-img" src="@/assets/images/Category/04.png" />
      </div> -->
    </div>
    <h5 class="text-center info-semi-bold">Koulutus</h5>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2018 - 2020
            <br />
            Suomen kielen kurssi
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Suomen kielen kurssi</h5>
        <strong><p>Vocational College For Women</p></strong>
        <p>
          Suoritin valmistumiseni tekstiili- ja muotisuunnittelusta Pakistanissa
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2008 - 2010
            <br />
            Valmistuminen
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Valmistuminen</h5>
        <strong><p>Vocational College For Women</p></strong>
        <p>
          Suoritin valmistumiseni tekstiili- ja muotisuunnittelusta Pakistanissa
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2006 - 2008
            <br />
            Välituote
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Välituote</h5>
        <strong><p>Vocational College For Women</p></strong>
        <p>
          Suoritin valmistumiseni tekstiili- ja muotisuunnittelusta Pakistanissa
        </p>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            2006
            <br />
            ylioppilas
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">ylioppilas</h5>
        <strong><p>Vocational College For Women</p></strong>
        <p>
          Suoritin valmistumiseni tekstiili- ja muotisuunnittelusta Pakistanissa
        </p>
      </div>
    </InfoContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Slider from "../components/general/Slider.vue";
import HoverImage from "../components/general/HoverImage.vue";
import InfoContainer from "../components/general/InfoContainer.vue";

export default defineComponent({
  components: {
    Slider,
    HoverImage,
    InfoContainer,
  },
});
</script>

<style scopped>
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
</style>
