importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/28323133a8fd21fadfbe.js",
    "revision": "bf77fe8403e999d3717ddd082e4ca0f2"
  },
  {
    "url": "/_nuxt/2d295f5d02ab52fbf320.js",
    "revision": "65841ee22bf74ebf338b76ebe9b5d302"
  },
  {
    "url": "/_nuxt/2fcde2e5c8f400e014e2.js",
    "revision": "b70416ba368e80b9820f0acad9387fb3"
  },
  {
    "url": "/_nuxt/53d9ce6bd593ed1ec5dd.js",
    "revision": "de815863c51dd692104cc2594072d118"
  },
  {
    "url": "/_nuxt/6aaf2fa446dd7b75e37c.js",
    "revision": "63488e4eb1f7bc4598aa660a1c248556"
  },
  {
    "url": "/_nuxt/8089b8a65a554a89bf8d.js",
    "revision": "759453931e440fe3dfd796589d0203c8"
  },
  {
    "url": "/_nuxt/b6a25f6d56ae241f9ba3.js",
    "revision": "194784a485ba21dd63edd1f4964061e6"
  },
  {
    "url": "/_nuxt/d1e909aa71a0975e9249.js",
    "revision": "a3277e157359ce4f6c4651b298fbacb2"
  },
  {
    "url": "/_nuxt/db00c3a974e63a4fdcaa.js",
    "revision": "5fcc15e3ce218ac87f60882c18a510f8"
  },
  {
    "url": "/_nuxt/e035478b719ebe822b46.js",
    "revision": "630bfbae67b0f5ce12515ab195bcdc95"
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
