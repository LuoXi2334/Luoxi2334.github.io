/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","8288fdda25cd8d9ed55dd42dfb2ccc92"],["/2022/11/03/NOnote/1/index.html","8912d1d2d53a508d59f3b6483838b21f"],["/2022/11/10/NOnote/2/index.html","15ce2237a43c161230505b4aaeadccb3"],["/2022/11/10/NOnote/3/index.html","0d95e527758aa71c51d784316ac8a22f"],["/2022/11/10/NOnote/5/index.html","0a062d62c41ceda92478ae705ea0c054"],["/2022/11/10/NOnote/8/index.html","3dd80095da8a725476cff5a5f8a181a1"],["/2022/11/17/NOnote/4/index.html","4be003cc59eee2151c5423d192f5af6d"],["/2022/11/17/NOnote/6/index.html","aa2f5425137a343961b7754f6e2b6380"],["/2022/11/17/NOnote/7/index.html","88575aeba93846e311ac38251924fa54"],["/2022/11/17/NOnote/9/index.html","f0096b86eb4c702c5362a662daee8b10"],["/2022/11/24/NOnote/10/index.html","e09a3d4b9ee02d8d287a7fff21e16024"],["/2022/12/01/DEnot/1/index.html","8123d67dcdb572a48d67514ae8d8482c"],["/2022/12/01/NOnote/11/index.html","d60d4d55ea9057916dbf2f8249131d2c"],["/2022/12/10/DEnot/2/index.html","97ae72b2411ed9c6faca28d0933d1a42"],["/2022/12/10/DEnot/3/index.html","0a8b769aa825cfed0b5e31806f24738e"],["/2022/12/12/DEnot/4/index.html","71ee47bfb9537859e0f3b7f96b44e39c"],["/2022/12/12/DEnot/5/index.html","f6a145cf7f0ebe0c3aae40f705fc8f1c"],["/2022/12/22/CTM/1/index.html","5463a22f1271ac6ef219b40aa84ce25c"],["/2022/12/22/CTM/2/index.html","4862357231b7b58a7d647c6ee0de1514"],["/2022/12/22/CTM/3/index.html","8ddbbd2910a57bdcc8636ab6006efb23"],["/2022/12/22/DEnot/6/index.html","f801a15c9a885eebb3c331741db7e114"],["/2022/12/28/CTM/4/index.html","b23c4d473382e51b0b9d1f1299963971"],["/2022/12/29/DEnot/7/index.html","27919726b587523399d9df5116dd3c48"],["/2022/12/29/DEnot/8/index.html","fd77cbc3027da4952458d4839f10b0ce"],["/2022/12/29/DEnot/9/index.html","4dc91df1b9e4b15272d0e045b5e418ef"],["/2022/12/30/DEnot/10/index.html","4975ffcadd262eed8f2648d70520c2ed"],["/2023/01/03/2023/Mon/1/index.html","4198533aa4e4dad743622d785b8d097d"],["/2023/01/06/2023/Mon/2/index.html","c557ad344832623630acb266091a8811"],["/2023/01/08/2023/Mon/3/index.html","394bde7e28242d774333d4fd8db70686"],["/2023/01/09/2023/Mon/4/index.html","c278925dec51cb15824a4d0cd3ff08f0"],["/2023/01/19/2023/Mon/5/index.html","0123d00bd690ac2ad242ea070ea40252"],["/2023/01/21/2023/Mon/6/index.html","0e0553c076a3fd1779373baa214373ec"],["/2023/01/21/2023/Mon/7/index.html","0badf75ffa2f71946245fab4096c906f"],["/2023/01/22/2023/Mon/8/index.html","845d85ce38a9199afd8ee25e46e5206f"],["/2023/01/23/2023/Mon/9/index.html","93267d53f1f632e251071fec85054003"],["/2023/01/29/2023/Mon/10/index.html","22beb80d8993b31edccbe6a32915815f"],["/2023/01/30/2023/Mon/11/index.html","3067e63667ecc0f7d32e1618367eef99"],["/2023/01/31/2023/Mon/12/index.html","44ae030a1b217797aa035cd05a65b59a"],["/2023/01/31/2023/Mon/13/index.html","fa0c977556f4299bbb97390795874743"],["/2023/02/06/2023/Feb/1/index.html","b9369a031a259cff2c0b06bc926a2ee0"],["/2023/02/08/2023/Feb/2/index.html","2b3a65517ce10c0b33c5d884679eb963"],["/2023/06/01/2023/June/1/index.html","5942271adef01cbeb7b740333cffdfce"],["/2023/06/14/2023/June/2/index.html","43633e0111eb68a531772692b31ba99f"],["/2023/07/27/2023/July/1/index.html","2a1aff4c8cad62c2deb1c7a39bff1228"],["/404.html","e790e2253cc4764a1de7f3bc1ba07b18"],["/about/index.html","b5a9a61ea1980d0e0b1cf9c0f34a5f40"],["/anzhiyu/random.js","c4f2d1a2b775f4472ac6f98f49823d51"],["/archives/2022/10/index.html","6d5ada5a32f3b7b2fc458c16b3b57ffe"],["/archives/2022/11/index.html","07723b4f17b4982f5c6cf1e57ec8886e"],["/archives/2022/12/index.html","c8f0096427ce51af6183a6de4c58934a"],["/archives/2022/12/page/2/index.html","90d9e5fcbbd65a6e54556d2735ae5c92"],["/archives/2022/index.html","50908a869298d4fed1f22022678495ad"],["/archives/2022/page/2/index.html","8737b337e5497bee33a53fb3d98ee65c"],["/archives/2022/page/3/index.html","32e84f7c97d94e508fc9b65fabdc02fb"],["/archives/2023/01/index.html","8bcc10d04d6487d230080462d8718ffb"],["/archives/2023/01/page/2/index.html","a233cd0ba4bde263fa2b5684cc5c4dd7"],["/archives/2023/02/index.html","4a2e70a5e809e93a66191a2af5e02c05"],["/archives/2023/06/index.html","549015ad5a45ea0224315a0a3480b424"],["/archives/2023/07/index.html","2b8f638abcd2bf8997dcc5cae44f40e4"],["/archives/2023/index.html","cf4b8479f06880ed4511d0e5c47b9189"],["/archives/2023/page/2/index.html","5638ca7473694884081e7a8f813355e2"],["/archives/index.html","56a5ea3c19efe4fceecd039b310eceaa"],["/archives/page/2/index.html","3af9e2b6013b51747e9efc88cee524eb"],["/archives/page/3/index.html","d90f5f5d58c6c28348e7a458397407a2"],["/archives/page/4/index.html","bada210469aef6ffbe419301dea5e527"],["/archives/page/5/index.html","a5de19055c8af3a94a42dada7e79a415"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","4f6765fe773a19dff59a582ee712a8a9"],["/categories/C语言经典100题/index.html","95237a5bbbf0b4f25720b344ed0f9ef8"],["/categories/c语言/index.html","f93ec3be287eb8a8afc1eff4575837c0"],["/categories/c语言/page/2/index.html","a2c89e3dbc9341b612fae067c14bde7d"],["/categories/c语言/page/3/index.html","dc78c60eb2478f502b662035d77e4145"],["/categories/index.html","2a8a5563831eea4ec32cfe5e433ce839"],["/categories/经验分享/index.html","0cc7e12ad9d5611a5865f9a417776e47"],["/categories/计算机基础/index.html","db6afbfee445a0e2074fd1812278d21c"],["/comments/index.html","09d2bd14669f976eea4717b6bd6aaf13"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c9a826aaacd02df1d68265cedd13d2fe"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","ff70fe99cf5acf85dadff14acbc46082"],["/link/index.html","1fef0a2950fef1f718d5bbe544fe34eb"],["/page/2/index.html","a206dab52911030db607551aa0a64b99"],["/page/3/index.html","49ea5678a2acc3ad77c0f1a0032bc90a"],["/page/4/index.html","f6aa35f9368c5e5643248c4d534e9bbd"],["/sw-register.js","650cef360ec22bfcc0f9888ee63238c1"],["/tags/C/index.html","53025983cd30de556a839f9cdd77a8cb"],["/tags/C语言/index.html","fec718b8b90c9c9f8eee4455e8dd7661"],["/tags/C语言/page/2/index.html","5e94c3a1d5857b3fb134cba4500e75ec"],["/tags/C语言/page/3/index.html","f1265ccb5d21133055ea741a5e2d74f8"],["/tags/C语言经典100题/index.html","88fb0c0ddfb17b6479e7a073ce006c9b"],["/tags/index.html","890679d614fe2d05aee319e608baa68e"],["/tags/类和对象/index.html","3e47bafb2134e865c1fa65d59dd19eee"],["/tags/经验分享/index.html","f4e08b63dc5cb0396ceaef64d14f7640"],["/tags/计算机基础/index.html","ad8f392469d4e3a0ce9fd4180011be85"]];
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
