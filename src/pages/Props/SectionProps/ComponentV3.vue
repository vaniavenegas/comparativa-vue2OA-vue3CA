<template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ formattedName }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const formatName = (name) => {
      return `Hola ${name}`;
    };

    const formattedName = computed(() => {
      return formatName(props.name);
    });

    return {
      formattedName,
    };
  },
};
</script>
