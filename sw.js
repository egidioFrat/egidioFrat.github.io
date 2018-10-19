importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06f3c52db06c7c3ad06b.js",
    "revision": "28abdf32cd18a7c3dac55e004cf3f5fe"
  },
  {
    "url": "/_nuxt/1a128d1c5c944021f216.js",
    "revision": "43e5f999150d3680a0b1cfd1720efacc"
  },
  {
    "url": "/_nuxt/1c2518b023273339eac0.js",
    "revision": "a058c295d3c0be009a2caf43bf4c27b3"
  },
  {
    "url": "/_nuxt/6b50996bcc07fb025b0e.js",
    "revision": "88f29290025b0dc372821e6b26a2c155"
  },
  {
    "url": "/_nuxt/6ed680dc3de2b1235939.js",
    "revision": "b02d394a21d9032e8ecc2e267ac0ec86"
  },
  {
    "url": "/_nuxt/8b1f2afab03870a4ace3.js",
    "revision": "68a50b4aff5e2ed86d8a69e64de18a12"
  },
  {
    "url": "/_nuxt/c61abcd18e44595c54bb.js",
    "revision": "e20bc0e7ecc3256fa08802f96f6e2722"
  },
  {
    "url": "/_nuxt/c7b64427690c8cad2b3f.js",
    "revision": "527033ff8746d2e2c8f3bbc284bbc462"
  },
  {
    "url": "/_nuxt/cb415c60d453d42119aa.js",
    "revision": "55b0ce07c0963bf07f0e6e374edd31e4"
  },
  {
    "url": "/_nuxt/e103ffd660e5e7527a33.js",
    "revision": "b8f7799f784160104e97a05b003985ea"
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





