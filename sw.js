/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","451036440aec1b2dd208caf6a2e4931e"],["/2022/11/03/NOnote/1/index.html","c7615ba99ae04d6d1abdc84d1606a7f9"],["/2022/11/10/NOnote/2/index.html","eef659edfbb6efc9d52cfeaad50c6b84"],["/2022/11/10/NOnote/3/index.html","ce7f9b1b0d452b703cfaeb5f81f1330d"],["/2022/11/10/NOnote/5/index.html","02d8ff4dd2c4fa308eb1dddac75eb2ba"],["/2022/11/10/NOnote/8/index.html","28a80dd59435d17fd85ce83884e7805d"],["/2022/11/17/NOnote/4/index.html","4ee8ce3b4b05cf4458f3f19d95a5cc80"],["/2022/11/17/NOnote/6/index.html","13d0039078eabe4c83dae2e98164d044"],["/2022/11/17/NOnote/7/index.html","e04f8346e3a6e440190d6df9e3a786be"],["/2022/11/17/NOnote/9/index.html","0a331a31f26a62a23b5d59bb6c265f8c"],["/2022/11/24/NOnote/10/index.html","2096473619e7b88052e9e44b6fd1adc4"],["/2022/12/01/DEnot/1/index.html","be3c3b1c5f23b121c9bb75c92bbfe1ab"],["/2022/12/01/NOnote/11/index.html","e386221ace79da0cdec6fbccd684f2d0"],["/2022/12/10/DEnot/2/index.html","cc1d8831ec1999e18ec3301982633382"],["/2022/12/10/DEnot/3/index.html","b913ef0c85ab364125496414cfbe363a"],["/2022/12/12/DEnot/4/index.html","bac0f51773d1771b2e08190f8b1f833c"],["/2022/12/12/DEnot/5/index.html","28d189d87816290e092ea6b34a4fe095"],["/2022/12/22/CTM/1/index.html","c4f6eea4d85e454c4c3a548a8540ccd0"],["/2022/12/22/CTM/2/index.html","42020b131984e11e73b905b29cf603ab"],["/2022/12/22/CTM/3/index.html","b96b349fc1404a618c678fd92fb9bda5"],["/2022/12/22/DEnot/6/index.html","0b91dc89ca6e8727dc6c10b73bc1d816"],["/2022/12/28/CTM/4/index.html","ccd1bf33b58d12e6ee766d6529969513"],["/2022/12/29/DEnot/7/index.html","8d10a25f16cb2f33d6cf3034a59417bb"],["/2022/12/29/DEnot/8/index.html","5ac3585c2cec32663c25458b7c09deaf"],["/2022/12/29/DEnot/9/index.html","0d906821463a6c083501ca8f37b841cc"],["/2022/12/30/DEnot/10/index.html","7265f0de92223cb2fc6c4a35cebd4233"],["/2023/01/03/2023/Mon/1/index.html","c40a7da5d4500a2a8e7c6b4e97a03fc5"],["/2023/01/06/2023/Mon/2/index.html","e741207a25b6e6d50ca2b744a4fdfd42"],["/2023/01/08/2023/Mon/3/index.html","cafd820e0390ba7bc62fea208c0c1398"],["/2023/01/09/2023/Mon/4/index.html","8acf67aa33f024ba8b0ffd9b2da81559"],["/2023/01/19/2023/Mon/5/index.html","22b19fbb1b80ef9389a2f26f4fc80ddc"],["/2023/01/21/2023/Mon/6/index.html","229239fdfdfcde9de4b7c2876d6f9a14"],["/2023/01/21/2023/Mon/7/index.html","696840285b8b51aa29b0bd8ea8240f26"],["/2023/01/22/2023/Mon/8/index.html","47fe5bc72fcba9c7608e52bbe56681a6"],["/2023/01/23/2023/Mon/9/index.html","4acbd9ae5a57263a175dc5868628b608"],["/2023/01/29/2023/Mon/10/index.html","271bbd4ce6ff0c24b646bfe2a74e92ee"],["/2023/01/30/2023/Mon/11/index.html","8e578d21427677cd661486c39ef9f637"],["/2023/01/31/2023/Mon/12/index.html","8c24a024c777f427d517154fb9ee0284"],["/2023/01/31/2023/Mon/13/index.html","159905b78b927d10c198bd4d319cea2a"],["/2023/02/06/2023/Feb/1/index.html","77e7193165783f1ec0e7c495e35c2726"],["/2023/02/08/2023/Feb/2/index.html","eb49cbef24c1e59e307b0d3f71ecf423"],["/2023/06/01/2023/June/1/index.html","38b6f7ac3d65a7ea8fe6d425a40ec41d"],["/2023/06/14/2023/June/2/index.html","9f16fce244d8080c44e68865c8a79443"],["/404.html","98307c601ad706d483b6e62a1e96b21c"],["/about/index.html","f268bfb55d6027fe61038196056935f8"],["/anzhiyu/random.js","246e8a490542632f730477ca4dd0ccc6"],["/archives/2022/10/index.html","ebdfed502f12b2ace26beca61506ac1f"],["/archives/2022/11/index.html","e9c8e4e27fabec63cef2c1caddbec884"],["/archives/2022/12/index.html","c184fc472740ce0536532e9f8f90ec6c"],["/archives/2022/12/page/2/index.html","ccc09c8e535930a4e9cdc8ec885c9b05"],["/archives/2022/index.html","ade2db12168a020d4af6c509d8d253f3"],["/archives/2022/page/2/index.html","d41474dac196bd3051b3072989b761a2"],["/archives/2022/page/3/index.html","c433e589690aded8ca73c6bd06555cfc"],["/archives/2023/01/index.html","4825bed644da9f1e94558598b58b91c7"],["/archives/2023/01/page/2/index.html","cd369fce934d7437bd0aac84b1f8c8da"],["/archives/2023/02/index.html","040f0d90e00b031d2b3424c7db529d74"],["/archives/2023/06/index.html","416a4fd58ee4632383ae1b86ff784e9a"],["/archives/2023/index.html","0348142acb3d323c0e2e07bff8b32bf1"],["/archives/2023/page/2/index.html","d24cda395aa1b47de08c44a487ecc4d7"],["/archives/index.html","962a52f264c649f0428dd9e58d11e344"],["/archives/page/2/index.html","37694256ad4d5c7b38aa1af744acf549"],["/archives/page/3/index.html","c548f68b7b1a6033bfad922c001a4f80"],["/archives/page/4/index.html","e33425ff77a1a2ca9f9f96d7324125d5"],["/archives/page/5/index.html","bf5d9dd89049c90ffdd151b22365c383"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","f9f61bb76b8f7b2a08b0d97305c54ea1"],["/categories/C语言经典100题/index.html","4f9e9ad314bdcde7605de9ee5c4a0170"],["/categories/c语言/index.html","c88517842614fdf403903976b43257f5"],["/categories/c语言/page/2/index.html","0a2745989aa433e7a46be394ed456b55"],["/categories/c语言/page/3/index.html","c6073e395d7054b08ed41a1618df4b38"],["/categories/index.html","10de8ba0721905ea97c21184bd827b50"],["/categories/经验分享/index.html","e3036105e0c5257c9b737c91838779d4"],["/categories/计算机基础/index.html","c3d8658a39a3c6970f29d7fbe047c759"],["/comments/index.html","8645b3acd9d1b0b3eedb2d44421d0aa0"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","4ea1d509db51bf6a36666aa613241197"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","765598c96f926b745383d0169adc599f"],["/link/index.html","ae12e8e1cc78c85540e2fa09d58f1ddd"],["/page/2/index.html","01e871d2bd0ec5990e5d6e42334851cf"],["/page/3/index.html","d7e5d9d56ced1da0e01637ecd74f1194"],["/page/4/index.html","b618829fb7e5e6789e48a4feb5dbe9e6"],["/sw-register.js","14ea52484a03e3e86ef0e32708900ffb"],["/tags/C/index.html","c914e40c7bceaaa4388f18199803aabc"],["/tags/C语言/index.html","48095aeb97bc6d2a8a122077733a150a"],["/tags/C语言/page/2/index.html","40b14b2ab531dbc886dd0a616ca12f0e"],["/tags/C语言/page/3/index.html","bb1d7242550f65954fe1556cc457d44a"],["/tags/C语言经典100题/index.html","88d36ddb0d064ed51d4711f1020effd0"],["/tags/index.html","a5550f9852cdb103fcf34df07736444c"],["/tags/图床/index.html","d36e7770863c2729a02917c2d030b722"],["/tags/类和对象/index.html","2fa8ad33f9fd84b01318a17e2c7a6392"],["/tags/计算机基础/index.html","054fb660f55b3c68b33aa0ce045abd5b"]];
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
