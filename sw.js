/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","1a33d2828325d67691e64a57da415e8c"],["/2022/11/19/NOnote/2/index.html","57644b1b577bf2660666a65856fcbf27"],["/2022/11/19/NOnote/3/index.html","d64d4cd254af88619598938bdd210c86"],["/2022/11/19/NOnote/4/index.html","fd58543b6e3d9cbd3408671a077c1fa9"],["/2022/11/19/NOnote/5/index.html","0a4476f455135b28caddae76453d7f1d"],["/2022/11/19/NOnote/6/index.html","0fc13b79a83ba72173f22f634aaeae41"],["/2022/11/19/NOnote/7/index.html","18821128ae4aa16fc6e11c788329b912"],["/2022/11/19/NOnote/8/index.html","d20a7886af4d6addb8ecdd7664675473"],["/2022/11/19/NOnote/9/index.html","07b0f34528aa563b8a73883761b91493"],["/2022/11/19/OCnote/1/index.html","5e874089f1206b7f9f0d2604fb389a47"],["/2022/11/24/NOnote/10/index.html","cc08be5d39a3c471387b1e6d639c6c4c"],["/2022/12/01/DEnot/1/index.html","ee2770c68d04adb1c7aeb2990694af75"],["/2022/12/01/NOnote/11/index.html","c454f8cda3b598c5143a3e07fe42ea84"],["/2022/12/10/DEnot/2/index.html","a4dcff923850a7f42dd99f0ec2815a22"],["/2022/12/10/DEnot/3/index.html","36b22f3c3578f4bd59ac26121b8f8bdd"],["/2022/12/12/DEnot/4/index.html","98beaf7ff6ff4bf08348d3520717dc4d"],["/2022/12/12/DEnot/5/index.html","6b8f5a2c9d04880be70fa5e9e29b3601"],["/2022/12/22/CTM/1/index.html","db84e574e9c1a09512c7c9d2596169d9"],["/2022/12/22/CTM/2/index.html","f7ca7d2c7abc073811704421f9a7ee28"],["/2022/12/22/CTM/3/index.html","2258775880c306ed86c3929a9f9493b4"],["/2022/12/22/DEnot/6/index.html","1387449ba2b7c4b640063b9755d38116"],["/2022/12/28/CTM/4/index.html","ce646be4b06ae043a6f20c16fd2428c6"],["/2022/12/29/DEnot/7/index.html","509a1aa34325fa6919810241d364f20f"],["/2022/12/29/DEnot/8/index.html","a49fe187bcdb485b511247b352a90478"],["/2022/12/29/DEnot/9/index.html","a968bce2e06242a612893d3b03142446"],["/2022/12/30/DEnot/10/index.html","f196a963bbce289d8aa7bab19ffaf147"],["/2023/01/03/2023/Mon/1/index.html","9c7e8b46f9af600981213b58f5804433"],["/404.html","b6497488360e86e7f3c2993a4b372700"],["/about/index.html","f3b101a0ae82d82a51d182ae8bc3318c"],["/anzhiyu/random.js","da0228e7fb037d22db0b29f246951b62"],["/archives/2022/11/index.html","3756f7f87a6f85c3174a06132cd41b89"],["/archives/2022/11/page/2/index.html","f5f8fdcbdf5482f6b5d71258587f3a34"],["/archives/2022/12/index.html","16ebc6466898a2c2a39165e00d523019"],["/archives/2022/12/page/2/index.html","9de7b49e02218fa040b83d477e7ada4b"],["/archives/2022/index.html","abaa9a50c891d3581b5e49de18e10799"],["/archives/2022/page/2/index.html","4845667668650ba58ce20fede106374b"],["/archives/2022/page/3/index.html","576233b174283f606fe0bd13fb3a6ab9"],["/archives/2023/01/index.html","a43f8fa8db6c0c38ad770c46133c6ccf"],["/archives/2023/index.html","4c6be183b8720e73505db7921a5e4d82"],["/archives/index.html","2780bb309cb447440ecfbf161770f2d5"],["/archives/page/2/index.html","eec3e5c314e3be323392acb7bd2b2934"],["/archives/page/3/index.html","c71991e5d2e0a743f3579eb078d96078"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","d46577b338f8c88401e8ee4d78984d7c"],["/categories/c语言/index.html","08393578291ed9d47960cb511126ae01"],["/categories/c语言/page/2/index.html","dbf630849e752b4334c637c98fd38795"],["/categories/c语言/page/3/index.html","db7d2573bc0e9c70be56352c2476ed6c"],["/categories/index.html","4943a5641356a43d4edeca6cefc07551"],["/categories/经验分享/index.html","99732ce6eb11c79f64bc7451cfe66777"],["/categories/计算机基础/index.html","da58634c48afebd51c3e913052658614"],["/comments/index.html","f898da6ccf4d7331f9eb0d31ab5ddc29"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9218f2c34570f001c7969e3c04de9741"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","18b7c47507ed2da2650efbcd99410ea0"],["/page/2/index.html","2c81beb0624f9101a404dd34ca274c56"],["/page/3/index.html","a32e01ae79048447eaa3a5457d71df6b"],["/sw-register.js","99b307367ab15692e948a9de59d20968"],["/tags/C语言/index.html","f4f9213ed5251f0bf195cccf745dbbf2"],["/tags/C语言/page/2/index.html","610405989a513d5f42fc709b581a2a6d"],["/tags/C语言/page/3/index.html","a350ffa10981ab77f5f898b6902c76b5"],["/tags/C语言经典100题/index.html","0cd8e70b5406a898519e367fbd7ec008"],["/tags/index.html","e5353cfffba4bc7b8e1171dafb0753f8"],["/tags/图床/index.html","f3ff52f8d2e8c53ae03472115d7544c5"],["/tags/计算机基础/index.html","052a72167e0eee4312915c761058d18c"]];
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
