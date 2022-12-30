/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","557021fcd0d1bb0503bd46f985c3fb55"],["/2022/11/19/NOnote/2/index.html","927609c3222a1b8764afcce568971448"],["/2022/11/19/NOnote/3/index.html","176383a680c5fdfc4029f7ab460edc85"],["/2022/11/19/NOnote/4/index.html","065d9082067f05afc9b0782483292178"],["/2022/11/19/NOnote/5/index.html","d587ffa4b1083ef1e0fe9337cc87bbf7"],["/2022/11/19/NOnote/6/index.html","37459e24b26661c61cb075b2b388f6bc"],["/2022/11/19/NOnote/7/index.html","34ee51102abcce8e49aac568732460e5"],["/2022/11/19/NOnote/8/index.html","6bc661e8ec55cfbe41167eea3872e6e2"],["/2022/11/19/NOnote/9/index.html","3ac639cc1b5e3fff73c2236e1c4fe1f0"],["/2022/11/19/OCnote/1/index.html","6465d901d26f6c10f5df783b56545a16"],["/2022/11/24/NOnote/10/index.html","c5929c00709cc5dac747ea1aca8672c3"],["/2022/12/01/DEnot/1/index.html","f5a958a33b9731efa62e37ad391e3a4f"],["/2022/12/01/NOnote/11/index.html","6a71b610b01641d57573a99394f38efd"],["/2022/12/10/DEnot/2/index.html","3a4e5a395df0d14cf88e6cb51222cb5b"],["/2022/12/10/DEnot/3/index.html","fd5268418ee001c929aae4b17d3d2328"],["/2022/12/12/DEnot/4/index.html","1f94da64e450a3829816f4aa9a877327"],["/2022/12/12/DEnot/5/index.html","60a14d39e8f47bfd124dd03be20b686b"],["/2022/12/22/CTM/1/index.html","c6a7fdc835f2742af0affb6e0d5fc7f7"],["/2022/12/22/CTM/2/index.html","d106eea255def26bdfaf0966473f5da9"],["/2022/12/22/CTM/3/index.html","747b8cdfdcb8c4eb36f66ab5321b0a1e"],["/2022/12/22/DEnot/6/index.html","1493fe224529731916dbd927cb4657a8"],["/2022/12/29/DEnot/7/index.html","9c182f104f71f17f950bb8ba144e38c8"],["/2022/12/29/DEnot/8/index.html","e228e7944f99b23dc4c040b6064da783"],["/2022/12/29/DEnot/9/index.html","f4f698bd926ffd8fb0c512f871597ab9"],["/2022/12/30/DEnot/10/index.html","ea5da714b029c20345facd3a9717f32c"],["/404.html","6d42949809e7c7a1c97f3e483c02f1a6"],["/about/index.html","786abfacc27d8f0b1d6134dd5979244b"],["/anzhiyu/random.js","d0cbffd56c20d67cb3f7a5f0c5e48efc"],["/archives/2022/11/index.html","1b597493ca58d6717b119d1e77b26752"],["/archives/2022/11/page/2/index.html","fb992ad9734cfe1b8d150ab533cc0b84"],["/archives/2022/12/index.html","a37785daab6a299c13e4069fd2824e86"],["/archives/2022/12/page/2/index.html","e277eb464db30cd9792d3090d8be0938"],["/archives/2022/index.html","c3b3f9ddc742d8ec677d680d7825de92"],["/archives/2022/page/2/index.html","a5baf1238e4d57e144587b84e6c4d2a0"],["/archives/2022/page/3/index.html","a7c6ce37401440fcab3a9b84f453a2c0"],["/archives/index.html","67ae57ec4f75e6b6a70db70a494a0b7b"],["/archives/page/2/index.html","e64f1ad06a348f94edddf842fdaba58f"],["/archives/page/3/index.html","bea6ff80513d6914b6a353df941779d1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","dd95c0459867bdd82f6dd9603d2ffa0b"],["/categories/c语言/index.html","56f1c9683c4d80009669d1c95f000626"],["/categories/c语言/page/2/index.html","23d5c813202e2b4331e75579ae5550ef"],["/categories/index.html","78d27f1da37a551022c58f3b27d7c5fe"],["/categories/经验分享/index.html","a5dcb7a35408438ed83322d04ff10931"],["/categories/计算机基础/index.html","1de5c805e68e7f918ac481dd505347ab"],["/comments/index.html","b3f5f52e1d91ddc6a40c1e808aea292d"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","285e242230c7cb4530c5a0db08e12a36"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","2be0ef779733f8b612b7e0d7437dea4a"],["/page/2/index.html","5ca5a4eea9aa082c6789059387b6abee"],["/page/3/index.html","3476043decb14038402af0b2f0a88320"],["/sw-register.js","c92654e67c029117e446816e3dfe9276"],["/tags/C语言/index.html","decca0c4668378d6b641bc5a7ff16e81"],["/tags/C语言/page/2/index.html","8b278027a3293a62f1d3ef46a5a99c2d"],["/tags/C语言经典100题/index.html","27d5f99fa71a9d1b7586afbfce183289"],["/tags/index.html","83cbf614b587bb00c74bcd8e158f1624"],["/tags/图床/index.html","9baf3e7985022bfeed4e8a82f2171153"],["/tags/计算机基础/index.html","a505ade8077961a2322784872a85e80c"]];
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
