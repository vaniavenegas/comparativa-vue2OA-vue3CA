<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount()">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
</script> 
