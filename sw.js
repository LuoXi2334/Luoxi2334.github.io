/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","24183b748f8945afbb7d773ed2cc6fba"],["/2022/11/03/NOnote/1/index.html","6f18e4e507bad15cf12204cff7fdd4a3"],["/2022/11/10/NOnote/2/index.html","2dcded959329563f7058bbccb364b09b"],["/2022/11/10/NOnote/3/index.html","78c17c268a8dd7980a9ce6a870fa5bf8"],["/2022/11/10/NOnote/5/index.html","b7a65df99d9508bd5cc2a88aec149e76"],["/2022/11/10/NOnote/8/index.html","f40e64b87d975782373264798200cdc5"],["/2022/11/17/NOnote/4/index.html","d34bad29065dd3d8013f169627f21f2a"],["/2022/11/17/NOnote/6/index.html","07019f223cc737421b0ec0eb754885f4"],["/2022/11/17/NOnote/7/index.html","cb4775665560f1a2e13e089b110af7af"],["/2022/11/17/NOnote/9/index.html","0440e90e3eed59dc55c2685ee127323f"],["/2022/11/24/NOnote/10/index.html","ad0d6ccc9c43bfc955e468c1e75e5471"],["/2022/12/01/DEnot/1/index.html","91877528a96b6a011a39588d8d28a421"],["/2022/12/01/NOnote/11/index.html","34fd9e6bde79083456f39422adbc290e"],["/2022/12/10/DEnot/2/index.html","db74ea2617dbeac20127778b2ccb9398"],["/2022/12/10/DEnot/3/index.html","12991fef1f84bbac4c4de8a21f0812c2"],["/2022/12/12/DEnot/4/index.html","359d1bb976e6a1743ebf9ebe0c4e8650"],["/2022/12/12/DEnot/5/index.html","6975a6d87cc9e4699e02835282f13344"],["/2022/12/22/CTM/1/index.html","0c072980a8d5b6b9b09c93afe2644114"],["/2022/12/22/CTM/2/index.html","987c17c5d1314ac75455dac48912ebeb"],["/2022/12/22/CTM/3/index.html","5a695c6f794e0cf609dff7ddba202fb5"],["/2022/12/22/DEnot/6/index.html","338a44fd8610b955244f1b5719d0f2b7"],["/2022/12/28/CTM/4/index.html","a81e0ef2007e91cc456bc069130d0027"],["/2022/12/29/DEnot/7/index.html","1f242a136bfbe7d711c6c9e5744cbfd0"],["/2022/12/29/DEnot/8/index.html","f421d3aed33f67cd2e318cf0c551fc28"],["/2022/12/29/DEnot/9/index.html","0b4a341424024a3df7d67d14fc4585de"],["/2022/12/30/DEnot/10/index.html","87913b4d04ad0b166e90c5fe9982c349"],["/2023/01/03/2023/Mon/1/index.html","61a510dd2d87813dd2248e36a9ab75c4"],["/2023/01/06/2023/Mon/2/index.html","7051cf7dce76169c619161b7f7bdbdac"],["/2023/01/08/2023/Mon/3/index.html","b7593fcde9f6e08dea7993d0f59664e2"],["/2023/01/09/2023/Mon/4/index.html","995028b0bf2958802b6daef345cc5c75"],["/2023/01/19/2023/Mon/5/index.html","c5d589a79741553c905a6ac8813234bc"],["/2023/01/21/2023/Mon/6/index.html","d51654963f2219ba0751cb90846ef49f"],["/2023/01/21/2023/Mon/7/index.html","e4dce629840d0f0cce9633863e0a63be"],["/2023/01/22/2023/Mon/8/index.html","07fefb16ec0ebeead4fd89a601e1ea01"],["/2023/01/23/2023/Mon/9/index.html","d410ccc601c8d997f63078944346bb49"],["/2023/01/29/2023/Mon/10/index.html","716de7be6878c3978def4344b2fe784d"],["/2023/01/30/2023/Mon/11/index.html","567cf94421d9f1a9e90e18bdaae8f80a"],["/2023/01/31/2023/Mon/12/index.html","db7bd8ab4eabc01ecbebe2ae0d176070"],["/2023/01/31/2023/Mon/13/index.html","41d893e92e178c73f812ae541951b3b6"],["/2023/02/06/2023/Feb/1/index.html","796e485473127ad68b541ea34992ec68"],["/404.html","95baf3ef2a0b00e2427dec1710b17116"],["/about/index.html","a917ac405eb54c4800c3987cfcc67238"],["/anzhiyu/random.js","fd86eb920311286b209ab00ffd3f2003"],["/archives/2022/10/index.html","40bdf9eb1126d26e3ce0946a9ac45b70"],["/archives/2022/11/index.html","35817e3a84aa88911358f65ae57687dc"],["/archives/2022/12/index.html","7a2f3fea8b31854bbc864e1d774e4d85"],["/archives/2022/12/page/2/index.html","fba608ac6828e1859f28e9e8fecaf3aa"],["/archives/2022/index.html","ef8ffe06603f806e64b76413b65080af"],["/archives/2022/page/2/index.html","8f017d68de1b0bcf2430310374077db3"],["/archives/2022/page/3/index.html","9401aa2ac9fa4ee462eca639e1189094"],["/archives/2023/01/index.html","4f57d3f7f6ab49a36adac9012560f856"],["/archives/2023/01/page/2/index.html","6651ccab8fc6374b3a0a0e5bf786ac1d"],["/archives/2023/02/index.html","4de04a0efe6ea7718ae4aaf5de9d3233"],["/archives/2023/index.html","f6f2b5d6f04c9382fe8921d267c41521"],["/archives/2023/page/2/index.html","d7a53b439b697d6fd7438d44833214df"],["/archives/index.html","90f5440f82e05dc4a0cff2c7f44da459"],["/archives/page/2/index.html","27bc8684a0d570dcf7ec8be5f7c63ddc"],["/archives/page/3/index.html","dc681aba43f41d6c0d709a55a857385a"],["/archives/page/4/index.html","670d028382dace9b1e78383be81559ab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","4afc8a52a74ee36ab49a5ba95033fa6d"],["/categories/C语言经典100题/index.html","aef763a5536bc212c871273218c08df2"],["/categories/c语言/index.html","33723a46b899f2e32dcb3583e77a2688"],["/categories/c语言/page/2/index.html","152f7fe2bc510a4724d35d079d7f622a"],["/categories/c语言/page/3/index.html","57538a29e49571bf957d64e853e52a62"],["/categories/index.html","dfdc051485be2585c3b2d37c659cbf99"],["/categories/经验分享/index.html","e92539fa305ef2c6c71b709e236d710f"],["/categories/计算机基础/index.html","11dbbe9964cd089934ba826846cd2c92"],["/comments/index.html","fe9520c8e7d58e81f11f7b1ebf12b176"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0b24f2bf9b54039c9e813ac1050444f0"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","eb5b6997127d08066dc3929c5a1f34f1"],["/link/index.html","394ad6bf18affb7a549f656655b7cb2a"],["/page/2/index.html","66bc49be7764bc978ccd004af90e822e"],["/page/3/index.html","0eff9c03a9a39c8fd8ce3d048c1dea63"],["/page/4/index.html","cf9facd258ae1d901969083d609d06f5"],["/sw-register.js","3a1b3ff3828db924e85a634b2da0c5fa"],["/tags/C/index.html","882e361b6cba230905f39e9ac8b3c765"],["/tags/C语言/index.html","5bd038e6a7fb2d3009f161bbed5762b6"],["/tags/C语言/page/2/index.html","78228c90e7b39983735ac058067c6eac"],["/tags/C语言/page/3/index.html","c245abad4f40c3e9f7645501f005e202"],["/tags/C语言经典100题/index.html","9bb10c3792172b793c8be3a706ae0104"],["/tags/index.html","e9776df2b8b025f0f84bf21f853b66b8"],["/tags/图床/index.html","f7f8785b0316c04bb9c64feea239f892"],["/tags/类和对象/index.html","172d22da50428b3a7d9dda8f364416af"],["/tags/计算机基础/index.html","014073a81f8e1cff424078d0224cf73e"]];
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
