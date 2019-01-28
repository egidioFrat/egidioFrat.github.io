importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1721b1f5aebeb7efbf07.js",
    "revision": "0b9f1fd6360065d6501a4c4fd448b633"
  },
  {
    "url": "/_nuxt/1d877c39d22cb731c60c.js",
    "revision": "d4cf7a2ff8392de7067cbbf031cf33a3"
  },
  {
    "url": "/_nuxt/43a42321a107311df47d.js",
    "revision": "0a0a4b13a0a1b53f369a5aa1ec6ea1ae"
  },
  {
    "url": "/_nuxt/456e7ad95be79bdcf8f3.js",
    "revision": "08af7fbdc533ac06432f89ff26696d47"
  },
  {
    "url": "/_nuxt/5bff42ffdc4543e65209.js",
    "revision": "fbddb48bedddd86a26274a6d87f258ac"
  },
  {
    "url": "/_nuxt/5cace6d33d866aefe3a1.js",
    "revision": "f17110337a538992cb9b4c23a2a540f3"
  },
  {
    "url": "/_nuxt/847ceef3a6b467b73c86.js",
    "revision": "8c98e6e60e0ea783b43266db15350c30"
  },
  {
    "url": "/_nuxt/985f1890b29a7569fdd8.js",
    "revision": "0e7cef3b72256f8af750f43a90c2b9d8"
  },
  {
    "url": "/_nuxt/af073d0e309ef3ba7465.js",
    "revision": "e713201c5fa4700cab2046ad894a0798"
  },
  {
    "url": "/_nuxt/d5b454f61afd0ba36ce5.js",
    "revision": "8b3c0553dd34c07318715b3acc922cb8"
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
