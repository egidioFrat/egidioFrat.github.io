importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f68398388cf39d488e2.js",
    "revision": "9a04213e5b1c9cd54988a846bf5277d0"
  },
  {
    "url": "/_nuxt/17fc5b8d4f885f5b74bb.js",
    "revision": "904745b0cbf3d2a9f978b0d0be0cbaf8"
  },
  {
    "url": "/_nuxt/534d456bf622bb06fae7.js",
    "revision": "8083fae8000b0ff276fa3af8d46392cb"
  },
  {
    "url": "/_nuxt/840ced411b58e0fe9451.js",
    "revision": "6e74fa7477c567b4048e3c7d9dc249c8"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/a7a03bd5ac0c046d1c06.js",
    "revision": "ee4cc4304e4b2cd39e968f5e225e9ac3"
  },
  {
    "url": "/_nuxt/ba04a0cab5f51062715e.js",
    "revision": "3b181559bd80f83e83e019a6b80d97cf"
  },
  {
    "url": "/_nuxt/bb64a668fabf56510824.js",
    "revision": "7118956d3979cc60239dde2f210333c3"
  },
  {
    "url": "/_nuxt/bf5a268f897738009f9c.js",
    "revision": "863c7b61362027fb0a31def95886f8c5"
  },
  {
    "url": "/_nuxt/cf67da84cccd414b2b3c.js",
    "revision": "ddb413e4ea1ec7960323b48dc4572857"
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





