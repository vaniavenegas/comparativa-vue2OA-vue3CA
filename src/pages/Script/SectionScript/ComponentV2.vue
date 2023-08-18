<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ displayName }}</p>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar Contador</button>
  </div>
</template>

<script>
export default {
  name: "ComponentV3",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      greeting: "¡Hola!",
      count: 0,
    };
  },
  computed: {
    fullName() {
      return `${this.greeting} ${this.name}`;
    },
    displayName() {
      return this.fullName;
    },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
  watch: {
    count(newVal) {
      console.log(`El valor ha cambiado a: ${newVal}`);
    },
  },
};
</script>
