importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/02e2eece996a4681dec8.js",
    "revision": "f6e890d4a4be9d224555af0d27555b36"
  },
  {
    "url": "/_nuxt/17fc5b8d4f885f5b74bb.js",
    "revision": "904745b0cbf3d2a9f978b0d0be0cbaf8"
  },
  {
    "url": "/_nuxt/20e4ca2b2acd8e62913c.js",
    "revision": "ff681854778fdc2ab63d12f4b742853d"
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
    "url": "/_nuxt/9d8f4fb884e8a9d6a126.js",
    "revision": "b2be52c8a7ef4708937cc88a5f51126a"
  },
  {
    "url": "/_nuxt/a2fa087554ab7a4a4e92.js",
    "revision": "3380c614594bde1e8bab992ffe0b4db4"
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
    "url": "/_nuxt/ec2ce1928bc09a5a6a59.js",
    "revision": "236386335074b65df8433ec4d95fa2a5"
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





