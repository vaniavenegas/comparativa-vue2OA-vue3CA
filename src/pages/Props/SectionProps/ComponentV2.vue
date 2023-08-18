<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ formattedName }}</p>

  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    formattedName() {
      return this.formatName(this.name);
    },
  },
  methods: {
    formatName(name) {
      return `Hola ${name}`;
    },
  },
};
</script>

