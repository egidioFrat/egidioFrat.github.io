importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3920bd5c2e4658538f6a.js",
    "revision": "5ceaa21375e1115dbfde75ae009c391f"
  },
  {
    "url": "/_nuxt/403cb4edcedd0debde59.js",
    "revision": "b08b1db2612ef0214260e591d97e6ad9"
  },
  {
    "url": "/_nuxt/736850e1924e7433af4c.js",
    "revision": "c72fef67b3c72b0ac0c40a13708c4ae3"
  },
  {
    "url": "/_nuxt/79224df4ed33d7a37fe1.js",
    "revision": "dace4334456c1f3ed3e730c1a0c527b3"
  },
  {
    "url": "/_nuxt/8ea8e20209d98be2b420.js",
    "revision": "d6607fc03ecde2c73d0c3822dfbe387c"
  },
  {
    "url": "/_nuxt/a172d6a222d4e6fea43a.js",
    "revision": "d57ee65ca01654c646cabbcfe80a3b99"
  },
  {
    "url": "/_nuxt/acc42a9f2fb846fc2041.js",
    "revision": "06e504b64e6c75e93761622fa7eada63"
  },
  {
    "url": "/_nuxt/b35092d4f4597387ccb0.js",
    "revision": "2128f9b71b3d3c736c53aa87bb1e9f44"
  },
  {
    "url": "/_nuxt/dad7296b66c95cea9040.js",
    "revision": "fb44f571b4b846abe47c804dc4bd0132"
  },
  {
    "url": "/_nuxt/f0fff440fd3a2b97498c.js",
    "revision": "601682692d1fc38a49b78b6ff39c9348"
  },
  {
    "url": "/_nuxt/f3311c57b18410261bc0.js",
    "revision": "587844e9486e13bf100fd827253836ba"
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





