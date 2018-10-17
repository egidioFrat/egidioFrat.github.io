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
    "url": "/_nuxt/444a2902290e700da959.js",
    "revision": "d1d44a4426c33c3ec09e37d10aa63f91"
  },
  {
    "url": "/_nuxt/6a4ee25da5f17f322f5a.js",
    "revision": "59aaae6b734db1246490bc2dbdf25189"
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
    "url": "/_nuxt/8afc0c324eb05dddbb78.js",
    "revision": "57cd0ec3b045f0a4d2a84b6cea7ca36c"
  },
  {
    "url": "/_nuxt/a46c3a293665d06986d6.js",
    "revision": "d58a17e5e631210fc90720fa0a00b56e"
  },
  {
    "url": "/_nuxt/cdcc93379b7e2d36bb6f.js",
    "revision": "ce53b0410ceaf18199d53ad8994caf7e"
  },
  {
    "url": "/_nuxt/fce4fea4d1746dc7f390.js",
    "revision": "0367c4e0379d6081ce82ab517a4bdf9d"
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





