/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","42b4ab803c06ea88c4c643a6071e5b51"],["/2022/11/03/NOnote/1/index.html","001a74d7f95dd9223437f13ae5e9d7e4"],["/2022/11/10/NOnote/2/index.html","3aa3df5b9cf3299f2cac5ffd21b0853b"],["/2022/11/10/NOnote/3/index.html","aba7a6fc291f1e485aae235770ac3f37"],["/2022/11/10/NOnote/5/index.html","5147fd5ba228c3cdcc47f7cccb1cff30"],["/2022/11/10/NOnote/8/index.html","9ac0aa496fc39c6c655ade0e809e98a8"],["/2022/11/17/NOnote/4/index.html","435647020d71131e9eeacae1fcb5eaa0"],["/2022/11/17/NOnote/6/index.html","24f2ec44e9567e7afccd45f8271b8500"],["/2022/11/17/NOnote/7/index.html","53cbd89869c38ceae35a276dd787d735"],["/2022/11/17/NOnote/9/index.html","02fc6b608da8450e89b8ac511209d1a5"],["/2022/11/24/NOnote/10/index.html","d7a10dcebb384c882fd399bc7d0c3cb9"],["/2022/12/01/DEnot/1/index.html","1ede2c644e5e1f70694851b9c7bea7a7"],["/2022/12/01/NOnote/11/index.html","f768af4da37860f386e08c4d6c51668e"],["/2022/12/10/DEnot/2/index.html","5ce7e57f98268253bd13329f8f694b14"],["/2022/12/10/DEnot/3/index.html","759d2505e2caf88b8361e5e8c51c03a5"],["/2022/12/12/DEnot/4/index.html","e3f7ac78f89bcdde4d00a2af41e73307"],["/2022/12/12/DEnot/5/index.html","4fa2ac6455ed896f6eaebb14511b468c"],["/2022/12/22/CTM/1/index.html","982c2b75cf43a381178c2ceaf79be00a"],["/2022/12/22/CTM/2/index.html","6a7933754c6330d8ac53c42c540e3832"],["/2022/12/22/CTM/3/index.html","71bc5837122080ae9d7c65b8f99a4191"],["/2022/12/22/DEnot/6/index.html","83db3deb38734792cc6ee335fafcda3b"],["/2022/12/28/CTM/4/index.html","96fbc26e245a74f2af18cab9b9660e8c"],["/2022/12/29/DEnot/7/index.html","30bf20f9a97280a6ae1df7c58b40a389"],["/2022/12/29/DEnot/8/index.html","85fccb157a6378dd0545471b61401429"],["/2022/12/29/DEnot/9/index.html","516d69e3c0ccb2873b890ea9c8cb49d8"],["/2022/12/30/DEnot/10/index.html","4b9eba17e5aeca89f0a46b2d22334017"],["/2023/01/03/2023/Mon/1/index.html","8797f4a3f002f0e6dc518c2e9c502740"],["/2023/01/06/2023/Mon/2/index.html","cb4733e9ebb88626224fa338c58a3bb4"],["/2023/01/08/2023/Mon/3/index.html","b3637b6dd89aae74211741f9dfcd9d41"],["/2023/01/09/2023/Mon/4/index.html","106405d81ef98aa3f17021d434f2ce0e"],["/2023/01/19/2023/Mon/5/index.html","0b38f2858e2ff90ccf91fc3960dbbdc8"],["/2023/01/21/2023/Mon/6/index.html","9c16e0c5ab0cd9d8f4de899fa925fa8f"],["/2023/01/21/2023/Mon/7/index.html","ad0806053c4d41e79c0acd78ffb8a7d4"],["/2023/01/22/2023/Mon/8/index.html","7a06f2feafd413885c888d396460d9be"],["/2023/01/23/2023/Mon/9/index.html","5ffb260247216ba731e60296b73de100"],["/2023/01/29/2023/Mon/10/index.html","e88d9b0bb0820e31f14338265d270e1d"],["/2023/01/30/2023/Mon/11/index.html","b36758f5c3f452bcc2e73ef948537592"],["/2023/01/31/2023/Mon/12/index.html","5263a6905e2c3c0ba281a646458bef82"],["/2023/01/31/2023/Mon/13/index.html","37684578cfe630cc81ecb18e9fb51dfe"],["/2023/02/06/2023/Feb/1/index.html","df0ed912c220f55778e4e363c5d220b9"],["/2023/02/08/2023/Feb/2/index.html","af079106cbc74ef90ff9c4f85fe4a6b4"],["/404.html","f875baf2449c57f13831d2ec24fd46a7"],["/about/index.html","5b741ba548dc93d684d52e5f72666ddb"],["/anzhiyu/random.js","0691737654251898ac7ec3b3fbec1b07"],["/archives/2022/10/index.html","afc05efe2d9a706ecc4a708a0c727ebc"],["/archives/2022/11/index.html","c9acb4c08e029e4a7639a6512d8f70cd"],["/archives/2022/12/index.html","5cac1da3a1ab9a2c77d57b2e7bf6e984"],["/archives/2022/12/page/2/index.html","bdc237a41870888f1c00246b2ed99954"],["/archives/2022/index.html","65371d2bd6e95b7caae908311f45b790"],["/archives/2022/page/2/index.html","67786165fc928d36f54a981d73e44c31"],["/archives/2022/page/3/index.html","1c5e081cd979ff0acff4705ea5f96c77"],["/archives/2023/01/index.html","ee8397250ee43fa5d4754dd26f2414a7"],["/archives/2023/01/page/2/index.html","bc7d799e850b3fe370f6cb40d0dfeb85"],["/archives/2023/02/index.html","60c85f1a27c4226316a5d2fa599b8335"],["/archives/2023/index.html","405bb0051b6c16a03fc4081343f698d3"],["/archives/2023/page/2/index.html","822edda2b673f86b6688132aafdccd58"],["/archives/index.html","634d5dcec5ee77a5b5723888494e0652"],["/archives/page/2/index.html","2b4b88c766ef0f0522a784b60dd4b0fa"],["/archives/page/3/index.html","6d24a177d81a236a7f80c8ed444a21f2"],["/archives/page/4/index.html","da6c972596c72489249bc0ac7ff9ab77"],["/archives/page/5/index.html","77ff5ef93bc56531ccc03f2cffcc1e40"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","62b371f58a41650a81815f37976fb0b0"],["/categories/C语言经典100题/index.html","f263267a8373a0b963a0b538298de1ec"],["/categories/c语言/index.html","9f7aed4c1b7d2612f0c21b49b7e983a7"],["/categories/c语言/page/2/index.html","f37d4d327c3a29be69aac78c86711176"],["/categories/c语言/page/3/index.html","2377b110cf74510e82db35fe8cc1cd93"],["/categories/index.html","1dd32a195592023569995b46d03ee5e4"],["/categories/经验分享/index.html","8fffc309b873eca2179cd584d5cfa407"],["/categories/计算机基础/index.html","09ffe7ecf5e6ee8047288e24b7f17e27"],["/comments/index.html","a7e41f047c25aa3ec5e431ce8f19976b"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b9acc72d519f03052ea2a0bb3a247a18"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","67d878443bd2ae4369b54b2a1f22290c"],["/link/index.html","071e9ccdd1e334770dafd44a6cf4103a"],["/page/2/index.html","9845680b0281fa439dc688e369f215de"],["/page/3/index.html","0cdbe9f9958be5d8e7ef3ee4fde73c97"],["/page/4/index.html","95458b736983468041f64b63a73a8ef1"],["/sw-register.js","d5e91e69d6cae1f8773e6610ba30534c"],["/tags/C/index.html","52a8b1966df31d9f730c1453db9a84e0"],["/tags/C语言/index.html","0c9dcf798f45a06c4fc24d7b22a8ebc2"],["/tags/C语言/page/2/index.html","902a9a594d49a36c572eda3cd2c72178"],["/tags/C语言/page/3/index.html","5fc63cbcc45039221c653d89fac0518d"],["/tags/C语言经典100题/index.html","732710904496260e520fdeddc8f4d080"],["/tags/index.html","cce7fceed8d0b46437f1ca85d70919d2"],["/tags/图床/index.html","06c894ef7f896f00c031d4bf880cffb5"],["/tags/类和对象/index.html","d41bdc84a0fb7db94c9bd757dc7976a0"],["/tags/计算机基础/index.html","fc4308bc533968085be476cc0f9ce8fe"]];
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
