importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02e2eece996a4681dec8.js",
    "revision": "f6e890d4a4be9d224555af0d27555b36"
  },
  {
    "url": "/_nuxt/2b784d4cedda497c2feb.js",
    "revision": "9a05dfa82098795ad3e121eb7381e3fd"
  },
  {
    "url": "/_nuxt/534d456bf622bb06fae7.js",
    "revision": "8083fae8000b0ff276fa3af8d46392cb"
  },
  {
    "url": "/_nuxt/72988ee42540e57ce6be.js",
    "revision": "904745b0cbf3d2a9f978b0d0be0cbaf8"
  },
  {
    "url": "/_nuxt/944827800f277136c6a4.js",
    "revision": "8783f46f9bb3917606846bab44155e00"
  },
  {
    "url": "/_nuxt/9d8f4fb884e8a9d6a126.js",
    "revision": "b2be52c8a7ef4708937cc88a5f51126a"
  },
  {
    "url": "/_nuxt/9f57753ed610bf63f0dd.js",
    "revision": "02424412691550b49a0bd6d3038cecaf"
  },
  {
    "url": "/_nuxt/dbcd7bd78020bf019e32.js",
    "revision": "079502e03140c79a414907ac95c4fc67"
  },
  {
    "url": "/_nuxt/dee0643194e69cd0124d.js",
    "revision": "39e713cb16ad96ca9078972959b7123c"
  },
  {
    "url": "/_nuxt/eda86aa6d05a21f7705d.js",
    "revision": "4f82d9b0df568834373dcb44338e5776"
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





