importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/16003c6842a27c3d2575.js",
    "revision": "ef21a21a5682596a858333f6dc600c6b"
  },
  {
    "url": "/_nuxt/1c2b0c23e042b329cf69.js",
    "revision": "ff4c1e03f0dbe2aa2c74d1910b346930"
  },
  {
    "url": "/_nuxt/1ea8b34a3e2da6b610fd.js",
    "revision": "e4b1625700f1a07ca3a314171ebff47c"
  },
  {
    "url": "/_nuxt/2109afd11e146c76580b.js",
    "revision": "d2a38e746fc7cec5080cff2b145da956"
  },
  {
    "url": "/_nuxt/2ee3ac8f009f624335cc.js",
    "revision": "dc4aec3accf11fc2c3d73cfef0d58bd4"
  },
  {
    "url": "/_nuxt/78ecd6f1d4927b2347a3.js",
    "revision": "2968c7fe232b66407da99f6ac2c065d8"
  },
  {
    "url": "/_nuxt/79541fa0b73213b286dc.js",
    "revision": "ca10134b0204bba926e4101dcb47bb94"
  },
  {
    "url": "/_nuxt/941bab34018134b0f914.js",
    "revision": "e7d18d67f0ba29fc4ec77a859a85e741"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/c4bcb2ba0ad3f64b5d64.js",
    "revision": "5c4ec9f55645c4ff660085c5c17bbfa9"
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





