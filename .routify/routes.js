
/**
 * @roxi/routify 2.18.8
 * File generated Wed Oct 26 2022 15:03:28 GMT+0530 (India Standard Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-10-26T09:33:28.708Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "$$bundleId": "_home__layout_svelte.js",
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/home/index",
          "id": "_home_index",
          "component": () => import('./_home__layout_svelte.js').then(m => m._home_index)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "bundle": true
      },
      "meta": {
        "bundle": true,
        "$$bundleId": "_home__layout_svelte.js",
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/home",
      "id": "_home__layout",
      "component": () => import('./_home__layout_svelte.js').then(m => m._home__layout)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "$$bundleId": "_order__layout_svelte.js",
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/order/index",
          "id": "_order_index",
          "component": () => import('./_order__layout_svelte.js').then(m => m._order_index)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "bundle": true
      },
      "meta": {
        "bundle": true,
        "$$bundleId": "_order__layout_svelte.js",
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/order",
      "id": "_order__layout",
      "component": () => import('./_order__layout_svelte.js').then(m => m._order__layout)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "$$bundleId": "_overview__layout_svelte.js",
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/overview/index",
          "id": "_overview_index",
          "component": () => import('./_overview__layout_svelte.js').then(m => m._overview_index)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "bundle": true
      },
      "meta": {
        "bundle": true,
        "$$bundleId": "_overview__layout_svelte.js",
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/overview",
      "id": "_overview__layout",
      "component": () => import('./_overview__layout_svelte.js').then(m => m._overview__layout)
    },
    {
      "isDir": true,
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "meta": {
            "$$bundleId": "_price__layout_svelte.js",
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/price/index",
          "id": "_price_index",
          "component": () => import('./_price__layout_svelte.js').then(m => m._price_index)
        }
      ],
      "isLayout": true,
      "ownMeta": {
        "bundle": true
      },
      "meta": {
        "bundle": true,
        "$$bundleId": "_price__layout_svelte.js",
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/price",
      "id": "_price__layout",
      "component": () => import('./_price__layout_svelte.js').then(m => m._price__layout)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

