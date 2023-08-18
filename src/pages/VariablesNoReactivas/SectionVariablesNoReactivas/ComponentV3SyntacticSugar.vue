<template>
  <div>
    <p>Nombre: {{ name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref("Juan");
</script>
