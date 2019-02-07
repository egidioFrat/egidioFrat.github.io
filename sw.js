importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01d548dce4953629f978.js",
    "revision": "2abdc49fc6d0ab014f82a614d6afba98"
  },
  {
    "url": "/_nuxt/06e1dbec67e914876a82.js",
    "revision": "634a9b95ec908d7030b7b5ecb3b15735"
  },
  {
    "url": "/_nuxt/08b07ca85ad1bd5404ca.js",
    "revision": "18d52f33233c950cb9616b5211ee4ee5"
  },
  {
    "url": "/_nuxt/14bfb3da8aa75c4837c8.js",
    "revision": "bb9ba43688808d3f5366630d74934732"
  },
  {
    "url": "/_nuxt/2edf3367d1da68cbe36e.js",
    "revision": "359f7bf292f7bfbf304ffd77c59f9b8e"
  },
  {
    "url": "/_nuxt/8e6043530d72eabe7c90.js",
    "revision": "c465a19a4e7d4e88bc149ee548d3d344"
  },
  {
    "url": "/_nuxt/919c952f44be068cb2ff.js",
    "revision": "93b3fe22633dd87b77c9fc3cec762030"
  },
  {
    "url": "/_nuxt/9e09863180bc7684aa0e.js",
    "revision": "d8e416e073c0fde829bd4b4f4443d911"
  },
  {
    "url": "/_nuxt/ae83d25f13217cb6b73a.js",
    "revision": "98cd8d808f13dcf2fac5307b58352648"
  },
  {
    "url": "/_nuxt/ff8ce4d5a9be45deb60f.js",
    "revision": "3ed3897b481743f7af8dff6a20164817"
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
