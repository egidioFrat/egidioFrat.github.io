importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0861cce3d5a7a9da1ec0.js",
    "revision": "05776431a223c68bc5c1ec997f86f069"
  },
  {
    "url": "/_nuxt/1459b593fb496e96dca7.js",
    "revision": "386a21cb338d19ca57d231f2074c1f50"
  },
  {
    "url": "/_nuxt/587b54c32dd03a86e441.js",
    "revision": "7f6bc4044f605b5fcda6852e92ee66b7"
  },
  {
    "url": "/_nuxt/663ca2c1aec89105d1af.js",
    "revision": "4ffd6e4d9f1bba6c87b8e92f2aad1a94"
  },
  {
    "url": "/_nuxt/6b23eae5dbecdb545e37.js",
    "revision": "aa50ba49eaf63bd1db3fcad131b02733"
  },
  {
    "url": "/_nuxt/6d4a4a53a15aede2a2e8.js",
    "revision": "be04ac4f2dbd5c8b4767e5af192826dc"
  },
  {
    "url": "/_nuxt/809b11343bd1062c02ec.js",
    "revision": "60636afed367757ee3046d1c77ed44db"
  },
  {
    "url": "/_nuxt/8aedf0ebf40761e5c062.js",
    "revision": "3149548e8407c6e6b2f2518cb93303fc"
  },
  {
    "url": "/_nuxt/a46c3a293665d06986d6.js",
    "revision": "d58a17e5e631210fc90720fa0a00b56e"
  },
  {
    "url": "/_nuxt/cd8e7e13cd143bd1b05d.js",
    "revision": "eadecbedca5b0b294c08995880039aef"
  },
  {
    "url": "/_nuxt/cdcc93379b7e2d36bb6f.js",
    "revision": "ce53b0410ceaf18199d53ad8994caf7e"
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





