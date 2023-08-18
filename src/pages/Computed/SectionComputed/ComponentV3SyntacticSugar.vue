<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>El doble del contador: {{ doubleCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const count = ref(1);

const doubleCount = computed(() => {
  return count.value * 2;
});
</script>
