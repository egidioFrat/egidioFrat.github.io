importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05d04aeff1e01f394de2.js",
    "revision": "90d95b282ee293fcc40d6cd0ff6547d1"
  },
  {
    "url": "/_nuxt/10a7673d5545234a8de1.js",
    "revision": "a5b9840d7250f6773d331360f52ad40b"
  },
  {
    "url": "/_nuxt/1a91db8f45ef25f04426.js",
    "revision": "0d23a5b4b9768092ee8346deb80238f6"
  },
  {
    "url": "/_nuxt/501523f0d3d690ddc709.js",
    "revision": "88389f18fd57ac3124d82ca4801cb802"
  },
  {
    "url": "/_nuxt/7693b164cc7be43fa859.js",
    "revision": "cec16990bcc34537a7bdd2459486b079"
  },
  {
    "url": "/_nuxt/835a819f47c90d6b61fb.js",
    "revision": "482bfbc3f0a65bc97bbf2e313b5a4454"
  },
  {
    "url": "/_nuxt/83de97cb8920fa3f8b80.js",
    "revision": "383e77eaa07303ede02eccb13931d06a"
  },
  {
    "url": "/_nuxt/b23857987209692bd244.js",
    "revision": "bcfe3e6d64b7d2df4b3ca8c299aca9ed"
  },
  {
    "url": "/_nuxt/d9fc7795be82381983ce.js",
    "revision": "ee18b31c0b6cf9b9e67e7dc81c100699"
  },
  {
    "url": "/_nuxt/e971009633fde63c4c37.js",
    "revision": "fd13b521db2d119e04a862dce01b632d"
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
