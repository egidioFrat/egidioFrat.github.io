importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/18487906d77aa1dca561.js",
    "revision": "6ca44176b6cc5174be9c3b5489403fde"
  },
  {
    "url": "/_nuxt/1c2b0c23e042b329cf69.js",
    "revision": "ff4c1e03f0dbe2aa2c74d1910b346930"
  },
  {
    "url": "/_nuxt/2ee3ac8f009f624335cc.js",
    "revision": "dc4aec3accf11fc2c3d73cfef0d58bd4"
  },
  {
    "url": "/_nuxt/308fdeccdb0f352f1585.js",
    "revision": "e2e5659033dadda8eeeaeeb97a673353"
  },
  {
    "url": "/_nuxt/65019edc81e8c2a3ee5d.js",
    "revision": "3d1b118e044c1d6f83b8d504338e55d9"
  },
  {
    "url": "/_nuxt/7802a79764d6f2d3ef8f.js",
    "revision": "8001e4eb1a744c4e47b136a341b79a83"
  },
  {
    "url": "/_nuxt/78ecd6f1d4927b2347a3.js",
    "revision": "2968c7fe232b66407da99f6ac2c065d8"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/a7363c498265e4281811.js",
    "revision": "18b80cfc20788cc732211f44473670e7"
  },
  {
    "url": "/_nuxt/be8a204f3cd374556f48.js",
    "revision": "33f87bc7da984d1b6ba5abe42daa4328"
  }
], {
  "cacheId": "casuali",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





