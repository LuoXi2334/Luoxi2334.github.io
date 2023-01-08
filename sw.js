/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","654765f0301f5bfb567d14ff6f886511"],["/2022/11/19/NOnote/2/index.html","f156c307e52731553fdefb90b6c54da9"],["/2022/11/19/NOnote/3/index.html","39013024fd3b173ac5a54cc036e9d5f6"],["/2022/11/19/NOnote/4/index.html","b4dd767a8499949d45fa1223c401553c"],["/2022/11/19/NOnote/5/index.html","9336ac7056a2f068e19b007b756fd427"],["/2022/11/19/NOnote/6/index.html","cf3ac84d478494f3e080eb41a41d21c7"],["/2022/11/19/NOnote/7/index.html","290a096d59d66530a0ef3979022d4232"],["/2022/11/19/NOnote/8/index.html","ab0789cce2e2c788ef5ed033d2ab53cb"],["/2022/11/19/NOnote/9/index.html","9817deb30208b19f63951f0ee0972b29"],["/2022/11/19/OCnote/1/index.html","fbfa89f6c2801191f2b4c6f0d4a03066"],["/2022/11/24/NOnote/10/index.html","5ce3fd2c9ec0406515c6ed909758c7c4"],["/2022/12/01/DEnot/1/index.html","224cbc9f0e4ffa080a4ade173155528b"],["/2022/12/01/NOnote/11/index.html","0c9ae50e4a32320ac36fed4b7eeb4c82"],["/2022/12/10/DEnot/2/index.html","57d420ea4df1a0998646e4e8b6146c63"],["/2022/12/10/DEnot/3/index.html","49e802ecf5e4f997faa57ca21f2ee197"],["/2022/12/12/DEnot/4/index.html","493cc88c11e00bc7c60e9122d9dbe8fc"],["/2022/12/12/DEnot/5/index.html","8b59c147699f16e7ff77d44b1d4b7841"],["/2022/12/22/CTM/1/index.html","149305660139481f1052ced4a24604d5"],["/2022/12/22/CTM/2/index.html","a65378e06410242960412c1b52f0dc98"],["/2022/12/22/CTM/3/index.html","cc7721612a6d30aecb18070b995b3491"],["/2022/12/22/DEnot/6/index.html","6d915134ff1d684251b33872c5f17776"],["/2022/12/28/CTM/4/index.html","973ed8eea8fdc313c28b49e22f97b229"],["/2022/12/29/DEnot/7/index.html","3fb3f059b735949939560f5df0bce634"],["/2022/12/29/DEnot/8/index.html","b83c7e5b2747d5d9cb1d5a0838d5f5cd"],["/2022/12/29/DEnot/9/index.html","a1663c59a84b9350602f6101ffe29225"],["/2022/12/30/DEnot/10/index.html","061fd11be62dcd4e98423917ba1fe21a"],["/2023/01/03/2023/Mon/1/index.html","fb77aeb8acb0c63bbe256c5aa7898269"],["/2023/01/06/2023/Mon/2/index.html","58d1b9912e61d09f1587e658d7ae112c"],["/2023/01/08/2023/Mon/3/index.html","9d4148079ce191b3e7f4c17a3fef03dc"],["/404.html","ca40fcb82b31c927b763299a7c2f2f6a"],["/about/index.html","cb1a56864aafb99968bd08fd2d3cc2bd"],["/anzhiyu/random.js","379d0dbbbce1c241518f265aac17427e"],["/archives/2022/11/index.html","20081608ccf1a02478f5f9b29b870c71"],["/archives/2022/11/page/2/index.html","343ae85f84647eeaf983a664544b9726"],["/archives/2022/12/index.html","62468e5ce0d53b9881fd03fef3eba09f"],["/archives/2022/12/page/2/index.html","eb43001c3993c3ba893ed3c5af7f592f"],["/archives/2022/index.html","6ade98dd4c7c559b738a83fae2fb6902"],["/archives/2022/page/2/index.html","9958dd14bcb192b524b453882fbcaf4a"],["/archives/2022/page/3/index.html","97b4509641471750a7ebac4354144ccf"],["/archives/2023/01/index.html","566b7c89be6711e924fc9b9fd285445b"],["/archives/2023/index.html","f323fba50fae72c8f7e8a722c5724bd6"],["/archives/index.html","ff788e9d40064a3546d0ddca9259d6eb"],["/archives/page/2/index.html","792f03b932dff33292d77583714e3a9e"],["/archives/page/3/index.html","ba0dbf649d0fbcdcd3a07ca44dc4118e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","904aee8a2f894cecc54e12baf0a439f9"],["/categories/c语言/index.html","b04a061a99764975efd8d319f219482d"],["/categories/c语言/page/2/index.html","d9907eac01304d9c7dceffb36d196917"],["/categories/c语言/page/3/index.html","7899c9a2f045509266b5feb780bb9ed7"],["/categories/index.html","c5a3e9c9ff302d61987ad6db86a930c1"],["/categories/经验分享/index.html","c68f2d63cbd409ba767bda78e650fc66"],["/categories/计算机基础/index.html","5ef4ea7183ff36b15ad2739681660bff"],["/comments/index.html","2497eb15600e8f6252d2fea7ebe32336"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0c37bd39abf3c506f34610470d23a6b2"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","93cefe8c55c3bd69ef1268dd45a5ce5f"],["/link/index.html","cd62a57e461e92b9e749637bba9a9d13"],["/page/2/index.html","7074431406b0a580b7e4ca3df9b3b00d"],["/page/3/index.html","c0eaa732c6ae4ec6fd94ce996e547d81"],["/sw-register.js","db921498b742cd0c0adddc25bad299ff"],["/tags/C语言/index.html","c3818d0de882baae38b72d9ba4364931"],["/tags/C语言/page/2/index.html","83258d7ac31212b585cf95b648bbf5b1"],["/tags/C语言/page/3/index.html","43fe45e158299f0b4faa35c53ffa3d87"],["/tags/C语言经典100题/index.html","7cdc96e63caf1eab714d5ab71f1e5d28"],["/tags/index.html","c86d567cc53510a117bfc6f0f2d0af80"],["/tags/图床/index.html","b7c3867a93313a9329034492c092b754"],["/tags/计算机基础/index.html","d3e45d1f52c66fcfdc78a118a9e4f652"]];
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
