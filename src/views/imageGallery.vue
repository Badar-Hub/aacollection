<template>
  <div class="row max-width-center gallery-page justify-center">
    <div
      v-for="(image, index) in filteredImages"
      :key="index"
      class="col-xs-12 col-sm-4 q-my-md text-center"
    >
      <img
        class="custom-images-image"
        :src="require(`@/assets/images/images-category/${route.name}/${image}`)"
      />
    </div>
    <div class="col-xs-12">
      <div class="row justify-center full-width q-my-lg">
        <q-btn
          class="text-bold"
          size="18px"
          to="/"
          label="Kotisivu"
          style="background-color: '#414141'; color: white;"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const filteredImages = ref([]);

    onMounted(() => {
      filteredImages.value = route.meta.images;
      console.log(filteredImages.value);
    });

    return {
      route,
      filteredImages,
    };
  },
});
</script>

<style>
.gallery-page {
  padding-top: 39px;
}
.custom-images-image {
  max-width: 300px;
  border-radius: 1%;
  width: 100%;
}
</style>
