<template>
  <div>
    <p>Nombre: {{ person.name }}</p>
    <p>Edad: {{ person.age }}</p>
    <p>Nacionalidad: {{ person.nationality }}</p>
    <button @click="changeData">Cambiar Nombre</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const person = reactive({
  name: "Juan",
  age: 25,
  nationality: "Mexicano",
});

const changeData = () => {
  person.name = "María";
  person.age = 30;
  person.nationality = "Chilena";
};
</script>
