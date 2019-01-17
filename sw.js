importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11344c67c1cb2fe35ecd.js",
    "revision": "4f57fac56f8d4b944d82b0d1af193610"
  },
  {
    "url": "/_nuxt/3551c0fa3f482154bf99.js",
    "revision": "cd15811a0fc9159bb0124af973de47f3"
  },
  {
    "url": "/_nuxt/403715064be078179145.js",
    "revision": "3c16e8b8ad1cf251bd3c0af36d980a61"
  },
  {
    "url": "/_nuxt/605a902c892a5711acf0.js",
    "revision": "ff698a151f03bc89cad084ed03ddcefb"
  },
  {
    "url": "/_nuxt/6da143c34b4392096271.js",
    "revision": "b18a4f59682e8eb1c64d6fbd5166c3aa"
  },
  {
    "url": "/_nuxt/8e095c559a9a292cc4bc.js",
    "revision": "ce237778da88ad709e156f4ac54acfa9"
  },
  {
    "url": "/_nuxt/97412e2e4d128c128796.js",
    "revision": "92d2ce2c8e093559cba4482458f7a7d6"
  },
  {
    "url": "/_nuxt/c252f4c969c6cf2338eb.js",
    "revision": "faa512cf0fd1d03f4d56e16c5af24261"
  },
  {
    "url": "/_nuxt/cf05dc1dee0333671e21.js",
    "revision": "cd97392df9d3bc05aff712cb49825dc1"
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
