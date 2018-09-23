importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/15f94a4aafe8bc0e195f.js",
    "revision": "bcfefc0a45434a991fae52d6c2803ff1"
  },
  {
    "url": "/_nuxt/17fc5b8d4f885f5b74bb.js",
    "revision": "904745b0cbf3d2a9f978b0d0be0cbaf8"
  },
  {
    "url": "/_nuxt/3705098fcde33f22f2c0.js",
    "revision": "a014b1e4de3f2fa71664dd346f762594"
  },
  {
    "url": "/_nuxt/52bb88c2f8493825b819.js",
    "revision": "3111f08cef097cecc79f5fab7d4e1f41"
  },
  {
    "url": "/_nuxt/534d456bf622bb06fae7.js",
    "revision": "8083fae8000b0ff276fa3af8d46392cb"
  },
  {
    "url": "/_nuxt/6424dcb2f11c6ccd4614.js",
    "revision": "2a64c185b36ea4a71fd00e3476653a17"
  },
  {
    "url": "/_nuxt/66ae6691d39571aef37b.js",
    "revision": "c828b843733b211f78c1042da1af9145"
  },
  {
    "url": "/_nuxt/9518914e3520d5359679.js",
    "revision": "f1a4b60653c18bd5b264c271bd6faa6c"
  },
  {
    "url": "/_nuxt/cf67da84cccd414b2b3c.js",
    "revision": "ddb413e4ea1ec7960323b48dc4572857"
  },
  {
    "url": "/_nuxt/e200a290883f9eb34636.js",
    "revision": "53619e26decc5c6aac6b2719fa2cd5c0"
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





