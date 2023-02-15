/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","6b8a67bc81e1f665d02f6014cae449f8"],["/2022/11/03/NOnote/1/index.html","df84cdf399ba465e1f94428de76d1960"],["/2022/11/10/NOnote/2/index.html","e9a993110ec1fcb037046711ff95002c"],["/2022/11/10/NOnote/3/index.html","179bdc5f123581f9663aa0b5fdaae731"],["/2022/11/10/NOnote/5/index.html","b7b82f54c0565ef1386a3ff23ff00f83"],["/2022/11/10/NOnote/8/index.html","2412adcd8eacedafeaa0df43bd9b7739"],["/2022/11/17/NOnote/4/index.html","cfcadf5d310469fb4ec8110f9cfd5603"],["/2022/11/17/NOnote/6/index.html","457d16cd90195a19dde72cd4a2788447"],["/2022/11/17/NOnote/7/index.html","97d11c380344d0acc146cd0e86d069c3"],["/2022/11/17/NOnote/9/index.html","befa5e81f90a91500dfdffef195a6393"],["/2022/11/24/NOnote/10/index.html","da24264e131225030911ae5a130b0288"],["/2022/12/01/DEnot/1/index.html","14229ef99f36b4342902218840ab0c44"],["/2022/12/01/NOnote/11/index.html","94a81a8b2308fad077311ecfe79578e5"],["/2022/12/10/DEnot/2/index.html","14757280a7e3d8ea97f88c50a2b880e7"],["/2022/12/10/DEnot/3/index.html","4dbd59405683b53d687e417da8c9a285"],["/2022/12/12/DEnot/4/index.html","795403c9bf8b371fe7c94d5e6e177fde"],["/2022/12/12/DEnot/5/index.html","a02c423bb39e8a4d2cbe723cb1642e67"],["/2022/12/22/CTM/1/index.html","f3057e15fda411bbb706dd0d47984686"],["/2022/12/22/CTM/2/index.html","4a075320e1bf619bc050539eb516ae47"],["/2022/12/22/CTM/3/index.html","e814d2dd143159ada207bf235b79c295"],["/2022/12/22/DEnot/6/index.html","9bdbd1fda41b53ec635639ce5416e435"],["/2022/12/28/CTM/4/index.html","548189d6595b7b26e0fc9a8e617f5747"],["/2022/12/29/DEnot/7/index.html","7bb899160505f89975c9a3f2c090cd43"],["/2022/12/29/DEnot/8/index.html","bcc7ec554feb7d873307bb82d106b721"],["/2022/12/29/DEnot/9/index.html","d1414aadb836e0a6bfa0c683997e2262"],["/2022/12/30/DEnot/10/index.html","7bcbc52d8e25ef30be8801d45d0e7ff8"],["/2023/01/03/2023/Mon/1/index.html","a7f6b8309bf8699fbc747e9c524c65b7"],["/2023/01/06/2023/Mon/2/index.html","ec0c6c857a365d5112dd747e67e47662"],["/2023/01/08/2023/Mon/3/index.html","541304907bf9cc83083b27acc7b4971c"],["/2023/01/09/2023/Mon/4/index.html","63d8a05ac70e93b13e47829a5df4fdd1"],["/2023/01/19/2023/Mon/5/index.html","50f03af365ee7e8e307ec69dc91e01fa"],["/2023/01/21/2023/Mon/6/index.html","3a41b538009f209504503a46b746d3a4"],["/2023/01/21/2023/Mon/7/index.html","57dc741bdd2724e9bb041e23766ce7e0"],["/2023/01/22/2023/Mon/8/index.html","1119293f0c005ba8eb9b2f44712276a5"],["/2023/01/23/2023/Mon/9/index.html","dc49bf52b93d2c48bbe98d17cd271cbc"],["/2023/01/29/2023/Mon/10/index.html","6d877b3d8d74a2b7ac3b067ddfed9774"],["/2023/01/30/2023/Mon/11/index.html","9120724df11b82a702f075f38f189ae7"],["/2023/01/31/2023/Mon/12/index.html","26412e7c1794c11ede58d016e44e54ac"],["/2023/01/31/2023/Mon/13/index.html","05fe35daec986e11f0190278d326accd"],["/2023/02/06/2023/Feb/1/index.html","5860240b683609bfd596db1d4c25f522"],["/2023/02/08/2023/Feb/2/index.html","4168f088f1fb355424c792c1cf71b43b"],["/404.html","c215f466e47512a4f95a0b970970c879"],["/about/index.html","fe99da9321f57449db7367d68af6dd9d"],["/anzhiyu/random.js","8a2e4722262f3b4a8fb503922312ef4f"],["/archives/2022/10/index.html","4e5d3726a0ed20868602044827f938fc"],["/archives/2022/11/index.html","dcd41f0a8a28b3a562441ed90ca2b445"],["/archives/2022/12/index.html","070f50d5069c827dacc9306859dd2807"],["/archives/2022/12/page/2/index.html","bf93fcb6d96d02a536b929ff5b22b14b"],["/archives/2022/index.html","6b078b3dc9ba1fe41d69f2df42efa7c7"],["/archives/2022/page/2/index.html","b5b6d27cd7b8dcd459b2a64b7688170d"],["/archives/2022/page/3/index.html","7438924f044875a1c1ae6a843b9e72b4"],["/archives/2023/01/index.html","28f4d98afb39f95542f9421a20566f5b"],["/archives/2023/01/page/2/index.html","c43fe6b173ee16d0980bfc8ff41fb8c1"],["/archives/2023/02/index.html","b2b2d1d88734fede9d0fd5087d6772ae"],["/archives/2023/index.html","ed271b28f578d1563b446e55d9b8e7e2"],["/archives/2023/page/2/index.html","9d3b72b31b93b0f83182e1b8734ac991"],["/archives/index.html","bdb173bd15b342b7063e90bcaca0ec28"],["/archives/page/2/index.html","b2b609f0dcd2ec8287a3159eace396ff"],["/archives/page/3/index.html","a7cf38f1f2b9d1c8f22de43847efedf8"],["/archives/page/4/index.html","4811cb5c63a10dae746104dfadecf26f"],["/archives/page/5/index.html","536bf6e25c80a57e21b70b5463f89f5c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","b8c58fcaf5a2e762d451ff600bdf16e4"],["/categories/C语言经典100题/index.html","83404c795ca39a1fed3b21a06750e820"],["/categories/c语言/index.html","364834f675b52044a545f7874eb9d03e"],["/categories/c语言/page/2/index.html","589bde996f49ed9f8b3174a4fdc7e39c"],["/categories/c语言/page/3/index.html","cd94b46ab4c7b14824187d3b80c32b65"],["/categories/index.html","b783442f49c20ae4b3bf32f47578fb23"],["/categories/经验分享/index.html","eb96e5d741461cc3cb5a2fc34aaaf9de"],["/categories/计算机基础/index.html","1e00c47ebcd309312334ef167826b3b5"],["/comments/index.html","796d2aaf3589a623a030ddc78156df43"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","aca5930ad0c1c5f1eef7412fd7ee389c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","d152b8b7f7561a3cd49c8fed99b76ebe"],["/link/index.html","5c942245ed587e0c1888ace6d9f84111"],["/page/2/index.html","d452b60eb4c4e7b7778e46d6db0458a9"],["/page/3/index.html","1fc94f74e56af5e555102bee763fc10f"],["/page/4/index.html","6e2698f93f79fa25fa32d0d27c6df99b"],["/sw-register.js","91387550ef4ae2e7fd9ce13f13e4acd2"],["/tags/C/index.html","7b198ed556f5603cd8303c6eb5ef9223"],["/tags/C语言/index.html","a2b05ade969ed849949f03db122246a1"],["/tags/C语言/page/2/index.html","8463764374b064f396dde5c5e3865e1e"],["/tags/C语言/page/3/index.html","d20e25696b0dd5d5b758a63f77b3b5fc"],["/tags/C语言经典100题/index.html","9b68a15d95e396f3652d37166af651cf"],["/tags/index.html","f92330dfa236a67367a6907cce73cea7"],["/tags/图床/index.html","d7526cf73d780070c415d2d98d20dfe5"],["/tags/类和对象/index.html","58dbfad70f175798959ca444a55ecbdb"],["/tags/计算机基础/index.html","a327661c94af7cb71fb222517814c462"]];
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
