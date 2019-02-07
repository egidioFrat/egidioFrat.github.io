importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0dc1316045d6ea87a6e8.js",
    "revision": "acda984e8967dc94427d51a749254fec"
  },
  {
    "url": "/_nuxt/11a017c0343b5ffb228e.js",
    "revision": "d9d8b8da2aeafc0c95f55feaebbff1c7"
  },
  {
    "url": "/_nuxt/4f2e797647bcec630152.js",
    "revision": "beb5c86b9e294585512645468cce2e67"
  },
  {
    "url": "/_nuxt/8e599eb4a95894f0ce3c.js",
    "revision": "f44b40e726952cb2eee0adb3b0e930b3"
  },
  {
    "url": "/_nuxt/919c952f44be068cb2ff.js",
    "revision": "93b3fe22633dd87b77c9fc3cec762030"
  },
  {
    "url": "/_nuxt/c34b9698b4075b286856.js",
    "revision": "edc09dcb9b30929536044f49b6c4bcd5"
  },
  {
    "url": "/_nuxt/df584a7dbb93da710ad6.js",
    "revision": "581fcd565d31bc449713e19885a6e57f"
  },
  {
    "url": "/_nuxt/f21850572b9e42529fb3.js",
    "revision": "506aef299f09e3ba52039d0b9034f489"
  },
  {
    "url": "/_nuxt/f578c8566c85a6ef2f9a.js",
    "revision": "8f185d6e2784dc52e27d154deaad059a"
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
