<template>
  <div>
    <p>Nombre: {{ person.name }}</p>
    <p>Edad: {{ person.age }}</p>
    <p>Nacionalidad: {{ person.nationality }}</p>
    <button @click="changeData()">Cambiar Nombre</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "Juan",
        age: 25,
        nationality: "Mexican",
      },
    };
  },
  methods: {
    changeData() {
      this.person.name = "María";
      this.person.age = "30";
      this.person.nationality = "Chilean";
    },
  },
};
</script>
