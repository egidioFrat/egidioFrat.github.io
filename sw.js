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
    "url": "/_nuxt/84f50590400c899801f1.js",
    "revision": "97f37365684b8e1019aa57c274741ceb"
  },
  {
    "url": "/_nuxt/8ebc1d4e0eaee3c6cd74.js",
    "revision": "63e95eb6cb14c053f962a605262d916f"
  },
  {
    "url": "/_nuxt/9d8f4fb884e8a9d6a126.js",
    "revision": "b2be52c8a7ef4708937cc88a5f51126a"
  },
  {
    "url": "/_nuxt/c21ecb121c22c953df5a.js",
    "revision": "4f82d9b0df568834373dcb44338e5776"
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
    "url": "/_nuxt/e4bba457b33fd5422d9a.js",
    "revision": "2527c9bfbf3141e5aa37b007ad0af3ab"
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





