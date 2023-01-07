/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","2e2716ccc713bdfddfb4bfa67146d4cd"],["/2022/11/19/NOnote/2/index.html","72810c8c39d8f9e74c560e51571b377d"],["/2022/11/19/NOnote/3/index.html","2b10bef347c5e33f36a51652fa06ffa4"],["/2022/11/19/NOnote/4/index.html","86e55c9130df1f8ac4fc1c9f5ebc53bf"],["/2022/11/19/NOnote/5/index.html","ab775f924dedd0aaccb395936044422b"],["/2022/11/19/NOnote/6/index.html","b4ff12c26a4448549972106bf5c1a7ca"],["/2022/11/19/NOnote/7/index.html","8880bc0e344eb1e2fb287f276a655d41"],["/2022/11/19/NOnote/8/index.html","984665c83bb01349e46d91eb0120a658"],["/2022/11/19/NOnote/9/index.html","372ef09265ef0ceac1a92d6467e0614b"],["/2022/11/19/OCnote/1/index.html","a4e16a91262ec7dc56b48675295e9ab5"],["/2022/11/24/NOnote/10/index.html","f76c730a70c71b3a724854266079a105"],["/2022/12/01/DEnot/1/index.html","dd29a76b9aef8afc764b06a10b70d052"],["/2022/12/01/NOnote/11/index.html","91e1f95624d4e799d2b4b730c3c3c8d3"],["/2022/12/10/DEnot/2/index.html","f681e71945b337012aef9ea89f8b5d15"],["/2022/12/10/DEnot/3/index.html","f8a279fc8ec4e7bb863ea1d2110f7501"],["/2022/12/12/DEnot/4/index.html","a15fcc4c49d0d5d0e7d1a076164d3c9d"],["/2022/12/12/DEnot/5/index.html","4dce00f709f83a40bf4bfebae00127db"],["/2022/12/22/CTM/1/index.html","595be194c53fb8a7f376eb6eb1f4415e"],["/2022/12/22/CTM/2/index.html","e515430ac33ab3e5f01ca9e4558a931d"],["/2022/12/22/CTM/3/index.html","14eb38037a060d69e2aef57f768deba5"],["/2022/12/22/DEnot/6/index.html","3ab53eb173a0d3483471051e6387b62e"],["/2022/12/28/CTM/4/index.html","e61dec55f4b75edbf861c582b0085a74"],["/2022/12/29/DEnot/7/index.html","4dc522e29a31957c38312467b9aabea6"],["/2022/12/29/DEnot/8/index.html","0d2f20d26c28fe9a9665d7f8b7c7f49c"],["/2022/12/29/DEnot/9/index.html","77d1d2d4c6fbf7e0b5a25d5877dda5f6"],["/2022/12/30/DEnot/10/index.html","1cf5d347ca76f05a2f18841a3d698b1a"],["/2023/01/03/2023/Mon/1/index.html","f6ba45a70ae94e999c29b1ccf2e0f83b"],["/2023/01/03/2023/Mon/2/index.html","bb39db801c041c874a545c9b98d6980b"],["/404.html","452ac7fa59fc709b3461f873539f734b"],["/about/index.html","4637a0a7c843bbc7be2061c7b31cf5d1"],["/anzhiyu/random.js","e01c2c936e97a01b79777006717786b2"],["/archives/2022/11/index.html","fba63e8266a91bc6f04f0bb0c98a79da"],["/archives/2022/11/page/2/index.html","d152bb1878d682a5bad6a4670748397f"],["/archives/2022/12/index.html","4b215d72b7d40ef3fd4c86484a5c950e"],["/archives/2022/12/page/2/index.html","1c0c004ce63d5848bc40062ced8fac8f"],["/archives/2022/index.html","6bf9af5dc8922bdaf15b0ac20cd573ab"],["/archives/2022/page/2/index.html","1c9b3e823c601f4b37b791b75a51ae0c"],["/archives/2022/page/3/index.html","1d24c3424590a6cd3686a43050f10fb0"],["/archives/2023/01/index.html","d3f0d3087d5046cf998d834704afed99"],["/archives/2023/index.html","02e02f2cd7f49b14bf2a396458d703eb"],["/archives/index.html","2fb98a30f6a4bc59d7b5a7cfd8554703"],["/archives/page/2/index.html","031be16260bfcdbed5e974dcff6fe67c"],["/archives/page/3/index.html","f0a97854fa407a25eb4a5821bd54cebc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","9ccc13843571440cff10023838bea614"],["/categories/c语言/index.html","3050e2164fc5347a5c94c307ee410814"],["/categories/c语言/page/2/index.html","fb5b9a2cec1143646d9535323be5c7b1"],["/categories/c语言/page/3/index.html","a88b408f6341725a393f0621d2be54b6"],["/categories/index.html","9b60cac92e9a73c00cbbf230330bcdd1"],["/categories/经验分享/index.html","4f24b3c3b6ceea93df019eb2084e259a"],["/categories/计算机基础/index.html","4f0524614394449a2021f8fba53ef2e4"],["/comments/index.html","346db96417de68268676d6b187a75d1d"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","814ff0a1850c7704e76e16fc9aeb4567"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","3499d55a25ec24db5273fe3e542a4a53"],["/link/index.html","6a6dbf463f5f1420b3f9160e61a3c5e6"],["/page/2/index.html","1065c7664a34dd2aca53524a30742e4b"],["/page/3/index.html","7a7d89cef40a60394a6a515261bf0c29"],["/sw-register.js","34901942f8f73f7d827944f9cda3de0c"],["/tags/C语言/index.html","1f01ac5b5d1ef9d42fc82209f227f562"],["/tags/C语言/page/2/index.html","ac2f895a9ce127e6dd82fff9623f2da0"],["/tags/C语言/page/3/index.html","d5a5a3093e4bd7ae6ff70b180f9f2661"],["/tags/C语言经典100题/index.html","1257b915d9c5f351b610dac306c4a420"],["/tags/index.html","caea8dac469a689a91b811922b60ac36"],["/tags/图床/index.html","dc02ba385c7f164d44ac2bf6f022fa1b"],["/tags/计算机基础/index.html","30363df563a6dcd24420db8ab58fc50f"]];
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
