/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","81b358e20502975365f3551c09b8b68a"],["/2022/11/03/NOnote/1/index.html","dc78398ae0994807a1e358f7e6a12435"],["/2022/11/10/NOnote/2/index.html","3e44fe643a31f80cce30f91553822a43"],["/2022/11/10/NOnote/3/index.html","2d035335b5dfbc3f9a9db221161f9ba8"],["/2022/11/10/NOnote/5/index.html","592cb656314f45f57ef6f68c89f6e1d9"],["/2022/11/10/NOnote/8/index.html","e250d7ff87c1f1778d7b36d903f5b398"],["/2022/11/17/NOnote/4/index.html","3755fe0f545842aa03f9bc2bdc9a0c06"],["/2022/11/17/NOnote/6/index.html","5b4f8d94f3cb5c20bd6923549f2a721e"],["/2022/11/17/NOnote/7/index.html","c3799301b82d48d0e1629432a3ca1e64"],["/2022/11/17/NOnote/9/index.html","07760fb25c64aaaffb32014a01211789"],["/2022/11/24/NOnote/10/index.html","658f86456bb2f0e7f7b873c50cc2c3f3"],["/2022/12/01/DEnot/1/index.html","f08c3fc51653d8e869d431473aa70444"],["/2022/12/01/NOnote/11/index.html","d7b1d0d92a932202874dea33d5901b97"],["/2022/12/10/DEnot/2/index.html","9ca4668481cb8070076bd839f7ff2afd"],["/2022/12/10/DEnot/3/index.html","a0afa840b304bb80c3bc1b1b2eab8576"],["/2022/12/12/DEnot/4/index.html","64534a594efe585d21bb3bcfb983ed99"],["/2022/12/12/DEnot/5/index.html","6c6e31e855b05c89c494344205443f46"],["/2022/12/22/CTM/1/index.html","f3fcf534b87a0307ce13c5cc33d1edb5"],["/2022/12/22/CTM/2/index.html","1c3dfce466899eaa4a160d0db4f65541"],["/2022/12/22/CTM/3/index.html","ff8b134acca704eb323e8eb43b2abe11"],["/2022/12/22/DEnot/6/index.html","b7f853f71da04555193c5b11395bb3e9"],["/2022/12/28/CTM/4/index.html","cac9e0b3b78ec321f6e9371472cd9bc6"],["/2022/12/29/DEnot/7/index.html","3831c1e1f2a80604a02ca8058ab04cef"],["/2022/12/29/DEnot/8/index.html","2d13fd0cea9daea71ec6cd36545dcda1"],["/2022/12/29/DEnot/9/index.html","39bfd9285d3f9770e5a82b35c61c88e1"],["/2022/12/30/DEnot/10/index.html","1de3a135688059de06790f0ec75b5a58"],["/2023/01/03/2023/Mon/1/index.html","f0dee28c64761b2225bad5c3774bb413"],["/2023/01/06/2023/Mon/2/index.html","aee79f5b4b5afd3a910937a91d894367"],["/2023/01/08/2023/Mon/3/index.html","9ebc7d296d46a08749e1abe36bb5a196"],["/2023/01/09/2023/Mon/4/index.html","3db8517b04df78b6608342a5f5a6d7c4"],["/2023/01/19/2023/Mon/5/index.html","7656b8224d9f484729a2b3514ee7d62b"],["/2023/01/21/2023/Mon/6/index.html","ab1b695ba4bc800c33a9bbc86efa3e34"],["/2023/01/21/2023/Mon/7/index.html","04bd97ba9c5cb55f5486ebdb4a01285c"],["/2023/01/22/2023/Mon/8/index.html","22765d0b2a25ad2f10714f8912c70d13"],["/2023/01/23/2023/Mon/9/index.html","403b6d3491b206c6630ca62137bcdfab"],["/2023/01/29/2023/Mon/10/index.html","caa200ebcba23c0cd81d8f805b93fe6b"],["/2023/01/30/2023/Mon/11/index.html","ca3dc51e77ff4e772985c537de331813"],["/2023/01/31/2023/Mon/12/index.html","f30f86084afc5e29e239824c33636d5b"],["/2023/01/31/2023/Mon/13/index.html","a6155783110c4673c1606b62151a587f"],["/2023/02/06/2023/Feb/1/index.html","2c34bb42abd337a809b8b2335db06f18"],["/2023/02/08/2023/Feb/2/index.html","87f890de1a0e024550302824fd52ddfb"],["/2023/06/01/2023/June/1/index.html","c048b0d0aae6a7b9fbbbbe8c074659a0"],["/2023/06/14/2023/June/2/index.html","6232be628292c3545c08599389224eb3"],["/2023/07/27/2023/July/1/index.html","71baf1fead2f6c720a61588f1a6f9731"],["/404.html","63ab7d8687a3168fb461a5bf2cac84ba"],["/about/index.html","8283d10422b1eda0862572b456b18c73"],["/anzhiyu/random.js","3ba82e2f235adeeddf97c45dd5d7477f"],["/archives/2022/10/index.html","a4544d7853536562a122ac71ed051bb4"],["/archives/2022/11/index.html","d28caec8133650d1c0b9c823fe8e5e7c"],["/archives/2022/12/index.html","e1f153cba17e876098545c3b15678874"],["/archives/2022/12/page/2/index.html","31e8b5048ef642c8787a17fe4751a3c1"],["/archives/2022/index.html","91bd0297b61231a7e02369fd9bfafe83"],["/archives/2022/page/2/index.html","47205be67279a281d3ee964cf1d35497"],["/archives/2022/page/3/index.html","cd18e5b022e7ec6d9c778d9ffe74907e"],["/archives/2023/01/index.html","cef0135ce2ee8c0d4b161aaf8675e1c9"],["/archives/2023/01/page/2/index.html","94e3c8fd58d49cc526c05cfea389bbc7"],["/archives/2023/02/index.html","27298e31200c68dce68ec0389eb990b5"],["/archives/2023/06/index.html","a1d94141bdba2e14200ab66d3dd7d96c"],["/archives/2023/07/index.html","c90a6b3ef5877e25fec1e0fbc3fc9e3c"],["/archives/2023/index.html","64f266ef94d44e3662d89ce7d04ca53c"],["/archives/2023/page/2/index.html","f418307102cc03c21ce5182a2f7b6b02"],["/archives/index.html","4f180b2472175e6b0f107ec85117e58f"],["/archives/page/2/index.html","b5badc6a2666c699b203c6c7011507fb"],["/archives/page/3/index.html","a1165665b0932569560684109b223689"],["/archives/page/4/index.html","c8a9cba87d4ff120e38872508b3c17d6"],["/archives/page/5/index.html","d3f6040d85aeb0ed5aa5ef0c42476abe"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","8a99642e9c35a09843aa1cfdd105b99a"],["/categories/C语言经典100题/index.html","150f300aed6b8cf5a25da645405d029a"],["/categories/c语言/index.html","94497112942b9a9b9f2d7f46dbaa0a21"],["/categories/c语言/page/2/index.html","e9dc6c4c3d6d2d4fc96a823d0683aa30"],["/categories/c语言/page/3/index.html","5123ade6252308b992f8e9f5a350e3af"],["/categories/index.html","f6dc933c212706fb859b5499ca59ca2e"],["/categories/经验分享/index.html","8800afa85d026ac4b4994953cdab2977"],["/categories/计算机基础/index.html","e43d55f3f46e92a16e2415e698e2015e"],["/comments/index.html","dcde6de96faf3a15d414d6b7f36ce350"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","87d98607777b45444cae3b72d7d0fa0e"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","97ecda1c409022f9d74505b497e9f1e3"],["/link/index.html","66b2a9f350ae3a19d21e9154f40681b0"],["/page/2/index.html","2e195e00c667919f66eda752a414bba8"],["/page/3/index.html","6cdebed0b7e185e80fa3f86939dc1a6f"],["/page/4/index.html","7e3492c9ea73079db2fe5b3021d13a8c"],["/sw-register.js","ba026748c71ee5acf97cfa57e9f8c4fe"],["/tags/C/index.html","6a6fd77bb14a7b438c69b31ba204cfbe"],["/tags/C语言/index.html","ed8f88eebe776bb6ade84afa97b3f269"],["/tags/C语言/page/2/index.html","160f38b742b8b09846c1a3064f747cd9"],["/tags/C语言/page/3/index.html","56a1a44c50744e22023e9e9181bba692"],["/tags/C语言经典100题/index.html","1fe968c087ca77d0d92ece1cb1ce5a90"],["/tags/index.html","4310009533bf2f60b5381b5b7abf347f"],["/tags/类和对象/index.html","0bb5ffdd81d7ff2ebfeb55276cd6d4ad"],["/tags/经验分享/index.html","8ee59b2bd97585a1aa681355e494ae5e"],["/tags/计算机基础/index.html","1dbcf77a581e6d4677b8fbca1f63bd4f"]];
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
