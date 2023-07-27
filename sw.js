/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","21a6cc327e799418fa9323a7f99abcf2"],["/2022/11/03/NOnote/1/index.html","fca477a50de52f59c77ee7bc28477e89"],["/2022/11/10/NOnote/2/index.html","b2d5186633e053c4b397940f58849cfa"],["/2022/11/10/NOnote/3/index.html","f79355de60e65425458aac928e6890e8"],["/2022/11/10/NOnote/5/index.html","61753a8080f9254315b7f450c79ea586"],["/2022/11/10/NOnote/8/index.html","fe6d9337b9c9d875caa355443367bf68"],["/2022/11/17/NOnote/4/index.html","49ea40c6c426abbe3078623047722840"],["/2022/11/17/NOnote/6/index.html","194741a2748a553511082a0fc8ce2a3a"],["/2022/11/17/NOnote/7/index.html","c53665f69a6702ceb57f7a8fee3667e4"],["/2022/11/17/NOnote/9/index.html","268d605229914c249ee25b751b120012"],["/2022/11/24/NOnote/10/index.html","882d8e8c4c399d52fb1473f930a5e08b"],["/2022/12/01/DEnot/1/index.html","ac5e8e714f24a385546728a7c48be68f"],["/2022/12/01/NOnote/11/index.html","ec34fb38d2d1da1ff0e5cd9eb0650965"],["/2022/12/10/DEnot/2/index.html","b97f02016269c8c98d628721dd72ea70"],["/2022/12/10/DEnot/3/index.html","100c6b64f94f252f38f9d778688ad470"],["/2022/12/12/DEnot/4/index.html","6bf674537f538ddae00ad095261ab0f4"],["/2022/12/12/DEnot/5/index.html","4d012b183e37c9ecd39766b08dd48a64"],["/2022/12/22/CTM/1/index.html","b9eed051660a50e64dceefa988c22a00"],["/2022/12/22/CTM/2/index.html","db0b953e9144545d5448a1043881b38f"],["/2022/12/22/CTM/3/index.html","3da93b07cd8a381e4493803783dffb22"],["/2022/12/22/DEnot/6/index.html","6ee5480bba52da72a2dae01fecbd5824"],["/2022/12/28/CTM/4/index.html","8ba048334928fccfb7034d5e3c1da824"],["/2022/12/29/DEnot/7/index.html","340c1cd4f73db94383d70c7669a26ac4"],["/2022/12/29/DEnot/8/index.html","427d9170bcc2e6a272e862ea56da1c1b"],["/2022/12/29/DEnot/9/index.html","516efcef43d1c026a8383f2040580c64"],["/2022/12/30/DEnot/10/index.html","69bb8dacb3a14cf79780b8faeada421f"],["/2023/01/03/2023/Mon/1/index.html","3ece92b673a5334303a0e05334f842e9"],["/2023/01/06/2023/Mon/2/index.html","80196fd5f52f4ef5a846660d50d6c327"],["/2023/01/08/2023/Mon/3/index.html","71f9811f0753e0a4ee1544b827f3fd4e"],["/2023/01/09/2023/Mon/4/index.html","1c286ad417f50855200ea40595b288c4"],["/2023/01/19/2023/Mon/5/index.html","87718348dd0c05d77badb989b38592b6"],["/2023/01/21/2023/Mon/6/index.html","46ef2ee0260587dbd2506e0aaf7cde85"],["/2023/01/21/2023/Mon/7/index.html","9b774d7ab7f46807a638faae5ea293a3"],["/2023/01/22/2023/Mon/8/index.html","b65d13541e8178f7fbdac452048e0aff"],["/2023/01/23/2023/Mon/9/index.html","9cb3c4c0a5bcb5c3aa951cb9ca90fbbd"],["/2023/01/29/2023/Mon/10/index.html","230a61052fae6f56195ab9f7325b6af4"],["/2023/01/30/2023/Mon/11/index.html","eb6fc7bf1714bb3a9523b0cbecbb31c1"],["/2023/01/31/2023/Mon/12/index.html","51ae2da53f26ad23acad42bbf37efd16"],["/2023/01/31/2023/Mon/13/index.html","d7305d404c5074ea04419652727d7417"],["/2023/02/06/2023/Feb/1/index.html","ae3c09d33f00233facb6a3084bbd28b0"],["/2023/02/08/2023/Feb/2/index.html","321f590f3cb2cac681b5d9208f9e8f16"],["/2023/06/01/2023/June/1/index.html","e9f2a52b059c00d04fb714941e8faf6f"],["/2023/06/14/2023/June/2/index.html","ce581c08f8d2f0920a21c7d0cbf4710a"],["/2023/07/27/2023/July/1/index.html","3f8e628d34e217ff5f751cd974fe5e3b"],["/404.html","022772543c465d918087735d837bb63e"],["/about/index.html","6e71e45cf6f038eb590dc0f7c574fcd9"],["/anzhiyu/random.js","28a6d8a7bfa09ea6683dc233e381803b"],["/archives/2022/10/index.html","f1c993dce0be3a16f86f91659c08058d"],["/archives/2022/11/index.html","4353b89070974e5a885225c8617aefc5"],["/archives/2022/12/index.html","63e1b5d090b2e9c7314894f0ccb101dc"],["/archives/2022/12/page/2/index.html","2e8f6ff2508ed113564d1e1673a35bd2"],["/archives/2022/index.html","b62e25f495c1a33200b978080bf1b912"],["/archives/2022/page/2/index.html","7dc27917b3baf8af720a02fa115a7047"],["/archives/2022/page/3/index.html","97a309eba6075a196e2edba0d9d0761a"],["/archives/2023/01/index.html","b0ab9bf952c949690b3fd8c0e1c07db6"],["/archives/2023/01/page/2/index.html","af47187770995a3a25758cc2dfa4b4b0"],["/archives/2023/02/index.html","366ce6cb4690439e6e7d33ef81b97cb2"],["/archives/2023/06/index.html","420d027b6a5489936b0cd086723fd652"],["/archives/2023/07/index.html","5a56a7c72102ab83335282336bb31005"],["/archives/2023/index.html","eb5d303d1c94e38e5b5e9698c0f0b485"],["/archives/2023/page/2/index.html","d9629537c562181704bd72bd3bb4edb1"],["/archives/index.html","aa97a2c03098571255b473f7ba3865a1"],["/archives/page/2/index.html","7e653bca5ee1a75e5584baf5f62274c6"],["/archives/page/3/index.html","82456d404f86e90687002e4d70509cfa"],["/archives/page/4/index.html","121197a167b59cfbffc35f8312c931bd"],["/archives/page/5/index.html","b699a399bae0e76f3b1ff4b2038214ce"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","e24d110906f1700e32cd5dcb64754b26"],["/categories/C语言经典100题/index.html","f82d7a7ed51baa571a6fbd187736d208"],["/categories/c语言/index.html","c0643478359f240183749d129f00b727"],["/categories/c语言/page/2/index.html","372fc2e0ee2d4eaa49ba2577562e870d"],["/categories/c语言/page/3/index.html","62d55b36a1d2294116c537d45a68821e"],["/categories/index.html","d48da674c4035b97bcd4c995d199e234"],["/categories/经验分享/index.html","d89ad50b23306e755358b4471ec1283d"],["/categories/计算机基础/index.html","9c3be8b861592894cbf8dce112907eb6"],["/comments/index.html","145db78102b312288eaa246fadf9217b"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","56fdc88497c4fd16effe05b2a286d989"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","33b18d365d33c6ada0fb0a85fd50ee25"],["/link/index.html","a6f8b1dcfe452ef1769e18c5c3e18ab1"],["/page/2/index.html","9b25f35390e52341afd2af6186cceed2"],["/page/3/index.html","e4224d24cb0f3a6a5c06677ec196829e"],["/page/4/index.html","773d0aac3b63105d4665d4a39e6a42d1"],["/sw-register.js","58fdfcc8d6b72d5d58418e5e82bf6ba5"],["/tags/C/index.html","a3f7dee8d312727a31bad0f8e8dbbd7f"],["/tags/C语言/index.html","6ce250db686986b0ccd031a593bcdde5"],["/tags/C语言/page/2/index.html","e6c0e671f1984b8c5a0b8fa67915c853"],["/tags/C语言/page/3/index.html","792658ca06d802a4daf7a564460ebd57"],["/tags/C语言经典100题/index.html","8e591773b0e6e2fa51c0b60d0abb9bf1"],["/tags/index.html","4b6335d5c672ab8c1f3bd4175cf368ca"],["/tags/类和对象/index.html","9e96dcbd1e495a117960488293e53a1b"],["/tags/经验分享/index.html","b3a23218dfa0542d7024e53c7dfa74df"],["/tags/计算机基础/index.html","17fb8aaaedeed37601b67b897a10af15"]];
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
