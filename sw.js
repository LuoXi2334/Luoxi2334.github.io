/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","0cd33b2d326066bbbe9d133a9254f772"],["/2022/11/03/NOnote/1/index.html","7fccb280e40843aef9df104c99aef834"],["/2022/11/10/NOnote/2/index.html","134974bdcc937ac53c96a1429ef5e668"],["/2022/11/10/NOnote/3/index.html","019a1fb83d0c8b51e4e6f463ecdb2b4e"],["/2022/11/10/NOnote/5/index.html","83d2930ca32b7859df532a05bef80663"],["/2022/11/10/NOnote/8/index.html","221ce6cd56ce882f0400e6accf25fcae"],["/2022/11/17/NOnote/4/index.html","008d2d0806c641c598745996613512e8"],["/2022/11/17/NOnote/6/index.html","891f42027d168dca84c0071c1e8bfab0"],["/2022/11/17/NOnote/7/index.html","554d75458cf1c3dfeb9fac8b90a15d16"],["/2022/11/17/NOnote/9/index.html","7fd0ee822ea5ead0b477ff1f95ab9b1b"],["/2022/11/24/NOnote/10/index.html","8b81c0c09aeee76e23ca6c9cd1d8afd4"],["/2022/12/01/DEnot/1/index.html","de891d696a836f58c1a6c2b415744ba4"],["/2022/12/01/NOnote/11/index.html","64322e87aac640140e24aa50bc502ff8"],["/2022/12/10/DEnot/2/index.html","d79c5389e2082f37f938180770aa7675"],["/2022/12/10/DEnot/3/index.html","7d077fabdf6d5210e7fde6172bbe25bd"],["/2022/12/12/DEnot/4/index.html","7263b61538510d5da17481d29a9c9a04"],["/2022/12/12/DEnot/5/index.html","3fd82af57703963ea8a6e6c9451c5dc4"],["/2022/12/22/CTM/1/index.html","80c5f0bea5fb6a04f3a25fabb55d8838"],["/2022/12/22/CTM/2/index.html","5fd046762a5e7591fb33d38b26e44240"],["/2022/12/22/CTM/3/index.html","81c112f11189309905af3b12ebf1600d"],["/2022/12/22/DEnot/6/index.html","df102a85a97e4ab5347e7c38e16a3b0d"],["/2022/12/28/CTM/4/index.html","6edb59b48e33e4a015c0adb7c3f2cdd6"],["/2022/12/29/DEnot/7/index.html","c99b2864074cb3488a11645829ad5456"],["/2022/12/29/DEnot/8/index.html","01c4d6ee0fa43234f8011e35e6ec21fd"],["/2022/12/29/DEnot/9/index.html","33413b97286dfcb0d4f6eddda58f5f8b"],["/2022/12/30/DEnot/10/index.html","0c3a25a0c2e5f8effeed174641b9ec01"],["/2023/01/03/2023/Mon/1/index.html","a8f39be25cfdbe4ecd34a24c29cc59b5"],["/2023/01/06/2023/Mon/2/index.html","db9b8c04eee29bf46eaaf8830e745e0b"],["/2023/01/08/2023/Mon/3/index.html","76463e506da87a0d36f04675017c2e1c"],["/2023/01/09/2023/Mon/4/index.html","8ab2b5554d8931c6b6999aa207696e25"],["/2023/01/19/2023/Mon/5/index.html","b3917be48c744771e69ec281a1e89964"],["/2023/01/21/2023/Mon/6/index.html","799e938864360aa03a1ecbf50a7278fe"],["/2023/01/21/2023/Mon/7/index.html","6513cecf9c9e14e5c45008a6a948da4e"],["/2023/01/22/2023/Mon/8/index.html","fa318f37e4c93a49d579038b1105ab8b"],["/2023/01/23/2023/Mon/9/index.html","038fa275f65a8819fd27a12d6bf414e5"],["/2023/01/29/2023/Mon/10/index.html","0f2e396018ef02b4cebf3cd206b1a0cd"],["/2023/01/30/2023/Mon/11/index.html","9dfbefca1065a42399575c4ffdb98988"],["/2023/01/31/2023/Mon/12/index.html","5930445224fd5353dff30aab7ac6bac3"],["/2023/01/31/2023/Mon/13/index.html","5b09a94f7b6199cf394152dd69bb353a"],["/2023/02/06/2023/Feb/1/index.html","6a8f7ec52fb68723f35a8b0450aa85b9"],["/2023/02/08/2023/Feb/2/index.html","9a1c39d1fff1f58081e1a4b3c78532e1"],["/2023/06/01/2023/June/1/index.html","f383a02790955fa58842e892845e00e9"],["/404.html","f8fd0eaf12d524da2cb9ec943816ed41"],["/about/index.html","21902a753a61cb8a3e6d80eb29c72692"],["/anzhiyu/random.js","16e048acca23e6bb503900fcca52ce30"],["/archives/2022/10/index.html","1993f652bcda9e4a23c3299a5eb02261"],["/archives/2022/11/index.html","446e282e0ed96d9c6937cc06b02fcf61"],["/archives/2022/12/index.html","49ec29270cd70be6c94c92fdeb342a6b"],["/archives/2022/12/page/2/index.html","15afe710c83750c6ea0153c633c6fa45"],["/archives/2022/index.html","6aff8cd09fe7f4c1858e9b0870fd5815"],["/archives/2022/page/2/index.html","9302e078ddac0e52a07b20ce597c94cb"],["/archives/2022/page/3/index.html","17dbc1b069701bdcdd7d61822e48fcd8"],["/archives/2023/01/index.html","110fb595c31c401cf7ab543b5e8ae575"],["/archives/2023/01/page/2/index.html","32b46975ab1ef807e4c99ac83b354bb7"],["/archives/2023/02/index.html","a5904347f7fdf08a7a304e1e26478f99"],["/archives/2023/06/index.html","e9532e35f8fd0550deccf8996c9cfb19"],["/archives/2023/index.html","ed70c92c8c83d513f540caee8b6753b1"],["/archives/2023/page/2/index.html","a9acf04c7794a0f0d56949fde267e182"],["/archives/index.html","4dfa0865d6daa95c52a41448456f0107"],["/archives/page/2/index.html","6c4eb68d953a27a8ad1210036291f990"],["/archives/page/3/index.html","ad9133a2609d0545eb16f2469ddef77e"],["/archives/page/4/index.html","0c6b8e8e91dbaa5cd84628a970bed0e5"],["/archives/page/5/index.html","4e32228bc7900d9a264c3e470a163606"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","7877974e5cc5d96d9f57dbf960663523"],["/categories/C语言经典100题/index.html","c344438d87780f24569c3406fdb15edd"],["/categories/c语言/index.html","8d407f114d04cd293e36459a82c09eaf"],["/categories/c语言/page/2/index.html","fc68076ee319a763b396ee3aab4ef485"],["/categories/c语言/page/3/index.html","ca62529a0385521b90781322eb4f33c3"],["/categories/index.html","889dc5dec02f747ac9cea8dc8c1e4741"],["/categories/经验分享/index.html","be51e42cc23177f56af9bc53db364fb6"],["/categories/计算机基础/index.html","dc0e84b3108ae210f5816a623a772b39"],["/comments/index.html","f4f0ad879e9293011860e080be650c0d"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","988fd6891750ba4775129f99163b397a"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","3c62ad4801d28db11254e5c2327ceb2b"],["/link/index.html","29aa840c50282abd7d5e8386cf942bbe"],["/page/2/index.html","cb2e263165ef2aead423c2b5a7fbde25"],["/page/3/index.html","4fe9db7ac7f64c62ce0ecf3d2a55642f"],["/page/4/index.html","06e8cd67d8214e42b318cbb6454c5cf6"],["/sw-register.js","fd58d16fe623f46d4a963895d6cd40ca"],["/tags/C/index.html","37b858a2841231e5ebaf15701016b3c0"],["/tags/C语言/index.html","9f9ebe8252e049b506a76ec1c8bc022b"],["/tags/C语言/page/2/index.html","b95ba8e2edff17ba9c06888b92f64f17"],["/tags/C语言/page/3/index.html","da33d69c3ecb626ed5955b721881a63a"],["/tags/C语言经典100题/index.html","e143a515921667115cdaf435a4e2abd0"],["/tags/index.html","96cf87aac3be23936c0e41a1b04b9377"],["/tags/图床/index.html","5d447174a70cf2fd8c0a61bc9b43e0dc"],["/tags/类和对象/index.html","31a57e4b9a22a1076542e2cc74a88620"],["/tags/计算机基础/index.html","06931c99312d4234823ab1f77841fe59"]];
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
