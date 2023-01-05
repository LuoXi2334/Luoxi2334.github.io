/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","13064ad1c35abf4afbdd02ba574cd27d"],["/2022/11/19/NOnote/2/index.html","652245a9816771996fa010de8a6274e9"],["/2022/11/19/NOnote/3/index.html","4de38d7de87fd10fbcc4d6182d44d644"],["/2022/11/19/NOnote/4/index.html","2cf6dcee7bee22b1633d678fa6c26798"],["/2022/11/19/NOnote/5/index.html","9ac79af89a712ac7e73e4fa9bbe33d8f"],["/2022/11/19/NOnote/6/index.html","71eb956c76c9551eef5d4a455819d311"],["/2022/11/19/NOnote/7/index.html","277e44ec28baa2086e0d00530a1a8469"],["/2022/11/19/NOnote/8/index.html","1e2ee30d50bd5ff3c7b1abdc0d27cc44"],["/2022/11/19/NOnote/9/index.html","eeb4da27f2815cfd58ef841fb5566fe8"],["/2022/11/19/OCnote/1/index.html","ac0d31abb7ca64504bc27d8062ad10ad"],["/2022/11/24/NOnote/10/index.html","ddfc29717436925a6256c87b64890451"],["/2022/12/01/DEnot/1/index.html","6bfa358d8386f54569e00d711d727d37"],["/2022/12/01/NOnote/11/index.html","ee903b39e6857ec08b8ae389feea3948"],["/2022/12/10/DEnot/2/index.html","46a03afe27b08f71adbcd1cc0c3d3fb7"],["/2022/12/10/DEnot/3/index.html","8aaadb83d2f6ffde5cc485bf102a19d1"],["/2022/12/12/DEnot/4/index.html","424ccb14968359fc159d1c5a229967f8"],["/2022/12/12/DEnot/5/index.html","fe57018dcbe238657ed82f19b34089a5"],["/2022/12/22/CTM/1/index.html","23ca1dcc30039b56781e4169ea26846a"],["/2022/12/22/CTM/2/index.html","5945f152295681af4e25fa3e9dd6d66d"],["/2022/12/22/CTM/3/index.html","9b7da3abd4363f314a75fe3359ff9cce"],["/2022/12/22/DEnot/6/index.html","969c7f8409944da1a6f23c8ab53085f9"],["/2022/12/28/CTM/4/index.html","dd4d70b73c53415e2a0b4a3b1604d858"],["/2022/12/29/DEnot/7/index.html","09681ab8c0d2f1bfd8fdd5dca0c992cb"],["/2022/12/29/DEnot/8/index.html","a479a077c412ba2bcd2312bc13eb905d"],["/2022/12/29/DEnot/9/index.html","b04e36eeb972bc872c1ffe10c3f3f8ad"],["/2022/12/30/DEnot/10/index.html","91b675cbddd05d4a23261ad11e6a48ab"],["/2023/01/03/2023/Mon/1/index.html","f40c77ad8f5e13217954a9b4a1a83223"],["/404.html","2f2f643ce3d3d82ec636988e48f51461"],["/about/index.html","f4d4b8f01d76490883df170e90c43e75"],["/anzhiyu/random.js","15f5694b5f4045d80e6ae37e79379c55"],["/archives/2022/11/index.html","0bf70dfcd2a28aabd0bd513e7000f4c9"],["/archives/2022/11/page/2/index.html","de74eac8391cebe59c7c6145759c7a89"],["/archives/2022/12/index.html","afe223233c2819af22028bc07a5b2a14"],["/archives/2022/12/page/2/index.html","9d990abc8f07ceff8b6399cde631b513"],["/archives/2022/index.html","d044254560f502c1f55a0d6c5ad59d33"],["/archives/2022/page/2/index.html","8f1afc046ff26215394b9ffa74abd019"],["/archives/2022/page/3/index.html","b712ffd60901d01ed0d6437cfbb615db"],["/archives/2023/01/index.html","38fc6914dfa3b17b3cb2a7b32503d9ad"],["/archives/2023/index.html","3f4cea70e97851eb4f98ac337c8f6b00"],["/archives/index.html","c771f6919f4e23fc63c4823f0c8725be"],["/archives/page/2/index.html","985d34d7e5f4f4775aa5969d7fb35f6a"],["/archives/page/3/index.html","ed64ec97c8718a0e850ba94644a087f2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","f5812e8beb1853f7cb379633f0342ac6"],["/categories/c语言/index.html","2f284493e654860876804b6ddda2b8fa"],["/categories/c语言/page/2/index.html","38bd78326b593edcbdcdb8e95f512a56"],["/categories/c语言/page/3/index.html","d1385d5a57f61d3ff1b5d27cab9ce03e"],["/categories/index.html","1c6ffbd018434651e3b1712ffca2bef8"],["/categories/经验分享/index.html","718aa9487bd1759c3140f85f6afe5630"],["/categories/计算机基础/index.html","d0c29da6c17e695ea41ef82c04171f6d"],["/comments/index.html","7d7b408f3525a98436abea797f997f2a"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2c3376eeef646033fefe910f8f8275d5"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","9a017a032c6968e7bd47900bd221cfef"],["/link/index.html","faa11a1c553194d1edc26b5be30aa4bf"],["/page/2/index.html","3c50a0ac3394d45c44a2d71c7a9ab22a"],["/page/3/index.html","5c164204981c4766496ac6131ec1817e"],["/sw-register.js","0e4bd683839169e5d29b8b3116003ee1"],["/tags/C语言/index.html","59d2f9fb9aedd9fa59219e2edcee171d"],["/tags/C语言/page/2/index.html","4856c85ebcc0596387681356535e6b2b"],["/tags/C语言/page/3/index.html","7a65478a0bd90ee14972da1f13faa8e7"],["/tags/C语言经典100题/index.html","e6fe6969c88284443a7fc34ad93c5460"],["/tags/index.html","00394b201efd85f3d723a57ec2d3e1b0"],["/tags/图床/index.html","e3457d8ab93c3f0fd66e399b5d993f38"],["/tags/计算机基础/index.html","38d355b07af65ecaf712ae94c374286d"]];
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
