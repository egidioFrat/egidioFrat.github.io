importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1238fef6b223004baa88.js",
    "revision": "581fcd565d31bc449713e19885a6e57f"
  },
  {
    "url": "/_nuxt/173a56d62c3071926a3f.js",
    "revision": "d9d8b8da2aeafc0c95f55feaebbff1c7"
  },
  {
    "url": "/_nuxt/6ccafabf4973a8e618d7.js",
    "revision": "e6fd0218b7aaf88d5105f11313a64dda"
  },
  {
    "url": "/_nuxt/6dadda072b645f251253.js",
    "revision": "8f185d6e2784dc52e27d154deaad059a"
  },
  {
    "url": "/_nuxt/6df692429905be9cb35c.js",
    "revision": "edc09dcb9b30929536044f49b6c4bcd5"
  },
  {
    "url": "/_nuxt/6e1405d980851ba65b9a.js",
    "revision": "93b3fe22633dd87b77c9fc3cec762030"
  },
  {
    "url": "/_nuxt/8169b5cb2152befb888e.js",
    "revision": "f7e8ec1eb30a065ce6001f55c1b64788"
  },
  {
    "url": "/_nuxt/af58e7998d12ed198e01.js",
    "revision": "acda984e8967dc94427d51a749254fec"
  },
  {
    "url": "/_nuxt/b67c3c14e63751682b05.js",
    "revision": "b09e9543140a58a4d078f040edacd7f3"
  },
  {
    "url": "/_nuxt/fbb66edb023b5a3c1c8d.js",
    "revision": "506aef299f09e3ba52039d0b9034f489"
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
