importScripts('/_nuxt/workbox.42554690.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01c7db194d756893028d.js",
    "revision": "38c05096332ec90a8a40dd5a76fe9213"
  },
  {
    "url": "/_nuxt/088de335cffb9442703a.js",
    "revision": "25e6e10b86d19db8f1baa710f51c38d6"
  },
  {
    "url": "/_nuxt/3cd25623c2d7a73da508.js",
    "revision": "eee1334da7a1fd94cde48124ec98d57e"
  },
  {
    "url": "/_nuxt/5d18bf94c5c543657cba.js",
    "revision": "2e20eddf90cea66dc4302e55589e07ce"
  },
  {
    "url": "/_nuxt/7ad073ecf63d3427cdb7.js",
    "revision": "c23b04c922ec4a2a74dc4ea99afc88ca"
  },
  {
    "url": "/_nuxt/8de0a51c589a419af6fb.js",
    "revision": "5036bb0ba9f8e615336325fffe577d29"
  },
  {
    "url": "/_nuxt/91b92b52e0db7d2af77e.js",
    "revision": "79ca52ff801d761e83da5cd05e794616"
  },
  {
    "url": "/_nuxt/a8766ad8ac92c80d0bb9.js",
    "revision": "3a999a97a9a62e4b3d58e929c4552dc8"
  },
  {
    "url": "/_nuxt/b4411f2b57838da6d022.js",
    "revision": "aa0897b04deb98c8ff9385dc7f4c80e7"
  },
  {
    "url": "/_nuxt/d2895249a6cb2bdaef65.js",
    "revision": "a7115187933f0a03582f7f147665096d"
  },
  {
    "url": "/_nuxt/f687849bd00da56099aa.js",
    "revision": "fe0adc85608e561882e646a2dc07d577"
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





