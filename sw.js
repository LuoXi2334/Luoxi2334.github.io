/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","c4763bc72094b70c5d0a75f42a9d7b65"],["/2022/11/19/NOnote/2/index.html","b478187629d79cb526594760cd3074de"],["/2022/11/19/NOnote/3/index.html","180bc3c60b3541914e25af945a01146c"],["/2022/11/19/NOnote/4/index.html","1fbb3a069548af45df51ff24fc3ebc6b"],["/2022/11/19/NOnote/5/index.html","082888730646f7288b21eadf2721958a"],["/2022/11/19/NOnote/6/index.html","d39933b9463a516c3307df2a72b7727f"],["/2022/11/19/NOnote/7/index.html","ae9aa2d50da8f222dbe6f1673b7a6899"],["/2022/11/19/NOnote/8/index.html","17195fe147ebed5ca6cf4f4c5f3a148b"],["/2022/11/19/NOnote/9/index.html","87fd59d4011109f89a7422af49d2920f"],["/2022/11/19/OCnote/1/index.html","265b53d43f7566b5301dca9277566b24"],["/2022/11/24/NOnote/10/index.html","3b3dc8ec442d3248e8584c1fc6e1d96f"],["/2022/12/01/DEnot/1/index.html","0a607b70c2e7192003d4ef8fbe320539"],["/2022/12/01/NOnote/11/index.html","9d58017a86e4937c4c8c1afdb2e5f9c6"],["/2022/12/10/DEnot/2/index.html","a2607512f2c6dfb6ce6d1dd9d41fe2e4"],["/2022/12/10/DEnot/3/index.html","8ccd085ed1447c00322e106a595d88c7"],["/2022/12/12/DEnot/4/index.html","b57e6d6b535b8750f225a462c72e1427"],["/2022/12/12/DEnot/5/index.html","f4355703fc1719ea8674cec9863d2ad8"],["/2022/12/22/CTM/1/index.html","59e707b043236c3dec07b10e37fb813f"],["/2022/12/22/CTM/2/index.html","d8f8f1d5d24eea8c088fa10cf1c75bed"],["/2022/12/22/CTM/3/index.html","bebe04702d25cbe0a4666fe08565a8dd"],["/2022/12/22/DEnot/6/index.html","0324d2c1bee8caf36c349fd45133f2f5"],["/2022/12/29/DEnot/7/index.html","2556eeda1ca77e3d7f75913ca463a5bd"],["/2022/12/29/DEnot/8/index.html","4e6b5671e6ccb9e9110c7468ac38a5a4"],["/2022/12/29/DEnot/9/index.html","af08d1f7cade3281133bec91c3173081"],["/404.html","1f0b40c8e856d94b75c2c8fa01e58ad0"],["/about/index.html","f0e2cef6a109a6b38249db76daec5367"],["/anzhiyu/random.js","840a43f1d2921e3e1d1328e3c1946aca"],["/archives/2022/11/index.html","c8ef83cd64b003f6fb27ed2bd6d14f35"],["/archives/2022/11/page/2/index.html","942b56a0e27ab838c7f56bc54a07c063"],["/archives/2022/12/index.html","299d1567a4e00e37e20834e4eb1a16d5"],["/archives/2022/12/page/2/index.html","310f136e5297c797f6bbbaadbd20e842"],["/archives/2022/index.html","2a5ec18869d6f0957b8c6be32c0d3542"],["/archives/2022/page/2/index.html","28475fb19b896e39a3cc67f58c1324b4"],["/archives/2022/page/3/index.html","8134310760555169d380b5009e16ac62"],["/archives/index.html","1864fa21ebecbd6814165eedb7e404e7"],["/archives/page/2/index.html","6a73f0d8e82ede9d4dbcb3b1a435f74e"],["/archives/page/3/index.html","8976d398b3b50854088a0c39ddcb67b6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","61772022e8db3df3863bbec21166e0ac"],["/categories/c语言/index.html","235c863d43087d1b4a528793c5bce6c6"],["/categories/c语言/page/2/index.html","c2206e20fbabeb753e1b49c05c14898e"],["/categories/index.html","2e20edb5f1a5bc01f2c2f9e5857e9d37"],["/categories/经验分享/index.html","4afa9f9b265db523bedb07c15b56821f"],["/categories/计算机基础/index.html","8af875c51f234b7d4f1e5f92110c684f"],["/comments/index.html","32f735f3bb9ec29c1731326a8e01da63"],["/css/custom.css","6cc4f7934aee7d55886b89b897c5f727"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","80df3953c4a2738f8bbe1f5f5bb3e1a1"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","6d52b5645b3326b98acfe8801066b1f8"],["/page/2/index.html","3912dd8e4376227b20a151491367330a"],["/sw-register.js","28ce50ed57e044b1c00aeff5476eb563"],["/tags/C语言/index.html","aa0c7b6fba319a804d15570609fe2f0c"],["/tags/C语言/page/2/index.html","12fd443ea9febeb3d787a40f61bcce69"],["/tags/C语言经典100题/index.html","cd55013beebf5fafdef3f2ec07ae0e37"],["/tags/index.html","36d082b103b1ba054b26703b2c2a32db"],["/tags/图床/index.html","268788010b31709d402475eb1f07bc42"],["/tags/计算机基础/index.html","1454251bd72bb90d41b773c4849af569"]];
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
