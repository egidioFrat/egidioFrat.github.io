importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dc6b0dd9d137b37717a.js",
    "revision": "3172ffb4624583129dc45c6083ebecde"
  },
  {
    "url": "/_nuxt/0ee5f691bc2f9734e5f5.js",
    "revision": "ffa4f836b99a36b4eab211a554e282da"
  },
  {
    "url": "/_nuxt/2b077dce571a6a5100f8.js",
    "revision": "54bca11de297b051b2c848e0f8786da8"
  },
  {
    "url": "/_nuxt/3e78362410e22dbfd111.js",
    "revision": "fb24d756dcf8caa3c9753173a1bb3a9c"
  },
  {
    "url": "/_nuxt/489724b41263d529ca69.js",
    "revision": "0a7ae4bdc2d7a16cff40e4858f828b65"
  },
  {
    "url": "/_nuxt/578d5b8f269bdb45194b.js",
    "revision": "52cc5b09a3845e4255c266b3cfdcb2dc"
  },
  {
    "url": "/_nuxt/6da242fec08672ec9adc.js",
    "revision": "0eb197e946166b38a2512abe7ea64103"
  },
  {
    "url": "/_nuxt/736850e1924e7433af4c.js",
    "revision": "c72fef67b3c72b0ac0c40a13708c4ae3"
  },
  {
    "url": "/_nuxt/7850c705383c7224f4be.js",
    "revision": "e128c3801b02995b0283050fbb317fc8"
  },
  {
    "url": "/_nuxt/79923824031f2707ea69.js",
    "revision": "8fc02b3befe982618bf7671771834d34"
  },
  {
    "url": "/_nuxt/fe7e6a157d337015f5c7.js",
    "revision": "438a49275836f18bac56563e402d3ab4"
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





