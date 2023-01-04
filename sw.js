/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","a7ef54ab35fa206b53d194cfb570e73d"],["/2022/11/19/NOnote/2/index.html","3c162212896db8fdf7b572294c2c2695"],["/2022/11/19/NOnote/3/index.html","3f0123c04555b5b09eef2fb87f737260"],["/2022/11/19/NOnote/4/index.html","109781ad031482b90e5a5e92ba7f30b2"],["/2022/11/19/NOnote/5/index.html","5fdaf58e5aea8b99d07d118709463dd7"],["/2022/11/19/NOnote/6/index.html","06985bf670b201e87ee62ca776de24c4"],["/2022/11/19/NOnote/7/index.html","73a1e995b4f2bd60cd14ec4696c94b65"],["/2022/11/19/NOnote/8/index.html","ba191f5cb0a40a8060aebc0599a42763"],["/2022/11/19/NOnote/9/index.html","01b3c81fe38a46efc890a9e5b6b4c0c7"],["/2022/11/19/OCnote/1/index.html","b999e44a77d2924088269cf7b24fe2f4"],["/2022/11/24/NOnote/10/index.html","d2c92350408821a071b4ab6428a1094a"],["/2022/12/01/DEnot/1/index.html","463de5b06ef3d36cd1e99a988a996198"],["/2022/12/01/NOnote/11/index.html","f64c383adcebad5bced2f6809e211c92"],["/2022/12/10/DEnot/2/index.html","db7c82437a7b382cb73bb0bab923ff14"],["/2022/12/10/DEnot/3/index.html","466b9077436ce257875176fc92361ef9"],["/2022/12/12/DEnot/4/index.html","a3d47aa4d24c94fd0d42f5a5969d3651"],["/2022/12/12/DEnot/5/index.html","ecac18fc25b3f466464f75978e7d33a6"],["/2022/12/22/CTM/1/index.html","cf1740262ff432bf08ee73a806901116"],["/2022/12/22/CTM/2/index.html","77e7784ddaf756e8f84582d1d86e63f1"],["/2022/12/22/CTM/3/index.html","8a4f14d6d145aa1c18c379e742fac206"],["/2022/12/22/DEnot/6/index.html","772a7160c801d5a14d5eee919dcb26fb"],["/2022/12/28/CTM/4/index.html","3b434e35265c673fe470fd092a9ab7b4"],["/2022/12/29/DEnot/7/index.html","45465356e969df6963ebc10eb1736c24"],["/2022/12/29/DEnot/8/index.html","25875326ab836412122adbfbd3165b33"],["/2022/12/29/DEnot/9/index.html","dea03ebcee569346470c3c2fb40b5119"],["/2022/12/30/DEnot/10/index.html","e8a54b063d2a281c81bd8ecc79e58523"],["/2023/01/03/2023/Mon/1/index.html","3c96451e52f4556d674aac0031be11c1"],["/404.html","26edaffd1123c66aa5b9ffe46f74abab"],["/about/index.html","c8a2050fdf11a91d4e828f8eb5d0de1e"],["/anzhiyu/random.js","fcd859e93e9585291b64115e4b8bf2db"],["/archives/2022/11/index.html","778e6961f2997db4e75a57baacd5e9fb"],["/archives/2022/11/page/2/index.html","114472f4210ba7b558908678cb332830"],["/archives/2022/12/index.html","2278b6950b791264cb238b1e97fa10e6"],["/archives/2022/12/page/2/index.html","138c843d09fc77032a9876c04941ca2b"],["/archives/2022/index.html","da9c7a620e6471af1469d79c8dd6b8e3"],["/archives/2022/page/2/index.html","6e80bf447186f96d9a51bbaec57e5ac2"],["/archives/2022/page/3/index.html","6f04bb5ae78b8b822174f70c52dec0bb"],["/archives/2023/01/index.html","922df55635e50f898a8d4327bcf65c24"],["/archives/2023/index.html","1a1faefdc753deeb1866cf980d0bd3fe"],["/archives/index.html","24abec38022a6e28b940635def65a9ff"],["/archives/page/2/index.html","a6e62e9da8dae8b645514819d64571d7"],["/archives/page/3/index.html","2d4dbb28a90667097c2fd81015739f86"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","8b686eeda14615e6543d0869ba2d0aad"],["/categories/c语言/index.html","1c37b3803a897c4ababfadf32aaa34fa"],["/categories/c语言/page/2/index.html","78f807b161b83042033fe37d46fb63a9"],["/categories/c语言/page/3/index.html","f53101cca6002ba9a9b8dba8bf5b7504"],["/categories/index.html","893de0b2831358456700e30781192bef"],["/categories/经验分享/index.html","c3d736ddfa6f9d509f6f6e5fb46b4712"],["/categories/计算机基础/index.html","1c600db8a53186a43ef8841a739c7d54"],["/comments/index.html","c9cac4f07edcdd1f87a7c030ee137994"],["/css/custom.css","f128cde8a9877d6829e9a5f0bb3d24a6"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","f8bfbea1bbf57246c0fae5dbfc6648c7"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","78991bb50f14e18d2bc907f6b083f87b"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index.html","49ac33e7a25f81905372b856062142fd"],["/page/2/index.html","9e02e2bf6d6b50afd130a5d08940d201"],["/page/3/index.html","adaf33fe8d7ae3ba0078e007445c1944"],["/sw-register.js","0a565ee5acf9d7fece73e98235eace0a"],["/tags/C语言/index.html","78ef10201645899ef85c46b05cc4916c"],["/tags/C语言/page/2/index.html","a6baba7339fb8879f6295e5e25b5dde8"],["/tags/C语言/page/3/index.html","333db7519010c98e255f18dde61221dc"],["/tags/C语言经典100题/index.html","48e8f1cd725128119323d3c84017d080"],["/tags/index.html","df2b8ba422398ff8fbc35f06647994d7"],["/tags/图床/index.html","46563bd5f7a2183236dd4d018b220d64"],["/tags/计算机基础/index.html","070830c1f441b133089dbb2c657d2cb9"]];
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
