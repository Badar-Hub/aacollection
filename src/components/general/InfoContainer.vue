<template>
  <div class="wrapper q-my-xl">
    <div class="row info-container" :class="work ? '' : 'q-py-sm q-px-lg'">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    work: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.info-container {
  max-width: 1200px;
  margin: auto;
  border: 0;
  border-radius: 0.1875rem;
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 20px;
  -webkit-box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
  box-shadow: 0px 5px 25px 0px rgb(0 0 0 / 20%);
}
.word-details {
  background-color: #ea9a55;
  color: white;
}
</style>
