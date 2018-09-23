importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c2b0c23e042b329cf69.js",
    "revision": "ff4c1e03f0dbe2aa2c74d1910b346930"
  },
  {
    "url": "/_nuxt/252dc07c369cd78e6c10.js",
    "revision": "e41a12a1b46d32b24d1db134661901ac"
  },
  {
    "url": "/_nuxt/2ee3ac8f009f624335cc.js",
    "revision": "dc4aec3accf11fc2c3d73cfef0d58bd4"
  },
  {
    "url": "/_nuxt/48b64120fd508755441a.js",
    "revision": "efa62c3b0a7f2c1d9f3951473e5b10bf"
  },
  {
    "url": "/_nuxt/78ecd6f1d4927b2347a3.js",
    "revision": "2968c7fe232b66407da99f6ac2c065d8"
  },
  {
    "url": "/_nuxt/79541fa0b73213b286dc.js",
    "revision": "ca10134b0204bba926e4101dcb47bb94"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/982c200550dfcb8e995b.js",
    "revision": "4bcda1be1624aa7b9211c1f3735a6234"
  },
  {
    "url": "/_nuxt/c4bcb2ba0ad3f64b5d64.js",
    "revision": "5c4ec9f55645c4ff660085c5c17bbfa9"
  },
  {
    "url": "/_nuxt/f385f12c88150c76bbc8.js",
    "revision": "b7e448674a186303695548e5d1254ddd"
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





