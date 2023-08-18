<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const count = ref(0);

const incrementCount = () => {
  count.value++;
};

watch(count, (newVal, oldVal) => {
  console.log(`El contador cambió de ${oldVal} a ${newVal}`);
});
</script>
