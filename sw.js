/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","74c76df2718eceec1d3a2883b15024eb"],["/2022/11/19/NOnote/2/index.html","85a7ab93f32f87fce66a5f5c3af74f8c"],["/2022/11/19/NOnote/3/index.html","1827d53a463cca8ce03a48b858a2e501"],["/2022/11/19/NOnote/4/index.html","69a1053dadeab62b47ad02bded3ad807"],["/2022/11/19/NOnote/5/index.html","508ebbfb69e1fabb58c4cf1dfb74ca61"],["/2022/11/19/NOnote/6/index.html","7b5160a79fabbdc70f8ed1015f2b2c32"],["/2022/11/19/NOnote/7/index.html","f2ee269dea806ed11eded26b50212b3a"],["/2022/11/19/NOnote/8/index.html","7f2307ec86582315b609e7b106b6e99e"],["/2022/11/19/NOnote/9/index.html","e40dd3e7aa3b23f4db64a1db3ecee4e3"],["/2022/11/19/OCnote/1/index.html","8f0cb2857432febcc06b32ca6d25a34c"],["/2022/11/24/NOnote/10/index.html","dc517a74029ebdc341ce44ac25f36b59"],["/2022/12/01/DEnot/1/index.html","ca46df3e6007933f29e0012435b94337"],["/2022/12/01/NOnote/11/index.html","20cb1ef7bba3bc4a760bd185b797fe34"],["/2022/12/10/DEnot/2/index.html","0556114ce10d2f7d73f55c61ae8580bf"],["/2022/12/10/DEnot/3/index.html","ae2d149b57a51add76999b39b021a33f"],["/2022/12/12/DEnot/4/index.html","7d1b610acd0df0b98ca1611f5fcb38d2"],["/2022/12/12/DEnot/5/index.html","229a20c7df81c124e23b105e58846994"],["/2022/12/22/CTM/1/index.html","8aa3ce8cf3dc28369abd6aa19f854ead"],["/2022/12/22/CTM/2/index.html","95c06832d326ecef3064dbad126f4e22"],["/2022/12/22/CTM/3/index.html","a0f62c0ce89e791cba8def4dd00d09e3"],["/2022/12/22/DEnot/6/index.html","d7e795c71eb9e1bc7f384465af0810ce"],["/2022/12/28/CTM/4/index.html","297716de229f8c2f0bc8938a1d991807"],["/2022/12/29/DEnot/7/index.html","6a58713764a472e14d8de20d9f5e85d0"],["/2022/12/29/DEnot/8/index.html","ab9889971b6a47ec2ede2ea023c471d7"],["/2022/12/29/DEnot/9/index.html","bcff66efdd4be37658b06028a468e524"],["/2022/12/30/DEnot/10/index.html","e6f78f0d6e817128629b9661808b0356"],["/2023/01/03/2023/Mon/1/index.html","9a91cee8b3a1e9656246fd382e541c23"],["/2023/01/06/2023/Mon/2/index.html","a31041c837881afe8ddacac07f8d5147"],["/404.html","7ed409c3b18c2d377f1d1d20c7195167"],["/about/index.html","370af9ffc02e117160b6b900280356b2"],["/anzhiyu/random.js","0263c786182343b6e89a099414cd1241"],["/archives/2022/11/index.html","a017ec25ad58af03166a2a9cec674eff"],["/archives/2022/11/page/2/index.html","96b45f3bf1a81549d62c1428017aeef1"],["/archives/2022/12/index.html","97b8054f716b786308eecf16fa27de48"],["/archives/2022/12/page/2/index.html","66ecdaa35aaf0984a50c0d3424e25994"],["/archives/2022/index.html","e88601f79067dd0e5d7bfa95cc932cc8"],["/archives/2022/page/2/index.html","2e2ccc1fa6bde5849e8f47e823ab7d54"],["/archives/2022/page/3/index.html","d794cba3bbd90a886ecec503230a40a3"],["/archives/2023/01/index.html","a3b07b51496525956ae5f6582d548069"],["/archives/2023/index.html","b7066f3b6319d4fe9ce8623b76d259df"],["/archives/index.html","635493fdb05b39e7c1ed98ee63f2c1fa"],["/archives/page/2/index.html","c5191399457ee74fdc95f1c475b6f64f"],["/archives/page/3/index.html","5ccdb34e2a6cd7899fa65a9393377632"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","d14998a3035d3a4ee1fbbc9a6e07895c"],["/categories/c语言/index.html","64c22110b684a35284f11dc3b9a3afc1"],["/categories/c语言/page/2/index.html","1b9d1eda8af3175b8dd9c3990c9626d3"],["/categories/c语言/page/3/index.html","07a2f1e1a488b390f3b1f43aa24582bd"],["/categories/index.html","bfec4caa9a1b4cbaec49495b1aec79e6"],["/categories/经验分享/index.html","8ee362ac06fc43c0f9dbec37dc1d0d5a"],["/categories/计算机基础/index.html","605a513b67877a7a6fdeb6a104b84851"],["/comments/index.html","4032ffe68683aadf1a512e4f56d5d9ba"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","772d44c4575a105526f23316a7005ce5"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","5d30aa5748c70cd9e6c028e5bccd8385"],["/link/index.html","9a86e9a9bb8238f6772b79f96074adce"],["/page/2/index.html","3f8e2b2836cd2799fb4d54ef55f59ac5"],["/page/3/index.html","e924ad242041cb1477365ac04efbb477"],["/sw-register.js","32be101a8ba6e6e71eaae244855e6e1a"],["/tags/C语言/index.html","ce441d4b44d766905ff143a72607e97c"],["/tags/C语言/page/2/index.html","bf3cc93a43e850cf2948b6d1f0142284"],["/tags/C语言/page/3/index.html","99e77fae529f143ba8f3a202948ed8f0"],["/tags/C语言经典100题/index.html","08c16a16e4de3b7bf974e22ce064ad15"],["/tags/index.html","b99b7e6e19df5a3495de9866025b31e5"],["/tags/图床/index.html","cfeafe8b3ff77c7536cf928b914dcb96"],["/tags/计算机基础/index.html","0541ca17d19351351bc8fcaf6c456d6e"]];
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
