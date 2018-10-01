importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0906e6cc33b5ffe084ac.js",
    "revision": "57172ccfdf1bb2a6cb48ea06f0638cac"
  },
  {
    "url": "/_nuxt/284305d6a3b242e06a5b.js",
    "revision": "5e391298fcb1e0a6ee4f9929341b5d19"
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
    "url": "/_nuxt/9359cb70d8cf30d8001a.js",
    "revision": "15681404b93f6bffb2e4255138929d1d"
  },
  {
    "url": "/_nuxt/acc42a9f2fb846fc2041.js",
    "revision": "06e504b64e6c75e93761622fa7eada63"
  },
  {
    "url": "/_nuxt/ae032aedfe716ee41e6f.js",
    "revision": "bc479a82b73c58af53139c8cc5228855"
  },
  {
    "url": "/_nuxt/af81b438cb168d28592c.js",
    "revision": "a4aeee43d350739ae4c5f2553356cdb2"
  },
  {
    "url": "/_nuxt/b9cfbc4addbb2b7cd259.js",
    "revision": "08e7331394680d72f59ce27f2070dd82"
  },
  {
    "url": "/_nuxt/e2dbd3bae69b6998e6c1.js",
    "revision": "2cf96a0f5414cb00bcb413206901ccc3"
  },
  {
    "url": "/_nuxt/ef6831c39a9ac854ed10.js",
    "revision": "3c99715618ba1036bb1990c856b7c454"
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





