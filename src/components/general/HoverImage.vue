<template>
  <div class="row justify-evenly">
    <div class="col col-xs-12 col-sm-4 container">
      <img
        :src="require(`@/assets/images/Category/${img1}`)"
        class="image"
        style="width:100%"
      />
    </div>
    <div class="col col-xs-12 col-sm-4 container">
      <img
        :src="require(`@/assets/images/Category/${img2}`)"
        class="image"
        style="width:100%"
      />
    </div>
    <div class="col col-xs-12 col-sm-4 container">
      <img
        :src="require(`@/assets/images/Category/${img3}`)"
        class="image"
        style="width:100%"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    img1: {
      type: String
    },
    img2: {
      type: String
    },
    img3: {
      type: String
    }
  }
});
</script>

<style scoped>
.container {
  position: relative;
}
.image {
  display: block;
  max-width: 490px !important;
  padding: 0 !important;
  width: 100%;
  height: 350px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  padding: 5px;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.text {
  background-color: #ea9a55;
  color: white;
  font-size: 16px;
  font-weight: 800;
  font-family: Montserrat;
  padding: 16px 32px;
}

@media (max-width: 597px) {
  .image {
    max-width: unset !important;
  }
}
</style>
