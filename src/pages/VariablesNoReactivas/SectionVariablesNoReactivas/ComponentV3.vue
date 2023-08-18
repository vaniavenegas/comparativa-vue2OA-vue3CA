<template>
  <div>
    <p>Nombre: {{ name }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref("Juan");

    return {
      name
    };
  },
};
</script>
