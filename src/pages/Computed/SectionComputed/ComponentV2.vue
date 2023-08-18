<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>El doble del contador: {{ doubleCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
  },
};
</script>
