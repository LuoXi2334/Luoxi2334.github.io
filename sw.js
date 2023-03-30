/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","d55ed9f45264beb0ee12c12baefa125a"],["/2022/11/03/NOnote/1/index.html","000cade8e72380ba20afcf4d01a1c457"],["/2022/11/10/NOnote/2/index.html","684f4319dcf99a80b22de9ae290a035b"],["/2022/11/10/NOnote/3/index.html","51c3288a82868855a9b0d0e98d86ce43"],["/2022/11/10/NOnote/5/index.html","8bc9f4dde70c1eeb8dca9b884f771662"],["/2022/11/10/NOnote/8/index.html","8f63f3516303c55e7cc5ad6855ac6d87"],["/2022/11/17/NOnote/4/index.html","b2b23aa2f32a7cb6efd5df4a83475161"],["/2022/11/17/NOnote/6/index.html","346a640929440b221607eeb7e4936651"],["/2022/11/17/NOnote/7/index.html","50729681006d70d53ea19b7c20915f73"],["/2022/11/17/NOnote/9/index.html","a69e7cfd2da150845707b8b0fa8f5745"],["/2022/11/24/NOnote/10/index.html","2e8f286c6f9e3b3c398a42fbb06adf43"],["/2022/12/01/DEnot/1/index.html","9649e5af4f12cfefcc7baffe81e26835"],["/2022/12/01/NOnote/11/index.html","d471ac22cd139dfe821a17109498d015"],["/2022/12/10/DEnot/2/index.html","b6d9593bfbf959036d01efac6bb43bf1"],["/2022/12/10/DEnot/3/index.html","e166e1a72abe0cf8f94510066ba1f48d"],["/2022/12/12/DEnot/4/index.html","1fa22763716b5178c2423746e1ae5ab9"],["/2022/12/12/DEnot/5/index.html","b293393e800622dceafc34cb037d1d6c"],["/2022/12/22/CTM/1/index.html","a2d46f007bce91c5c2fd7176682ec19b"],["/2022/12/22/CTM/2/index.html","15611dcb454c4940cd061fa184a77a63"],["/2022/12/22/CTM/3/index.html","f8f504698654624f037e73ea93f3e66c"],["/2022/12/22/DEnot/6/index.html","3a32ce8653f8387bf2e8810e0682c300"],["/2022/12/28/CTM/4/index.html","4b54f5753d6d59c66ea86c425efbdee3"],["/2022/12/29/DEnot/7/index.html","6a6537cf2b86910fc9316930e6fb9c83"],["/2022/12/29/DEnot/8/index.html","9466530345083a06c59e2727659543fb"],["/2022/12/29/DEnot/9/index.html","064ab7dc3603c9efa3bbf144e55ecedb"],["/2022/12/30/DEnot/10/index.html","6a59768167fd045a60ed6cb7e7d13788"],["/2023/01/03/2023/Mon/1/index.html","492025dc02dac5c344669742d9bd6b9f"],["/2023/01/06/2023/Mon/2/index.html","8e4c16ed9c0c2f19b63172206314cdf3"],["/2023/01/08/2023/Mon/3/index.html","26262e44a4bf1425ce4b1d8467ae0022"],["/2023/01/09/2023/Mon/4/index.html","daac35320e47ace29b650488e6a04395"],["/2023/01/19/2023/Mon/5/index.html","fccea4d8fea5dc082b3c3cbbb6dd0231"],["/2023/01/21/2023/Mon/6/index.html","bd642a53013e03cce876349f468c4371"],["/2023/01/21/2023/Mon/7/index.html","7fcb0592fc2fa91a12907f08c1e2cc3f"],["/2023/01/22/2023/Mon/8/index.html","0d5442d4856e34d2440410d5fcff081a"],["/2023/01/23/2023/Mon/9/index.html","fa33fafe0525bf089e0a0a8b755d58e9"],["/2023/01/29/2023/Mon/10/index.html","9d2fde16b8e28d3c39cc9029a42a13bb"],["/2023/01/30/2023/Mon/11/index.html","4c5a3b79b08a0383ca79268a4d8a9e43"],["/2023/01/31/2023/Mon/12/index.html","2dbe4a7ae734e1e2c380fe4a308210bd"],["/2023/01/31/2023/Mon/13/index.html","d894ab76ed1624d29ce30debb0c6a99e"],["/2023/02/06/2023/Feb/1/index.html","bde11261744779b85fd2a7c7fd7fbb68"],["/2023/02/08/2023/Feb/2/index.html","cf3a979c1b3e68fbd070759a3470900f"],["/404.html","78e6a26fb3aa6a284b5123f0e963fe8c"],["/about/index.html","851ecb7b7d50a5ccfd18ef4d13516941"],["/anzhiyu/random.js","144ab173837e609c09c7f5f34f845d37"],["/archives/2022/10/index.html","f1d4ad316d79f19ac38f7e1c823276ef"],["/archives/2022/11/index.html","d6205c0a2846c94f5e927255b3ccdf55"],["/archives/2022/12/index.html","d2265dc72add3b48b6c4189cbdaf789f"],["/archives/2022/12/page/2/index.html","8529df00d17a657723dae391653e1f68"],["/archives/2022/index.html","bcf22bb38e547ba9d209f45f41d1e7b2"],["/archives/2022/page/2/index.html","ed546317fb57b2c78466aeeccaa7ab3b"],["/archives/2022/page/3/index.html","8556e75c5aa130d8503f5e97da1f5d18"],["/archives/2023/01/index.html","a559cb874c993ed9ed4ce5c229b39746"],["/archives/2023/01/page/2/index.html","d1e8acdc43253e7675396af3f1977806"],["/archives/2023/02/index.html","6050a39e7016853a777dc5b9ac22bea1"],["/archives/2023/index.html","a835afe38f146fa742bb75e41f6329a9"],["/archives/2023/page/2/index.html","049c2f91839ec43ca6f164cd061ddddf"],["/archives/index.html","5590098b8eada22982083bc7c47416f2"],["/archives/page/2/index.html","3026328d12523d31f8e6e71aa5b7ade3"],["/archives/page/3/index.html","496f55ed5b4a48ed2bf35ddc43300c33"],["/archives/page/4/index.html","99cf9626ead33b6f7bc2dea0583bed6a"],["/archives/page/5/index.html","e01aadf7f5f7f775ea4ec9d8ea8ee0fb"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","55e0b84abd9596eaaa42da00f8be8ebb"],["/categories/C语言经典100题/index.html","0c15907069df8d4a939a5c329b9f0144"],["/categories/c语言/index.html","457a609c09b5c84ce8c7c880df5d1d7c"],["/categories/c语言/page/2/index.html","4722062429ec110b53685aaef8f39a72"],["/categories/c语言/page/3/index.html","a6ef642e7c20cf171548e4434bed9e97"],["/categories/index.html","851049c30dcdd24794be433245c68ccc"],["/categories/经验分享/index.html","a351addf1aca9b4728db3abbd617d69f"],["/categories/计算机基础/index.html","1c0d3f887b10a7721449c1c11cc0f157"],["/comments/index.html","45d987836c9b590d4c17368764d1d4dc"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","10b9d1ad042cd81bde41ddd89a8a8b69"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","d57e056af1773842c030da377580115e"],["/link/index.html","455581b1fb61ffb1da7b4d8f95ddcb9f"],["/page/2/index.html","56ed94149b574a4edb1714e25c3dfdfd"],["/page/3/index.html","48b443ba03f146e2cd6e69c2fa4f68eb"],["/page/4/index.html","8d927fb6ae8c3d9cd4fe3d9af6605375"],["/sw-register.js","0f5b3d259770605ec0ea9d043c486154"],["/tags/C/index.html","8565c5131be08c427f2a4743811853f2"],["/tags/C语言/index.html","34044ad6cfba898715516007b2ea8dd4"],["/tags/C语言/page/2/index.html","2fa8225729021b985cd063dc65dea8b3"],["/tags/C语言/page/3/index.html","92ff7573314cd61ef198cb4843ef8fda"],["/tags/C语言经典100题/index.html","ebd59f60a5f9936de3d7706c9aa393bb"],["/tags/index.html","166df51dbdaa6c00bfd98b5ed51e404c"],["/tags/图床/index.html","4bd649f74ee649f974e1c40364bce7ea"],["/tags/类和对象/index.html","122109415861701b1359e0c91ec2f3aa"],["/tags/计算机基础/index.html","19bc2546fc821335d049f6aab75204cc"]];
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
