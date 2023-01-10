/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/24/NOnote/10/index.html","09e5fc6e23f6b7708d5eec416cddccc6"],["/2022/12/01/DEnot/1/index.html","bfae78bc3fe1d9f9a41d06d3b8020e0a"],["/2022/12/01/NOnote/11/index.html","7d427e1adbf952ccef1e97ca592d8342"],["/2022/12/10/DEnot/2/index.html","023ffa57ec0b665c6ece14592a274fdd"],["/2022/12/10/DEnot/3/index.html","44a17628a2bdb8cdcd0cb1d14a66cc8e"],["/2022/12/12/DEnot/4/index.html","c8c5d5f3ad4afe90f244691ad741b0b7"],["/2022/12/12/DEnot/5/index.html","ca6b501d0d64af85a51dd9def79a56b6"],["/2022/12/22/CTM/1/index.html","d25536dace4218bcff96634f4b862fa7"],["/2022/12/22/CTM/2/index.html","8f174683ab22b52b16883c7f568d1e66"],["/2022/12/22/CTM/3/index.html","e22ca3f2b096c008e170ef9fc0b84cba"],["/2022/12/22/DEnot/6/index.html","2a260f0eee7a355cb34205658b6c626a"],["/2022/12/28/CTM/4/index.html","47f5643b91d3aca43d0761cbc3c751c4"],["/2022/12/29/DEnot/7/index.html","e829132bac8ac7a64046b70d980eb2b8"],["/2022/12/29/DEnot/8/index.html","3f44b92bde45af0a9434dc495017b53e"],["/2022/12/29/DEnot/9/index.html","dcb0e198d8572fd0c042325820ba68dd"],["/2022/12/30/DEnot/10/index.html","55e104a4ccd4481fc096bdc933e2fb95"],["/2023/01/03/2023/Mon/1/index.html","4f347d648f4e5eed1b3e4832255d26b5"],["/2023/01/06/2023/Mon/2/index.html","63817cc8aff6c013fa1a40471ca3bbbe"],["/2023/01/08/2023/Mon/3/index.html","5422a5d59cac4bc621ac263f94c8b0f7"],["/2023/01/10/2023/Mon/4/index.html","7e73456623a1371774590e0f38f12f7c"],["/2023/01/11/NOnote/1/index.html","224d0dd6c5c39943a8fa54da89c8c892"],["/2023/01/11/NOnote/2/index.html","8cae0100a9ef3a1a5a0a6fbb5b283d2a"],["/2023/01/11/NOnote/3/index.html","a6c1fcbfb5a3c19635ef3f1a066535dc"],["/2023/01/11/NOnote/4/index.html","c503d136d76cd1e1281038443482f2ad"],["/2023/01/11/NOnote/5/index.html","b31f81750bd60b71fe3123e90ac05f0d"],["/2023/01/11/NOnote/6/index.html","b87da7d00ddd1b788dc9294daaeb65bf"],["/2023/01/11/NOnote/7/index.html","7f9129a0568cccb8d0a00e9f33030af4"],["/2023/01/11/NOnote/8/index.html","39212bb44fb29b759204987e2b896bb9"],["/2023/01/11/NOnote/9/index.html","d01a8971c9d33ba96fb7f1ab624fa72d"],["/2023/01/11/OCnote/1/index.html","e3c53fd7cf244bb948f05064beddd780"],["/404.html","4ce01a53c190d0eea0290bdc7eaf6412"],["/about/index.html","30ba22bc60e74031db8ce772ee82bf35"],["/anzhiyu/random.js","8419beb1b23c6e94f154d665a3212b59"],["/archives/2022/11/index.html","4781933b637b85268db31421bd822907"],["/archives/2022/12/index.html","73145c0d8d144ce45bb0c0f4d64d7bbb"],["/archives/2022/12/page/2/index.html","ac991b2001605f50233651d429ded9c4"],["/archives/2022/index.html","ad8c26a4f70af94c82d9d6f05c06301c"],["/archives/2022/page/2/index.html","6f555a4cb38e3c8740fb7b841e49180d"],["/archives/2023/01/index.html","1d4fab262b773868c190fc790123945b"],["/archives/2023/01/page/2/index.html","9b737b58a397659fc189bdab587e3c7b"],["/archives/2023/index.html","87335ca21e7a8dee2f8d4156cfa759e6"],["/archives/2023/page/2/index.html","c0238f23b9149b83736f639fcebe207d"],["/archives/index.html","d616862357eefbfbc438637176886a9c"],["/archives/page/2/index.html","8f536bf8990c9bdb141fcc4b4878de8c"],["/archives/page/3/index.html","7d01ab68b85bfef0b56f5c490afa23c5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","787f09ae1dd2165c4ed29cb3bff9bf3e"],["/categories/c语言/index.html","2fcb036b09b5cdc261a0d9117fccc629"],["/categories/c语言/page/2/index.html","34795a4210498a048b6979c8748d5c48"],["/categories/c语言/page/3/index.html","9b44259411fe1ed727722e26ac05c4a4"],["/categories/index.html","8902f42afc09d2febfba9e7b0106bef0"],["/categories/经验分享/index.html","d6866eb1fadd35eae43d6d55df284cbf"],["/categories/计算机基础/index.html","800a4180215caf1a1a6445eb014853ff"],["/comments/index.html","11c44a2cc86f964cfcd0ca3172f77a93"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a2ea5bbdfe867bc9ebd8e33b0efbb7c6"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","9d50698f4c39110c3736f0c67e14236a"],["/link/index.html","7eedaf6857ad9e9eb86333eda64d30c0"],["/page/2/index.html","095f780783aabcc6f9dd9ca7f88bc3a5"],["/page/3/index.html","90ce3aed384437ad03840d641bcfd70f"],["/sw-register.js","0744091e3cfa54da63656fd07f8db03b"],["/tags/C语言/index.html","7880016eee3e508f29d196170cc5e81c"],["/tags/C语言/page/2/index.html","6a5e759cb0a1a7aa3052bc100ba83f8b"],["/tags/C语言/page/3/index.html","f82094ffb37f2e84e487e30f4416ae6f"],["/tags/C语言经典100题/index.html","9497b17edb396a3fe715e366a2e41818"],["/tags/index.html","aeaa526b72c44a3cd1a3a888fe7aee9b"],["/tags/图床/index.html","654f1ff2e33e90748c5e1d9551746cc8"],["/tags/计算机基础/index.html","3c20c41507969d12b433ace732504929"]];
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
