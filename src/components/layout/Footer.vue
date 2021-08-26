<template>
  <div>
    <div class="background-image">
      <br />
      <br />
      <div class="row justify-between center-page form">
        <div class="col-12 text-center">
          <strong>
            <h6 class="q-mt-xs q-mb-xl info-bold">
              Yhteydenotto & Sijainti
            </h6></strong
          >
        </div>
        <div class="col col-5">
          <strong><p>Ota rohkeasti yhteyttä</p></strong>
          <q-input
            rounded
            outlined
            dense
            class="q-my-md"
            v-model="text"
            label="Nimi"
          />
          <q-input
            rounded
            dense
            class="q-my-md"
            outlined
            v-model="text"
            label="Aihe"
          />
          <q-input
            rounded
            dense
            class="q-my-md"
            outlined
            v-model="text"
            label="Sähköposti"
          />
          <q-input
            class="q-my-md"
            label="Viesti"
            v-model="text"
            filled
            type="textarea"
          />
          <q-btn class="q-my-md" type="submit" label="Lähetä" color="primary" />
        </div>
        <div
          class="col col-5
        "
        >
          <strong><p>OSOITE</p></strong>
          <a
            href="https://maps.google.com/maps?q=62.892967224121094%2C27.676183700561523&z=17&hl=en"
            class="cursor-pointer cl-black no-underline"
          >
            AA-COLLECTION Oy<br />
            Haapaniemenkatu 28, 3.krs<br />
            70110 Kuopio, Finland
          </a>
          <strong><p class="q-mt-md">PUH</p></strong>
          <a class="no-underline cl-black" href="tel:+358-41-315-7488"
            >+358 41 3157488</a
          >
          <strong><p class="q-mt-md">SÄHKÖPOSTI</p></strong>
          <a
            class="no-underline cl-black"
            href="mailto:aacollection.fi@gmail.com"
            >aacollection.fi@gmail.com</a
          >
          <strong><p class="q-mt-md">Instagram</p></strong>
          <a
            class="cl-black no-underline"
            href="https://www.instagram.com/aacollection.fi/"
          >
            aacollection.fi
          </a>
          <strong><p class="q-mt-md">Facebook</p></strong>
          <a
            class="cl-black no-underline"
            href="https://www.facebook.com/3aacollection/"
          >
            AA Collection
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div class="row max-width-center q-pt-lg">
      <div class="col-12 text-center">
        <h4 class="q-my-sm info-bold">AA Collection Oy</h4>
      </div>
      <div class="col-12 text-center">
        <h6 class="q-my-xs ">Kiitos vierailustasi!</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const text = ref('');
    return {
      text,
    };
  },
});
</script>

<style lang="scss">
.background-image {
  background-image: url('../../assets/images/Footer/staticmap.png');
  background-size: cover;
  background-repeat: no-repeat;
}
.center-page {
  max-width: 800px;
  margin: auto;
}
.form {
  background-color: white;
  padding: 30px 80px;
  border-radius: 5%;
}
</style>
