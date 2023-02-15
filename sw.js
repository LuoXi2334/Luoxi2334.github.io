/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","403020b0061c928bcd82e21e77eab770"],["/2022/11/03/NOnote/1/index.html","20ea6c0598788d2780285076115fe5cd"],["/2022/11/10/NOnote/2/index.html","bd3d36b80e71785f51dbeb8393c49a98"],["/2022/11/10/NOnote/3/index.html","384e4d119659a49085bd58ff50d3dfe4"],["/2022/11/10/NOnote/5/index.html","739cfbc43ad5e1c37648b427ef437336"],["/2022/11/10/NOnote/8/index.html","628c736c308c8f4c65a7df8a87a048b8"],["/2022/11/17/NOnote/4/index.html","0d0c8a7a774e7d3ab5a91a0422e32bba"],["/2022/11/17/NOnote/6/index.html","84c5869960f50bbf138842443749dc37"],["/2022/11/17/NOnote/7/index.html","b5d200bcaaa7813266a90b79fd753b45"],["/2022/11/17/NOnote/9/index.html","1d97fd93fa064ed0dfe5d52e5c48e51f"],["/2022/11/24/NOnote/10/index.html","99eb017554d46d1f3ba9077e1add0870"],["/2022/12/01/DEnot/1/index.html","5ac93c2f144c36fdd1f547d626dbb1cd"],["/2022/12/01/NOnote/11/index.html","fe16a02f9e1625bc97cbae02913ea086"],["/2022/12/10/DEnot/2/index.html","95d10f09604a22ca2680d06da52ef7f5"],["/2022/12/10/DEnot/3/index.html","b0ffd85ff9f5214f8bd9254afe4e6aa8"],["/2022/12/12/DEnot/4/index.html","955e0e21692618b2c2cf572b72c88d6a"],["/2022/12/12/DEnot/5/index.html","f17a2734a7d04466eac7481d042087d5"],["/2022/12/22/CTM/1/index.html","5bd4cb78d854d2522de6d0780da8e52e"],["/2022/12/22/CTM/2/index.html","ba1abbf5f1b5e116e6818370546572d0"],["/2022/12/22/CTM/3/index.html","857cabc95c448273d6e50af0057b67c1"],["/2022/12/22/DEnot/6/index.html","c96e6b68a8245813e693d6991b45f6b5"],["/2022/12/28/CTM/4/index.html","f8c1ca61a4844d7dd19ea6c14c48e9bd"],["/2022/12/29/DEnot/7/index.html","de6a3dd2abfe772ec5f7b02224f6afe5"],["/2022/12/29/DEnot/8/index.html","07f82fcb9c7190486748614041a46c4b"],["/2022/12/29/DEnot/9/index.html","493e93212761ba7aebc5772642f5f056"],["/2022/12/30/DEnot/10/index.html","47eb3acf4b22e89ec27c8c6bdd0d1462"],["/2023/01/03/2023/Mon/1/index.html","b5894c4724be050d95750af9b546db61"],["/2023/01/06/2023/Mon/2/index.html","dcc231cda54b33fedb00d1f844560824"],["/2023/01/08/2023/Mon/3/index.html","5fe09739af7aa4511cf71a3882c91037"],["/2023/01/09/2023/Mon/4/index.html","86007b544931408b773272b0ac690768"],["/2023/01/19/2023/Mon/5/index.html","1013965bbbb84ec8183709b203aa12f6"],["/2023/01/21/2023/Mon/6/index.html","f5e3a14b8715afc9461566ddbca7ecb0"],["/2023/01/21/2023/Mon/7/index.html","27637280887ac72747031dacd55b08a9"],["/2023/01/22/2023/Mon/8/index.html","fda1af90cbd46c94ee11c1474740baa1"],["/2023/01/23/2023/Mon/9/index.html","94661284c16c2c2287f7ffaf437b4827"],["/2023/01/29/2023/Mon/10/index.html","821d1704f31eb8c7dc95a610a53ec466"],["/2023/01/30/2023/Mon/11/index.html","5cc574bc4de433cc8578682c178d2f55"],["/2023/01/31/2023/Mon/12/index.html","a5fd443c0dc1d5bd15abe8233b9955f0"],["/2023/01/31/2023/Mon/13/index.html","b9f36b1ed71bbc034abc6d7684d645b0"],["/2023/02/06/2023/Feb/1/index.html","c2d62b998fed223dcb58352b0faa8905"],["/2023/02/08/2023/Feb/2/index.html","cdb0ce8b3c10cb1b130390d049961bcb"],["/404.html","ac0bbb1f78dd2d36efe6a3f82ea8cd55"],["/about/index.html","e56a690a5631dfdea5d599d52835325a"],["/anzhiyu/random.js","836167c9496d61956eca092c4874e3be"],["/archives/2022/10/index.html","07cb403770713d05db1cf802837295e8"],["/archives/2022/11/index.html","7890141912c7ee05651d785310aa8e7d"],["/archives/2022/12/index.html","ffa7e7f3d5790d37d26e18806a5183d0"],["/archives/2022/12/page/2/index.html","95b924d5a6447822b2cb84629fc8c17c"],["/archives/2022/index.html","b7ad36b769f22541d799e27bd821913b"],["/archives/2022/page/2/index.html","389e3aef10ccfa4c3a2a620c624a80e2"],["/archives/2022/page/3/index.html","9dd9dfef6dba36337517be24a4e62274"],["/archives/2023/01/index.html","ac2729dab452a4a160a63f1433b88fc2"],["/archives/2023/01/page/2/index.html","948aa012f9047c053053f46bd79f4b11"],["/archives/2023/02/index.html","5ee4c480569aed8bc4f63bd7e525eb89"],["/archives/2023/index.html","3be96aeb42cc8194bcfa109c7e1d8940"],["/archives/2023/page/2/index.html","e01e75f389e17f9c184577b6851c073f"],["/archives/index.html","7f07496308f77ec208267856ea55fd78"],["/archives/page/2/index.html","cf96784afd22a4910bd903a12e9ab2fb"],["/archives/page/3/index.html","9b09409da99eba2559da964874a9cab4"],["/archives/page/4/index.html","50f88f4303b6617cf117d2421fc69d2c"],["/archives/page/5/index.html","20aa1f36f7ba5d7de1548a58d56a820f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","82035d69a4c5003e76399f938c7caa22"],["/categories/C语言经典100题/index.html","cb6a453a907afd380458eac6e8b9f410"],["/categories/c语言/index.html","59e555dc3683d655dcdcf95ac11ecbb4"],["/categories/c语言/page/2/index.html","d67090d08b7c22fe9c076feb2addae8d"],["/categories/c语言/page/3/index.html","0eb92a51f33e24bf72433b3ae78687da"],["/categories/index.html","261fca5371a26962ae1b7956d4f16335"],["/categories/经验分享/index.html","9238f13c7ec789fca03ff76049933aa4"],["/categories/计算机基础/index.html","a55b265e06b9445d930ffbd1eaa208a7"],["/comments/index.html","74eba798b854496b4633538bebbe3f33"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9b9c358c6e0d5c9721863c81b98690a6"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","b3d5a8a2e3501d03d29ee76404448ca8"],["/link/index.html","96490b1b190b508522e34a09c1e4a590"],["/page/2/index.html","83090c39e3d0c6029dd9994af2a8b2db"],["/page/3/index.html","ce5cd981e677f712f75d927fbb29c497"],["/page/4/index.html","b2ba7b69b88c5a670796cfa8bcabe349"],["/sw-register.js","d0855e944d5ec4dc9516c8bfb5632ba8"],["/tags/C/index.html","f1bf8f58d5d2ff10ff4960054e4a8e01"],["/tags/C语言/index.html","8822e0d8fd5c2e370da0b16102e3bea0"],["/tags/C语言/page/2/index.html","b5af51494a85f14cbc4958c79e7b4e9e"],["/tags/C语言/page/3/index.html","6aa234f2dc707c283359dd3c29b38dbc"],["/tags/C语言经典100题/index.html","e04f4c0e104b486f0e137d1b7b73e283"],["/tags/index.html","ea96223a14403e777a73a3c82c6f52df"],["/tags/图床/index.html","467887b7d5968f75b8add328b9334e0f"],["/tags/类和对象/index.html","94a0cfcf45280b608aacdffe0380e1f7"],["/tags/计算机基础/index.html","55ff17dfd424a8729a31610ceb415fda"]];
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
