importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/17bee112ae93a7969b94.js",
    "revision": "1f7ae979b0de5fc05de18ef32e49ceb5"
  },
  {
    "url": "/_nuxt/3272475e8573f609baaa.js",
    "revision": "f1561e0243282931f4ccb3b032391804"
  },
  {
    "url": "/_nuxt/3bb1590a4bdac0e2d472.js",
    "revision": "d188980503f0848bfc469ec69693a78a"
  },
  {
    "url": "/_nuxt/4cd422f2ad2975538d60.js",
    "revision": "605d612c9f9d3b0358fbd5b847a1a89f"
  },
  {
    "url": "/_nuxt/736850e1924e7433af4c.js",
    "revision": "c72fef67b3c72b0ac0c40a13708c4ae3"
  },
  {
    "url": "/_nuxt/8ce30e350ef7a821d530.js",
    "revision": "83400bfbd4d4b1445394285b298f64b8"
  },
  {
    "url": "/_nuxt/a6a3e75e745bdd658879.js",
    "revision": "570781ddfb32852bb9742e3e77e00db7"
  },
  {
    "url": "/_nuxt/acc42a9f2fb846fc2041.js",
    "revision": "06e504b64e6c75e93761622fa7eada63"
  },
  {
    "url": "/_nuxt/b6253e60c8e6e353e6c4.js",
    "revision": "a62a468c0b37fb5fbe4363fdfcb7c79c"
  },
  {
    "url": "/_nuxt/b9cfbc4addbb2b7cd259.js",
    "revision": "08e7331394680d72f59ce27f2070dd82"
  },
  {
    "url": "/_nuxt/c8c22cab75a9593b197b.js",
    "revision": "b3e6024eed93dc13d9fba4bccf5365ba"
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





