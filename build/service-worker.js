"use strict";var precacheConfig=[["/index.html","cfb364dd8f605299c59a7b5edf73d854"],["/static/css/main.2392a9e5.css","a5a5a89f39c0de12c50a3786b108cbb3"],["/static/js/main.8981ea12.js","68945c15bc5eab77332d98f9a40f44f3"],["/static/media/change-or-bg.7116bef6.jpg","7116bef6b7b3338045230303e11b24c2"],["/static/media/change_or_girl.4067639e.png","4067639e0e06a42658a8d474c8591629"],["/static/media/contest-bg.cc0e415b.jpg","cc0e415bb846b6781354d45a2a0278da"],["/static/media/contest-crystall.187e8c5b.png","187e8c5b4247bc213321919cb3bbf8a7"],["/static/media/contest-girl1.1fb04d6d.png","1fb04d6d9df28e6a4c8279ddc7976e2d"],["/static/media/contest-round.aff357de.png","aff357deb1f4c30530a82e4d1ef293d7"],["/static/media/contest5-icon.e467c1d5.gif","e467c1d58889bc1f971a7116b8e0df0a"],["/static/media/cry1.3721a3b6.png","3721a3b6f3a80d370f796cc5b6de4f66"],["/static/media/fa-brands-400.a999c7b8.svg","a999c7b8823b901248833dc7fe07a52f"],["/static/media/fa-brands-400.d034c1b2.woff","d034c1b2ee84dd981ef2e637754a0b4f"],["/static/media/fa-brands-400.e0fc4e5c.ttf","e0fc4e5c719b4dc10c97fc111d7374e1"],["/static/media/fa-brands-400.e2a76403.eot","e2a76403183eff8967cf6318c6e51509"],["/static/media/fa-brands-400.f319eac1.woff2","f319eac1c755f9929fd856720ce1695e"],["/static/media/fa-regular-400.5a4618f0.eot","5a4618f029618cc2795c05fe53d57028"],["/static/media/fa-regular-400.6534c603.ttf","6534c603e0892488132ad57248ec69e2"],["/static/media/fa-regular-400.a3715c6f.woff2","a3715c6fe264a51f1d9260b447ff46bc"],["/static/media/fa-regular-400.e99569d3.woff","e99569d3d10c94c60d9a68523c1c0e71"],["/static/media/fa-regular-400.e9d8dbb0.svg","e9d8dbb0c3e9b97ffc59c50ff5d01422"],["/static/media/fa-solid-900.00ddaede.ttf","00ddaede094b83270cadbfc1a907e8ca"],["/static/media/fa-solid-900.128d2b0b.woff","128d2b0be23925e5cf36717ddc6f093b"],["/static/media/fa-solid-900.18d2347a.woff2","18d2347ab2a9f40ca2247cdb03303d84"],["/static/media/fa-solid-900.666a82cb.svg","666a82cb3e9f8591bef4049aea26c4c6"],["/static/media/fa-solid-900.d9824d00.eot","d9824d00712532d7697df68df16ae0d3"],["/static/media/footer-logo.ef66ec40.png","ef66ec40257481124dd7806a5731173f"],["/static/media/frames_1.448e9829.png","448e9829857b0df39c153c49c167efa6"],["/static/media/frames_2.3a187eb3.png","3a187eb3254e852f1a9673b42c9e8938"],["/static/media/frames_3.f74bc31d.png","f74bc31dd1950a6ee1e445258ebf6659"],["/static/media/frames_4.1cb2031c.png","1cb2031cb091dd88283bf06e812833a6"],["/static/media/frames_5.6c7f10ae.png","6c7f10aed8a21e86c431f47fce37f0b9"],["/static/media/header_bg.31ea2793.jpg","31ea27938ce219d1af32769e49022602"],["/static/media/header_girl.a8db2fec.png","a8db2fec875192a641f607388ec2a450"],["/static/media/header_logo.b0f56fcd.png","b0f56fcdf58095601d5d46291bb65eff"],["/static/media/header_packs.ccb89469.png","ccb894698c15b5d27c72554b6d5fa43b"],["/static/media/members-bg.0d4dc0a4.jpg","0d4dc0a40023153e92c2f5fb6066e6b2"],["/static/media/packs-bg.31ea2793.jpg","31ea27938ce219d1af32769e49022602"],["/static/media/packs.677ba04d.png","677ba04de2ed9c7261ae798b11359b49"],["/static/media/prizes-packs.70f2bfff.png","70f2bfff251819c84423f9293bba2419"],["/static/media/prizes-packs2.0ecef5e5.png","0ecef5e5e2c847f615ccf1f68f55ffde"],["/static/media/tagline-demo.838d0b7d.png","838d0b7dcbd56c787801104026b2d3ac"],["/static/media/test-bg-crystals.dbfcdd3c.png","dbfcdd3c3dc0094ebade9bc892dea0f3"],["/static/media/test-bg.bb012787.jpg","bb0127874997f31d41b4181007867116"],["/static/media/test-girl.6bcbc911.png","6bcbc911b30743fe48772ab387fced04"],["/static/media/test-girl1.e20f4b63.png","e20f4b63172ee0ef980adfa96f727e4f"],["/static/media/test-girl2.6cc34a8e.png","6cc34a8ecd0d0437a0b5efa0b76941c2"],["/static/media/test-girl3.d5daff6f.png","d5daff6fd63db0f103bd3ff5da2d142a"],["/static/media/test-girl4.7f2998cd.png","7f2998cd75fe1d9f917085cc6e2d755f"],["/static/media/test-girl5.345af0b1.png","345af0b10e962d89d29243d7015c0988"],["/static/media/test-result-bg.2d642575.jpg","2d64257596f92aec0bfd9b13c99bed9f"],["/static/media/test-result1.2d642575.jpg","2d64257596f92aec0bfd9b13c99bed9f"],["/static/media/video_bg.380be1ca.jpg","380be1ca6a428caa445c1aa73daf48c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});