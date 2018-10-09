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
    "url": "/_nuxt/d9104ca66430f3e090cd.js",
    "revision": "ef669b43b4b24f9a148dea312e31f41f"
  },
  {
    "url": "/_nuxt/eaa11dd71685d621d820.js",
    "revision": "87a2dce6bc044c015237beb42d68ede8"
  },
  {
    "url": "/_nuxt/f749774a19184f82c988.js",
    "revision": "09976e45c4737854035c7b502fdedd27"
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





