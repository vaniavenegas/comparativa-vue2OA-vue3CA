<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ displayName }}</p>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar Contador</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const greeting = "¡Hola!";
const count = ref(0);

const fullName = computed(() => {
  return `${greeting} ${props.name}`;
});

const displayName = computed(() => {
  return fullName.value;
});

const incrementCount = () => {
  count.value++;
};

watch(count, (newVal) => {
  console.log(`El valor ha cambiado a: ${newVal}`);
});
</script>
