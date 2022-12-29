/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","83d6c186af93bc2946d7ececd961fa76"],["/2022/11/19/NOnote/2/index.html","902d64b816f9d6039b708e7eae3161dc"],["/2022/11/19/NOnote/3/index.html","6fa8a1d44a2899e1d1dee9c063e7c0fe"],["/2022/11/19/NOnote/4/index.html","d42cb9f4080139f59481575ca6a0d154"],["/2022/11/19/NOnote/5/index.html","8754a1b7823bc4a656b7a77760fc1a66"],["/2022/11/19/NOnote/6/index.html","410350b8f83d5a9bf038ffd687c94cc6"],["/2022/11/19/NOnote/7/index.html","d6c651249959f0753fadb5196c5b7417"],["/2022/11/19/NOnote/8/index.html","d61630a42af94431cea07308cdbc3e97"],["/2022/11/19/NOnote/9/index.html","ad16a13e848b68f1bfdc8f060f6664c0"],["/2022/11/19/OCnote/1/index.html","b68f56cee5c33a0ada0c7668bf1fa11a"],["/2022/11/24/NOnote/10/index.html","4ec182f2c38900feb3c4903d8421f33f"],["/2022/12/01/DEnot/1/index.html","f8bd0c7537bb8d2b956c8e05fc1ba676"],["/2022/12/01/NOnote/11/index.html","38504703215075eaa4f6bef7731dc637"],["/2022/12/10/DEnot/2/index.html","7aede32e3b3e76d3f3285cab3dde4b81"],["/2022/12/10/DEnot/3/index.html","67603192df17410d79c1a9bccf816cde"],["/2022/12/12/DEnot/4/index.html","90ce3f1e84bd10bcffe8b0f1eac48049"],["/2022/12/12/DEnot/5/index.html","cee111bc425a9c62536398f7739d5ea1"],["/2022/12/22/CTM/1/index.html","ca4eb344c72f6436a17751209b21ad19"],["/2022/12/22/CTM/2/index.html","da0d63a6d4f0feb8e8c71a94e7d3c46e"],["/2022/12/22/CTM/3/index.html","947b665ba22a0931ce38f78437e9f27d"],["/2022/12/22/DEnot/6/index.html","63d04bc08adff8231fa8a7259c0ed8b5"],["/2022/12/29/DEnot/7/index.html","83d5e2f5bb5f0a4213dfb484a6beaa8d"],["/2022/12/29/DEnot/8/index.html","9a1b6746fbeb540b70db1468f22c44b9"],["/2022/12/29/DEnot/9/index.html","6e2a2a6fe62678f94ab8750485437a11"],["/404.html","04971b9631d2829f132ad54046358d30"],["/about/index.html","87cf20bea48eb5e7c5de2ccf41e13da6"],["/anzhiyu/random.js","68311f9275b9b8350b62e608ef8ebc12"],["/archives/2022/11/index.html","bbbc64d37ebdf9b3b35072d6e40a5200"],["/archives/2022/11/page/2/index.html","7b2a99440f6824be67b05aefb55ba489"],["/archives/2022/12/index.html","099f004415bdee1d06aced3ceabc3f85"],["/archives/2022/12/page/2/index.html","389158a4737e03e047dc3038bcf57987"],["/archives/2022/index.html","6883e423ac4df5cb1700da96bb50688d"],["/archives/2022/page/2/index.html","a74581d380299a35ed3ae800bab591e4"],["/archives/2022/page/3/index.html","e6f395d31b3223d77fa1e5d54ea22836"],["/archives/index.html","f12cfa51217f7a5b4cfdfb42eb4c7f3b"],["/archives/page/2/index.html","58e93ecfe88ccae619f0d6a5df298a86"],["/archives/page/3/index.html","acc2e232a7e9161ad51347564866b724"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","bc8a4c293ab9e45a7ddfd1430dfbb2d0"],["/categories/c语言/index.html","a738e1b77f529d7222ad283fec631bb1"],["/categories/c语言/page/2/index.html","6180dc45765aa7fd8c41463bfb2c02b6"],["/categories/index.html","7e25f73ad2199c7e10c4ab26011b7a88"],["/categories/经验分享/index.html","80e902166ad953a0948ac1278246ebc3"],["/categories/计算机基础/index.html","4910073799a396af39e253bc95fd00b8"],["/comments/index.html","a565784d5ab9c3703870f23cfb95a414"],["/css/custom.css","6cc4f7934aee7d55886b89b897c5f727"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2691a2dfac53b1e10be0e102589fef80"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","dcd96080d949968ee791635f5760832c"],["/page/2/index.html","af6284c3e039b828fbd90afb937b8f09"],["/sw-register.js","040b65926dfb4b9acafa50a16e7f2311"],["/tags/C语言/index.html","cc1cfd877dd3394a2b925243eaed17bc"],["/tags/C语言/page/2/index.html","097ff514ce9644ed1162627247cfdf52"],["/tags/C语言经典100题/index.html","38702b4bbde8fb09915913a0aadbae26"],["/tags/index.html","15d2181bbe9b0bed5f367de6d05d122f"],["/tags/图床/index.html","a7d60a14fd2d0c8809fe6ba0a855be52"],["/tags/计算机基础/index.html","1110a9a03e478c3a2299e9f0eeaef648"]];
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
