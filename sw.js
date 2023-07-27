/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","2537324728892b172558254ba416ea1b"],["/2022/11/03/NOnote/1/index.html","8a96d616c1ab0e7292c2a727eaa823d6"],["/2022/11/10/NOnote/2/index.html","ff75efca04a46df00212e64662159295"],["/2022/11/10/NOnote/3/index.html","e3b5ef81665d54ae162f42aa1ed00cce"],["/2022/11/10/NOnote/5/index.html","20547e99c9de0dc0d35592510313737f"],["/2022/11/10/NOnote/8/index.html","c8115f76da18c3cf696f024c5d177c5b"],["/2022/11/17/NOnote/4/index.html","9e16c0e13ca8618af688f23b815189ee"],["/2022/11/17/NOnote/6/index.html","3d2c122aee4d6f1910dbc5b97f481ee1"],["/2022/11/17/NOnote/7/index.html","d98edfe016d35da42a3fcdea4619f6e2"],["/2022/11/17/NOnote/9/index.html","73ae623eebc3f4efee147c9fd9c364da"],["/2022/11/24/NOnote/10/index.html","c2444dd1a0319947fa19cc48d0e4b920"],["/2022/12/01/DEnot/1/index.html","6fe5c801b00b1b5b27df30cbd884d334"],["/2022/12/01/NOnote/11/index.html","a277ff5be092764b1db7bc976cd6077f"],["/2022/12/10/DEnot/2/index.html","7705cd1c2232b1756a1718675064e144"],["/2022/12/10/DEnot/3/index.html","49c5fec927de0c7ea50bb6d932943953"],["/2022/12/12/DEnot/4/index.html","7d91c71ef4d8604ae19e9be733838fa8"],["/2022/12/12/DEnot/5/index.html","35ea4018c205db323ae1b8bcd23426c9"],["/2022/12/22/CTM/1/index.html","5210f42b8cd08372ff8002195760d814"],["/2022/12/22/CTM/2/index.html","df93113336f1fa081bd54896850a06e3"],["/2022/12/22/CTM/3/index.html","4db8182f088cf351cbb9e11345df6da0"],["/2022/12/22/DEnot/6/index.html","a1972681abf0b708e9fcf5e4ba27ba3a"],["/2022/12/28/CTM/4/index.html","8fcf6997994e22dfe17df521da46a0ed"],["/2022/12/29/DEnot/7/index.html","48058d208d0310e649e4363fd904367f"],["/2022/12/29/DEnot/8/index.html","992ed1cd5914a494e16cc4bbc6420eae"],["/2022/12/29/DEnot/9/index.html","986eca65985cc09d2a0ed04d826ff767"],["/2022/12/30/DEnot/10/index.html","9f72d4e50eeca926808e2bcc7758a577"],["/2023/01/03/2023/Mon/1/index.html","3d8f090aabd2109ff69d1da6f13ce668"],["/2023/01/06/2023/Mon/2/index.html","e3022eb952fd981c77021575c5fc2b07"],["/2023/01/08/2023/Mon/3/index.html","16f1d84b10b3ee53039e2750061609cb"],["/2023/01/09/2023/Mon/4/index.html","01b55b8b4015b7c01d350991d46b2274"],["/2023/01/19/2023/Mon/5/index.html","3f4ac3a1e4cca7c62586736b126cb6e3"],["/2023/01/21/2023/Mon/6/index.html","55c56208052feb536823d49e43810209"],["/2023/01/21/2023/Mon/7/index.html","6271315ec79af98dbd753a5e8cd6b065"],["/2023/01/22/2023/Mon/8/index.html","d3307ecd79be50b57282b49e1e264bb0"],["/2023/01/23/2023/Mon/9/index.html","a871cd3d88f1d3e7e547f68eac87b6b2"],["/2023/01/29/2023/Mon/10/index.html","4abaa7101805d3b3a8759b788119e63b"],["/2023/01/30/2023/Mon/11/index.html","a352019c5006e65f425b8b1f804f073c"],["/2023/01/31/2023/Mon/12/index.html","72c7579f2b08a39ff624fc82aba50855"],["/2023/01/31/2023/Mon/13/index.html","955b509f9697fd99192dc182333e49b4"],["/2023/02/06/2023/Feb/1/index.html","87ab7b7e362d9f1fb63b316d31a8c46c"],["/2023/02/08/2023/Feb/2/index.html","dd8f1a1f5e3d5becbf65a963960d276b"],["/2023/06/01/2023/June/1/index.html","c3708e4aa34a88c3bda2a0cff4f49b8c"],["/2023/06/14/2023/June/2/index.html","4788e7857b895cb16eb659c3646885ef"],["/2023/07/27/2023/July/1/index.html","d4b5d252a98993ccf4cabc390437cd25"],["/404.html","b802fe11f19cd4168da5549f21822986"],["/about/index.html","c90e9b7519f8b4bca3e429df93a92669"],["/anzhiyu/random.js","30aabc5b269ddac087dc52a6d0ef23e1"],["/archives/2022/10/index.html","cd8d3c7cc1483afb5a8a008120c4130c"],["/archives/2022/11/index.html","7b2aaa0d17e463ad2f355c390e5acac3"],["/archives/2022/12/index.html","d841eb14a21d365206747c95565abfc6"],["/archives/2022/12/page/2/index.html","9ea7eaaf3cc41a415b31ab554ccaf99e"],["/archives/2022/index.html","27b5a1a888b9d1c1fa96aa732d5a81fe"],["/archives/2022/page/2/index.html","693768ccbe824dc683b830cfcabbb2eb"],["/archives/2022/page/3/index.html","86f7b9f59bbb4bc12b2c0056db2fd5a8"],["/archives/2023/01/index.html","343d5ee9923a48b8cf344be2966b3c1f"],["/archives/2023/01/page/2/index.html","c1739c2b82d9656865ce62d2f119b037"],["/archives/2023/02/index.html","07008c0ff010e7c1bb4ec705a134ab45"],["/archives/2023/06/index.html","a140aede225485f5ad8326c8e6ce2bf9"],["/archives/2023/07/index.html","4d023af33ea77f4f58b2976accdb739b"],["/archives/2023/index.html","7587e65ee5eb26900e4a5b3fcd6048fc"],["/archives/2023/page/2/index.html","7a7b561747979454ad8b845c3061637c"],["/archives/index.html","68a6fdeac87200164545b6c9c0aa16b8"],["/archives/page/2/index.html","280231aac18a872b1e0d7d3d3e3e8233"],["/archives/page/3/index.html","b271ac047accacf5c8fa01388ca6fd3f"],["/archives/page/4/index.html","d3c74a6e88024b89fcd227b91af84065"],["/archives/page/5/index.html","00aadf6e1421a20560a12de38267180f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","1cd81ba0a05dd816d7a6d406722e5e56"],["/categories/C语言经典100题/index.html","7f51c2edd6c1de2f399b08f8e5f63818"],["/categories/c语言/index.html","7ff50888031579c8c393846f4aa50381"],["/categories/c语言/page/2/index.html","9f78c82e2c14909662bf20c3ebfa27b3"],["/categories/c语言/page/3/index.html","0e2d4ee51c2b81a4bf5b024c3fde8f1d"],["/categories/index.html","7fc3c0e7846faeaef5f83d9206ea3575"],["/categories/经验分享/index.html","59d9801c1918f49d7466b3b8f167e59e"],["/categories/计算机基础/index.html","612a559ec6512c1921ba48e52b38ca15"],["/comments/index.html","2fe9aa956ad62c50aec6f8804c5a4b5f"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a431dc0c11b1fcad9888b93b41aadf99"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","0d3be25b1d9a6a475347519cdc38cda4"],["/link/index.html","a1fb100faa9a361f7532e266a1ced0e0"],["/page/2/index.html","9e260efe7504aace113af25dae6c1fb0"],["/page/3/index.html","99e05f4a35868bb76872e5a72a96c32a"],["/page/4/index.html","27451e40f644e44f90c38c84b4bac536"],["/sw-register.js","55ead16d398d0f71a84ac677604a39b5"],["/tags/C/index.html","3f2949b3daebe40fbf9abf0d77a8840e"],["/tags/C语言/index.html","e8a315fae1dc3d7ad440b8e604ebe995"],["/tags/C语言/page/2/index.html","74e850734f5e461c200b1fa786a15a58"],["/tags/C语言/page/3/index.html","84952c8228e007b89168afda68ab95e8"],["/tags/C语言经典100题/index.html","5c4ddb3488739fa14446104c09c6f1ac"],["/tags/index.html","2657f438b21a81a1f7aed6ede9324ec3"],["/tags/类和对象/index.html","83bca746f8d450173add6af12c63d0fd"],["/tags/经验分享/index.html","1944c35899d5890fc0b9abb05caaafe7"],["/tags/计算机基础/index.html","a36a81ad7215ecb952e1f2351bb93b2d"]];
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
