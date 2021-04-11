<template>
  <div>
    <Slider id="home">
      <q-carousel-slide
        :name="1"
        :style="
          `background-image: url(${require(`@/assets/images/Header/header2.jpg`)})`
        "
      />
    </Slider>
    <InfoContainer id="about">
      <div id="slide" class="col col-xs-12 col-sm-6 text-center">
        <img class="profile-img" src="@/assets/images/profile.jpeg" />
      </div>
      <div id="slide" class="col col-xs-12 col-sm-6">
        <h5 class="q-my-sm info-semi-bold">Henkilötiedot</h5>
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
        <h5 class="q-my-sm"><strong>Ylioppilas</strong></h5>
        <li>General Science, Computer Science (2002 - 2004)</li>
      </div>
      <div class="col">
        <h5 class="q-my-sm"><strong>Ammattilainen Koulutus</strong></h5>
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
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl self-center">
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
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl self-center">
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
      <div class="col col-xs-12 col-sm-8 q-py-lg q-px-xl self-center">
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
      <div class="co col-xs-12 col-sm-8 q-py-lg q-px-xl self-center">
        <h5 class="q-my-sm">11-02-2020 - Jatkuu edelleen</h5>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">
      Muu osaaminen ja vahvuudet
    </h5>
    <InfoContainer>
      <div class="col q-my-md q-mx-xl">
        <div class="q-mx-auto">
          <li>Perinteinen pakistanilainen ruoanlaitto</li>
          <li>hennatatuointi</li>
        </div>
      </div>
      <div class="col q-my-md q-mx-xl">
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
    <div class="row max-width-center q-my-sm ">
      <div class="col-3"></div>
      <div class="col-6">
        <img
          style="max-width: 500px; width:100%"
          src="@/assets/images/Category/02.jpg"
        />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row max-width-center">
      <HoverImage
        img1="makrama/01.jpeg"
        img2="makrama/02.jpeg"
        img3="makrama/04.jpeg"
      />
    </div>
    <div class="row max-width-center q-my-sm ">
      <div class="col-3"></div>
      <div class="col-6">
        <img
          style="max-width: 500px; width:100%"
          src="@/assets/images/Category/03.png"
        />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row max-width-center">
      <HoverImage
        img1="dresses/01.jpeg"
        img2="dresses/02.jpeg"
        img3="dresses/03.jpg"
      />
    </div>
    <div class="row max-width-center q-my-sm ">
      <div class="col-3"></div>
      <div class="col-6">
        <img
          style="max-width: 500px; width:100%"
          src="@/assets/images/Category/04.png"
        />
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row max-width-center">
      <HoverImage img1="henna/01.jpg" img2="henna/02.jpg" img3="henna/03.jpg" />
    </div>
    <InfoContainer class="languages" :work="true">
      <div
        class="col col-xs-12 col-sm-4 justify-center word-details text-center"
      >
        <div class="word-details q-ma-auto grid-pat">
          <h6 class="q-my-auto">
            <strong>
              Kielitaito
            </strong>
          </h6>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-8 q-px-xl">
        <h5 class="q-my-sm">Urdu: äidinkieli</h5>
        <h5 class="q-my-sm">Englanti: erinomainen</h5>
        <h5 class="q-my-sm">Punjabi: erinomainen</h5>
        <h5 class="q-my-sm">Suomi: hyvä</h5>
      </div>
    </InfoContainer>
    <InfoContainer class="languages" :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details grid-pat">
          <h6>
            <strong>
              IT-Taidot
            </strong>
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
          <div class="col-4 self-center ">
            <div class="q-my-auto">
              <h5 class="q-my-sm">Sähköposti: hyvä</h5>
              <h5 class="q-my-sm">Moodle: hyvä</h5>
            </div>
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
    <InfoContainer class="languages" :work="true">
      <div class="col col-xs-12 col-sm-4 word-details text-center">
        <div class="word-details grid-pat">
          <h6>
            <strong>Harrastukset </strong>
          </h6>
        </div>
      </div>
      <div class="co col-xs-12 col-sm-8 q-px-xl">
        <h5 class="q-my-sm">Lukeminen</h5>
        <h5 class="q-my-sm">Runous</h5>
        <h5 class="q-my-sm">Ulkoilu</h5>
        <h5 class="q-my-sm">Kirjonta</h5>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">Työtavoite</h5>
    <InfoContainer>
      <div class="col text-center">
        <h5>Haluan perustaa oman yrityksen Suomeen.</h5>
      </div>
    </InfoContainer>
    <h5 id="skills" class="text-center info-semi-bold">Suositus</h5>
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
