/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","b413a5bb7b5657362a391fcd00c29532"],["/2022/11/19/NOnote/2/index.html","2013334e0fce7471f2e21c7b0952ccff"],["/2022/11/19/NOnote/3/index.html","42f2bf4484c5e87d19d8d7030b862b04"],["/2022/11/19/NOnote/4/index.html","d4385916979594b3dac5c15cdced3229"],["/2022/11/19/NOnote/5/index.html","592ba7b09bd709a61b2b2ef42158edec"],["/2022/11/19/NOnote/6/index.html","6dab562a82a76c64d3ba016935549a5a"],["/2022/11/19/NOnote/7/index.html","a667d2a490c3eb28d3537ce3c114b6a5"],["/2022/11/19/NOnote/8/index.html","32c33ace46bb058fc788f5f155bdc17c"],["/2022/11/19/NOnote/9/index.html","903b2691de2da1aa35677dfc1d1f4d20"],["/2022/11/19/OCnote/1/index.html","758512a380e19754ee22eb23364442f2"],["/2022/11/24/NOnote/10/index.html","e7e7a0c4bb9109d9d3dc82452d9288ed"],["/2022/12/01/DEnot/1/index.html","f538569bae7b89f64c777a2b826a775e"],["/2022/12/01/NOnote/11/index.html","1c8d6a59aab4c2589501c31da81832ba"],["/2022/12/10/DEnot/2/index.html","8b9058b16eadd1294afc66729e735e74"],["/2022/12/10/DEnot/3/index.html","e47b81201f40f5e2e5ec0e484953af0b"],["/2022/12/12/DEnot/4/index.html","29b80ba2ea2f885be55a4f569fe52684"],["/2022/12/12/DEnot/5/index.html","c02ca3d496a311103f173263d3041e5d"],["/2022/12/22/CTM/1/index.html","d72f2ec77a6cac7ac1fe4cc27b804f75"],["/2022/12/22/CTM/2/index.html","10a4d8b1b42328c78389ce4cdb003919"],["/2022/12/22/CTM/3/index.html","8f57a4675c289a67ca45c75fcd14ae30"],["/2022/12/22/DEnot/6/index.html","8f18dbec4969dd2baf4e92c56cdf924c"],["/2022/12/29/DEnot/7/index.html","91ab4c07cd14b86d66dbaed0497de899"],["/2022/12/29/DEnot/8/index.html","7999f5be33b2297c47ad89cc239c4976"],["/2022/12/29/DEnot/9/index.html","96442abde28ec314039d95c8f068b2f5"],["/404.html","21d09b653451846f65c409f63d551894"],["/about/index.html","0603d0dc3c37dfe194e18856c3a3e290"],["/anzhiyu/random.js","62076547c9687c84e1fc419c84ae5d28"],["/archives/2022/11/index.html","82ee77ff403e6b23052172c4d10c17f1"],["/archives/2022/11/page/2/index.html","0da8194a70dde2f257a38aab9c5e0ef4"],["/archives/2022/12/index.html","02f081d7ffab9b9414183587d8c1667e"],["/archives/2022/12/page/2/index.html","91bb8e3efc25325503aa87a3f847a454"],["/archives/2022/index.html","e7aba34b95810dfaba63f6955ccdde6e"],["/archives/2022/page/2/index.html","85e988b4b700c65927b9dc27dd8d630b"],["/archives/2022/page/3/index.html","018cb5663bcb84331dc67dd1bc98fa46"],["/archives/index.html","4e11cd29a03ef5d5056ed009e4a2ba58"],["/archives/page/2/index.html","777ce99d5a77f3ef5425e6570f305130"],["/archives/page/3/index.html","835cfb4d76c1ae3d1a3b1f9fcb38d451"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","4657fa63e06dc7ccccba295bc1794f18"],["/categories/c语言/index.html","5dd4d113173bbf410cc2087a554b40c8"],["/categories/c语言/page/2/index.html","8f33632a65b5601032782714e3da5665"],["/categories/index.html","af8a56fd72044f4e95643b6cbf15bcf6"],["/categories/经验分享/index.html","bccf1c1a3cf223528d750aae61c82c8f"],["/categories/计算机基础/index.html","3acb88291670239134b915007499185e"],["/comments/index.html","b1b2dda60aef18b0842c30ecb9eff712"],["/css/custom.css","6cc4f7934aee7d55886b89b897c5f727"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c68b90f520b57bfaf74f887ee0738d5c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","152faac3a334c62c6d63de20cc4cb448"],["/page/2/index.html","813e9377dbf33cc6116acbae062dcbe0"],["/sw-register.js","1473146e6982894298e59c380f4a03b0"],["/tags/C语言/index.html","fb23b24f6a7cf161603f839d2e6473f2"],["/tags/C语言/page/2/index.html","0cf4e9e78c89513cd3d8b17e5b0feb19"],["/tags/C语言经典100题/index.html","be206313a8497cd564fbe7e638fb9728"],["/tags/index.html","48e6c8b45f2e75f5faad196552d803de"],["/tags/图床/index.html","5124a5275d89dfe66de1f5d8c8fb81eb"],["/tags/计算机基础/index.html","7f30e7bb6c3d677647a0b8fab092db0e"]];
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
