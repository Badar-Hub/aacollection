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
      </div>
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-md info-semi-bold">Henkilötiedot</h5>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              NIMI:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">Afshan Faisal</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              PUH:
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
            <p
              style="text-transform:uppercase"
              class="q-ma-xs info-bold basic-info-font"
            >
              Sähköposti:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">afshan1790@gmail.com</p>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <p class="q-ma-xs info-bold basic-info-font">
              SYNT:
            </p>
          </div>
          <div class="col-9">
            <p class="q-ma-xs basic-info-font">
              30-01-1989
            </p>
          </div>
        </div>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">Koulutus</h5>
    <InfoContainer>
      <div class="col">
        <h5><strong>Ylioppilas</strong></h5>
        <li>General Science, Computer Science (2002 - 2004)</li>
      </div>
      <div class="col">
        <h5><strong>Ammattilainen Koulutus</strong></h5>
        <p>
          Oppilaitos: Govt. Vocational training institute for women (2004 -
          2006)
        </p>
        <li>Perusasiat Käsityöstä (Basic home management)</li>
        <li>Neulominen (Knitting)</li>
        <li>Ompeleminen (Tailoring)</li>
      </div>
    </InfoContainer>
    <h5 id="experience" class="text-center info-semi-bold">Työkokemus</h5>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            <strong>
              Oma yritys
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">
          Olen ollut vaatetusalan yrittäjänä Pakistanissa. (2009_2016)
        </h5>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            1kk
            <br />
            <strong>
              Alliina Iisalmessa
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">
          Olin työharjoittelussa ja siellä tein makramee työ.
        </h5>
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
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Korjaous ompelu, mittatilaustyö.</h5>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            <strong>
              NY yritys
            </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">11-02-2020 - Jatkuu edelleen</h5>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">
      Muu osaaminen ja vahvuudet
    </h5>
    <InfoContainer>
      <div class="col">
        <div class="q-mx-auto">
          <li>Perinteinen pakistanilainen ruoanlaitto</li>
          <li>hennatatuointi</li>
        </div>
      </div>
      <div class="col">
        <div class="q-mx-auto">
          <li>Ahkeruus ja tunnollisuus</li>
          <li>Positiivisuus ja idearikkaus</li>
        </div>
      </div>
    </InfoContainer>
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
    <InfoContainer :work="true">
      <div
        class="col col-xs-12 col-sm-4 justify-center word-details text-center"
      >
        <div class="word-details q-ma-auto">
          <h6 class="q-ma-auto">
            Kielitaito
          </h6>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl">
        <h5 class="q-my-sm">Urdu: äidinkieli</h5>
        <h5 class="q-my-sm">Englanti: erinomainen</h5>
        <h5 class="q-my-sm">Punjabi: erinomainen</h5>
        <h5 class="q-my-sm">Suomi: hyvä</h5>
      </div>
    </InfoContainer>
    <InfoContainer :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details">
          <h6>
            IT-Taidot
          </h6>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-8 q-px-xl">
        <div class="row">
          <div class="col-4">
            <h5 class="q-my-sm">Microsoft office:</h5>
            <li>Word: erinomainen</li>
            <li>PowerPoint: hyvä</li>
            <li>Excell: perusteet</li>
          </div>
          <div class="col-4">
            <h5 class="q-my-sm">Sähköposti: hyvä</h5>
            <h5 class="q-my-sm">Moodle: hyvä</h5>
          </div>
          <div class="col-4">
            <h5 class="q-my-sm">Sosiaalinen media</h5>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </div>
        </div>
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
    InfoContainer
  }
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
