importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b09d1f49ae86b694a42.js",
    "revision": "2de26e6bd8703ea31a392f275ed3e4aa"
  },
  {
    "url": "/_nuxt/282593d3a0d1cd9d399c.js",
    "revision": "051f3ecf776e6a9d38c6ce5411cb5901"
  },
  {
    "url": "/_nuxt/2b603595cc18b9871d54.js",
    "revision": "2b820d86e8c498e918879ac03e690751"
  },
  {
    "url": "/_nuxt/4fe68b3dd0e4241e4887.js",
    "revision": "b879288a61aa71e43d84e4450af9483a"
  },
  {
    "url": "/_nuxt/7bfae0259884d41b708a.js",
    "revision": "2be5a21b485c3181219d5d089af5dc5f"
  },
  {
    "url": "/_nuxt/7c4f3fdccc0fdc23dc09.js",
    "revision": "3fe8720d9b4f31eb8fd81f8758b5f040"
  },
  {
    "url": "/_nuxt/aacc43dc319f83b9c47f.js",
    "revision": "fc92b2dfacad9b4a5e2b754daf2e350e"
  },
  {
    "url": "/_nuxt/affcafd55abf1bf1afee.js",
    "revision": "ab9114cbd04e60e1867afa434e752234"
  },
  {
    "url": "/_nuxt/bf3365d6992cff852bb8.js",
    "revision": "70ea96b60d92901ff320543f14117bdd"
  },
  {
    "url": "/_nuxt/ca090c4cabbab773b58f.js",
    "revision": "b6bcc301252e192390760360c9d117ef"
  },
  {
    "url": "/_nuxt/e8b207e80e90aef9adb4.js",
    "revision": "fd5995ede473b86310c26cf51f413bea"
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





