<template>
  <div>
    VUE2
    <ComponentV2 :name="name" />
    <hr />
    VUE3 función setup
    <ComponentV3 :name="name" />
    <hr />
    VUE3 script setup
    <ComponentV3ScriptSetup :name="name" />
  </div>
</template>

<script>
import ComponentV2 from "src/pages/Props/SectionProps/ComponentV2.vue";
import ComponentV3 from "src/pages/Props/SectionProps/ComponentV3.vue";
import ComponentV3ScriptSetup from "src/pages/Props/SectionProps/ComponentV3SyntacticSugar.vue";
import { ref } from "vue";

export default {
  name: "PropsIndex",
  components: {
    ComponentV2,
    ComponentV3,
    ComponentV3ScriptSetup,
  },
  setup() {
    const name = ref("Juan");

    return {
      name,
    };
  },
};
</script>
