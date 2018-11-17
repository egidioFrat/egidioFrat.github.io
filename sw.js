importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04f717a03a4c95673f88.js",
    "revision": "550efe3746f48b1b2a0d7f989b2784f6"
  },
  {
    "url": "/_nuxt/14560c5d38b4b1794603.js",
    "revision": "67dcc3df2ec117de6152bb83a77212e7"
  },
  {
    "url": "/_nuxt/23c82f4d28e6369bab10.js",
    "revision": "ead83429e79801c58db0b3cdfa88bb17"
  },
  {
    "url": "/_nuxt/2d917f2f679af380f9ee.js",
    "revision": "66c6d064604c8cbfd086b3a14a2a9100"
  },
  {
    "url": "/_nuxt/301a0bc0266195212c34.js",
    "revision": "7411951a03c8eb61bb8fab4c0e2a0634"
  },
  {
    "url": "/_nuxt/5f861b05ef4de686b6fc.js",
    "revision": "4430493bad071b0a6ba473bc4cdc986a"
  },
  {
    "url": "/_nuxt/8089b8a65a554a89bf8d.js",
    "revision": "759453931e440fe3dfd796589d0203c8"
  },
  {
    "url": "/_nuxt/a8451c35b63f4e11ca08.js",
    "revision": "7cd651214454ec1167247894428f136f"
  },
  {
    "url": "/_nuxt/a8e7d5066855a624aaba.js",
    "revision": "f734c1c37693db45845b864403d12d90"
  },
  {
    "url": "/_nuxt/dda8785a36dbc0892c1e.js",
    "revision": "eead3c8efaf8f7b923e28b07b192aedb"
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
