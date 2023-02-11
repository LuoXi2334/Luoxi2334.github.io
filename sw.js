/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","baf922db6b3cfa89106129dea450d171"],["/2022/11/03/NOnote/1/index.html","38837f4c02fbfe4752e096c66243a0ce"],["/2022/11/10/NOnote/2/index.html","688be4fb208f56f5e6f2192884efb77d"],["/2022/11/10/NOnote/3/index.html","6462a2e5cb206529d7223ba45c752246"],["/2022/11/10/NOnote/5/index.html","37142b05ba9431d7c6c2f08a81b2ecf6"],["/2022/11/10/NOnote/8/index.html","c1021d5daee921cf6f1b4424cb3b5e33"],["/2022/11/17/NOnote/4/index.html","7cf1abaa39d8508fe251957502e69c0e"],["/2022/11/17/NOnote/6/index.html","5fbac63ec17822bf50fbcf1d3377268e"],["/2022/11/17/NOnote/7/index.html","2648ea01eed6c34d687439fe7fe8f16c"],["/2022/11/17/NOnote/9/index.html","189f7c277a1de9754fab505779894557"],["/2022/11/24/NOnote/10/index.html","3328d01faad089d9688db8b7237964f9"],["/2022/12/01/DEnot/1/index.html","e85bc66c2bfdea07b70778133f5b161b"],["/2022/12/01/NOnote/11/index.html","e81987f7121a2dda23d34fdaecf0f784"],["/2022/12/10/DEnot/2/index.html","b60475346f2ce7915cb6e435ab5c09db"],["/2022/12/10/DEnot/3/index.html","9e5c0c9bd13d60ca49e8c9a13c99db69"],["/2022/12/12/DEnot/4/index.html","439ec7188c860def72515e4f1525a7ff"],["/2022/12/12/DEnot/5/index.html","d02fe0dee1fb413dcce1b32083a032fe"],["/2022/12/22/CTM/1/index.html","fadbf73c2f960ca49a81f0f640e7c61b"],["/2022/12/22/CTM/2/index.html","65395c6441ff0f81a18b99d8eaf302de"],["/2022/12/22/CTM/3/index.html","ad14cba3f6d9d2c2b58778be80a2f057"],["/2022/12/22/DEnot/6/index.html","e473c8b6e20dfcbb14ee6f22f818bdf4"],["/2022/12/28/CTM/4/index.html","904d73341ab939be69d06760d34b7107"],["/2022/12/29/DEnot/7/index.html","0cf6b9d7a502ebbd43f8d58b8c00c7e6"],["/2022/12/29/DEnot/8/index.html","a479c3aa0af3a621f6b3fcd4f53f7015"],["/2022/12/29/DEnot/9/index.html","d71aa0bc44634d77529545831421137b"],["/2022/12/30/DEnot/10/index.html","9b53012acaa6d89130aadad58c3cdc7f"],["/2023/01/03/2023/Mon/1/index.html","94f5aa8f77c2d56ec63093feca729fb5"],["/2023/01/06/2023/Mon/2/index.html","49a3261af1539f7d04e968e2c883e19e"],["/2023/01/08/2023/Mon/3/index.html","2ab323e184bd5c0f55baa9a652b4abe0"],["/2023/01/09/2023/Mon/4/index.html","78616d7a823bc16f75221e916fe37819"],["/2023/01/19/2023/Mon/5/index.html","61a6efc13e10df66f5845d51f4072045"],["/2023/01/21/2023/Mon/6/index.html","1c96c765d705387a2399e465601a3a43"],["/2023/01/21/2023/Mon/7/index.html","69fa8b1df4fef59169873372105a883f"],["/2023/01/22/2023/Mon/8/index.html","69ee4f220574782cfa0e6c851fa61e49"],["/2023/01/23/2023/Mon/9/index.html","d97ddc6ad29f75340cf8e9676c465b87"],["/2023/01/29/2023/Mon/10/index.html","58c8946dd7770e8bafb31391f469c794"],["/2023/01/30/2023/Mon/11/index.html","d0117ccb1e65bb9cc5c1516906cffd04"],["/2023/01/31/2023/Mon/12/index.html","1e19129972f3f736ed7b4112837f11c1"],["/2023/01/31/2023/Mon/13/index.html","d62d40327f1033678fe52de8e9daaab2"],["/2023/02/06/2023/Feb/1/index.html","f0c4aa22d3c963308fe6edcb03f6499c"],["/2023/02/08/2023/Feb/2/index.html","3e9a1ae314a1110791cc466b07d86028"],["/404.html","229eeb8e1b2255112a161d2006af3b86"],["/about/index.html","ceaad1fea043d048eb69515b252a5511"],["/anzhiyu/random.js","32d553f1a7c1d1264b85c8df63314c88"],["/archives/2022/10/index.html","c87ef45c631ea0847263f2fc8e1ad8e0"],["/archives/2022/11/index.html","340693915bd5e079bbc972945251ece9"],["/archives/2022/12/index.html","fdc2abbc0ad936c0bf58668f0e7b0e87"],["/archives/2022/12/page/2/index.html","3b4547d3eb018952b56e881e9cae4bc1"],["/archives/2022/index.html","b77ae44e69a441abe34411dd4d82ba5d"],["/archives/2022/page/2/index.html","781dc52f8ab2859e5aadcf1b4c76f8b2"],["/archives/2022/page/3/index.html","281c71c372831d44d857b9ff71c72e43"],["/archives/2023/01/index.html","0b0348aec52213f3d4a1e714f339a1f1"],["/archives/2023/01/page/2/index.html","2dd7ba4e86486720d5cbe66bd468016d"],["/archives/2023/02/index.html","4dd82992511c97620bcb8c7099c62b82"],["/archives/2023/index.html","8b49b2e29222e65afdc4923d2c2154e6"],["/archives/2023/page/2/index.html","2a5b5a38c05838200594a987fbbe2f6b"],["/archives/index.html","2b1b4c3204664cb61d90793781442864"],["/archives/page/2/index.html","b262e6bbdf90eaf5657179026bed5d74"],["/archives/page/3/index.html","46086fcd4ca4bf638fef56377eb286ed"],["/archives/page/4/index.html","880e1b333582caecb7cd424695d795e7"],["/archives/page/5/index.html","9f5a3cb7ad638c0479a7c959e25b6f92"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","092b2d543ab845fd78567ee0376815c6"],["/categories/C语言经典100题/index.html","5ba9e869252dccaf89c7693c56ab8ead"],["/categories/c语言/index.html","f82ccb52fbd63b47822fec8a1f9b34ea"],["/categories/c语言/page/2/index.html","a19e6b5a59d520bc5d5ab1223207538c"],["/categories/c语言/page/3/index.html","652391691868013eaf2dbf1cb61c6d89"],["/categories/index.html","4a9762446267e127c8bb571107f069ee"],["/categories/经验分享/index.html","674971bd7c5a13bae469268121d20d6a"],["/categories/计算机基础/index.html","03a148462447718c86cc8a2103447faa"],["/comments/index.html","abcaa51aca96e854fc11b04b3cf4d465"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","07efd504d9a2af1cbc2cefad47b0837d"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","fc2be104f7b48c0cd6bbf24d8379b42e"],["/link/index.html","94eb3cf170c904b4f44347df2e3cb941"],["/page/2/index.html","078cfff879cc9f1d26f5c80228adea93"],["/page/3/index.html","d6125851141266dd858e47dee128003c"],["/page/4/index.html","28b6a62cab010a6f6e32428a79cf9a22"],["/sw-register.js","66cd03fee1ab046d5346f8b5da4d533b"],["/tags/C/index.html","d545cdf310089536b565f012bd1af576"],["/tags/C语言/index.html","25964ab8518b358213c3f5f6338f247c"],["/tags/C语言/page/2/index.html","a6aad85bd4e43a8532cf9bd184cb745d"],["/tags/C语言/page/3/index.html","267a61f72174521aaca05cb43fae5648"],["/tags/C语言经典100题/index.html","31990010620c820c1afbfca52f3d14fc"],["/tags/index.html","f4230be22d6faf6b9caac3773625f534"],["/tags/图床/index.html","0fd101b280a18637047a0105164253fa"],["/tags/类和对象/index.html","d2bcba1813ab23e80e58c951fa740afc"],["/tags/计算机基础/index.html","0c4f6a689e3695457ce4a63aef8cbcd2"]];
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
