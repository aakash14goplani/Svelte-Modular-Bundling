
/**
 * @roxi/routify 2.18.8
 * File generated Tue Oct 25 2022 22:35:34 GMT+0530 (India Standard Time)
 */

export const __version = "2.18.8"
export const __timestamp = "2022-10-25T17:05:34.888Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/home/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/home/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/home/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/home/index.svelte",
          "importPath": "../src/pages/home/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
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
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/home/_layout.svelte",
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
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/order/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/order/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/order/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/order/index.svelte",
          "importPath": "../src/pages/order/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
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
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/order/_layout.svelte",
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
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/overview/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/overview/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/overview/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/overview/index.svelte",
          "importPath": "../src/pages/overview/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
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
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/overview/_layout.svelte",
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
      "isFile": true,
      "isDir": true,
      "file": "_layout.svelte",
      "filepath": "/price/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/price/_layout.svelte",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/price/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "F:/Svelte/svelte-module-poc/src/pages/price/index.svelte",
          "importPath": "../src/pages/price/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
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
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "importPath": "../src/pages/price/_layout.svelte",
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
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

