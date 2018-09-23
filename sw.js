importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/013f9af62ab193fe84b7.js",
    "revision": "89e55e6e445fb7fdfac4770658c080bb"
  },
  {
    "url": "/_nuxt/077d69eb26db6685ab84.js",
    "revision": "c1cbf55cc644e4f291c74e08ff323df3"
  },
  {
    "url": "/_nuxt/1c2b0c23e042b329cf69.js",
    "revision": "ff4c1e03f0dbe2aa2c74d1910b346930"
  },
  {
    "url": "/_nuxt/2ee3ac8f009f624335cc.js",
    "revision": "dc4aec3accf11fc2c3d73cfef0d58bd4"
  },
  {
    "url": "/_nuxt/36c573cf57558ad4235d.js",
    "revision": "c0b3e0bc8a06545da197d8b1bde45cbe"
  },
  {
    "url": "/_nuxt/6fed4e4613775d03fea2.js",
    "revision": "c5ad9e99c1a0fb79cdbd6c2a7d6a3f27"
  },
  {
    "url": "/_nuxt/71fdaef6cf10a8216065.js",
    "revision": "e1169fa4acc408ed4868958248daebbf"
  },
  {
    "url": "/_nuxt/78ecd6f1d4927b2347a3.js",
    "revision": "2968c7fe232b66407da99f6ac2c065d8"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/9c02897561e19c5a9eab.js",
    "revision": "5e1c857fba826a111111b735c770a912"
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





