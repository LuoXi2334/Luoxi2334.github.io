/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","46c5e073710799697d13905a4aa0fca4"],["/2022/11/19/NOnote/2/index.html","2d4ae06e9fc699b2ca3d3a00a9a1b6ff"],["/2022/11/19/NOnote/3/index.html","8b2f3201929c05e7f4e91a0aa8dbecc8"],["/2022/11/19/NOnote/4/index.html","957ab6dd5fabd41edb62f49313a67673"],["/2022/11/19/NOnote/5/index.html","26e59bc35235a260d1587bcf7268daad"],["/2022/11/19/NOnote/6/index.html","6bb68da38e91c2e7f6c148628a4abc34"],["/2022/11/19/NOnote/7/index.html","9727965e2a21c391057df3fca71b7279"],["/2022/11/19/NOnote/8/index.html","df98c815f44d1a4ec7b5aec067ca96cd"],["/2022/11/19/NOnote/9/index.html","1d9d5dd55b6fe49bf76da525d6f12ed9"],["/2022/11/19/OCnote/1/index.html","443bd47d349bfe264cfb0d3b21dbfba9"],["/2022/11/24/NOnote/10/index.html","4ec82f2b291392b8ae233c4bc8cae3a5"],["/2022/12/01/DEnot/1/index.html","37313f4126bbe9f97b4fdb15d5aa2848"],["/2022/12/01/NOnote/11/index.html","75fb2f34fa1967f4b17b51c08ea068f8"],["/2022/12/10/DEnot/2/index.html","19e43de9ffc5009d5e13e523be8de61d"],["/2022/12/10/DEnot/3/index.html","47b0e10be777f712d4bd254b19e246ff"],["/2022/12/12/DEnot/4/index.html","910b7e22e7f1dd41c19b5835d9b4880e"],["/2022/12/12/DEnot/5/index.html","f503db6f6bbc823749cc53a4ba6f2953"],["/2022/12/22/CTM/1/index.html","428931aa0477d9178c6351bf4698a223"],["/2022/12/22/CTM/2/index.html","8b72e763a4ad625f108bb555bb29260e"],["/2022/12/22/CTM/3/index.html","445880807b5f59176c0b3692e276fba9"],["/2022/12/22/DEnot/6/index.html","ba012d7574ce663e1438caf26f5333ce"],["/2022/12/28/CTM/4/index.html","004c47097fe9f8d2a52c0270b5a2924b"],["/2022/12/29/DEnot/7/index.html","96d64412e5cc2bad6f707afd24d81f33"],["/2022/12/29/DEnot/8/index.html","6b77f58d0cec9be8aa3431e1f8695916"],["/2022/12/29/DEnot/9/index.html","c9604357e7e97582fd8b2702f18920f3"],["/2022/12/30/DEnot/10/index.html","491e17247268b2e4e7a65c80cd8b22f2"],["/2023/01/03/2023/Mon/1/index.html","4db65dad9d218a81a8b8b7c232dc511d"],["/404.html","7f683959c1b1ddd4b5c22298d30ba4a9"],["/about/index.html","c6876b74af87bffc3ec66a54577bb8aa"],["/anzhiyu/random.js","479c808aa02231779a3ed72a16678300"],["/archives/2022/11/index.html","6020fa6a33b64aedc1e0ad2158dddf4b"],["/archives/2022/11/page/2/index.html","0d8efa8f7e75c889338c722e53653a07"],["/archives/2022/12/index.html","c68e4116c0e72dd22939590c5a3264f5"],["/archives/2022/12/page/2/index.html","a18d1d8a145f73058ae21ba5df496923"],["/archives/2022/index.html","9ad6480e0fba7c05df0391a5e2609a1c"],["/archives/2022/page/2/index.html","428328ce5fa21d71a41a899df2532d17"],["/archives/2022/page/3/index.html","c4dec1d5c86bc60b64582cc8de2a8924"],["/archives/2023/01/index.html","872897308b7455c1cea959f0108c7ad1"],["/archives/2023/index.html","49d7d2098cee1861df1114a4806792d9"],["/archives/index.html","76b99cdaa37220c684ce741f8da75c2e"],["/archives/page/2/index.html","f5b0ded88aea60cd062b61802ad92314"],["/archives/page/3/index.html","4c1533dd730e0adb189e8dfd67d9ec92"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","a9da805d7b09e020ecbeb61dc29de4de"],["/categories/c语言/index.html","4b274fdbdd56765ca41aeace011c6f9f"],["/categories/c语言/page/2/index.html","8cd1add80c266074b8572a46ce75b723"],["/categories/c语言/page/3/index.html","5f0c86458dc89e16b823a8e59c86c010"],["/categories/index.html","faef409d4fb5f5d9e74105d82ac22fa7"],["/categories/经验分享/index.html","6b26867407962faaca870c3c7c1ee184"],["/categories/计算机基础/index.html","790fc8a65ad265cac1fba7b7c2f694f3"],["/comments/index.html","8d8193ffae01c029707caaa77cc41b25"],["/css/custom.css","9553f340e3e9ebfad1c67ab386535cc7"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","47c034407dcc2c56d81575305c539caa"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","e44402f51daeb7a22cc923702eb33a00"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","d229190d00df9cdf4c78a935c066c743"],["/link/index.html","ab4855abc448fe1191b67303d18551f4"],["/page/2/index.html","7ee90a415b52e580d4e1a4ff84d5cf95"],["/page/3/index.html","32a72e8121bc3d61421c2ca22afaba18"],["/sw-register.js","d808bdf673a51e513d263a7096a108c2"],["/tags/C语言/index.html","fed0049116a8fa5abebda0ade7790122"],["/tags/C语言/page/2/index.html","8426cffcc8cce6ac766f55f45f19b394"],["/tags/C语言/page/3/index.html","78ac034f3a23f7f98dd44153a01d04d4"],["/tags/C语言经典100题/index.html","2239c080703700214168e1368c4a54f6"],["/tags/index.html","e1370fca22f510bd421e5e99311fb8f0"],["/tags/图床/index.html","ce4ef7766075798c1e6c950535e4fd24"],["/tags/计算机基础/index.html","af0578be5bc0a267f3eaebbf688c1097"]];
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
