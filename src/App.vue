<script setup>
import { inject } from 'vue';

const $loading = inject('loading');

const loading1 = $loading({
  title: 'loading...'
});

setTimeout(() => {
  loading1.close();
}, 4000);

let loading2;

setTimeout(() => {
  loading2 = $loading({
    title: '加载中...'
  });
}, 6000);

setTimeout(() => {
  loading2.close();
}, 10000);
</script>

<template>
  <div class="app-container">
    <p v-color="`red`" v-font="`monospace`">
      vue-directives-components
    </p>
    <div>全局自定义指令</div>
    <div>全局自定义组件</div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  color: #474747;
}
</style>
