<script setup lang="ts">

</script>

<template>
  <div class="scroll-container">
    <div v-for="i in 100" :key="i" v-slide-in="{duration: 500, distance: 100}">
      {{ i }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-container {
  height: 100vh;
  overflow: auto;
  padding: 5px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  div {
    background-color: rebeccapurple;
    height: 100px;
    flex-shrink: 0;
    color: white;
    padding: 10px;
  }
}
</style>
