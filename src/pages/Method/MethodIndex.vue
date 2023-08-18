<template>
  <div>
    VUE2
    <ComponentV2 />
    <hr />
    VUE3 función setup
    <ComponentV3 />
    <hr />
    VUE3 script setup
    <ComponentV3ScriptSetup />
  </div>
</template>

<script>
import ComponentV2 from "src/pages/Method/SectionMethod/ComponentV2.vue";
import ComponentV3 from "src/pages/Method/SectionMethod/ComponentV3.vue";
import ComponentV3ScriptSetup from "src/pages/Method/SectionMethod/ComponentV3SyntacticSugar.vue";

export default {
  name: "ScriptIndex",
  components: {
    ComponentV2,
    ComponentV3,
    ComponentV3ScriptSetup,
  },
  setup() {


    return {
   
    };
  },
};
</script>
