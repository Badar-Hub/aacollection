<template>
  <div class="row">
    <!-- <div
      v-for="(image, index) in images"
      :key="index"
      class="col-xs-12 col-sm-4"
    >
      <img :src="require(`@/assets/images/images-category/${route.meta}/`)" />
    </div> -->
    <h1>Images</h1>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const images = ref({
      mandi: [
        '01.jpeg',
        '02.jpeg',
        '03.jpeg',
        '04.jpeg',
        '05.jpeg',
        '06.jpeg',
        '07.jpeg',
        '08.jpeg',
        '09.jpeg',
      ],
      makrama: [
        '01.jpeg',
        '02.jpeg',
        '03.jpeg',
        '04.jpeg',
        '05.jpeg',
        '06.jpeg',
        '07.jpeg',
        '08.jpeg',
        '09.jpeg',
        '10.jpeg',
      ],
      dresses: [
        '01.jpeg',
        '02.jpeg',
        '03.jpeg',
        '04.jpeg',
        '05.jpeg',
        '06.jpeg',
        '07.jpeg',
        '08.jpeg',
        '09.jpeg',
        '10.jpeg',
        '11.jpeg',
        '12.jpeg',
        '13.jpeg',
        '14.jpeg',
        '15.jpeg',
        '16.jpeg',
        '17.jpeg',
        '18.jpeg',
        '19.jpeg',
        '20.jpeg',
        '21.jpeg',
      ],
    });
    const route = useRoute();
    const filteredImages = ref();

    onMounted(() => {
      const value = route.meta.title;
      filteredImages.value = Object.keys(images);
      console.log(filteredImages.value, value);
    });

    return {
      images,
      route,
    };
  },
});
</script>

<style></style>
