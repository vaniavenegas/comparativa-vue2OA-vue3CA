<template>
  <div>
    <p>Nombre: {{ person }}</p>

    <button @click="changeName">Cambiar Nombre</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: "Juan",
    };
  },
  methods: {
    changeName() {
      this.person = "María";
    },
  },
};
</script>
