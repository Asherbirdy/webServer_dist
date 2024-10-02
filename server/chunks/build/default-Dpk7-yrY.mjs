import { _ as __nuxt_component_0 } from './nuxt-link-B1SJl36K.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { P as PublicRoutes } from './RouteEnums-CHEg2f3p.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'module';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const routes = [
      {
        label: "\u751F\u547D\u8B80\u7D93",
        to: PublicRoutes.Home
      },
      {
        label: "\u8FD1\u671F\u6D3B\u52D5",
        to: PublicRoutes.News
      },
      {
        label: "\u6703\u54E1\u4E2D\u5FC3",
        to: PublicRoutes.Login
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen" }, _attrs))}><header class="bg-gray-100 p-4 flex justify-between"><div> LOGO </div><div class="md:block hidden"><nav class="flex space-x-4"><!--[-->`);
      ssrRenderList(routes, (route) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: route.to,
          to: route.to,
          class: "text-gray-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></header><main class="flex-grow mx-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><nav class="md:hidden block fixed bottom-0 left-0 right-0 bg-white shadow-lg"><div class="grid grid-cols-3 h-16"><!--[-->`);
      ssrRenderList(routes, (route) => {
        _push(`<div class="flex items-center justify-center border-r border-gray-200 last:border-r-0">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: route.to,
          class: "text-gray-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(route.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(route.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></nav><footer class="bg-gray-100 p-4 mt-16"> Footer </footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Dpk7-yrY.mjs.map
