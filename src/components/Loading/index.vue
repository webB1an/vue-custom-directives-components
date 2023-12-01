<script setup>
defineProps({
  title: {
    type: String,
    default: 'loading...'
  },
  loading: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <div v-if="loading" class="loading-container">
    <div class="loading-rotate" />
    {{ title }}
  </div>
</template>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 20px;
  font-family: monospace;
  color: #f00;
  z-index: 999;

}
.loading-rotate {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border: 5px solid #ccc;
  border-top-color: #f00;
  border-radius: 50%;
  animation: loading 1s linear infinite;
}
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
