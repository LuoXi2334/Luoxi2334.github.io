/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","3dbe4b5bab8251c6588dbe2ea0442102"],["/2022/11/03/NOnote/1/index.html","7930961b675bd87cb084231b4d953860"],["/2022/11/10/NOnote/2/index.html","e47f26d3b30d6b478d094f66c65df757"],["/2022/11/10/NOnote/3/index.html","c31c63167aad4bf80ee8c54f7d30c8d0"],["/2022/11/10/NOnote/5/index.html","b68f67aee3e4a7c07e268acb72ae8083"],["/2022/11/10/NOnote/8/index.html","a3b4d8a45ef3aef6dc588a7d2625e467"],["/2022/11/17/NOnote/4/index.html","0ef41c56b5e499e99289ae8fbfc90dd9"],["/2022/11/17/NOnote/6/index.html","3b32a8790e1863b45c292184661ec90c"],["/2022/11/17/NOnote/7/index.html","219e53b3c4d77b1db0b2297d50bd54e5"],["/2022/11/17/NOnote/9/index.html","6bc6b04eb50debf95a6b79536e045dd0"],["/2022/11/24/NOnote/10/index.html","c216726edf811e1b78a06411befc664d"],["/2022/12/01/DEnot/1/index.html","5302b5807f75204e4a338ca9abda3aef"],["/2022/12/01/NOnote/11/index.html","3828d10b59561df2f4858f0ba5d2e546"],["/2022/12/10/DEnot/2/index.html","fa32d2e19085e8ffca5159e9aadb069e"],["/2022/12/10/DEnot/3/index.html","bd2cfe9920b2754795594309136f3b2f"],["/2022/12/12/DEnot/4/index.html","84bf50e541a8f14f4cb47a34b2d8a894"],["/2022/12/12/DEnot/5/index.html","1608559079fee976db66f51e1b2c3af5"],["/2022/12/22/CTM/1/index.html","49f1db1c0ae09cd3c358e321e5736aba"],["/2022/12/22/CTM/2/index.html","411e53ad334a199855536cd855b651ff"],["/2022/12/22/CTM/3/index.html","4a9f49930923768982be4dc809ca364e"],["/2022/12/22/DEnot/6/index.html","792169880d9be635fdaba9c12fdc93b3"],["/2022/12/28/CTM/4/index.html","f3a01e66739cb2db9fd8600951ca0920"],["/2022/12/29/DEnot/7/index.html","e8ade870b25ee39997aeaa18e54ca7e1"],["/2022/12/29/DEnot/8/index.html","6cba06e3250679faf47c768ab22f9831"],["/2022/12/29/DEnot/9/index.html","3c987fa253d6f9117f98c4d41994f5c6"],["/2022/12/30/DEnot/10/index.html","faae82a947943bf06567485d6708017c"],["/2023/01/03/2023/Mon/1/index.html","3a0e7d6fd82595b880b2f2cb57bfebab"],["/2023/01/06/2023/Mon/2/index.html","a31e3cdc504bc9ad9e27f53ffb3f32a9"],["/2023/01/08/2023/Mon/3/index.html","e594a658002436ff22f65519283671b4"],["/2023/01/09/2023/Mon/4/index.html","f014e1342758ed3edefddcef1dca4da2"],["/2023/01/19/2023/Mon/5/index.html","95af1e6543230983d0a9f1712e6fa10a"],["/2023/01/21/2023/Mon/6/index.html","faa278cc074d1788f938514e94b04f08"],["/2023/01/21/2023/Mon/7/index.html","38b4f3dbf8799814067bd470c736de66"],["/2023/01/22/2023/Mon/8/index.html","0ef46986fa1a32d9189e86dca0180bbd"],["/2023/01/23/2023/Mon/9/index.html","7002408ff5a31682d7c36785dcf5a701"],["/2023/01/29/2023/Mon/10/index.html","2e096c90ccf4e200a704d575aea1cbcf"],["/2023/01/30/2023/Mon/11/index.html","63fbdb161ae4c2bcd7d7ecd778451b87"],["/2023/01/31/2023/Mon/12/index.html","5a268c69d71a5efd500413dfdc163bdd"],["/2023/01/31/2023/Mon/13/index.html","50a6a8b40a1b695163573a9eea97865f"],["/2023/02/06/2023/Feb/1/index.html","3cc22acf6184a694502f63a50efac13a"],["/2023/02/08/2023/Feb/2/index.html","3157da3d8ca229aa1df84eaf904abf11"],["/404.html","6fef53b8885bff118b12cba0e9a81aa5"],["/about/index.html","aa6d8938a7ae9fcc4e5481591166eacb"],["/anzhiyu/random.js","6b66e8441fb4283d0b67514ceb29531c"],["/archives/2022/10/index.html","65eb6623f6ddd312d0c0732232f88d0c"],["/archives/2022/11/index.html","a1438d509bef82219c79ddb0e3cb4e7a"],["/archives/2022/12/index.html","93f3e264b6761ae6f4f602c5324f3394"],["/archives/2022/12/page/2/index.html","3564488788aca976aa76877b1d172ea8"],["/archives/2022/index.html","3f97b84c1610f6c7624412acbee7af53"],["/archives/2022/page/2/index.html","058940dc82cf785e723cc8f82d7716b2"],["/archives/2022/page/3/index.html","edbd1193abf26372e557b90d240c8bdf"],["/archives/2023/01/index.html","a24533568ce5bfa5f29c7e8ab3c52b37"],["/archives/2023/01/page/2/index.html","ddd5286e0eda5f2e40615f1b87131242"],["/archives/2023/02/index.html","9298a86d561674e17fb46bb070a14a90"],["/archives/2023/index.html","53f157f069713c9eef7ec387739117ce"],["/archives/2023/page/2/index.html","bcd81331da35372e82a6d93e15282522"],["/archives/index.html","dcca1c4e341714278b1795195c70d555"],["/archives/page/2/index.html","253368d81fc0f670671e0fa76e1b52a4"],["/archives/page/3/index.html","f2dd60af617632eee6e8b235c1b870c3"],["/archives/page/4/index.html","b6a92868df27c2253f8e13919f8aea45"],["/archives/page/5/index.html","a96574864e12c3f28662f58fbea2a60e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","3621e4251a40274081bab8a883308978"],["/categories/C语言经典100题/index.html","1c22e9b1e92d37d94b59854a01783c68"],["/categories/c语言/index.html","b64b4714e744b231f04d668b651f54f4"],["/categories/c语言/page/2/index.html","ca724ee246a7c52c15785bfadf53da0a"],["/categories/c语言/page/3/index.html","d684b5e62ed7b53f164ebd64ae2c487c"],["/categories/index.html","40d197528f8b7603de10072a9dd64bb6"],["/categories/经验分享/index.html","3e1fd639cc5e82daea2f0c6caf695ebd"],["/categories/计算机基础/index.html","5a125470bbcf516e7ec65ad5a080ca5b"],["/comments/index.html","72a37191302f8cb5ac2ea1c227e374aa"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fec0a33b6ef27aaf39de7f13a0661ff3"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","a30b87e9eeb31afb98da86e47ca3a7d1"],["/link/index.html","8d157d913b8620179f9b09cf3e9471c1"],["/page/2/index.html","fac6877aec9f43fe66b5d05575b89eb4"],["/page/3/index.html","f1448565ee3171496ef4c1732a66b21d"],["/page/4/index.html","cfc72c464db61b4ee1d7f94c923054f1"],["/sw-register.js","1ded0d8c79a17cbda82a647e6721a28e"],["/tags/C/index.html","fc2d64de8e69d4fbce483100595dbc31"],["/tags/C语言/index.html","e5395e6e89c8777ebaf431175d57a38a"],["/tags/C语言/page/2/index.html","9e0f835c227a934c8f37e1aa614ac3b2"],["/tags/C语言/page/3/index.html","9db71ae8eb5d3176ccbf6c2c04e89b20"],["/tags/C语言经典100题/index.html","9f5b4b1341db2a9ddc35b1c597ac62fb"],["/tags/index.html","1bf3515884adb5ebee5b387e2865f724"],["/tags/图床/index.html","e899a0e51e968046c43f1494ec886edb"],["/tags/类和对象/index.html","09e20eec3b6d5f6b21449face6319783"],["/tags/计算机基础/index.html","719e55eae63d26d3a979f6bb9499ee21"]];
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
