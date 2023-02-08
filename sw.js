/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","709c127ebc13c1d9f903d5ed3f065971"],["/2022/11/03/NOnote/1/index.html","a4708aa851aedde5b1a4cc2fa61c9306"],["/2022/11/10/NOnote/2/index.html","cb62fb2a82cd14c0fa9bd2dd3eb4d07a"],["/2022/11/10/NOnote/3/index.html","204eb3c86111c0699f8d4a41441a1acb"],["/2022/11/10/NOnote/5/index.html","2d4bf3329b6a5bc86afc6764dc214e8f"],["/2022/11/10/NOnote/8/index.html","2ccc165835f606f07324358db6434e20"],["/2022/11/17/NOnote/4/index.html","e70d2387b9e54cf3f1fe47f878770e4f"],["/2022/11/17/NOnote/6/index.html","1790e81413bd33de596a8526ef5faad3"],["/2022/11/17/NOnote/7/index.html","15990303166cde0a831199e9cb6807bc"],["/2022/11/17/NOnote/9/index.html","efde8d13b580fa5544281f7c9d7825e4"],["/2022/11/24/NOnote/10/index.html","3851537557c9e64e952068c04bd489a8"],["/2022/12/01/DEnot/1/index.html","76ec0cc57d6e73611dff94cbc1fcd8f9"],["/2022/12/01/NOnote/11/index.html","9ac6cc8fa322ad40272c8834de22976a"],["/2022/12/10/DEnot/2/index.html","5ea618da9ece2f03069038f59559f54a"],["/2022/12/10/DEnot/3/index.html","182592bcdc5592d174ae955dabf529bc"],["/2022/12/12/DEnot/4/index.html","81908509cd1905d59be0e6f4ff3fee12"],["/2022/12/12/DEnot/5/index.html","0ac49c6aadb2a6fb47dbd3339e94f73e"],["/2022/12/22/CTM/1/index.html","d355f6252b1ae6068fc7722f8c8e7b19"],["/2022/12/22/CTM/2/index.html","c0acb54993e8b07deaee62e7ceb8fce6"],["/2022/12/22/CTM/3/index.html","728a92aaff4850d967abe939896ae851"],["/2022/12/22/DEnot/6/index.html","0659db6b15bd2cbc85af2fac0a0a5d89"],["/2022/12/28/CTM/4/index.html","13bb7a95b294f5e2720f6a2a79f56010"],["/2022/12/29/DEnot/7/index.html","cc1477569a0ed386cbf15116e6a00ba0"],["/2022/12/29/DEnot/8/index.html","36557f096b8d5ad17caf0decec9ac3a2"],["/2022/12/29/DEnot/9/index.html","87406d66f27a2083902e8760b944f85d"],["/2022/12/30/DEnot/10/index.html","9dc461d12e5f6cd27baf66d62c86450d"],["/2023/01/03/2023/Mon/1/index.html","c995107fe32165729b55af1ff3128aef"],["/2023/01/06/2023/Mon/2/index.html","af588dd09e53f5bfd906bfeee09081b3"],["/2023/01/08/2023/Mon/3/index.html","33585e005c29337a7bce2f5c57e574fe"],["/2023/01/09/2023/Mon/4/index.html","ac85909712f9b037120b24e233f40ed2"],["/2023/01/19/2023/Mon/5/index.html","8437088d501de15712a65145b3fb8f6a"],["/2023/01/21/2023/Mon/6/index.html","f2476d1257817ece5665b4d9a9e60560"],["/2023/01/21/2023/Mon/7/index.html","b8c809410a1ee3671a491ba9ff878b3e"],["/2023/01/22/2023/Mon/8/index.html","b23996dc8519aa793d2576d30d67a5c0"],["/2023/01/23/2023/Mon/9/index.html","8ff9d8592a3c3ae7361b44d97e7b75d0"],["/2023/01/29/2023/Mon/10/index.html","e76e8296b38687f546083d0a02cce97d"],["/2023/01/30/2023/Mon/11/index.html","7257189b16c5d4b0e88a1a600c379204"],["/2023/01/31/2023/Mon/12/index.html","71af6e34298b96bb547787e8dc103012"],["/2023/01/31/2023/Mon/13/index.html","3c3d2108ca8f8c38ac0f148c956e01a6"],["/2023/02/06/2023/Feb/1/index.html","53f0ca7aca4b2e4dd81f8ee1d69167ff"],["/404.html","2a0e701432daf7a292705f70c0b8283a"],["/about/index.html","30700dc900fa53585fb7546a92519eac"],["/anzhiyu/random.js","7f281a6645ce3cbcf4f7b2ca1be9f2b7"],["/archives/2022/10/index.html","7e1e9dec57610e7ca1ffc5ff08d9c1fc"],["/archives/2022/11/index.html","c21cecf21f302b7d02cd3e0e5f8d29d1"],["/archives/2022/12/index.html","99767972388c9f3e80989142851a07e4"],["/archives/2022/12/page/2/index.html","be04793f801e02f2062ef21c837189a2"],["/archives/2022/index.html","cc512dbb6d1b871eb3afbb8b0b1b9546"],["/archives/2022/page/2/index.html","e763442297a9d70ea4d08c2fdfcde782"],["/archives/2022/page/3/index.html","2b508ccf14cf6d488b1059823d1c2eeb"],["/archives/2023/01/index.html","6d50e7e36c89433854d6718b8c5b0938"],["/archives/2023/01/page/2/index.html","92ec4da68568f5e0a133cd79f22990d1"],["/archives/2023/02/index.html","b0ab83b7dba2ab0e742f7394147e3b11"],["/archives/2023/index.html","9e7c90bfddda8fa4778f3dbf4a7d3795"],["/archives/2023/page/2/index.html","1820afafad8002902af8449e37fc844d"],["/archives/index.html","4e13cbe6155c4c691f4e90cdcd903298"],["/archives/page/2/index.html","a825aff245015dc5bd2597acb13bfc47"],["/archives/page/3/index.html","6200280f07c65448c4f745a4a4846011"],["/archives/page/4/index.html","445a81c264d26bb206ea83d1fe11943b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","eab1cbb3dd1096283ec06990554a8e2e"],["/categories/C语言经典100题/index.html","c9ed41a2f760a1cabd215b2ea150ebc9"],["/categories/c语言/index.html","c6981d9f8e7d7f805618250fa393b573"],["/categories/c语言/page/2/index.html","02cf514f6772f300f9f8ac1d945697d8"],["/categories/c语言/page/3/index.html","ab28f8a69329584024757ea7d8d9c646"],["/categories/index.html","58f49bd6d0f42bdb98f88235a9d9cb61"],["/categories/经验分享/index.html","99c9d2fbf675ca45cf93e01c6b0e4bcc"],["/categories/计算机基础/index.html","dae00dd44ea1a364fa8a61198568740a"],["/comments/index.html","71d9f9f41f8d4f39cdc6821ae8b834b3"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","84bbcba118460fd3fc1a9bd1c36d174b"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","644fa6c21d572d54d7e644dc7a7b882b"],["/link/index.html","f238c2fa8d8b02363d5db15c3e311522"],["/page/2/index.html","e27c08348234fe54e4174196da455de9"],["/page/3/index.html","27b2536280749624420ae6474a64b092"],["/page/4/index.html","7f59d128990ae7e350a3ccbd8ef99ac8"],["/sw-register.js","fc7aa2edd60dac6f70d6559481d7f799"],["/tags/C/index.html","826e3ab5823b3c57cd8b3628afc887c2"],["/tags/C语言/index.html","a41923b8491765d75522794d748294fc"],["/tags/C语言/page/2/index.html","2b898cc5a341848579972f3287c410b3"],["/tags/C语言/page/3/index.html","78b5f00ca38389fef94762e69b8db621"],["/tags/C语言经典100题/index.html","459aef5f1b191b7b0a8d07ba1deaf3aa"],["/tags/index.html","a5ceb3692dc76d87f23e15cffe967ff5"],["/tags/图床/index.html","dc6f4d2aa978f3805560e7baabf810f6"],["/tags/类和对象/index.html","bd076747510d19b9129179574d2c2f66"],["/tags/计算机基础/index.html","91842aa67e23c0a8a1733e413d9dad18"]];
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
