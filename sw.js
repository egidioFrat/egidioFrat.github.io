importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/076898dad928993e0b87.js",
    "revision": "d12521904a6d4a21aece547c9c918148"
  },
  {
    "url": "/_nuxt/1c2518b023273339eac0.js",
    "revision": "a058c295d3c0be009a2caf43bf4c27b3"
  },
  {
    "url": "/_nuxt/3543245f29e0ae8527e6.js",
    "revision": "f68bbb58d2980b8ffbc76c4607f1b842"
  },
  {
    "url": "/_nuxt/3bc397b6d159df726e9a.js",
    "revision": "d8c731216d3118779825998f1b116263"
  },
  {
    "url": "/_nuxt/572b1bb45b6e264de547.js",
    "revision": "e8ac2291ae564b5aa1544ed24481a522"
  },
  {
    "url": "/_nuxt/5d3ec40f13faae4af089.js",
    "revision": "cb81c4f55ca2e58af0387107b6578709"
  },
  {
    "url": "/_nuxt/890c706bf6604cded61d.js",
    "revision": "7ac38e266095ed17cd7790761eb52d34"
  },
  {
    "url": "/_nuxt/a2159b794d4e634ab8aa.js",
    "revision": "7e95c669fdcc34a026df1e14ebd1ddc8"
  },
  {
    "url": "/_nuxt/c7b64427690c8cad2b3f.js",
    "revision": "527033ff8746d2e2c8f3bbc284bbc462"
  },
  {
    "url": "/_nuxt/f43b43c1548ead2a6922.js",
    "revision": "80519b3dd13ecd2749a7702d8cc0e69d"
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





