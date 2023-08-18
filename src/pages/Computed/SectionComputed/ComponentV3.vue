<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>El doble del contador: {{ doubleCount }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(1);

    const doubleCount = computed(() => {
      return count.value * 2;
    });

    return {
      count,
      doubleCount,
    };
  },
};
</script>
