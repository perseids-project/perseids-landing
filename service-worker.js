"use strict";var precacheConfig=[["/perseids-landing/index.html","4c88248eef556e84bd746345b476519f"],["/perseids-landing/static/css/main.f75a8171.css","cd3aeb44ffe634e73e971d6c839cbabf"],["/perseids-landing/static/js/main.4d353066.js","784f214d2ccb72365ac6a9e370ae3878"],["/perseids-landing/static/media/columns.dad23906.jpg","dad23906be0d73c673ba4352ca8f2a0b"],["/perseids-landing/static/media/community.163724ee.png","163724ee25fbce28f430f0d8b54178f2"],["/perseids-landing/static/media/construction.217c13d2.jpg","217c13d2ab5129d628a3bb7ffe843a32"],["/perseids-landing/static/media/demixer.0c86748f.png","0c86748f91d8121ef05c5b27c7ef4d56"],["/perseids-landing/static/media/digmill.7f1f7156.png","7f1f7156a5415bc632dfda0b43a2e87d"],["/perseids-landing/static/media/frqsc.1b552b64.png","1b552b641625003462d340f42f88d1a5"],["/perseids-landing/static/media/hermes.067ea291.jpg","067ea29109e25bb28bc10d5b7d786359"],["/perseids-landing/static/media/imls.56ac5fbf.png","56ac5fbffa76917e52b34893febe263b"],["/perseids-landing/static/media/kress.ccc1f79f.png","ccc1f79fc146793d40568e22e4ca2f27"],["/perseids-landing/static/media/lexicon.6bd6c910.png","6bd6c910c5beef1321eac4e8a4cfe77e"],["/perseids-landing/static/media/manuscript.97595473.png","97595473b852d09c92bdab0dedc370e4"],["/perseids-landing/static/media/mellon.5dc2d375.jpg","5dc2d375fd156ada680a6af6d60e06f8"],["/perseids-landing/static/media/sharing.9abbf2d2.png","9abbf2d25a2a0d2aa25a704b73a7bb08"],["/perseids-landing/static/media/treebank.46ad201c.png","46ad201c4312c9efe35fd0ae0f20ce88"],["/perseids-landing/static/media/tufts.bd084aae.png","bd084aaeac777b2df78fc46bdde2d64f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(n){return n.redirected?("body"in n?Promise.resolve(n.body):n.blob()).then(function(e){return new Response(e,{headers:n.headers,status:n.status,statusText:n.statusText})}):Promise.resolve(n)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(n){return a.every(function(e){return!e.test(n[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var e=new Request(n,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+n+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(n,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(n){return n.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return n.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(n){if("GET"===n.request.method){var e,a=stripIgnoredUrlParameters(n.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),e=urlsToCacheKeys.has(a));var r="/perseids-landing/index.html";!e&&"navigate"===n.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],n.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&n.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',n.request.url,e),fetch(n.request)}))}});