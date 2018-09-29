importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/55479cdd7d23c1059761.js",
    "revision": "6e06ddcbe691f256abc42ffff5b75cea"
  },
  {
    "url": "/_nuxt/72988ee42540e57ce6be.js",
    "revision": "904745b0cbf3d2a9f978b0d0be0cbaf8"
  },
  {
    "url": "/_nuxt/763cae1f1539acdf60e8.js",
    "revision": "ba928889899cfdc41b2f046564f0c127"
  },
  {
    "url": "/_nuxt/9ebd1aaf4e4b1e00ff9e.js",
    "revision": "a49be6b21841d74274169b86eaa0c231"
  },
  {
    "url": "/_nuxt/add71dcf418af60255a9.js",
    "revision": "ac051f8c96c37ec587d060192f128671"
  },
  {
    "url": "/_nuxt/b17dd0ad8fbb2c368bb2.js",
    "revision": "6c38dcc0ab059a56053e20bb00942bdc"
  },
  {
    "url": "/_nuxt/bc018774f6a3c0ebf8bc.js",
    "revision": "a7587fca463ae657969ec85de35f98cb"
  },
  {
    "url": "/_nuxt/ef3d15c6fc9d74957a31.js",
    "revision": "ee5506c763a976ad420f3a433015baf4"
  },
  {
    "url": "/_nuxt/f165f29af3318c5cd415.js",
    "revision": "228922c3cbb41a481d84b563aeed59d4"
  },
  {
    "url": "/_nuxt/f5eaf3da8b97455e557a.js",
    "revision": "b241837cd92ccca3c84701b802a3eb71"
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





