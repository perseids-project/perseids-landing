"use strict";var precacheConfig=[["/index.html","bafe19e2be060de4cebf3f8f5d595001"],["/static/css/main.108ce70e.css","740cadccf6ada24dec61e3c1d282b097"],["/static/js/main.3015c9c7.js","ca99d462d45e45531ac4048e5ec00afd"],["/static/media/agldt.3f5d961f.png","3f5d961f70a9f226ef0bbf9f8a62f954"],["/static/media/bodin.c49db818.png","c49db818a1c067e0ee1f798ea46e3b19"],["/static/media/code.56297882.png","56297882e02d398827cd22bda0f1d241"],["/static/media/columns.dad23906.jpg","dad23906be0d73c673ba4352ca8f2a0b"],["/static/media/community.163724ee.png","163724ee25fbce28f430f0d8b54178f2"],["/static/media/construction.217c13d2.jpg","217c13d2ab5129d628a3bb7ffe843a32"],["/static/media/demixer.0c86748f.png","0c86748f91d8121ef05c5b27c7ef4d56"],["/static/media/digmill.7f1f7156.png","7f1f7156a5415bc632dfda0b43a2e87d"],["/static/media/frqsc.1b552b64.png","1b552b641625003462d340f42f88d1a5"],["/static/media/hermes.067ea291.jpg","067ea29109e25bb28bc10d5b7d786359"],["/static/media/imls.56ac5fbf.png","56ac5fbffa76917e52b34893febe263b"],["/static/media/kress.ccc1f79f.png","ccc1f79fc146793d40568e22e4ca2f27"],["/static/media/lexicon.6bd6c910.png","6bd6c910c5beef1321eac4e8a4cfe77e"],["/static/media/manuscript.97595473.png","97595473b852d09c92bdab0dedc370e4"],["/static/media/mellon.5dc2d375.jpg","5dc2d375fd156ada680a6af6d60e06f8"],["/static/media/morphsvc.452a4e93.png","452a4e93cb2b83e5284269a130ff25ec"],["/static/media/sharing.9abbf2d2.png","9abbf2d25a2a0d2aa25a704b73a7bb08"],["/static/media/treebank.46ad201c.png","46ad201c4312c9efe35fd0ae0f20ce88"],["/static/media/tufts.bd084aae.png","bd084aaeac777b2df78fc46bdde2d64f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});