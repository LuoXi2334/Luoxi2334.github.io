/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","7d6f31c324b6e9a7df364583771e30c5"],["/2022/11/19/NOnote/2/index.html","c56768771ad1dac29ea30ff3d59968c6"],["/2022/11/19/NOnote/3/index.html","7408475ac0f039c40c4dbdcf2f8942ec"],["/2022/11/19/NOnote/4/index.html","7775f6994ed5c526864726440cbc098f"],["/2022/11/19/NOnote/5/index.html","df59b51f09ceff6506c8e7771ec6fefa"],["/2022/11/19/NOnote/6/index.html","81c2f9c8eb490e4f887401fde5f93bdb"],["/2022/11/19/NOnote/7/index.html","1962742fcbb0936d47c777e026c8f8d1"],["/2022/11/19/NOnote/8/index.html","4550e562fd64e5e3b2aecd6417e0d122"],["/2022/11/19/NOnote/9/index.html","33e7be0d4fe55ec57cc4de392ff8713f"],["/2022/11/19/OCnote/1/index.html","85f3b3a2b14b57a53bf5870b2335cdca"],["/2022/11/24/NOnote/10/index.html","f8cad8baccb5e8fd8f4745f02abacf52"],["/2022/12/01/DEnot/1/index.html","e329cd8bbf6c0b7d0d3dc08a8683e9e4"],["/2022/12/01/NOnote/11/index.html","a8aa073a3b2196ada2d86ee332eb1844"],["/2022/12/10/DEnot/2/index.html","03e5df4901ad4f507761cc48124cabc7"],["/2022/12/10/DEnot/3/index.html","22ee91c8313ffc8576ed3d0eec426f00"],["/2022/12/12/DEnot/4/index.html","839bf64788ccc4a7f705ccbfda205b83"],["/2022/12/12/DEnot/5/index.html","320c9bab3f1d9ac486cd8060a42ce0ee"],["/2022/12/22/CTM/1/index.html","1e79e089d1ed48249eba6836469e6e5f"],["/2022/12/22/CTM/2/index.html","7b97b737bf6d455dced8886cccc05bdb"],["/2022/12/22/CTM/3/index.html","288c682aab37074b07ea4fe2f8420d59"],["/2022/12/22/DEnot/6/index.html","1a021c6f3737afc25aab143384bffa59"],["/2022/12/28/CTM/4/index.html","0e971bba095f5dd7cd793da5b93e4a28"],["/2022/12/29/DEnot/7/index.html","c6e1b885c76bae1e5d19ec6fc7669fa8"],["/2022/12/29/DEnot/8/index.html","95cf13d94484cba3e0ee13593b630c8d"],["/2022/12/29/DEnot/9/index.html","8a4379147b88fac9be6a2bb2062863f3"],["/2022/12/30/DEnot/10/index.html","2c7d53921c1c33318319b53981d7374c"],["/404.html","3ed3badf24e234551881a8fce96be93c"],["/about/index.html","ba38079aab6d0c56390476a9f61428f8"],["/anzhiyu/random.js","4eb550844114061723978471417d1e1b"],["/archives/2022/11/index.html","dbd61e0997e277022e09df6bcdc806c8"],["/archives/2022/11/page/2/index.html","274bfe736ec4b3ab3298bd7bd8b4842b"],["/archives/2022/12/index.html","890b18412e466705d1c9933bc7ce26ec"],["/archives/2022/12/page/2/index.html","5f4af211632e5bbcf24d9044a4dc857a"],["/archives/2022/index.html","36a2f4bc7aae9e1aff5cd33a2378bea6"],["/archives/2022/page/2/index.html","e5030aac94176a2ddbcf12cb44dcbd60"],["/archives/2022/page/3/index.html","15bfb24148374a1c07cf04ddb04a54be"],["/archives/index.html","54a744263670df8de47873db4c0ae3b9"],["/archives/page/2/index.html","38ec6de3733af08d8d1111b5b5b6b35a"],["/archives/page/3/index.html","71b3478445d7f431be850ad9de5bd0f5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","e5fd4fc3f12ae175e0ca7e69e22f2752"],["/categories/c语言/index.html","aaa5cc2abc75edf2cee831b8ab6edfd6"],["/categories/c语言/page/2/index.html","8026d8dd5bffe35cab6596ada1ffdc39"],["/categories/index.html","085e310e8d729654ad2eba48e61c26a2"],["/categories/经验分享/index.html","65466d97d1eb46af34f67cccb004f183"],["/categories/计算机基础/index.html","ac58a332868da0f7d9b7ca81ab6c5a3f"],["/comments/index.html","f3cebb66abbfce682dbd95aa34a72d59"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6cff69e74baaba2ab32ac431322f8404"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","0d2ceca896b74571daa5624b760721a4"],["/page/2/index.html","c340513858b2799bea57c6c257184bca"],["/page/3/index.html","5a1921edb9fee7494405747eb3b0a5f5"],["/sw-register.js","a020fb1a211b1894f6ed7cdef3945268"],["/tags/C语言/index.html","a06bbb967052fcd3d119b7704580f7dd"],["/tags/C语言/page/2/index.html","4e475fd1d7e2ffd6467d47eaf9372265"],["/tags/C语言经典100题/index.html","a22f9fd688440b3f38cfc1e3349a3946"],["/tags/index.html","825f0824dcd9a38570e6431f10dedd7d"],["/tags/图床/index.html","99673c024a6bbcfde2d4bd3d81b6e44c"],["/tags/计算机基础/index.html","0708055a338ae7aa7f0494fdd422054b"]];
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
