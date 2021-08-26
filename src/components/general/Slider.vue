<template>
  <div class="slider">
    <img src="@/assets/images/Header/header2.jpg" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 1,
    };
  },
};
</script>
<style lang="scss">
.slider {
  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    object-position: unset;
    @media (max-width: 750px) {
      object-fit: contain;
      object-position: unset;
    }
  }
}
</style>
