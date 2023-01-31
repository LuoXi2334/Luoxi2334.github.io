/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","a03b356752ad2557bf8f041b8f0edf77"],["/2022/11/03/NOnote/1/index.html","01b237d3b0363d001da727569b94ae44"],["/2022/11/10/NOnote/2/index.html","1a0c668301e6701d27027bff5dc5db1a"],["/2022/11/10/NOnote/3/index.html","0864cfbe41114f04f9521463dd1f92fb"],["/2022/11/10/NOnote/5/index.html","286cb94179cea9687d921f63b7c86aa9"],["/2022/11/10/NOnote/8/index.html","ab1455c28a63d60a0b85bce8b1135c52"],["/2022/11/17/NOnote/4/index.html","f55864160686fbf6bde143b416adcbea"],["/2022/11/17/NOnote/6/index.html","3e61f4c594452f909acba4fb99453e5b"],["/2022/11/17/NOnote/7/index.html","af0616937c64445c23726fb0213593bd"],["/2022/11/17/NOnote/9/index.html","965784e754b2e186dffd49cfb858d355"],["/2022/11/24/NOnote/10/index.html","cab9dde948b3d3d6decc007103c0c651"],["/2022/12/01/DEnot/1/index.html","643d319de14808fdfd5c750866dfe557"],["/2022/12/01/NOnote/11/index.html","fb3e8d607e73c1f3b32e060193b3fd90"],["/2022/12/10/DEnot/2/index.html","0174e045b8b3ac9239aee2b5549d28f2"],["/2022/12/10/DEnot/3/index.html","d61fdfc86b447d906f6281877036de25"],["/2022/12/12/DEnot/4/index.html","2445838c0f05bc344c9589134b0e60a0"],["/2022/12/12/DEnot/5/index.html","a4b0e3c9b2e962e7cd4d955608f9238f"],["/2022/12/22/CTM/1/index.html","bbbf53814200f72c5fdb86feeff24e2f"],["/2022/12/22/CTM/2/index.html","3d61cd488aff9b72f8871ca6952be07f"],["/2022/12/22/CTM/3/index.html","c2ae72f8c5cde66e3ced0fa4c91e6ee9"],["/2022/12/22/DEnot/6/index.html","71cfd0053008bfd2ad78a9e3eb90c304"],["/2022/12/28/CTM/4/index.html","95f54ffddf972c93fa4a0accedb41ca4"],["/2022/12/29/DEnot/7/index.html","0c22f067be512bbc63be5aeff7c0eed5"],["/2022/12/29/DEnot/8/index.html","9e619c1f0e636e577d2b0994ebafbe3b"],["/2022/12/29/DEnot/9/index.html","f1ba560c1a72222d1ed052303427f406"],["/2022/12/30/DEnot/10/index.html","7609b2541122bd4f29b0a0afbedd3c79"],["/2023/01/03/2023/Mon/1/index.html","4ce36a08bb2aad768486e8bd2844f6c9"],["/2023/01/06/2023/Mon/2/index.html","3bd27e71f94d23934569dc9167528fd5"],["/2023/01/08/2023/Mon/3/index.html","f18b91194822fed04fa4f1390a80a601"],["/2023/01/09/2023/Mon/4/index.html","d76aba4c51ce91ec133a214ada3b8add"],["/2023/01/19/2023/Mon/5/index.html","499cc1b8fed311fc7cc8cc841bc01bc3"],["/2023/01/21/2023/Mon/6/index.html","792f247e8d1fb0ad0eb7ae82a7354985"],["/2023/01/21/2023/Mon/7/index.html","4a5b235dfaf37e1402027139f6be43be"],["/2023/01/22/2023/Mon/8/index.html","69bc4f9efba118889cf254b227fa66d0"],["/2023/01/23/2023/Mon/9/index.html","e8b96270ece8e64ad1dd2176304c59e9"],["/2023/01/29/2023/Mon/10/index.html","32529195c40479b949c4198080dbca35"],["/2023/01/30/2023/Mon/11/index.html","3f3cb3193a9943d0c2f76ba5292e6c07"],["/2023/01/31/2023/Mon/12/index.html","00404c8b9473648fe43c58cc44f034c6"],["/2023/01/31/2023/Mon/13/index.html","c52039fc9ca5e1eaa59b096bfdd1d4dc"],["/404.html","c435727b5db8e30bf12a8707a2d03e31"],["/about/index.html","be2b8a23def260f460b8b518c39e1b3a"],["/anzhiyu/random.js","38f749ddfd38af9d1908e9b21a6c2d03"],["/archives/2022/10/index.html","886cbcf3c34869669e34c6d9b693edb0"],["/archives/2022/11/index.html","76f7a92fea9b9bf85c21e2a0969ed55a"],["/archives/2022/12/index.html","b17f3b25d42a2e798c42fa7b9b7520f5"],["/archives/2022/12/page/2/index.html","95ba3bfddff21fea7c503b45b82351c4"],["/archives/2022/index.html","b24dadcdca57274204067c5ae648393c"],["/archives/2022/page/2/index.html","c3d67267cd767969b218d0f86eb56708"],["/archives/2022/page/3/index.html","11c4e0d6225579ae0ae7125e24be617a"],["/archives/2023/01/index.html","66b83dd2cca0d3d9792b04ffd0f2d32a"],["/archives/2023/01/page/2/index.html","307ccd9b95bd37d37eaaf11ba88ca9ff"],["/archives/2023/index.html","f2b1c6af7c672d4bf7b257f125bbea16"],["/archives/2023/page/2/index.html","59bd005d37fbe78559d63ae493562e0a"],["/archives/index.html","72d34b5ad5a74a39d5673d81c0c0a5ac"],["/archives/page/2/index.html","488291a9dc5abea4574fb007e9b4311f"],["/archives/page/3/index.html","e7f7ea3dbd5c8189c88bec41b21b3403"],["/archives/page/4/index.html","8ea4c983c4bd439954bd21e6f2754f8b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","28239701e8ff015729b10fb25c3f5a01"],["/categories/C语言经典100题/index.html","683771f8352fe29e5ad96873dccb4aa7"],["/categories/c语言/index.html","e2e8e9053831fe27db5c08e56906ae3c"],["/categories/c语言/page/2/index.html","e6cc2ad1b9ee5b8e2803aa5d9c69597a"],["/categories/c语言/page/3/index.html","98cc2436c1479f5bc826c1d8b3124a29"],["/categories/index.html","3c77e92a6cb63f59638d147bb6dd77ab"],["/categories/经验分享/index.html","66b8a86d287449e425b4ebf17a87da57"],["/categories/计算机基础/index.html","937415c34e881e221a62645d707efffc"],["/comments/index.html","2616c0cd35233fcecc953f56b9cfbde2"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","98b04c3cc7b5c33e766a69299626dcd8"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","0d60ee7a5ffef981a182abc5d23301b2"],["/link/index.html","7ed65212caf2d24d61c177483b6867ea"],["/page/2/index.html","bef08d8f237a43021274313abc7a857c"],["/page/3/index.html","fee5ed3274989f32327130bc88081ec5"],["/page/4/index.html","fa6769934620a42f96a541ede6cfb99b"],["/sw-register.js","07df6110645a78193645bd3103f6b65d"],["/tags/C/index.html","714950e615f958a05686f47e2d79ffd8"],["/tags/C语言/index.html","fce8021b52c6ebca21bb38fd3aea086e"],["/tags/C语言/page/2/index.html","e09d10536be90c4f71c0848f3578be98"],["/tags/C语言/page/3/index.html","8daaece3e59d63f077e31185c83ae32f"],["/tags/C语言经典100题/index.html","2709cf1f7dfe88e1ee92837ede701366"],["/tags/index.html","9ebed853c3aa7f78290cbde8efc8fc14"],["/tags/图床/index.html","ccaf1c051f49fac94bb34f6e7c6bca54"],["/tags/类和对象/index.html","34303581cd8800b3726d0c5b213115ed"],["/tags/计算机基础/index.html","b3b084a9c55f565021fc950f859b9887"]];
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
