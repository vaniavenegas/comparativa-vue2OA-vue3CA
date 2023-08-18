<template>
  <div>
    <div class="column flex-center q-pa-xl">
      <p class="text-bold">01. Script</p>
      <q-btn color="grey-1" @click="goToScript()"> Script </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">02. Setup</p>
      <q-btn color="grey-1" @click="goToSetup()"> Setup </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">03. Variables No Reactivas</p>
      <q-btn color="grey-1" @click="goToVNR()"> Variables N.R. </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">04. Variables Reactivas Ref</p>
      <q-btn color="grey-1" @click="goToRefIndex()"> Ref </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">05. Variables Reactivas Reactive</p>
      <q-btn color="grey-1" @click="goToReactive()"> reactive </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">06. props</p>
      <q-btn color="grey-1" @click="goToProps()"> props </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">07. methods</p>
      <q-btn color="grey-1" @click="goToMethods()"> methods </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">08. computed</p>
      <q-btn color="grey-1" @click="goToComputed()"> computed </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">09. watch</p>
      <q-btn color="grey-1" @click="goToWatch()"> watch </q-btn>
    </div>
    <div class="column flex-center q-pb-xl">
      <p class="text-bold">10. watchEffect</p>
      <q-btn color="grey-1" @click="goToWatchEffect()"> watchEffect </q-btn>
    </div>




  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "IndexPage",
  components: {},
  setup() {
    const name = ref("Juan");
    const $router = useRouter();

    const goToScript = () => {
      $router.push("script");
    };
    const goToSetup = () => {
      $router.push("setup-index");
    };
    const goToVNR = () => {
      $router.push("variables-nr");
    };
    const goToRefIndex = () => {
      $router.push("ref-index");
    };
    const goToReactive = () => {
      $router.push("reactive-index");
    };
    const goToProps = () => {
      $router.push("props-index");
    };
    const goToMethods = () => {
      $router.push("method-index");
    };

    const goToComputed = () => {
      $router.push("computed-index");
    };
    const goToWatch = () => {
      $router.push("watch-index");
    };
    const goToWatchEffect = () => {
      $router.push("watch-effect-index");
    };


    return {
      name,
      goToScript,
      goToSetup,
      goToVNR,
      goToRefIndex,
      goToReactive,
      goToProps,
      goToMethods,
      goToComputed,
      goToWatch,
      goToWatchEffect
    };
  },
};
</script>
