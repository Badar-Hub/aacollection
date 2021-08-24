<template>
  <div class="row">
    <div
      v-for="(image, index) in filteredImages"
      :key="index"
      class="col-xs-12 col-sm-4"
    >
      <img
        class="custom-images-image"
        :src="require(`@/assets/images/images-category/${route.name}/${image}`)"
      />
    </div>
    <h1>Images</h1>
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
.custom-images-image {
  max-width: 300px;
  width: 100%;
}
</style>
