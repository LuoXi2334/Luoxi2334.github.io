/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","768620ae4bf66852f21f33c9c9e7a06a"],["/2022/11/19/NOnote/2/index.html","9e199e7758780261dd4e5b24b3d86b5d"],["/2022/11/19/NOnote/3/index.html","8775babb22a0634263ac6f565da8fd10"],["/2022/11/19/NOnote/4/index.html","66875db912a2c2d84f2d07ef4d317779"],["/2022/11/19/NOnote/5/index.html","dcd77d6eb65e544010e078195d8c750c"],["/2022/11/19/NOnote/6/index.html","ffbe47ba7a8aca42b9da1187f817e6c2"],["/2022/11/19/NOnote/7/index.html","2291304aa3dc440d99ce2caef016ba26"],["/2022/11/19/NOnote/8/index.html","59db2c10eb768aacf20b093e05db343d"],["/2022/11/19/NOnote/9/index.html","a60171745e7269b11b460055e18de038"],["/2022/11/19/OCnote/1/index.html","d26eb7c1838408dcd7c25931f7d95a27"],["/2022/11/24/NOnote/10/index.html","f9baa5ba2ce8fbda851a893eb62af7b5"],["/2022/12/01/DEnot/1/index.html","59e83d9d1e1d813cad8c5bd52a399031"],["/2022/12/01/NOnote/11/index.html","9e570aaa503a8fa66c238c6e984b2dcf"],["/2022/12/10/DEnot/2/index.html","c77f7a8ab474a7c7e5ee688b67419cde"],["/2022/12/10/DEnot/3/index.html","692560c177911d7b49c949585cab1fcc"],["/2022/12/12/DEnot/4/index.html","c3b6214bc12e759c3bd2eae00700fba4"],["/2022/12/12/DEnot/5/index.html","f5ed78ae14f8a4d7e10f04640e668baa"],["/2022/12/22/CTM/1/index.html","53098c82e1fe7d584e4a8dee51174757"],["/2022/12/22/CTM/2/index.html","743274d711f182daca64f0cfbd8a18a0"],["/2022/12/22/CTM/3/index.html","781e254622d74bacba7564cf4d2debf9"],["/2022/12/22/DEnot/6/index.html","ddd3a8b8d7afaa8a9ebc5b4132de9212"],["/2022/12/28/CTM/4/index.html","94dabecfb173466359a9b6bbc597b596"],["/2022/12/29/DEnot/7/index.html","df6c14b4b028dd29b77fdb08bf395dff"],["/2022/12/29/DEnot/8/index.html","972884cab33653ef3bb66fdfa1aef54d"],["/2022/12/29/DEnot/9/index.html","b88a2750779086dd0028596ae9a9efe8"],["/2022/12/30/DEnot/10/index.html","01a88f13edd956a7bf707f7933388f32"],["/2023/01/03/2023/Mon/1/index.html","729358fbe2240fef58a8dff7b4f4ede8"],["/404.html","84886d65986263f46a96898c3b9565bd"],["/about/index.html","e2834d35424dcc16b3304e33eeec1f2d"],["/anzhiyu/random.js","3779ae38f831a8232822812913d9aebb"],["/archives/2022/11/index.html","c278b811dd40ecfb1d90b38d5ea40337"],["/archives/2022/11/page/2/index.html","28be00be1a00765eff7c8d4537ae81be"],["/archives/2022/12/index.html","af1d4891d804930734f77b46e50523ad"],["/archives/2022/12/page/2/index.html","f2fbb50c7a90e70697d0e1ba9cc9e703"],["/archives/2022/index.html","9118f01bfabc3a385aa66bafc1961b9b"],["/archives/2022/page/2/index.html","0cc877ea8584b48914f71c4bdb3a5b89"],["/archives/2022/page/3/index.html","4af1fc4b362ff84f34be88cb058a76e9"],["/archives/2023/01/index.html","7184c4477758dbb21f817746af3175b0"],["/archives/2023/index.html","cda42f43b7231abb095d11cf1317492a"],["/archives/index.html","959ef467e0f789de9a5cd48738b999e7"],["/archives/page/2/index.html","66bf1d02fd944da2089da728dfa36159"],["/archives/page/3/index.html","8380be1ea8626a1da8582854be5402af"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","525450e7a424bdd7fb5e866fde99c4c7"],["/categories/c语言/index.html","27aeb7412b45488462f1999a4bc9327a"],["/categories/c语言/page/2/index.html","f9b3113fdfd2bfb358af7850c3a84a5f"],["/categories/c语言/page/3/index.html","a19b9245c5a0c3abe69e4af660e31035"],["/categories/index.html","5221f9a95a8e568a74767664e029088b"],["/categories/经验分享/index.html","ead74978e9ce8b19265c7a965249788a"],["/categories/计算机基础/index.html","6ea6b5d46971382dcfc141c16b943b48"],["/comments/index.html","50e55b0b0f768a39474ee676203aa83d"],["/css/custom.css","fa54501cb07912c715f602ec361fbe44"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e0fec6fc8cd9e98a66de731b3507dd6c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","1314719764a1ff2db7f7a434c0dc1694"],["/page/2/index.html","97047a091356516b21e8b8fd72496408"],["/page/3/index.html","b886e9c89b8fd5895ed977d32c290198"],["/sw-register.js","a79b17394d32f9977a9ff951cc48b6e5"],["/tags/C语言/index.html","3f212bbd732cb466f0266ee7ade1db7b"],["/tags/C语言/page/2/index.html","755d1903f3292e04f4c375b6f07c6e21"],["/tags/C语言/page/3/index.html","e850cc4a8cd2751ed50790f41d0da8a0"],["/tags/C语言经典100题/index.html","31dca1a0b12d407d2a199bd8174ed0fa"],["/tags/index.html","62863e448e6d271715c2555cc8abe38b"],["/tags/图床/index.html","2ede03bce3d76fdeecd537cacb58fd80"],["/tags/计算机基础/index.html","5cadfd0b9341aa024fb6e2d60c307ab4"]];
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
