/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","e5dd68b2e21b5a5ad4d905f76a07b99a"],["/2022/11/19/NOnote/2/index.html","815b2526fa047fd4745b6c3c6f146249"],["/2022/11/19/NOnote/3/index.html","d557fdd93389f177e0defeb7ff923bd6"],["/2022/11/19/NOnote/4/index.html","018a663ab936638cf761eecb5f025213"],["/2022/11/19/NOnote/5/index.html","f8bb5d62f7ac9ba19a5bf0955310a36c"],["/2022/11/19/NOnote/6/index.html","042ca24d8bfd1e57d86b15f97a1d5336"],["/2022/11/19/NOnote/7/index.html","957dda79f2fbd0864b776badeefac08f"],["/2022/11/19/NOnote/8/index.html","0e36f3a4784675ae2e51bab8593f3168"],["/2022/11/19/NOnote/9/index.html","388f124e3ee0d11bd68a5916cbe4ff02"],["/2022/11/19/OCnote/1/index.html","a83f1f98734b1debcb799efb3b0705e0"],["/2022/11/24/NOnote/10/index.html","8de387a54ff3f997dcc6bb1136695396"],["/2022/12/01/DEnot/1/index.html","af96cb5e204db68eb28d6ddf49df7f7a"],["/2022/12/01/NOnote/11/index.html","582a477dbb83a4e6e4453437f12f81a5"],["/2022/12/10/DEnot/2/index.html","fcfefb8a1138ce411f7db3860d2fc059"],["/2022/12/10/DEnot/3/index.html","f7e6794cc424771696b58d58c399e04d"],["/2022/12/12/DEnot/4/index.html","d6d12d721e881094e02eb78ab35ec327"],["/2022/12/12/DEnot/5/index.html","4790bae0d02648288302818e88be577d"],["/2022/12/22/CTM/1/index.html","60b98768db5bc3bc8d49fc501e1ad2c5"],["/2022/12/22/CTM/2/index.html","7c5a4b79c2e2d0302c52a29627774d90"],["/2022/12/22/CTM/3/index.html","2b8a8cef1314c18e97f4303fe51c6e7d"],["/2022/12/22/DEnot/6/index.html","75398acad4cd38af118f72fefa448344"],["/2022/12/28/CTM/4/index.html","074b9f5ad4801992ea777915dcbc6b3c"],["/2022/12/29/DEnot/7/index.html","992bf209ff13e040c1f070280313b045"],["/2022/12/29/DEnot/8/index.html","9c86cc13d8fb91070d680037c5e48a7f"],["/2022/12/29/DEnot/9/index.html","4acf7d7c667c02b553a149de4af8148b"],["/2022/12/30/DEnot/10/index.html","845c2f2b5232136fa17c59f0c51ba696"],["/2023/01/03/2023/Mon/1/index.html","8bca33042c22bed5842a76dc83a75c09"],["/404.html","8df0a6c875101db9b6afec88d2787d49"],["/about/index.html","3f817269694f885bb93d5c88ef798c34"],["/anzhiyu/random.js","dbf1fff056250cf4df2109e675ef83a4"],["/archives/2022/11/index.html","995cb684a79a45c9eb41716e62a1c0f8"],["/archives/2022/11/page/2/index.html","3a7dcd979ada07b705ccd7aa369d5143"],["/archives/2022/12/index.html","4e20986dc1d79696e6ea310141334856"],["/archives/2022/12/page/2/index.html","f8f1ba39261374ae4caeead70f70cf8e"],["/archives/2022/index.html","05d4515f71479d1f6d605418cfe747b7"],["/archives/2022/page/2/index.html","d84b399a0abe3b45144f4e0daf83e44f"],["/archives/2022/page/3/index.html","2266508133d0ac6be2e4a4fbc04296e1"],["/archives/2023/01/index.html","b4e1047b350cd86934b51b1d604c302b"],["/archives/2023/index.html","0f074b95e0e201027764b66cb31a0c38"],["/archives/index.html","87e6e4f076506c04a7a5ce376b8e56dc"],["/archives/page/2/index.html","c4a20f4dd824dec80e5899f8272ba8a4"],["/archives/page/3/index.html","16f7c0942ec63929a25c8a11e2cc4cf5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","0aa6f765dcf12793825c133b5989380d"],["/categories/c语言/index.html","8594be50e02bcb90aab947f50ea9d522"],["/categories/c语言/page/2/index.html","a2c6df604c43ec87456a488048d653d2"],["/categories/c语言/page/3/index.html","329ddf64f7f70816b65f723894474fe1"],["/categories/index.html","79472bb61841ed8163218467f7d45895"],["/categories/经验分享/index.html","c8ee92e32e7398c18f72d35785349ade"],["/categories/计算机基础/index.html","65ffbcc4ba4420fd169203e91eb11559"],["/comments/index.html","107cb684fecd50775f7b11ea066c027c"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","ad0ffecf80155c1f8bdbb9badcd765b1"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","e934101f986d88e0b40296338db066b1"],["/link/index.html","e591b90b0e2179dac57eafd63dbf62fb"],["/page/2/index.html","5785a0921961bc2056067167149f47b1"],["/page/3/index.html","9b60f659ed613b71d3763c17630a6e0d"],["/sw-register.js","4a3c936e67033ac8c0fd8e5e8cfbba74"],["/tags/C语言/index.html","8308699a6d460e8bb164c262129c1a68"],["/tags/C语言/page/2/index.html","11fec31cdaa1dcfa09040f92967e5d0b"],["/tags/C语言/page/3/index.html","63bc1f0dc2c7846934fa892a453d6ad0"],["/tags/C语言经典100题/index.html","ea6d14b08bbe844dcb3bb93e91f3b0bd"],["/tags/index.html","8587a7436c2d689ebfc9e09ab5790b7c"],["/tags/图床/index.html","51f11cc90477908d0025dc2703774898"],["/tags/计算机基础/index.html","5ccf4c62e9eaa1d503916c78fdc6356e"]];
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
