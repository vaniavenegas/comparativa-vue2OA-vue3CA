const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "main",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "script",
        name: "script",
        component: () => import("pages/Script/ScriptIndex.vue"),
      },
      {
        path: "setup-index",
        name: "setup-index",
        component: () => import("pages/Setup/SetupIndex.vue"),
      },
      {
        path: "variables-nr",
        name: "variables-nr",
        component: () =>
          import("pages/VariablesNoReactivas/VariablesNoReactivasIndex.vue"),
      },
      {
        path: "ref-index",
        name: "ref-index",
        component: () => import("pages/VariablesReactivasRef/RefIndex.vue"),
      },
      {
        path: "reactive-index",
        name: "reactive-index",
        component: () =>
          import("pages/VariablesReactivasReactive/ReactiveIndex.vue"),
      },
      {
        path: "props-index",
        name: "props-index",
        component: () => import("pages/Props/PropsIndex.vue"),
      },
      {
        path: "method-index",
        name: "method-index",
        component: () => import("pages/Method/MethodIndex.vue"),
      },
      {
        path: "computed-index",
        name: "computed-index",
        component: () => import("pages/Computed/ComputedIndex.vue"),
      },
      {
        path: "watch-index",
        name: "watch-index",
        component: () => import("pages/Watch/WatchIndex.vue"),
      },
      {
        path: "watch-effect-index",
        name: "watch-effect-index",
        component: () => import("pages/WatchEffects/WatchEffectIndex.vue"),
      },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
