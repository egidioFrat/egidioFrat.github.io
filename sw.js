importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03dcc658b36765aa7354.js",
    "revision": "43dfdf07b898b16a1a5a19e182d25793"
  },
  {
    "url": "/_nuxt/055c4a06af4695f2f769.js",
    "revision": "5256beae6c365171f58133c7e628cbf6"
  },
  {
    "url": "/_nuxt/1c2518b023273339eac0.js",
    "revision": "a058c295d3c0be009a2caf43bf4c27b3"
  },
  {
    "url": "/_nuxt/315c0bf4bf0760d6ace7.js",
    "revision": "33b4ad36512e170381042def3e7a9bc4"
  },
  {
    "url": "/_nuxt/39bde0890cf0612de913.js",
    "revision": "a612555f953f49fff1f2bbe370891218"
  },
  {
    "url": "/_nuxt/5cf6e8960a8ae8435d5b.js",
    "revision": "cf0027ed2e1242d7810939a4749ab3e5"
  },
  {
    "url": "/_nuxt/7ba0e63778eddf0ad4ba.js",
    "revision": "af190ce9001d3056905cff48aa66811e"
  },
  {
    "url": "/_nuxt/a69add6fc5582667033b.js",
    "revision": "5fc1676be402918f50b3f01481883512"
  },
  {
    "url": "/_nuxt/b803294d0b8cc0244762.js",
    "revision": "1b55bdac476603c2b4bb4e4443e0750f"
  },
  {
    "url": "/_nuxt/c7b64427690c8cad2b3f.js",
    "revision": "527033ff8746d2e2c8f3bbc284bbc462"
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





