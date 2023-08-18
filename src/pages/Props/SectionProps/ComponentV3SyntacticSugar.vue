<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ formattedName }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const formatName = (name) => {
  return `Hola ${name}`;
};

const formattedName = computed(() => {
  return formatName(props.name);
});
</script>
