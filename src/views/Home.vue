<template>
  <div>
    <div class="row max-width-center q-my-sm ">
      <img
        class="category-header-image"
        src="@/assets/images/Category/01.jpg"
      />
    </div>
    <div class="row max-width-center">
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <div class="row full-width">
          <img
            class="custom-image "
            src="@/assets/images/profile.jpeg"
            alt="profile-pic"
          />
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 q-my-auto">
        <h6 class="q-ma-sm">
          Hei! Olen Afshan mittatilausompelija Niiralassa. Haluan palvella teitä
          oman kylän väkeä. Voit tilata minulta yksilöllisiä
          mittatilausvaatteita ja kodin sisustusompelua. Teen myös makrame
          solmeilutuotteita, aina sisustuselementeistä koruihin.
          Hemmotteluhetkiin ja juhlien koruksi voit tilata minulta
          luonnonmukaisen hennatatuoinnin. Mikäli elämäsi on kiireistä tai
          voimasi ovat vähissä voin myös siivota kotisi. Otathan yhteyttä, niin
          sovitaan tarkemmin! Kotitoimistoni osoite on Kaikukatu 82 a 2, ja
          yritykseni osoite Puh:
        </h6>
      </div>
    </div>
    <div class="row max-width-center">
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
    <div class="row max-width-center">
      <div class="col-xs-12 col-sm-4 q-px-lg">
        <h6 class="q-my-xs text-center text-weight-bold text-border-cl">
          Hennatatuointi
        </h6>
      </div>
      <div class="col-xs-12 col-sm-4 q-px-lg">
        <h6 class="q-my-xs text-center text-weight-bold text-border-cl">
          Makramesolmeilu
        </h6>
      </div>
      <div class="col-xs-12 col-sm-4 q-px-lg">
        <h6 class="q-my-xs text-center text-weight-bold text-border-cl">
          Mittatilausompelu
        </h6>
      </div>
    </div>
    <h5 class="text-center info-semi-bold">Suositus</h5>
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
import { defineComponent } from 'vue';
import InfoContainer from '../components/general/InfoContainer.vue';

export default defineComponent({
  components: {
    InfoContainer,
  },
});
</script>

<style scopped>
.text-border-cl {
  background-color: aqua;
  color: black;
}
.custom-image {
  max-height: 400px;
  width: auto;
  margin: auto;
}
.custom-image-edited {
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
