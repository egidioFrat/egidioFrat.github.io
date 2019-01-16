importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1bd7f6c64b2d7aa94b2a.js",
    "revision": "c54ca8bc3f2fa4eca38331f6744c4837"
  },
  {
    "url": "/_nuxt/3551c0fa3f482154bf99.js",
    "revision": "cd15811a0fc9159bb0124af973de47f3"
  },
  {
    "url": "/_nuxt/37e71769c26036cfbe9c.js",
    "revision": "35cc362e88f0f057b5e39a0d3e8b0826"
  },
  {
    "url": "/_nuxt/403715064be078179145.js",
    "revision": "3c16e8b8ad1cf251bd3c0af36d980a61"
  },
  {
    "url": "/_nuxt/460ffec15383d6d0f283.js",
    "revision": "bd1239ba26c46b36e6bff2d6ffce62c8"
  },
  {
    "url": "/_nuxt/79d5cde1f5db5de6c8de.js",
    "revision": "085557516464b32115602cfbf8fe5fd6"
  },
  {
    "url": "/_nuxt/b82460563603bf8147a4.js",
    "revision": "556f06a3e21e9914b686c8541bd3b573"
  },
  {
    "url": "/_nuxt/c5e3f58d7d3b2684315a.js",
    "revision": "3c864c44a928c3e900a8dce4c57c8aa2"
  },
  {
    "url": "/_nuxt/c65b550571c8950f0eb3.js",
    "revision": "74441897ede9a2d7c7f35516e9a2553f"
  },
  {
    "url": "/_nuxt/ea0841936d51aaeaf728.js",
    "revision": "0890f94814433c1ebd7159b896c5fd9d"
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
