<template>
  <div>
    <div class="background-image">
      <br />
      <br />
      <div class="row justify-between center-page form">
        <div class="col-12 text-center">
          <strong>
            <h6 class="q-mt-xs q-mb-xl info-bold">
              Contact Me
            </h6></strong
          >
        </div>
        <div class="col col-5">
          <strong><p>Feel free to contact me</p></strong>
          <q-input
            rounded
            outlined
            dense
            class="q-my-md"
            v-model="text"
            label="Name"
          />
          <q-input
            rounded
            dense
            class="q-my-md"
            outlined
            v-model="text"
            label="Subject"
          />
          <q-input
            rounded
            dense
            class="q-my-md"
            outlined
            v-model="text"
            label="Email"
          />
          <q-input
            class="q-my-md"
            label="Your Message"
            v-model="text"
            filled
            type="textarea"
          />
          <q-btn class="q-my-md" type="submit" label="Submit" color="primary" />
        </div>
        <div
          class="col col-5
        "
        >
          <strong><p>Address</p></strong>
          <p>
            Bahria Town Phase 7, Rawalpindi, Pakistan
          </p>
          <strong><p>Phone</p></strong>
          <p>
            +92 332 1021700
          </p>
          <strong><p>Email</p></strong>
          <p>
            bapk65@gmail.com
          </p>
        </div>
      </div>
      <br />
      <br />
    </div>
    <div class="row max-width-center q-pt-lg">
      <div class="col-12 text-center">
        <h4 class="q-my-sm info-bold">Badar Abdullah</h4>
      </div>
      <div class="col-12 text-center">
        <h6 class="q-my-xs ">Thanks for visiting me!</h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const text = ref("");
    return {
      text,
    };
  },
});
</script>

<style lang="scss">
.background-image {
  background-image: url("../../assets/images/Footer/staticmap.png");
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
