/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","8d13ffc85306ddfe5c7e916b512b5dc1"],["/2022/11/03/NOnote/1/index.html","b6f9f0c95bc313dc0c939cf73d550c3e"],["/2022/11/10/NOnote/2/index.html","d24d5174a4a85d8e5bc74fa469e154b4"],["/2022/11/10/NOnote/3/index.html","9ca8fb9a001a802aae61c07e40c23cf8"],["/2022/11/10/NOnote/5/index.html","6933d4fb9136d8595bd27ef33f36f46f"],["/2022/11/10/NOnote/8/index.html","483dbd28da47777391e711d17d86d3c4"],["/2022/11/17/NOnote/4/index.html","d63484a5f191176624f461271828b3aa"],["/2022/11/17/NOnote/6/index.html","bc19e9d192e7304161e911147f443dc2"],["/2022/11/17/NOnote/7/index.html","4d4584f30da6eefc91b696414508c9e7"],["/2022/11/17/NOnote/9/index.html","99147fbc0d206d336ca734bfd7c6950a"],["/2022/11/24/NOnote/10/index.html","384c452265f018324b6ea551543a6c4e"],["/2022/12/01/DEnot/1/index.html","e3a1de2e48ce17cb4dac3194bbadf3fe"],["/2022/12/01/NOnote/11/index.html","cbd888b1a08f195cd6533ddccd317fbe"],["/2022/12/10/DEnot/2/index.html","ccdb27c890413d58c5e89f5ddabbe95c"],["/2022/12/10/DEnot/3/index.html","f097db22aa4e0bda116be1df6c0b0e4d"],["/2022/12/12/DEnot/4/index.html","92f5a4f733455c2b7041b9cec8baeff1"],["/2022/12/12/DEnot/5/index.html","aa1419f48d0eca502eecc42db3f1bf90"],["/2022/12/22/CTM/1/index.html","c84ec0c14cc4746747937e1316954fd4"],["/2022/12/22/CTM/2/index.html","7baf994647fc2c82b6378f9e69895809"],["/2022/12/22/CTM/3/index.html","5de9c380d26ef3418f1cb353be74e2a2"],["/2022/12/22/DEnot/6/index.html","6b1cefdf8eaab22c2a153df17881fd87"],["/2022/12/28/CTM/4/index.html","d6cdacbc1210fd48b06f9c9d855c8a26"],["/2022/12/29/DEnot/7/index.html","f891f68358ce38d946a9922df6e00362"],["/2022/12/29/DEnot/8/index.html","bd20dcbda878f48e5fa87000a6ed2817"],["/2022/12/29/DEnot/9/index.html","b5329b8c234f579131c03ee5be4d55ff"],["/2022/12/30/DEnot/10/index.html","6eafa4ee587306b867a58994d79ad2b6"],["/2023/01/03/2023/Mon/1/index.html","2063f18deafce52f50bdde2118163ced"],["/2023/01/06/2023/Mon/2/index.html","b8cf63c73fd84844946a11ca42f7b12e"],["/2023/01/08/2023/Mon/3/index.html","a366769495adef14e3bfc06ad24b4dae"],["/2023/01/09/2023/Mon/4/index.html","788b46dc7cc31edeebb2f4ae787ce29f"],["/2023/01/19/2023/Mon/5/index.html","1805bc7f3331109b460eaeffdbeade0b"],["/2023/01/21/2023/Mon/6/index.html","e4d3977a3f466ad7c910fa182291ebe1"],["/2023/01/21/2023/Mon/7/index.html","fd8d18f5ae54103e3493b942e67e61bd"],["/2023/01/22/2023/Mon/8/index.html","be9fd4c12bf87c8213e53395ab816f5d"],["/2023/01/23/2023/Mon/9/index.html","6cf48dd256f3633a695ebd32576d13d0"],["/2023/01/29/2023/Mon/10/index.html","8ac200be8d4eaca8cd9e95d21d724d42"],["/2023/01/30/2023/Mon/11/index.html","392a933c634e79c31b529b44efcadd1e"],["/2023/01/31/2023/Mon/12/index.html","89c424132bd68c277b5d922aa3d61ac6"],["/2023/01/31/2023/Mon/13/index.html","a9ccb169448460bd7e4e35782d0c739c"],["/2023/02/06/2023/Feb/1/index.html","2efcc7426150f33b5037a1308e0785ad"],["/2023/02/08/2023/Feb/2/index.html","bd247b0c6da526ececc482725e83ce6c"],["/2023/06/01/2023/June/1/index.html","39e9831a22e6dcc2f1c8f1537a98641f"],["/404.html","6508b21db79c0289d763a89a5f85e496"],["/about/index.html","877175440bf7bbf5a4f9e4e4aad63ed6"],["/anzhiyu/random.js","2d30d636f1d91cca8d7aab6da3aae287"],["/archives/2022/10/index.html","dfe8e09580dcadfe1f840bc7b9854d2f"],["/archives/2022/11/index.html","ff5f1cb8b29dcff7abe209728cacd5f5"],["/archives/2022/12/index.html","f2bd948a00de5eee2f7f5f4639bd792d"],["/archives/2022/12/page/2/index.html","324b578115ea88c4836e6433dfdf6020"],["/archives/2022/index.html","a0c7912edec0fe1dcaf8aea513ef67a2"],["/archives/2022/page/2/index.html","ee7561853bacaa4cf8e708a8fe4e3d3c"],["/archives/2022/page/3/index.html","d041855818a402a6cd85c93feb3d39b5"],["/archives/2023/01/index.html","016f8ed4dac2561498b2a60adaeedaf4"],["/archives/2023/01/page/2/index.html","b7fd90f965a8be23861fefca909d5e1b"],["/archives/2023/02/index.html","6ac3616648bdde36de4b11765601585e"],["/archives/2023/06/index.html","4b549614ce048431d794208009218c24"],["/archives/2023/index.html","dcc9a13dd02a26d5702564ab7c8c023a"],["/archives/2023/page/2/index.html","4cb07872662cdcd29c64c9932099e25c"],["/archives/index.html","c351d6c40dea2b27c25f893943c74713"],["/archives/page/2/index.html","7e7121759525ba674885170555d6bdf4"],["/archives/page/3/index.html","3cb222ac145f87944851db7569c3bc01"],["/archives/page/4/index.html","8007fd4e5d137f118443c12e00e90c62"],["/archives/page/5/index.html","36f5d5b9d2e820f3396c51d8a88ab5df"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","ccd4573f84c8c343aff8ff22c8b889f2"],["/categories/C语言经典100题/index.html","3030c86f0c32335b5d803cf2199308c1"],["/categories/c语言/index.html","411e8b9f96e58c78375de1ffeef25d65"],["/categories/c语言/page/2/index.html","9d9d35d1a7bf67d494cb2bf02dad265d"],["/categories/c语言/page/3/index.html","b15991672cbe93f318b71438fbeb4f33"],["/categories/index.html","06745bb37e2a40ee8c01263a3978660e"],["/categories/经验分享/index.html","8dd71cb13247449ee910bd543e8fbd17"],["/categories/计算机基础/index.html","2dd12137f0e22d5c37338bb8f7ae2ce7"],["/comments/index.html","13c3211ed6fa745a265273741a276fb8"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c52b13d456fe1eabc57008ad2cfb5f35"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","db9c6e9c3f37c5aaf8e4dad6a25ff527"],["/link/index.html","db4d71ceb32b7f38aed67af6558d9b40"],["/page/2/index.html","fc7ffff77450110fed16f2f10e6aa362"],["/page/3/index.html","eb80975da4341386066ded9cd8cc7194"],["/page/4/index.html","023a8d96a048e20667284726be15594a"],["/sw-register.js","c32cf276edcd46edddde711dd678f130"],["/tags/C/index.html","b374c991a2d58d558b4a849aa56b3235"],["/tags/C语言/index.html","0b058c1ee36fc08b8121461c077176c1"],["/tags/C语言/page/2/index.html","fcd69a8a5e4a7865c95addcfaf465b59"],["/tags/C语言/page/3/index.html","e26fbdb3327041e1df4bcab13bd23852"],["/tags/C语言经典100题/index.html","44554b766683bf10f4a0f3fba04e3473"],["/tags/index.html","e63980c00d20a75ecc5daf81edad9cfc"],["/tags/图床/index.html","b77fd4d8a655da8561976cf5c792ee99"],["/tags/类和对象/index.html","2bd0fe13840ed8d074e5753810c29755"],["/tags/计算机基础/index.html","6e7c601903b34f4fb466db5fd890ccba"]];
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
