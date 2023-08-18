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


<!--
<template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    watchEffect(() => {
      console.log(`El contador cambió a ${count.value}`);
    });

    return {
      count,
      incrementCount
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    watch(count, (newVal, oldVal) => {
      console.log(`El contador cambió de ${oldVal} a ${newVal}`);
    });

    return {
      count,
      incrementCount,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>El doble del contador: {{ doubleCount }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const count = ref(1);

    const doubleCount = computed(() => {
      return count.value * 2;
    });

    return {
      count,
      doubleCount,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    return {
      count,
      incrementCount,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Nombre: {{ formattedName }}</p>
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
    const formattedName = computed(() => formatName(props.name));

    const formatName = (name) => {
      return `Hola ${name}`;
    };

    return {
      formattedName,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Nombre: {{ name }}</p>
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
  setup(){
    return {}
  }
};
</script> -->

<!-- -->

<!-- <template>
  <div>
    <p>Nombre: {{ name }}</p>
  </div>
</template>

<script setup>
const name = "Juan";
</script> -->

<!-- <template>
  <div>
    <p>Nombre: {{ name }}</p>
    <p>Saludo: {{ displayName }}</p>
    <p>Contador: {{ count }}</p>
    <button @click="incrementCount">Incrementar Contador</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "ComponentV3",
  props: {
    name: String,
  },
  setup(props) {
    const greeting = "¡Hola!";
    const fullName = computed(() => `${greeting} ${props.name}`);

    const displayName = computed(() => fullName.value);

    const count = ref(0);

    const incrementCount = () => {
      count.value++;
    };

    return {
      fullName,
      displayName,
      count,
      incrementCount,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <p>Nombre: {{ name }}</p>
  </div>
</template>

<script setup>
const name = "Juan";
</script> -->

<!-- <template>
  <div>
    <h2>{{ name }}</h2>
    <p>Longitud del nombre: {{ nameLength }}</p>
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
    const nameLength = computed(() => {
      return props.name.length;
    });

    return {
      nameLength,
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <h2>{{ name }}</h2>
    <p>Longitud del nombre: {{ nameLength }}</p>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
const nameLength = computed(() => {
  return props.name.length;
});
</script> -->
