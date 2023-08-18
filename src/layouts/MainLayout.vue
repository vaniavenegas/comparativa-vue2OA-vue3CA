<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated color="green">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn flat dense round icon="home" aria-label="Menu" @click="goHome" />

        <q-toolbar-title>
          Comparación Vue2 - Vue3 setup() - Vue 3 syntactic sugar
        </q-toolbar-title>

        <div>Chapter Front End</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Documentación </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { useRouter } from "vue-router";

const linksList = [
  {
    title: "Vue 3",
    caption: "Composition API",
    icon: "article",
    link: "https://vuejs.org/guide/extras/composition-api-faq.html",
  },
  {
    title: "Vue 2",
    caption: "Options API",
    icon: "article",
    link: "https://v2.vuejs.org/v2/guide/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const $router = useRouter();

    const goHome = () => {
      $router.push("/");
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      goHome,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.q-layout__section--marginal {
  background-color: #41b883;
  color: #fff;
}
</style>
