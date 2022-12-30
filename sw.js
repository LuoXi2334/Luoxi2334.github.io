/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","53c8f6727cbb25cb1ef258d2f88602fa"],["/2022/11/19/NOnote/2/index.html","fc2c6fddf3afc82ebbe7bf4b98c4c107"],["/2022/11/19/NOnote/3/index.html","c709911f58d06351a8d707d6ca5dda5a"],["/2022/11/19/NOnote/4/index.html","bc79de2f46c4853c517c94930e9f80a2"],["/2022/11/19/NOnote/5/index.html","c1dc6759deefeff3b46b264cc22970aa"],["/2022/11/19/NOnote/6/index.html","8db16598986b4261424f0eab59b90ed3"],["/2022/11/19/NOnote/7/index.html","ee65900f96c7a2e6ddafe9e56117e31e"],["/2022/11/19/NOnote/8/index.html","6d4d6589da7d38d30bb2bd013e6170fa"],["/2022/11/19/NOnote/9/index.html","ae3926351277b3c4cb83e93c8a41532b"],["/2022/11/19/OCnote/1/index.html","895092ab3ae5b805c9a13b0a2f8880e4"],["/2022/11/24/NOnote/10/index.html","17a4fde5d4aa0d9b6a48cafef9815aaf"],["/2022/12/01/DEnot/1/index.html","5f5135254cd7dcb248a0e0c7dfe946b5"],["/2022/12/01/NOnote/11/index.html","ace5c6c9265a08f616df695997831dfa"],["/2022/12/10/DEnot/2/index.html","68636663aa44270c747731bfe71ec103"],["/2022/12/10/DEnot/3/index.html","2601e93f7dbaf03c861980e3c9594767"],["/2022/12/12/DEnot/4/index.html","8843a4b206ef7224799e3fbdae9b9cef"],["/2022/12/12/DEnot/5/index.html","2bd5214ad58fed010983e27993d5d42c"],["/2022/12/22/CTM/1/index.html","714ca5e6fc4073432b0bf991008ecffc"],["/2022/12/22/CTM/2/index.html","90551e4bb39fc1e8539e78502a0e2ebf"],["/2022/12/22/CTM/3/index.html","10a442ef10be17d351caa1b3ae03f5ee"],["/2022/12/22/DEnot/6/index.html","e9d630562594226480af13213723b5ca"],["/2022/12/29/DEnot/7/index.html","7dfb051d74b4a133cb3bfd6708a3595d"],["/2022/12/29/DEnot/8/index.html","993d2e9d05ae3188a7ca785402a9e066"],["/2022/12/29/DEnot/9/index.html","8ba3bf8377ebf923c2abdcf26fc92885"],["/2022/12/30/DEnot/常量和指针/index.html","216366ed7c2653c07db02228ad82353c"],["/404.html","097a917f4fb8cf9097e16298f4aadef8"],["/about/index.html","f8526bb537473b8e129ec83e00fb82a7"],["/anzhiyu/random.js","82b52bdb9bfb2cfe82a0c71e4641e0fb"],["/archives/2022/11/index.html","b8d91f4297f3b408612b94786bf1ab6b"],["/archives/2022/11/page/2/index.html","ffee0c4ff2fbbe34a4944f43ef272f03"],["/archives/2022/12/index.html","2b4f2267c00e4e91b0d19bebf73daad4"],["/archives/2022/12/page/2/index.html","3c84a0cdc3f802f10372c6b12d91db76"],["/archives/2022/index.html","18d5b0c9a97be8aa5bb3127b8b23c645"],["/archives/2022/page/2/index.html","dd63223682a3e39f35909baf539da4a4"],["/archives/2022/page/3/index.html","f74cca3cae8f6d614daa18ee8ee990d5"],["/archives/index.html","877df921d875192221172fb6b761ae72"],["/archives/page/2/index.html","0c3bb0af4e09798b1cfaf23b51d60a3e"],["/archives/page/3/index.html","71acb2771d475dc34620799e29b22414"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","e3b229f1fd03065c4edff2661fd655ae"],["/categories/c语言/index.html","14e286c2eb6401b6e847c847f4f80c79"],["/categories/c语言/page/2/index.html","503f70e196259c4e37940c3bdf6944fb"],["/categories/index.html","4871eb2db7dbd3f38183db23073b0a54"],["/categories/经验分享/index.html","a10d4ffdeae297e3214c249d34ad2de5"],["/categories/计算机基础/index.html","2df558c869c90bbad63901e6a9b5b6b6"],["/comments/index.html","fdfafe276f5a04947e2400594f02e645"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6c06b6e29b325b2f10e35d33e997eefa"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","239f3486d51cfac592d3c8e262ab568e"],["/page/2/index.html","9565d7ec19985ae3667931cc0ab8f95e"],["/page/3/index.html","ddb591c902855f43500f8aa5e11d57f9"],["/sw-register.js","83387208d573754f695c3fdf84d91386"],["/tags/C语言/index.html","90ccf95b2344d5d5227a0d8f54465ed3"],["/tags/C语言/page/2/index.html","6c8bcb233a0c8d8d5069301e115897e5"],["/tags/C语言经典100题/index.html","b292125477c545b616ad718a68466b4b"],["/tags/index.html","d4ac3d197d5430249bb70aef3af9be16"],["/tags/图床/index.html","112a512aa2608dcfd21e9de266793911"],["/tags/计算机基础/index.html","e88bce6aa48a761eea3030b815ae5474"]];
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
