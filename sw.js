/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/24/NOnote/10/index.html","be2934826701e42a8bada3ebbc3bc98c"],["/2022/12/01/DEnot/1/index.html","727fd066eb30b101bf5288357fa7e707"],["/2022/12/01/NOnote/11/index.html","96d978bc64443fac6bfd0a3b2d27984f"],["/2022/12/10/DEnot/2/index.html","f32241bad8f48e601c0a27a222cb0c07"],["/2022/12/10/DEnot/3/index.html","a199fb9e3298aa6e89b452ee9bdaee98"],["/2022/12/12/DEnot/4/index.html","6ee5a5d0234f10c54092fc5b1e74d2bd"],["/2022/12/12/DEnot/5/index.html","2a6716bbdec705abda1b97c27cc93792"],["/2022/12/22/CTM/1/index.html","4e1fb5270b3b4b6ac6ade9a88939fb3c"],["/2022/12/22/CTM/2/index.html","b16224f69ea3eb9676a7c8760cad5cd8"],["/2022/12/22/CTM/3/index.html","2c27eafb6dadba73ab574c4ae661ecc9"],["/2022/12/22/DEnot/6/index.html","798176bbc03bde0c74f5c95c7b70481c"],["/2022/12/28/CTM/4/index.html","d562f69995cf581b2815e22c1bcb84d8"],["/2022/12/29/DEnot/7/index.html","ce6d746eb65ae26f35a70540a9179cfa"],["/2022/12/29/DEnot/8/index.html","c5b45745f5594b59080cd0816383c5c8"],["/2022/12/29/DEnot/9/index.html","8c58dcdee6e63d21d6b4f41907c1797a"],["/2022/12/30/DEnot/10/index.html","6c32e0b4ef3541f5412c7e2c046d2297"],["/2023/01/03/2023/Mon/1/index.html","749102156a5c2dc0d7c0a1bad5d3ae25"],["/2023/01/06/2023/Mon/2/index.html","c281eae14a32a49ddd0d630824f4b220"],["/2023/01/08/2023/Mon/3/index.html","c382c9d3ed731b877052ade95d6713af"],["/2023/01/31/NOnote/1/index.html","f1e5db3d64c18f2e56a71b330ae2e454"],["/2023/01/31/NOnote/2/index.html","fd10cb291f005817dbbb36e5f95193bd"],["/2023/01/31/NOnote/3/index.html","4bf488cf508285588fa07b7a6ad31d1c"],["/2023/01/31/NOnote/4/index.html","cdd35a9873dd70bb1b93de916394aa6a"],["/2023/01/31/NOnote/5/index.html","0484f2d89613613b9c03bf1814e8e499"],["/2023/01/31/NOnote/6/index.html","0874e758f9b1b4c02675dc69f194b299"],["/2023/01/31/NOnote/7/index.html","ea208dd12b6e1c713adc6ade5f11087d"],["/2023/01/31/NOnote/8/index.html","2e1eb1a86d10546de59f1f217692defb"],["/2023/01/31/NOnote/9/index.html","9d077d0b5efdfb188221c5d9093ca17b"],["/2023/01/31/OCnote/1/index.html","4555b69a3bdf813832661707ce2b3121"],["/404.html","53e2430d5b55809dfcafa2e732683680"],["/about/index.html","d29723ded666f930fc593f31bf8de541"],["/anzhiyu/random.js","9827e449d287766c8b98faa118d788fb"],["/archives/2022/11/index.html","5ef01049e188c979c435a95927542deb"],["/archives/2022/12/index.html","55df37d0f954d405418e99d19630a3cb"],["/archives/2022/12/page/2/index.html","a2aea84eb12a98fb40fd5239cd9fcffd"],["/archives/2022/index.html","135f46b8c5d53fe76355c589601318f8"],["/archives/2022/page/2/index.html","0f78b1e78ca34c88952aef122b56270c"],["/archives/2023/01/index.html","b316e6d2eeabb151d0945d3c4089572f"],["/archives/2023/01/page/2/index.html","563dcf8d27aa00e8d568c962bc0cc816"],["/archives/2023/index.html","ac3040ff05020ee34a1d8788f235821c"],["/archives/2023/page/2/index.html","59c52e7b18279d2ea9688bb145298e26"],["/archives/index.html","517a793c51c13cdc87c1847713870b2c"],["/archives/page/2/index.html","107596af84c7384c13eebcc2b4f74e45"],["/archives/page/3/index.html","022b2f7a96a9eb7518a02fb9cad3add0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","38eb1db871d8b2ae36db5badb00956d6"],["/categories/c语言/index.html","9e96d65c4c3031f29501f59dadf72822"],["/categories/c语言/page/2/index.html","642de9e18ff8f2ca815e330289da7839"],["/categories/c语言/page/3/index.html","0c3beb5fe47f7f684b7db271e6946674"],["/categories/index.html","3f00fe72ef38d2bfb3dd8e93074c2bc2"],["/categories/经验分享/index.html","6ef628739d91e4e33ce0ca7f5d74d5cc"],["/categories/计算机基础/index.html","098ff3f80404c7ef4f1bea337d99fd88"],["/comments/index.html","9f717f9ec9eb6e76f407d29018dd6386"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","da89f909a634ae524c254dcc984e00f8"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","5109ddb22feb107b8d465a1796ab336f"],["/link/index.html","e8a265d78e16c542a2852eca02498e6f"],["/page/2/index.html","7588a465634c4338b50a7e2917c69f40"],["/page/3/index.html","0c4d847fecf89e485bff42db24729d01"],["/sw-register.js","e7999586b986fc853c78c6e82c30b807"],["/tags/C语言/index.html","48901d349d15ba3dfd1534dd9747dfa2"],["/tags/C语言/page/2/index.html","e0fba76ae0b99f244bcd9845dcf0e8e4"],["/tags/C语言/page/3/index.html","047c11160f8810f9c017796a05b90240"],["/tags/C语言经典100题/index.html","3b067186d687f1ff26334296333f55d7"],["/tags/index.html","e3a6aed4d931eca18507feddfa5243ce"],["/tags/图床/index.html","5d0add1de23c204c212ea29e5ca93c5e"],["/tags/计算机基础/index.html","1979b55c28cfbe49719b02d9774957fe"]];
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
