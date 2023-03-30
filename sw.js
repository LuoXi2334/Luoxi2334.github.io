/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","95b9270fc2b5304989a8166102b0b64e"],["/2022/11/03/NOnote/1/index.html","301f0e3705cbd31c78612a57c153f498"],["/2022/11/10/NOnote/2/index.html","f673521d9821e198b8bb74a2e6dc52e6"],["/2022/11/10/NOnote/3/index.html","1af08895c8fd57404ea6d9a77d54dfe1"],["/2022/11/10/NOnote/5/index.html","7515ab9e5e6a74df773bf0759fef7839"],["/2022/11/10/NOnote/8/index.html","2510f3fd0f18bd6e6fa9cc39d8f8b5bc"],["/2022/11/17/NOnote/4/index.html","731589dca43e4678fadbe0dba1f91562"],["/2022/11/17/NOnote/6/index.html","12f0da0cc9cd0341aeb2751b5142097f"],["/2022/11/17/NOnote/7/index.html","2af3a5677c1d8c66b7eeaffc4fa1e611"],["/2022/11/17/NOnote/9/index.html","b6b4ec6035c5dc9bb7f9abbea42dfcad"],["/2022/11/24/NOnote/10/index.html","895cd321959975c226959b178ec455b8"],["/2022/12/01/DEnot/1/index.html","d655738b82f039833d347ee980b6a1fa"],["/2022/12/01/NOnote/11/index.html","cd8af92cb25e960ef441a4366400fa8f"],["/2022/12/10/DEnot/2/index.html","487b78c7ca345f06a7899decfa340b3f"],["/2022/12/10/DEnot/3/index.html","d08452c899b2e6379b734e2e8f95fcb1"],["/2022/12/12/DEnot/4/index.html","76b35bda797520d4b50e218c6679ec0c"],["/2022/12/12/DEnot/5/index.html","23247a3000f971b3430c55a5d0cf903a"],["/2022/12/22/CTM/1/index.html","5ee055a0f0b160d27601e85a843d6867"],["/2022/12/22/CTM/2/index.html","0bf000a7f8b61013f7e9740f5b2d519e"],["/2022/12/22/CTM/3/index.html","156062e1ef42b70c44dce2b2b84408cc"],["/2022/12/22/DEnot/6/index.html","9ea33a58cc6344ca614bffd7e571cb3d"],["/2022/12/28/CTM/4/index.html","629537f831bb02bf810a1a04b1e1cdfc"],["/2022/12/29/DEnot/7/index.html","b978fbe89227ca219ec94825eaeacf10"],["/2022/12/29/DEnot/8/index.html","25c7242221905a97c1594af2e072ed56"],["/2022/12/29/DEnot/9/index.html","9e9277e04c32a932ec8830fda6b6d226"],["/2022/12/30/DEnot/10/index.html","07393b75b38eea664020bb4a61769534"],["/2023/01/03/2023/Mon/1/index.html","d9e7684a091d11dc1cce8e9645815b07"],["/2023/01/06/2023/Mon/2/index.html","57a351c10168b8ebf5666ba34eabe3ce"],["/2023/01/08/2023/Mon/3/index.html","794cb32bcc0f805b375701d946302027"],["/2023/01/09/2023/Mon/4/index.html","64ec5b5ece41f31d48bc999f897f8e24"],["/2023/01/19/2023/Mon/5/index.html","3723b648c493337a0c4a60dc7acd8345"],["/2023/01/21/2023/Mon/6/index.html","03d0c49f4ac99371c1ebb38146193d03"],["/2023/01/21/2023/Mon/7/index.html","d100b749dbada3d5e398da9928488162"],["/2023/01/22/2023/Mon/8/index.html","bbeaf27b50b3b5716bfaddeecc5b3fb1"],["/2023/01/23/2023/Mon/9/index.html","f0a06d364373d7633b783ee44cac0cda"],["/2023/01/29/2023/Mon/10/index.html","478b0c8b81d91924059c801259bbbfff"],["/2023/01/30/2023/Mon/11/index.html","3803dfe7107260dcaf93e61b81c9e3df"],["/2023/01/31/2023/Mon/12/index.html","4ed8611878a752f01d4cf87fd38be11a"],["/2023/01/31/2023/Mon/13/index.html","3022edd8e4defa2f58f53b5fe2be7dd0"],["/2023/02/06/2023/Feb/1/index.html","05f22ff3e33946a101f41cf30b70a7bf"],["/2023/02/08/2023/Feb/2/index.html","5558e2e1267c095cb8e77107cead2289"],["/404.html","a315f94492d799b542ffd96de8c57e9d"],["/about/index.html","9bd4432c42ca75b46b987e81f9175808"],["/anzhiyu/random.js","017db6d2aeef7daebbaad5af3e876a77"],["/archives/2022/10/index.html","b5e9f0d0a2e12d07ca6ff561d862e64e"],["/archives/2022/11/index.html","979cb3725f2c3653ee6963b9a4b03231"],["/archives/2022/12/index.html","d8a217a14e9f7d0d5e04048feac8e399"],["/archives/2022/12/page/2/index.html","56f824829cb6183717cbe5926517396d"],["/archives/2022/index.html","ff354ce0e055d46121fdee97d8d81c68"],["/archives/2022/page/2/index.html","7a89a15f06d629cbfb02ac52ecf08ab9"],["/archives/2022/page/3/index.html","f122319d0649f88b22d7f6bdb579b737"],["/archives/2023/01/index.html","11234f69d8f1f24573bd34cc7e3cafda"],["/archives/2023/01/page/2/index.html","a13c38e3d5c076c01baee6d3b88674f2"],["/archives/2023/02/index.html","c7e217e167af27a6446d213fba2154eb"],["/archives/2023/index.html","054d60382277b5ca028fd475bfccd6e5"],["/archives/2023/page/2/index.html","7fbbe59372e7cb7b259dfdf88420830f"],["/archives/index.html","b4485edf4f048003798a84c8badf4db3"],["/archives/page/2/index.html","35d7bd4464275ed026b964014dbc7b15"],["/archives/page/3/index.html","20842ed0c26c8f635623f2773dd73efe"],["/archives/page/4/index.html","9168701932c0ac081a05b888b04b2a46"],["/archives/page/5/index.html","e4a43e6080aca2a6d93b369e9ef7aa1f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","8101a396329d442d52ad358bfbd50717"],["/categories/C语言经典100题/index.html","42d79b21ad1a968986f4cb5aaca94094"],["/categories/c语言/index.html","4a32f603c43e971aa694954d0ac110b0"],["/categories/c语言/page/2/index.html","9f49c248bb2210d117e40e1fd0840a4c"],["/categories/c语言/page/3/index.html","1d5260301fceeda44f6f25022d01b64d"],["/categories/index.html","e059f7c63eeee1ac4d8c73c9cdab547e"],["/categories/经验分享/index.html","64c0e2c7417fcc258ff8f1d7038ac588"],["/categories/计算机基础/index.html","8e985b311ebf080140f5f8d306e1c8cb"],["/comments/index.html","2e8ed2e12e221894b8fadb03b57b3399"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6025cb61d627211c478c90f42024ee42"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","7a3a066feac711041674dd206754c724"],["/link/index.html","c9fa2391c17cfdd9754d421617991797"],["/page/2/index.html","6b2eb5af9da5de320168d259bbffc0b9"],["/page/3/index.html","0fdcda140da7427c3427e7742a2d8de6"],["/page/4/index.html","9f540ba8997c3f06df5488e7ec8834ca"],["/sw-register.js","841da392ab30046f80ee90c50bf6fecf"],["/tags/C/index.html","d3df32dd635da7c4beef56c431a83edb"],["/tags/C语言/index.html","fe3bc3fcbeb16b9cba7cd25902f51157"],["/tags/C语言/page/2/index.html","cb6145da1d5df0f7512c53e3b851a765"],["/tags/C语言/page/3/index.html","6dfd1783051528cd4e9a26656075505e"],["/tags/C语言经典100题/index.html","8bcdab853339122da78028494d7638a5"],["/tags/index.html","e8d28b690f2d446fa5f57e5e8572dbc1"],["/tags/图床/index.html","fc9908ee469cd2db872207ce95d9751a"],["/tags/类和对象/index.html","ac3ac6976cbbeac0171d6c192fe12f5c"],["/tags/计算机基础/index.html","99a06a567d4d78a20f1cfdd29431b633"]];
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
