/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","1650b965b06de875fa1772a29678e5a8"],["/2022/11/03/NOnote/1/index.html","f60016a656445974992f3aee9bfbb2ef"],["/2022/11/10/NOnote/2/index.html","17d48e4ce731c40a35394ebd1186479e"],["/2022/11/10/NOnote/3/index.html","a4d073ec24b143d89e4aef0a01f76f51"],["/2022/11/10/NOnote/5/index.html","454643d60f0e6e7aca13f776000cf634"],["/2022/11/10/NOnote/8/index.html","254bb37c94616f88e75b4f071b406bb6"],["/2022/11/17/NOnote/4/index.html","be31732f6879f92fb652f942db60c47c"],["/2022/11/17/NOnote/6/index.html","671f3a491738b856113a87ee927495e0"],["/2022/11/17/NOnote/7/index.html","f23119e8c3671bc3fdb932048e43fc78"],["/2022/11/17/NOnote/9/index.html","7da545248c0f1ea58040e97c2256c49b"],["/2022/11/24/NOnote/10/index.html","a6885795b870e1abace3225183667998"],["/2022/12/01/DEnot/1/index.html","52d558df6a4dc0202ec9769bdb266a14"],["/2022/12/01/NOnote/11/index.html","401436396381a1a83bc8aa42a680b112"],["/2022/12/10/DEnot/2/index.html","3a66b8538e0e84c2d789a3ad73884fa9"],["/2022/12/10/DEnot/3/index.html","391302db4d26c5bedcb870b1ed8ff95d"],["/2022/12/12/DEnot/4/index.html","c65c60ae1840f8b4223a96a0afcc0004"],["/2022/12/12/DEnot/5/index.html","7755dd607b85b66e113a15041a159ac0"],["/2022/12/22/CTM/1/index.html","7a44a3ec8de8df06e900f33efb7bd92f"],["/2022/12/22/CTM/2/index.html","0f0664261317a64f13107dd1eaa3b678"],["/2022/12/22/CTM/3/index.html","0b959c6414309d504eaeddaaa787d431"],["/2022/12/22/DEnot/6/index.html","c40c5df3472bf51ed989226b71cfc9d0"],["/2022/12/28/CTM/4/index.html","2b47e8900a6aa2d3a832d05706e324d4"],["/2022/12/29/DEnot/7/index.html","f76deaeed517b86afeac78051ecba444"],["/2022/12/29/DEnot/8/index.html","61cf70657f63d4899dce19565a507f43"],["/2022/12/29/DEnot/9/index.html","572e5d24dc504846e7ae3a0870595017"],["/2022/12/30/DEnot/10/index.html","1fe15ff1a6a8dac6b2b4b40cb1d1d883"],["/2023/01/03/2023/Mon/1/index.html","bb391a5d4d7b064df52681ade25da6cb"],["/2023/01/06/2023/Mon/2/index.html","222b1136eb5d2c25510c86e51cacbb39"],["/2023/01/08/2023/Mon/3/index.html","ccf0d7cb2977dd0d254c5a9498b6c8ef"],["/2023/01/09/2023/Mon/4/index.html","518ec5c814dc1321e5755dabc1736d3f"],["/2023/01/19/2023/Mon/5/index.html","c26f2c1bf740f6a3f83429908ad7629f"],["/2023/01/21/2023/Mon/6/index.html","4b7d2ca06617fec0cb64b8ac9f1d7b44"],["/2023/01/21/2023/Mon/7/index.html","4df3c8c230ea0af63af790f71c4df745"],["/2023/01/22/2023/Mon/8/index.html","10783511a69a0d6501b6e97ab28ca412"],["/2023/01/23/2023/Mon/9/index.html","5356ef375aab95deee01d8322647e53f"],["/2023/01/29/2023/Mon/10/index.html","edcf873597350e3b78415bbd3f6e97cb"],["/2023/01/30/2023/Mon/11/index.html","0615b169ef540215e3a69330c74a3141"],["/2023/01/31/2023/Mon/12/index.html","5c35adb59bc3cde08bfc015b3af975e5"],["/2023/01/31/2023/Mon/13/index.html","cc62a9993a7ea64296d8f01dfc04f2b5"],["/2023/02/06/2023/Feb/1/index.html","71f37a69f99f27d83e27d121f22910ac"],["/2023/02/08/2023/Feb/2/index.html","f15cb818b67cb11bb2c88db0637034ce"],["/404.html","b63fb0a3307b89c7964102b5ce871fd0"],["/about/index.html","fb884c109b930c774491f66a08a54afa"],["/anzhiyu/random.js","1d501995dff7a2cdfcab9c16fa2be4d0"],["/archives/2022/10/index.html","a4fa04f9a3997dbd36375a6783a2692e"],["/archives/2022/11/index.html","9468e60f7a3df73d45e521f043324089"],["/archives/2022/12/index.html","69e5039b02460441f036cf4a6f7b07e5"],["/archives/2022/12/page/2/index.html","8b36361d37fb217fb0914b99a3beee87"],["/archives/2022/index.html","a5e50c7ffc236ba08b4c2ed7127e2c5a"],["/archives/2022/page/2/index.html","0a88bba84dfdcf71e342c8fbd167fee0"],["/archives/2022/page/3/index.html","0bb549ea1e35372c03d178ce8034d891"],["/archives/2023/01/index.html","c9d5607c0fbe520d74e163b69174b4b5"],["/archives/2023/01/page/2/index.html","403709eb4774cf31915bc3201b561f49"],["/archives/2023/02/index.html","7cab1cfdf57eacb64c4362081055f9b0"],["/archives/2023/index.html","3296f92aee7682db7b644e45979e9e06"],["/archives/2023/page/2/index.html","b44b96e8339bc13852f3f5c7842ce495"],["/archives/index.html","e02f475dfd806d9c7a86c8755e331683"],["/archives/page/2/index.html","a2a26f38c5c71ae2daebb1c81fdb1198"],["/archives/page/3/index.html","0c286ebba18cbda4c25c533ade639ed6"],["/archives/page/4/index.html","a37c941c2968f713a2f567070c9e8dc4"],["/archives/page/5/index.html","0556c03cdecad4bcb7a4d479a4515113"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","73f308c44ef5af9e638c27739f3fe419"],["/categories/C语言经典100题/index.html","fa9990625b1c0130748ca4881e195cd2"],["/categories/c语言/index.html","8b9525537fb90fb7998d151d180926da"],["/categories/c语言/page/2/index.html","76236afc4c454d35a3b3416917c1b24a"],["/categories/c语言/page/3/index.html","0f5e4b4633b1d2a3777ee71e6a714402"],["/categories/index.html","18ada90dec216e60a8c17382006665ad"],["/categories/经验分享/index.html","b63a26b12266f660f96e63c146e18858"],["/categories/计算机基础/index.html","0346b55f0842a9e1f4b79c2582004868"],["/comments/index.html","166680b5efc1d820853d65938a67843e"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4c4f427d11bf0205a78ffa5c8432b669"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","58793854379c87a729560485e14e1d74"],["/link/index.html","3dfcaa47cfed426d8c058101327b698e"],["/page/2/index.html","fe9353988d93913d2d77581936c2bfb2"],["/page/3/index.html","a2d39522c197c2121e47562c55d4dc93"],["/page/4/index.html","c964d10549d8dbb286d9bede69830e7f"],["/sw-register.js","cab0a321af07f82887185c59786e3f7f"],["/tags/C/index.html","a135cb8fc10af2a952f55073d9afa0b3"],["/tags/C语言/index.html","0e71e04be8839fa565867e8dffdbb236"],["/tags/C语言/page/2/index.html","c6bd860182294c2d716993b73b98f389"],["/tags/C语言/page/3/index.html","9d9797fa6dc63bf8631c0300d63139a6"],["/tags/C语言经典100题/index.html","94db99587abf562af04abc055964e435"],["/tags/index.html","39193844d8a01fcade3c6b47377b1ca3"],["/tags/图床/index.html","ddccaa926e594ee92ba1a2c5e91fd845"],["/tags/类和对象/index.html","33600b5ca7b6220243f20af6ecad84cd"],["/tags/计算机基础/index.html","c5786bd970ac8083546dd1b0d8e98352"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
