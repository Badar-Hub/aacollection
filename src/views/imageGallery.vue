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
    <div class="col-xs-12">
      <div class="row justify-center full-width q-my-lg">
        <q-btn
          class="text-bold"
          size="18px"
          to="/"
          label="Kotisivu"
          color="secondary"
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
.custom-images-image {
  max-width: 300px;
  width: 100%;
}
</style>
