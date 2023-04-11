/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","96d83472bc069c85dc3844c3edffa15c"],["/2022/11/03/NOnote/1/index.html","e4cf3c5756777aec57de314a997ae9e1"],["/2022/11/10/NOnote/2/index.html","32bc6b99b9e2130ed2983ff7bf3a7e32"],["/2022/11/10/NOnote/3/index.html","e3320a51cf14fad46620a3e082888956"],["/2022/11/10/NOnote/5/index.html","78849dfeeb1a49890c62f7bac3f92ab8"],["/2022/11/10/NOnote/8/index.html","d0cbc526ded8f76d2b9b2a6885ad0966"],["/2022/11/17/NOnote/4/index.html","0cf6f1e202283067f6f0f43701834580"],["/2022/11/17/NOnote/6/index.html","a7060bbf4c56b9c6ad380a96aa2fadd0"],["/2022/11/17/NOnote/7/index.html","d943a64edcb819a8158894f764c84a43"],["/2022/11/17/NOnote/9/index.html","a773ac6319a539ad74101e9c64ffe988"],["/2022/11/24/NOnote/10/index.html","a5da85f35471a2c508f391cb535a9f72"],["/2022/12/01/DEnot/1/index.html","e45cd11778d68c3c4f11798f7afb6903"],["/2022/12/01/NOnote/11/index.html","3288366077d3268e84261eb1e6082d6a"],["/2022/12/10/DEnot/2/index.html","15514b630e04338d5cd764563c160fd8"],["/2022/12/10/DEnot/3/index.html","d671c19e8cab9424753857d08a11f794"],["/2022/12/12/DEnot/4/index.html","3490c7074a6cf941d74788c9582c2115"],["/2022/12/12/DEnot/5/index.html","599755597ec09e85826ac09e450e3ffe"],["/2022/12/22/CTM/1/index.html","37070ef64041ebef3d5ca47f1c39feee"],["/2022/12/22/CTM/2/index.html","f1342d0f399121b1c5fc060ddddbe02d"],["/2022/12/22/CTM/3/index.html","75a5418383fc484ccdf6104c14b6ad09"],["/2022/12/22/DEnot/6/index.html","ba91bb007e57aa469544d4189778eebd"],["/2022/12/28/CTM/4/index.html","1e587328074fcbf6395d9eae0c867795"],["/2022/12/29/DEnot/7/index.html","cf750bc247b7e0d3f94dc4c5f541fff4"],["/2022/12/29/DEnot/8/index.html","293e623bf6e93bfcc64badcfc867119d"],["/2022/12/29/DEnot/9/index.html","92e58e4648b254e90330e0c232543835"],["/2022/12/30/DEnot/10/index.html","038728db396f26e7e943fe3c8800e475"],["/2023/01/03/2023/Mon/1/index.html","8ea1bdb961a2931e88fe9af864f9fbf9"],["/2023/01/06/2023/Mon/2/index.html","09381ee8ddd69e07af1396ae180872bd"],["/2023/01/08/2023/Mon/3/index.html","f35d1c4a1fab662f954d20b4c678312a"],["/2023/01/09/2023/Mon/4/index.html","b96474438f4638ce403065b8fd8cc63d"],["/2023/01/19/2023/Mon/5/index.html","b76b8c55496d7a91555719a1b697cb04"],["/2023/01/21/2023/Mon/6/index.html","c131474664456d572c438e2647dc1533"],["/2023/01/21/2023/Mon/7/index.html","36c461730e87e998eb24c52f433cfd83"],["/2023/01/22/2023/Mon/8/index.html","9fe6d5959b15f1a5742fca7297e0e231"],["/2023/01/23/2023/Mon/9/index.html","461ccff2f6fd0c955cacf5c550ae5864"],["/2023/01/29/2023/Mon/10/index.html","f5251ca260d3a62da6b5cdfca8c1afcf"],["/2023/01/30/2023/Mon/11/index.html","7b2154e68813939165aa24502b55c612"],["/2023/01/31/2023/Mon/12/index.html","f8aa2687c89d64bfe722e539297ef919"],["/2023/01/31/2023/Mon/13/index.html","8b92f8e812a99b057b451762019675aa"],["/2023/02/06/2023/Feb/1/index.html","51b47e5599d9464d5df16bf7850480fa"],["/2023/02/08/2023/Feb/2/index.html","8e80d2317166c833aaeef5a972f4a08e"],["/404.html","ba0daa3edea3b84561e45cab26384804"],["/about/index.html","852edd65019df16a5c886343da99a06f"],["/anzhiyu/random.js","39b3379f9c55b382a96bf8b3fa05fc77"],["/archives/2022/10/index.html","ed7e82e99a8e9369d737165cc2e2c001"],["/archives/2022/11/index.html","ed0d61a89ff79c2812795e4a76140907"],["/archives/2022/12/index.html","60a9b846d3e03c332aa4abb2b423fb4a"],["/archives/2022/12/page/2/index.html","16457dfdf05c7f09e88ab1379ef5e2f5"],["/archives/2022/index.html","a61d193263226ba0c302b6ac6fe63745"],["/archives/2022/page/2/index.html","7eb01422987238825301b34fd74828e0"],["/archives/2022/page/3/index.html","81b43b57d5b2ee7923298d27f365368e"],["/archives/2023/01/index.html","99a05de1b03cb703fbcaa048c1de5668"],["/archives/2023/01/page/2/index.html","65b4a6336e002650b46025007afc096a"],["/archives/2023/02/index.html","537137f88fbe670e4bb7591627470cc6"],["/archives/2023/index.html","eeb2f6361f54878312939d39cf5be7fa"],["/archives/2023/page/2/index.html","e1901c56c447a73f5b472920fc28d2e2"],["/archives/index.html","26fd6f82d02988ff8ab38c8f5b63a71f"],["/archives/page/2/index.html","9a87280b906e9ff1d98d888095391bb9"],["/archives/page/3/index.html","af4acc34a3610f78e7bb5a3c39096034"],["/archives/page/4/index.html","11c89cd07a9be0bb070302d072cc5c5f"],["/archives/page/5/index.html","2da721c3bb4e190a14eaa7534c0754ac"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","69c60b8a396339c32d1bafc79655ccd4"],["/categories/C语言经典100题/index.html","82016cb783183669c18c16af793e2520"],["/categories/c语言/index.html","7db3c1c82c7f608a06420a670b12dceb"],["/categories/c语言/page/2/index.html","17b769b5f2d335e225dcdd7327c25043"],["/categories/c语言/page/3/index.html","9a0932d34e0b395ee574f93b23ed5e29"],["/categories/index.html","936db2360521ba2d662a98091750e97a"],["/categories/经验分享/index.html","2f0d68cddada81b0181487cceeb25716"],["/categories/计算机基础/index.html","73b7ad0e50ae374a4f0fce35b94df8c9"],["/comments/index.html","4f4c8d50e63c42ecc206521907dd7ff4"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","67a5add396834a5456db1624ebd40033"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","e459e095c9391dc19d35434c0d74a5cd"],["/link/index.html","9a835a52ee9eb7c37a4fa941330a6599"],["/page/2/index.html","eb0642e7ad535d21cccd59d884cf8578"],["/page/3/index.html","f18094fb689c39841d108c670144a986"],["/page/4/index.html","6afa2334b421f46deb9dcc66e528527d"],["/sw-register.js","c40f58e48191579a04806ac41c18951f"],["/tags/C/index.html","12c034ccce0a153735c3d8caa1765297"],["/tags/C语言/index.html","efd7770864d110deb4319ed9ea598891"],["/tags/C语言/page/2/index.html","c2e2a069bd2e8be68399ed1912117777"],["/tags/C语言/page/3/index.html","3f2e6664e711d9c3f9fa3874516a1236"],["/tags/C语言经典100题/index.html","f06c44fec42ff690b8b67d23cef7a49e"],["/tags/index.html","fea0a896e45acc81a93777ae2b7212e3"],["/tags/图床/index.html","0a27bfdfa6eb8207679b5bd35fb0a629"],["/tags/类和对象/index.html","a67cf792808b831bcb12cfe319c0540c"],["/tags/计算机基础/index.html","e8c247c41e5d4b5f7debb69d051ab606"]];
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
