/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","92d0b0ae008916729e1ac59a64933004"],["/2022/11/03/NOnote/1/index.html","c6e5243d9f9d9a2193a0f2769ffade3d"],["/2022/11/10/NOnote/2/index.html","13002918846ff067f3ac7fc15b813603"],["/2022/11/10/NOnote/3/index.html","b1d49a35e9f7536eb0b95c92477bb07d"],["/2022/11/10/NOnote/5/index.html","11587be0f9671b83e033d53d3d89245b"],["/2022/11/10/NOnote/8/index.html","2f21bad6c4ea4dbf51539181e7b8ba56"],["/2022/11/17/NOnote/4/index.html","596c1105d95af83ad71c49720e7d9c6d"],["/2022/11/17/NOnote/6/index.html","d882a9bb39f19bfcf0dbb315d1d63990"],["/2022/11/17/NOnote/7/index.html","3f371468fb638e212c6db8f5340ff8d9"],["/2022/11/17/NOnote/9/index.html","3cc2d396c79a8ff623e40266b91826d1"],["/2022/11/24/NOnote/10/index.html","f5127d4066b2b7b7a91d769dcfcc8daa"],["/2022/12/01/DEnot/1/index.html","9826067276d9e067ff305e1c2c8b7215"],["/2022/12/01/NOnote/11/index.html","13803434bd01b21e20fb79485ba5eb1a"],["/2022/12/10/DEnot/2/index.html","9162d00232e3aca20284947dd9417136"],["/2022/12/10/DEnot/3/index.html","edaa07d7770bc36ab12669d0d59df5d1"],["/2022/12/12/DEnot/4/index.html","686ba4c37c3bdaef0c1de96757960f93"],["/2022/12/12/DEnot/5/index.html","920487fbd997c28db798491ad6563689"],["/2022/12/22/CTM/1/index.html","34d2be8f34449c2c143a1a46daac711c"],["/2022/12/22/CTM/2/index.html","7ccbaf9ef6f7d9e0064025633694d472"],["/2022/12/22/CTM/3/index.html","540253d06b28916a92784233f588a530"],["/2022/12/22/DEnot/6/index.html","2581365ed56fcaa9d78b476e3617a84c"],["/2022/12/28/CTM/4/index.html","94fa63631968206e64eab2769fd75175"],["/2022/12/29/DEnot/7/index.html","6c1c956b938a112c05cfac1a61c1a34e"],["/2022/12/29/DEnot/8/index.html","8016885f2c801b7a23ac1b330160150f"],["/2022/12/29/DEnot/9/index.html","94342fda96fe7aca9c4f7e5c8e07c235"],["/2022/12/30/DEnot/10/index.html","c044c7dc8b76f4bbe913c2e8976a35a3"],["/2023/01/03/2023/Mon/1/index.html","92dd9e2f2adfb0449e057bfa0a2d68e5"],["/2023/01/06/2023/Mon/2/index.html","6d7ab748e48c0e543b72ceb71b25eaf0"],["/2023/01/08/2023/Mon/3/index.html","681fa72f7efd94ee78b323aaf8082717"],["/2023/01/09/2023/Mon/4/index.html","05420ddafbf809c3e8370b36a1f1b7cc"],["/2023/01/19/2023/Mon/5/index.html","c6f2781ceb841e121088865686e2c9e4"],["/2023/01/21/2023/Mon/6/index.html","e21ae813f389179bffe44ecdc3c15938"],["/2023/01/21/2023/Mon/7/index.html","95867b55ae30a5d35b9572133bfef931"],["/2023/01/22/2023/Mon/8/index.html","ec7ad46f2fbfc1043f3e9e057fa39cfb"],["/2023/01/23/2023/Mon/9/index.html","6ba70a0a82a9f321c6d144924a894956"],["/2023/01/29/2023/Mon/10/index.html","b98e12859976e3a651a5ccd2cd9a3762"],["/2023/01/30/2023/Mon/11/index.html","18377afa7c50dcf6a143030ea2c3ef89"],["/2023/01/31/2023/Mon/12/index.html","9d934ecf252a99419f8773970861507e"],["/2023/01/31/2023/Mon/13/index.html","1b0cbc5c94d97d9288e84e0728c275c9"],["/2023/02/06/2023/Feb/1/index.html","699ae75be9e03560a409cdd1c66bf2d2"],["/2023/02/08/2023/Feb/2/index.html","b5773bcfb05f8f8270677c7a0c063749"],["/404.html","f756464bd62f0a0cabfd79644989ba03"],["/about/index.html","8424d9790407c12f905ce0893a07a01d"],["/anzhiyu/random.js","d21a0900bc2dd7bdfad6add14e09de2f"],["/archives/2022/10/index.html","de272cd19ce2ffb4fbeeb06c552ec172"],["/archives/2022/11/index.html","a3d1aff49f14497370d95d4689cb276e"],["/archives/2022/12/index.html","b02717efd33e2735a5c883c9d5e63475"],["/archives/2022/12/page/2/index.html","c38765944747942ab373bb71f32995c4"],["/archives/2022/index.html","789c66b3a83f52b75073bb8fa84b4eee"],["/archives/2022/page/2/index.html","00f1204979f3fe1999e7767432c9ab01"],["/archives/2022/page/3/index.html","0827468cfb4783061c08288d69943c17"],["/archives/2023/01/index.html","94ac7451cb6e6b2230e99d7a18b81e4d"],["/archives/2023/01/page/2/index.html","b5d6bc39cc68c32c95e359f5b8fe7c7f"],["/archives/2023/02/index.html","306cabbe034a7fc918b5025b71b0b3d6"],["/archives/2023/index.html","9b82954082b12276e3767a09b3bf085d"],["/archives/2023/page/2/index.html","043a5c7192b2e05503693d2e9d4e5a47"],["/archives/index.html","e7bb9b451d0958e46265f37ad402dd20"],["/archives/page/2/index.html","c8f0667368c1bb2d54592ae5c222f6e5"],["/archives/page/3/index.html","8a7a8db5ceecc3ef06fd5b88a4297274"],["/archives/page/4/index.html","56fd3c9ebdaa6dc843536881026bc911"],["/archives/page/5/index.html","e3bcd5f9e7b22f880e90759fef08cee0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","8ce5173fbd711e28fa5abba7cc12bdc8"],["/categories/C语言经典100题/index.html","8318e94d24b84d3cccda2fd115e110ce"],["/categories/c语言/index.html","a51ce4371f5c66452fc62a62a8cf48eb"],["/categories/c语言/page/2/index.html","4249c84dab81817b4322646e08fd4c81"],["/categories/c语言/page/3/index.html","a580217cc20af8b48cbc38560326229d"],["/categories/index.html","d0e50afce4bd1f32861df00adc869014"],["/categories/经验分享/index.html","4ea5524ff4d7ae4a18a5fe275faafaf1"],["/categories/计算机基础/index.html","c537e4e9b83e56bb908372ba2988d55b"],["/comments/index.html","c33b0265862824cda959f91363123b79"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","92a07fa6388e0a4f634fcd42bd3e954e"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","777c6dde89fd205de375ead1b731de72"],["/link/index.html","bbbd85c0f7cc15d059b6e0afe4f4d7c8"],["/page/2/index.html","ac7ad8950e4c40e4771d91e376d5808f"],["/page/3/index.html","819a7ca4ac8b775e08b81e69c720c800"],["/page/4/index.html","2baada59a050588eb663339d0a5be149"],["/sw-register.js","e035b5a6999b31775ad54df5a80deb3d"],["/tags/C/index.html","c33d18d3714bc1d65a95dab8a5db726a"],["/tags/C语言/index.html","2022e8e72a49ee81f407ff1300a5d7fb"],["/tags/C语言/page/2/index.html","afea8fe9c1363c76727ce258f8f58089"],["/tags/C语言/page/3/index.html","0373c2a97fd541acaf3d7b94f72e4e38"],["/tags/C语言经典100题/index.html","1f6f1a32231d7a04b983f1842aeb5c30"],["/tags/index.html","cf9cc69ad1fc7c6d0f034d28297218cf"],["/tags/图床/index.html","39f70c8488219bf31734b206a7f63580"],["/tags/类和对象/index.html","7548e7993a8b0486858d04c70472e5f3"],["/tags/计算机基础/index.html","90fc25b8f0c7251413d69d09047a39bd"]];
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
