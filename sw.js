/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","e9569c49748b99bb53207caf0c8bb39d"],["/2022/11/03/NOnote/1/index.html","ca8c726e6f54edeb88c96e6f2b567336"],["/2022/11/10/NOnote/2/index.html","5d34f1f6862d5cca4beb9279912d427e"],["/2022/11/10/NOnote/3/index.html","2bc48094eea4fd0dd9fdd8562bb70ac6"],["/2022/11/10/NOnote/5/index.html","28ed6124394f94d6d8cacfbb176b5546"],["/2022/11/10/NOnote/8/index.html","705981c2df96a3ac8841766fd7bae72d"],["/2022/11/17/NOnote/4/index.html","1e57169507a525db87a02e8eff600c39"],["/2022/11/17/NOnote/6/index.html","6a6a225fe196b9e5422cc8d42d9e4c93"],["/2022/11/17/NOnote/7/index.html","2e85b50bcee387693c8581d31dc38377"],["/2022/11/17/NOnote/9/index.html","21331ff3ab40d2ca1ede0c59a68db5e9"],["/2022/11/24/NOnote/10/index.html","75a5559d9623e4c4d95bfda3812a965e"],["/2022/12/01/DEnot/1/index.html","aada1311c7fd77800505bdb122b8134c"],["/2022/12/01/NOnote/11/index.html","92c246d9389e4034a8f7c76a2fa952df"],["/2022/12/10/DEnot/2/index.html","86e0bd2b97a0218f705943db95183969"],["/2022/12/10/DEnot/3/index.html","7ca8f5915ae29782455d072abb747ec6"],["/2022/12/12/DEnot/4/index.html","5854ef70c142d4a4ced880eb3b9eabd8"],["/2022/12/12/DEnot/5/index.html","7f910648c5f4bde559545514ffbc5077"],["/2022/12/22/CTM/1/index.html","452e692db850a2a161940d02543a1866"],["/2022/12/22/CTM/2/index.html","fd8a1e5f801bdb225c40a84008050742"],["/2022/12/22/CTM/3/index.html","3584193fc31ba15b9d626290ecce5771"],["/2022/12/22/DEnot/6/index.html","f52743e1a705e7fa672b10d1df33a703"],["/2022/12/28/CTM/4/index.html","9675519a3d1081dd29728fc6762a12e3"],["/2022/12/29/DEnot/7/index.html","2086c8230bcd8131cb820ec5587d6bf3"],["/2022/12/29/DEnot/8/index.html","351039e7d80348592f228d262d05256e"],["/2022/12/29/DEnot/9/index.html","b73c938142c1eecb51515fdd965d29b5"],["/2022/12/30/DEnot/10/index.html","eed0256a3da0e9bc59bd16572002a54d"],["/2023/01/03/2023/Mon/1/index.html","0e8a464f528cd8ec263f1a5eb2de0da5"],["/2023/01/06/2023/Mon/2/index.html","9138f3dbcd5deaca1e01b7fcd724f763"],["/2023/01/08/2023/Mon/3/index.html","dc4ebc9be2f95dda928e785e22088f97"],["/2023/01/09/2023/Mon/4/index.html","634883e3c482a2e3476c7171a06e4d91"],["/2023/01/19/2023/Mon/5/index.html","1100e55a8e905914d97c9aba9fcc830e"],["/2023/01/21/2023/Mon/6/index.html","a906b5d459003733b4cceb8a04e5acc4"],["/2023/01/21/2023/Mon/7/index.html","16011681a9459b3fd0502bf201494dae"],["/2023/01/22/2023/Mon/8/index.html","f024c2f07a85fadde81eb7beac00ea78"],["/2023/01/23/2023/Mon/9/index.html","eeea0023bc0e7ecb2ad416dae4cda5c9"],["/2023/01/29/2023/Mon/10/index.html","c2deda2b46b12906b1408b4789abd2c5"],["/2023/01/30/2023/Mon/11/index.html","78df98018d221d8c4c0d547da97f7c7e"],["/2023/01/31/2023/Mon/12/index.html","e8b5f5ff62585c51323ce0c5c03bbef4"],["/2023/01/31/2023/Mon/13/index.html","4235128880fd63ab034af5067d51ea5b"],["/2023/02/06/2023/Feb/1/index.html","0956af13ec565bd8bad5aa3ba90990a1"],["/2023/02/08/2023/Feb/2/index.html","d90c4d561728a4fcd3762deba186d80d"],["/404.html","bbd0124541e48da1e8902d5dc2c3d077"],["/about/index.html","98e7a09cb7374dc3292e94888beed0f6"],["/anzhiyu/random.js","3ef01f3fe36fd5a6d2ebfd7159d173f5"],["/archives/2022/10/index.html","d876e7fa8b3217eb371e276c40825f4e"],["/archives/2022/11/index.html","6e30c5b79212cdcf983f4a44f9833ca9"],["/archives/2022/12/index.html","d05c43df3b14d7534b06abf368ae271d"],["/archives/2022/12/page/2/index.html","2336f4f3aa3242e1e51822e549ea55a0"],["/archives/2022/index.html","1b23240ce7aa00fa30275301fb6b3fcb"],["/archives/2022/page/2/index.html","9e7647e71de8dda90a482fcf19d6844a"],["/archives/2022/page/3/index.html","290f88d276f99460fc19ec19d877c609"],["/archives/2023/01/index.html","b58d88e76e0ff7bb3a450a30a8b6cb5a"],["/archives/2023/01/page/2/index.html","e1594591d022b524a81dcb6cab8e8833"],["/archives/2023/02/index.html","bfba030293bf05b557ab91fa68d5b6ec"],["/archives/2023/index.html","350e1646838aff4c75f09a45470f75d4"],["/archives/2023/page/2/index.html","0ee2eb1ef88433b3ba4ae351f66b436a"],["/archives/index.html","6e75a1304ae14a4081216fbe4afaef0b"],["/archives/page/2/index.html","76c23d6ae359f8a147067a2d1a2e320a"],["/archives/page/3/index.html","591619fb7a540c0e4930d09bb847384a"],["/archives/page/4/index.html","64e4745b06ad0802e051dd6e0321faec"],["/archives/page/5/index.html","25f3efb52f2c923a7f289471f3e880fa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","7c5034b4676fd2ad94c792fe903dd040"],["/categories/C语言经典100题/index.html","3b03f1edb17e14f3f901a015e681d12e"],["/categories/c语言/index.html","d9bf697bf3b86b412d3801b80a9c1602"],["/categories/c语言/page/2/index.html","028588ffa3540b703ca29c53de81e0ad"],["/categories/c语言/page/3/index.html","929d56a59f30167e8c8493618c1f7d70"],["/categories/index.html","045ee6194be123c6fab9cd82cca8c327"],["/categories/经验分享/index.html","8f5f96912b9d8cd8b3edd01516dcbeaa"],["/categories/计算机基础/index.html","5f87e53ed1581487b7ec025fd5df7a3c"],["/comments/index.html","dc6242f1a164e685264493a276bb8c27"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","517b49e749209f180ee8d3b3ce7a48c4"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","d746b9518e88a4ddedd4f80a3ffea8fc"],["/link/index.html","9e161816f7456435be026479a2c88d62"],["/page/2/index.html","e88bffa3c65d10fe18962303c9fc9082"],["/page/3/index.html","a75a19815bc0b85c991966eb0a706bf9"],["/page/4/index.html","8118afb11a06bac0fb19a5776ed78db2"],["/sw-register.js","b36bd44a4f1a15597bea06008b91a614"],["/tags/C/index.html","76460e8da276009da1ab2c9cab249d01"],["/tags/C语言/index.html","c5a1cb0f660275152f567a8fd0c5beee"],["/tags/C语言/page/2/index.html","c9b9182809e2d45076f3360d1074457f"],["/tags/C语言/page/3/index.html","681e514a712f7a0a9fd155cd344bb57d"],["/tags/C语言经典100题/index.html","ba033e13304ce1e80020cac578ad76d5"],["/tags/index.html","aad8149d88622fd1cfc8ef1ac0114118"],["/tags/图床/index.html","c0423fd5b72b3b9eb3880fb342c36c65"],["/tags/类和对象/index.html","27cb77d1e853c05a49b06074289d3623"],["/tags/计算机基础/index.html","5658f5ff3112c1ff5c3c706eccf09c73"]];
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
