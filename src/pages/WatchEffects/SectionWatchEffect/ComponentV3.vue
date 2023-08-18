<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    watchEffect(() => {
      console.log(`El contador cambió a ${count.value}`);
    });

    return {
      count,
      incrementCount
    };
  },
};
</script>
