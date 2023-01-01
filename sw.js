/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","ee9c14b83210b941500c7dc49ca96e68"],["/2022/11/19/NOnote/2/index.html","c6187d96ff5f821199d98f8f3d53c17b"],["/2022/11/19/NOnote/3/index.html","71ee22ee8aa8e86b1162516c6df76bd5"],["/2022/11/19/NOnote/4/index.html","cdaa942e804c638ee3b964160e7a6a97"],["/2022/11/19/NOnote/5/index.html","2453ad3d38bb6890398b729d1894e5dc"],["/2022/11/19/NOnote/6/index.html","d2b4337a0b1791c72ec83f19c719092d"],["/2022/11/19/NOnote/7/index.html","636202190017d989f1c2c8d9686d0569"],["/2022/11/19/NOnote/8/index.html","6cb8c0a64a6bd789d66ca8f621ba0818"],["/2022/11/19/NOnote/9/index.html","9399d72e0560150ba1c99635809d5113"],["/2022/11/19/OCnote/1/index.html","5c5431b03dd95cb7ea9758e2871ff6bb"],["/2022/11/24/NOnote/10/index.html","55b496eb45cde63e6710b815f0a38479"],["/2022/12/01/DEnot/1/index.html","08aea39ca73a9920a965db0b2f6ce627"],["/2022/12/01/NOnote/11/index.html","5a6f4a6aca7db0665c3058a1eb679897"],["/2022/12/10/DEnot/2/index.html","bd237d8305e292b2abdcfbe51cd580ce"],["/2022/12/10/DEnot/3/index.html","d7072a894c7997f78f3acf6b15b85f71"],["/2022/12/12/DEnot/4/index.html","329844dfaaf1476839789c77d9fa84c7"],["/2022/12/12/DEnot/5/index.html","783651c2bef6a09ca649a365a8a05c21"],["/2022/12/22/CTM/1/index.html","db087e839cd8dae687bce1f57c0a44b0"],["/2022/12/22/CTM/2/index.html","59e2c1cac7ff8d8d411dd90c496a06ea"],["/2022/12/22/CTM/3/index.html","a6f03e667284801aed3d6a22f7029536"],["/2022/12/22/DEnot/6/index.html","450f569c413435ff5c076b676948ce25"],["/2022/12/28/CTM/4/index.html","2047540350e9718379d06d24018942b0"],["/2022/12/29/DEnot/7/index.html","c0f3b055845d59e6ff3a25fc8b2afa42"],["/2022/12/29/DEnot/8/index.html","1c7300c11fc371229877bc51cc0dd7dc"],["/2022/12/29/DEnot/9/index.html","e2fea84edb0b45e2fcbd471b9bc21bbe"],["/2022/12/30/DEnot/10/index.html","0578f3fc76e12e74803e9077c83803a1"],["/404.html","06302daa80e665375e05926beda41deb"],["/about/index.html","07a64309f4e351ede4993c4187fb5759"],["/anzhiyu/random.js","679a4e815c54048ef8df640482a8a356"],["/archives/2022/11/index.html","0e1d9ec6d88d75874e550c9083efd171"],["/archives/2022/11/page/2/index.html","10837c749a8bf7036b457f8b98fdff21"],["/archives/2022/12/index.html","addb5eb8cb1c0c4267d4e7e59c0455a9"],["/archives/2022/12/page/2/index.html","4c61e00df512708d513e80d47e3daf29"],["/archives/2022/index.html","af95a17997e3a4d1a43d2302796f3bd8"],["/archives/2022/page/2/index.html","d91f7966cc562174a40a9e3510b67ea1"],["/archives/2022/page/3/index.html","7188ae0a37e948b681fa78c45b7841ed"],["/archives/index.html","d7bbd90ccc7e493e1e1cccd5f4cb1a2b"],["/archives/page/2/index.html","093bfb210590d819dc706569321039f5"],["/archives/page/3/index.html","05da597870d4ba3fb0cce5a2836c6603"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","cc5f9a8720c50e840cdb9ee20cd248a6"],["/categories/c语言/index.html","39924325dcda771cb7e1c79667a634a4"],["/categories/c语言/page/2/index.html","8d5a960b8ec1c8409784937ae5e4b491"],["/categories/index.html","af37dcbe63fa9cbb0458b70ff529ad01"],["/categories/经验分享/index.html","56dd190fb0bd1027698dd0771c8b4e4a"],["/categories/计算机基础/index.html","7b36ed859d20ee53ae6e0575a5980ade"],["/comments/index.html","2ecdf5f1c30ad3dc7f33aaf12c3cfce9"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3a78e1263bec6cf7ff264a32678c9aa9"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","7fde057dd3e069c284a896b7fda371cd"],["/page/2/index.html","39aba3b58d86afebfe218b47457987ea"],["/page/3/index.html","1ac7072a5898915bf658a903fbad9740"],["/sw-register.js","43b3b17f0d36f6bb49a7b4e54cb39245"],["/tags/C语言/index.html","b4ecad6f27b5f4cfcf80ae6fda0fa226"],["/tags/C语言/page/2/index.html","8bd725ce62c66fc003b68e7c7c1bc946"],["/tags/C语言经典100题/index.html","26103198716468cbaf4be63146bbe741"],["/tags/index.html","c0d00456a348dad6e767978caa9990b8"],["/tags/图床/index.html","937b0600104f18104418de2ef6601d02"],["/tags/计算机基础/index.html","9521517701df38687ca3fca2f7601c80"]];
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
