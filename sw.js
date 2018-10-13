importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0861cce3d5a7a9da1ec0.js",
    "revision": "05776431a223c68bc5c1ec997f86f069"
  },
  {
    "url": "/_nuxt/0cc2ee65d1e68b103615.js",
    "revision": "9af6bc15b78c420fa8f058954254d1e9"
  },
  {
    "url": "/_nuxt/1459b593fb496e96dca7.js",
    "revision": "386a21cb338d19ca57d231f2074c1f50"
  },
  {
    "url": "/_nuxt/6b23eae5dbecdb545e37.js",
    "revision": "aa50ba49eaf63bd1db3fcad131b02733"
  },
  {
    "url": "/_nuxt/6d4a4a53a15aede2a2e8.js",
    "revision": "be04ac4f2dbd5c8b4767e5af192826dc"
  },
  {
    "url": "/_nuxt/809b11343bd1062c02ec.js",
    "revision": "60636afed367757ee3046d1c77ed44db"
  },
  {
    "url": "/_nuxt/a46c3a293665d06986d6.js",
    "revision": "d58a17e5e631210fc90720fa0a00b56e"
  },
  {
    "url": "/_nuxt/a567e9ae4ea3c381bd72.js",
    "revision": "b7cb46fd5e17ec887ca301d146f1c324"
  },
  {
    "url": "/_nuxt/cd8e7e13cd143bd1b05d.js",
    "revision": "eadecbedca5b0b294c08995880039aef"
  },
  {
    "url": "/_nuxt/da7fd53fa81313e4918c.js",
    "revision": "167e74d09b9e5d73a5813eaa063e25c2"
  },
  {
    "url": "/_nuxt/f294828c9eee8616c05b.js",
    "revision": "9f219d479bdd1b0f49c3412c80dcf638"
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





