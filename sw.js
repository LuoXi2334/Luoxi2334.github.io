/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","c542ef06482295fafa9ecb3ece7cde81"],["/2022/11/03/NOnote/1/index.html","586da90ffec923904c455f4c9be9bee7"],["/2022/11/10/NOnote/2/index.html","412ef2dca7d7a4be25f1c2a5a452a748"],["/2022/11/10/NOnote/3/index.html","5292b04744bf1d2966c5b394dfe7064d"],["/2022/11/10/NOnote/5/index.html","4fbfe4f01fea70dccc928418ea2ee72c"],["/2022/11/10/NOnote/8/index.html","893089c1aa1f1616280a957e7f0fceca"],["/2022/11/17/NOnote/4/index.html","c444428d2c648cebfe695fb4ed2aaf34"],["/2022/11/17/NOnote/6/index.html","e9cfd00b191c388abdc7cf20ac66065b"],["/2022/11/17/NOnote/7/index.html","118028b8637ab53340e56ada54e170b5"],["/2022/11/17/NOnote/9/index.html","9ee39cfdb017f6648acd78cd73caaad7"],["/2022/11/24/NOnote/10/index.html","1af092e6b67915022aa546794a137941"],["/2022/12/01/DEnot/1/index.html","0f4cf0b1b78ad275c6bf68c550d1558d"],["/2022/12/01/NOnote/11/index.html","482b35016cc189e7c2b84adbd47a89d5"],["/2022/12/10/DEnot/2/index.html","cd55d9618185a2c56bc42d1f514bc099"],["/2022/12/10/DEnot/3/index.html","103d41e73216e218daf8907f32ea307f"],["/2022/12/12/DEnot/4/index.html","ed3fd3b85f8225a50b83503118066275"],["/2022/12/12/DEnot/5/index.html","81af8287e3a2bbe9e8d6a85e3807ce26"],["/2022/12/22/CTM/1/index.html","6dddb2e97256047400cb35109ebc4c45"],["/2022/12/22/CTM/2/index.html","8281e46e5cc29f601892888f09988bf9"],["/2022/12/22/CTM/3/index.html","ab1df2cce8179e739f8786e4adf0b4ea"],["/2022/12/22/DEnot/6/index.html","8843e947ec3056cf5bd9518cb783353b"],["/2022/12/28/CTM/4/index.html","42447e198cbb4159cb6e106342f71bce"],["/2022/12/29/DEnot/7/index.html","fd8474425fefaf34f206342feab277a5"],["/2022/12/29/DEnot/8/index.html","ca1ef8bdf56d2f72aa65e8984e683524"],["/2022/12/29/DEnot/9/index.html","74b980e9063b8f134f730ed2f27af025"],["/2022/12/30/DEnot/10/index.html","1bd958252a97ccc47d6a75a748725824"],["/2023/01/03/2023/Mon/1/index.html","0b5d01c165c6f5140c492a783f453932"],["/2023/01/06/2023/Mon/2/index.html","fbcf37f02b0acbe5a9d889939e0673ac"],["/2023/01/08/2023/Mon/3/index.html","f9c8d7f7c8037ac69267bdd15ddedf5c"],["/2023/01/09/2023/Mon/4/index.html","6483827b0b8dc4c6023bd0729090461f"],["/2023/01/19/2023/Mon/5/index.html","5f51b7f829a31a7ec3d30682bdb2b716"],["/2023/01/21/2023/Mon/6/index.html","3241a83a3942ab147d4d22af8f9f652f"],["/2023/01/21/2023/Mon/7/index.html","b691c24239d816b834a6f94ee829d731"],["/2023/01/22/2023/Mon/8/index.html","85baeb055ca1d75a475c9b809f1a321e"],["/2023/01/23/2023/Mon/9/index.html","25034c295daf9d518fe253805a0b21e2"],["/2023/01/29/2023/Mon/10/index.html","4b08b98d9fd0365610ffd2898b5f667f"],["/2023/01/30/2023/Mon/11/index.html","ad3ec8bb46501401817e411a9740bf7c"],["/2023/01/31/2023/Mon/12/index.html","811b19bd5cdf6c853bf59e150df91e14"],["/2023/01/31/2023/Mon/13/index.html","47fb102e7210c58b0a9c676e6173173a"],["/2023/02/06/2023/Feb/1/index.html","ef2ef1d9233cb23130bbc78540a49c5e"],["/2023/02/08/2023/Feb/2/index.html","196305b4fd99a9a15650fcab282bb3c8"],["/2023/06/01/2023/June/1/index.html","d81626c5c1d1fa47bce8b4bb48113af0"],["/404.html","5ef2bdc78fe6b658d2f9295b5c0632e5"],["/about/index.html","5ace82c568d335f09cf48b25bb554fed"],["/anzhiyu/random.js","18b73944e56543642b6df4b61cef87dc"],["/archives/2022/10/index.html","a949e5d6151d1d69ce5e68df0ee22712"],["/archives/2022/11/index.html","9d3a1d88a334b34c0a28c89b9d282bea"],["/archives/2022/12/index.html","16bd631a873770a7ae19c2b1e4c0717d"],["/archives/2022/12/page/2/index.html","f38c9715dabbc3dad273b2241d2879b0"],["/archives/2022/index.html","2d86fd8f808cdc756fbd749339a7bd92"],["/archives/2022/page/2/index.html","43db4eacecd3fa43e9c4c71960b31782"],["/archives/2022/page/3/index.html","694b9325de088865f1c681056935678d"],["/archives/2023/01/index.html","cbe2ed88bcb8cdab5c7959d634e4e6ea"],["/archives/2023/01/page/2/index.html","93cf6e5a1cfdb57df1b73701425f391f"],["/archives/2023/02/index.html","b9acced3ca0ddf2be7ea0792ee72385b"],["/archives/2023/06/index.html","c029f3a831520a893b172121389b4117"],["/archives/2023/index.html","adb4bd17e41d7db27e2c8afecfae9ae2"],["/archives/2023/page/2/index.html","6d0e70fa5b9a960fc0d64d09880632ea"],["/archives/index.html","a6c7102afaa722dcdfbf5bdd4d74278b"],["/archives/page/2/index.html","4665e290f03c5d6a264ecd1bb11bbc76"],["/archives/page/3/index.html","94e4d9794356950fb57fa093333c8505"],["/archives/page/4/index.html","e0f0b217d5e711bc6d2a5cb9b34b2c25"],["/archives/page/5/index.html","0abfd18ab13900ad5e4976094ed2a80c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","c1828ecc78524f67230a9c396c437f40"],["/categories/C语言经典100题/index.html","b60c45a37dd649d62a2e3b3aa358a957"],["/categories/c语言/index.html","7cfefb0e02c1445de460cbd36399890c"],["/categories/c语言/page/2/index.html","24fafa036aa10caad518d9c5e0bac72b"],["/categories/c语言/page/3/index.html","216a76e1fb921a6fb78d312c7f8f9022"],["/categories/index.html","8c0c6e7ef313f29f9af85eea6583a17d"],["/categories/经验分享/index.html","a79a8f982df69c3d633cc2e29431348e"],["/categories/计算机基础/index.html","14546b943e39e0bdfb62ce8b0785b0d8"],["/comments/index.html","8cd60c386ca1cdfdc63d5fccd29dfa6f"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","dd5fbdbb0541638218f5fee70efdc6db"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","bfd88b47a853ae4d048d13a03fbe7eef"],["/link/index.html","116ad36e6433b355fa8089d6ef921fd9"],["/page/2/index.html","88be70aa4143962dfec0c2cbc0a9a133"],["/page/3/index.html","f988ac796fafbf41aeb902ee2bfe8587"],["/page/4/index.html","31f33055b6fae13973ed7fb2cbaf51ce"],["/sw-register.js","c13add21f75d86f9cf2bf0b3bc38a897"],["/tags/C/index.html","4ca0b6006efb3835d456cf48cef99410"],["/tags/C语言/index.html","b00176053a2030128221f962cbc61a45"],["/tags/C语言/page/2/index.html","4f2c86f46db4768bfec3ffd650877689"],["/tags/C语言/page/3/index.html","02ee3835c679ef00199c2bf55753ab0b"],["/tags/C语言经典100题/index.html","e626bc3ae0e01900303df0588809e219"],["/tags/index.html","b308e9153aec7c19b16fb0e2840c7c20"],["/tags/图床/index.html","9ee5099c833717441caaeae96f70e7ed"],["/tags/类和对象/index.html","d575b74aaae25f4dcb5c61022bbd0849"],["/tags/计算机基础/index.html","4e01f8055d06f17756b3bddff8645f96"]];
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
