importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/178b5d588a023952ba7d.js",
    "revision": "023585b4172b37feb51f74486406bcd5"
  },
  {
    "url": "/_nuxt/1c2518b023273339eac0.js",
    "revision": "a058c295d3c0be009a2caf43bf4c27b3"
  },
  {
    "url": "/_nuxt/2c72bc015793eda393d4.js",
    "revision": "67dcc3df2ec117de6152bb83a77212e7"
  },
  {
    "url": "/_nuxt/6e0e989a36e36c9205b9.js",
    "revision": "823f618ef9606a0d7f658ddf06560c5c"
  },
  {
    "url": "/_nuxt/8453901914d88ea4acbc.js",
    "revision": "51973abe6a943e570d8e2a19bbdb4f5c"
  },
  {
    "url": "/_nuxt/a50881b1445b4b5248b2.js",
    "revision": "cdf2bc28548f41c190ca4aecf3b568b3"
  },
  {
    "url": "/_nuxt/c7b64427690c8cad2b3f.js",
    "revision": "527033ff8746d2e2c8f3bbc284bbc462"
  },
  {
    "url": "/_nuxt/e8a24e00eb63bdc57121.js",
    "revision": "95b157f1feaa21e00c8258a2ae628847"
  },
  {
    "url": "/_nuxt/f2267931aaad2ff01c4b.js",
    "revision": "5f9ac188b039e2e3008d7b081b31a1e3"
  },
  {
    "url": "/_nuxt/fdf9bf9053ffb872c53d.js",
    "revision": "1e6628b50c45df8d8f81a79cb4de47a8"
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





