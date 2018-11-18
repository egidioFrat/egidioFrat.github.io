importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a8e941ba7493bfd5ea5.js",
    "revision": "dd08dd591178c01c7f8858b557054026"
  },
  {
    "url": "/_nuxt/21b406f28b03538bcd34.js",
    "revision": "0254a4d31386a9dff59804f018ec39ef"
  },
  {
    "url": "/_nuxt/4b6be53fc8052bec2655.js",
    "revision": "8d3444fe560dd9f7b9d700e59b6b3b0e"
  },
  {
    "url": "/_nuxt/5700a91182d68fd9c253.js",
    "revision": "5622e20824d3b949f08842c1ae389aff"
  },
  {
    "url": "/_nuxt/57b6e8d4c530d38c26b6.js",
    "revision": "9962d652031363361d433ebdd75a953f"
  },
  {
    "url": "/_nuxt/5ee5d9bdad6fe9de79a8.js",
    "revision": "807c0dae1b9d8b97ca6a009bb968a837"
  },
  {
    "url": "/_nuxt/63153d027865e8eefdc4.js",
    "revision": "ebc15c57120fce59d7d44d6848db822a"
  },
  {
    "url": "/_nuxt/75c9ce3842149e5b23b8.js",
    "revision": "0c4ed5c9de22c403f771b55fb16a15f5"
  },
  {
    "url": "/_nuxt/7e74dc957c4554ad02c8.js",
    "revision": "8c21f3e43e0996bac78f975f34527c3c"
  },
  {
    "url": "/_nuxt/af07e5572ecc7b0b42fc.js",
    "revision": "5de3d862c15038bf0ace73565f9338ac"
  }
], {
  "cacheId": "settanta",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
