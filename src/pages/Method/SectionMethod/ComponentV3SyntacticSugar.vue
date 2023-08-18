<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const incrementCount = () => {
  count.value++;
};
</script>
