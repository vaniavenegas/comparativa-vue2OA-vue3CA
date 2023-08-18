<template>
  <div>
    <p>Nombre: {{ person }}</p>
    <button @click="changeName">Cambiar Nombre</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const person = ref("Juan");

function changeName() {
  person.value = "María";
}
</script>
