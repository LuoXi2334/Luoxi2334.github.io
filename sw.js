/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","6469566de62ba9040464f8de4fa68a3a"],["/2022/11/03/NOnote/1/index.html","ce1e84719fe1def7e2b43cfdc17367b3"],["/2022/11/10/NOnote/2/index.html","9c76d7d5ec7e2655f872ba29e6b0e07e"],["/2022/11/10/NOnote/3/index.html","4554640d2e9a8c8c00ce60ba23533905"],["/2022/11/10/NOnote/5/index.html","c8657d46d84d9082f835ae517c7d45c3"],["/2022/11/10/NOnote/8/index.html","7507ec0503fe00f723b3d6c10328b878"],["/2022/11/17/NOnote/4/index.html","e17911eec30a860f97ead6ac5b1d24eb"],["/2022/11/17/NOnote/6/index.html","7e361c6e6967d5a5f4f95cfd82abf581"],["/2022/11/17/NOnote/7/index.html","2c8ccce70334fed7cbb70ced34342638"],["/2022/11/17/NOnote/9/index.html","3d71a18e40fb08fb17fee4a1a6f5f955"],["/2022/11/24/NOnote/10/index.html","66ee3c1f367de1be0f839c5c8d87f64e"],["/2022/12/01/DEnot/1/index.html","8718b0176bb8ff19b7ce7c176d85f19b"],["/2022/12/01/NOnote/11/index.html","fc5b6d07e8c444e658b4be6fa4b8992e"],["/2022/12/10/DEnot/2/index.html","438dd967a2dd361302e2c14158a98369"],["/2022/12/10/DEnot/3/index.html","174dbc3e363ab93b95cd5046687919bf"],["/2022/12/12/DEnot/4/index.html","16e1e44e194a0ae1c9148e1df76f2e32"],["/2022/12/12/DEnot/5/index.html","4b1cab85d201fc6ed5462b714a06e624"],["/2022/12/22/CTM/1/index.html","a1cb7c6a6ff2833201920f0950afabf5"],["/2022/12/22/CTM/2/index.html","cf20b459ecae53f9fc627e9ffe99dc3e"],["/2022/12/22/CTM/3/index.html","1ea385d89d775fbb2edd5ba0eeb2fb63"],["/2022/12/22/DEnot/6/index.html","172e5430324ebd6f2d5f7008ba6782c2"],["/2022/12/28/CTM/4/index.html","b6f2d0b3e5303495195c4127b1d68aa5"],["/2022/12/29/DEnot/7/index.html","74d89a1ede41810db4fb3e1c914f9f2c"],["/2022/12/29/DEnot/8/index.html","1a870a813b268c8368f048f0bb4ba61f"],["/2022/12/29/DEnot/9/index.html","0cedbc46e89ee69d3349aba915591d1e"],["/2022/12/30/DEnot/10/index.html","5f977bf4d817b185c5f59f2ed5d67535"],["/2023/01/03/2023/Mon/1/index.html","dace7ef86336f2ddffdde69401f24b25"],["/2023/01/06/2023/Mon/2/index.html","24ef4dd90e3afa4b0e4653148b4e178c"],["/2023/01/08/2023/Mon/3/index.html","c3b1052441149a8812c50bb801e46487"],["/2023/01/09/2023/Mon/4/index.html","4a631b2b2f7273b31ae4b47b798ea591"],["/2023/01/19/2023/Mon/5/index.html","60daad58652f0ae38b0400d94b026268"],["/2023/01/21/2023/Mon/6/index.html","974cf6ed9ac3fe853372c50f92209a18"],["/2023/01/21/2023/Mon/7/index.html","623799f140b444fdb99ed7a84c094424"],["/2023/01/22/2023/Mon/8/index.html","77a5da48f60848a41ba45489bc637e49"],["/2023/01/23/2023/Mon/9/index.html","4e68a03549e68be10cf5b5e3f7b75e65"],["/2023/01/29/2023/Mon/10/index.html","e0993eae2e55bee9a4dabb90d89d9ca3"],["/2023/01/30/2023/Mon/11/index.html","68aaae72b6e293bc8856ee5fdd684ab2"],["/2023/01/31/2023/Mon/12/index.html","55ee603e451f09aa77bd3e86338d70ce"],["/2023/01/31/2023/Mon/13/index.html","b6663bace4de538eab1e0085e006358e"],["/404.html","da8b946b7ae19b1b51fefdb17ad797e4"],["/about/index.html","d926e4d623bf1c2f22385683656775d9"],["/anzhiyu/random.js","6a808abd550cd0d90580e59ae806ec55"],["/archives/2022/10/index.html","143b285d9e156c5a0fa4905692c91835"],["/archives/2022/11/index.html","7de72104e84141a4d58303cd7910bbca"],["/archives/2022/12/index.html","b6b6782ca877ecad22ffd616f93737c6"],["/archives/2022/12/page/2/index.html","c5d4e8979fd6bbb02c229569fd319892"],["/archives/2022/index.html","86624dab2db63653f93b3dcdd04a2c63"],["/archives/2022/page/2/index.html","e120dd1ab55171c5fcc670fc7f55f25e"],["/archives/2022/page/3/index.html","69ef45958153b0d7b98aee6e7df8e1d1"],["/archives/2023/01/index.html","3374d0f395b20a04be9f4d8f0c2dfd8a"],["/archives/2023/01/page/2/index.html","1fb54c8c818a08de63089a3d0d975a6c"],["/archives/2023/index.html","67e44615f804a31b305a62f287d53523"],["/archives/2023/page/2/index.html","aa9e7a74dbef1f70d83d2feab438d4d2"],["/archives/index.html","b4fcabcd34aebfb0b4b25c3210cf1684"],["/archives/page/2/index.html","7fd4e8671e4e34b5db6dc582450faa92"],["/archives/page/3/index.html","f9e27abb193722e9940ac7d6bcedd298"],["/archives/page/4/index.html","d81264b4ad30f35d9716b7aaf6402c21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","47072169b5a4624763efac2f3499e833"],["/categories/C语言经典100题/index.html","05b9eea11dca829ae6b1b4e3b50d36f9"],["/categories/c语言/index.html","77a45deccfa9ec91680e9509832cf47b"],["/categories/c语言/page/2/index.html","d334e544b803daceb86747bc99927b56"],["/categories/c语言/page/3/index.html","bf4084688fe97d0784988c672d4bd647"],["/categories/index.html","50423e5583b58bf0724dc409f5c45152"],["/categories/经验分享/index.html","c8eebd6bebf770501c90bef8d8a88f42"],["/categories/计算机基础/index.html","bb6f3a62532a97a5f8ecbd75df96446f"],["/comments/index.html","b932522b5f75a16e59a6ca46d09c5060"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","67696f44ee32844c5a496da4a4a5153c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","eaacb444a8bd72c9251252e7976667cb"],["/link/index.html","1ec509cc898dedc167761de3786e04b1"],["/page/2/index.html","5aebc39a3248a3a7d8874a17e1b2226c"],["/page/3/index.html","4965c2a312c0c080c5cf519a57193656"],["/page/4/index.html","8e9e5fee5709f67bcdecf66c72504264"],["/sw-register.js","3947feeae546432c6d555cee585e8c72"],["/tags/C/index.html","c8d37c763b24ec37d6321cf4f8289349"],["/tags/C语言/index.html","825e5a39872209891163aa0a4095a332"],["/tags/C语言/page/2/index.html","b6b5665d98a412687b346cea7b43dc25"],["/tags/C语言/page/3/index.html","6787c41b6974c8198e6b76aef7e92177"],["/tags/C语言经典100题/index.html","4b5d7ae776de00dbc389a39ebb396e6d"],["/tags/index.html","68129844da32432f2d1d9b633b867e72"],["/tags/图床/index.html","318b7967f229aa9a58fd382eef08bf16"],["/tags/类和对象/index.html","d10fb3089198c9076c9e7065dd5cc91b"],["/tags/计算机基础/index.html","177eabd9038d8be48e444068beb737c3"]];
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
