/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","76abef6a01c42824a2d830b0f905c2f2"],["/2022/11/03/NOnote/1/index.html","6473161a66b3c731a656de4bd344d7f1"],["/2022/11/10/NOnote/2/index.html","0c6ee1728fcf66097adecb4e7a156ae0"],["/2022/11/10/NOnote/3/index.html","5254034d76356c60998db807f0d64c24"],["/2022/11/10/NOnote/5/index.html","5dfd3b67d67df1776ef7f3919b25bbf6"],["/2022/11/10/NOnote/8/index.html","256fbd7a4c3a092bc8814b98738151d6"],["/2022/11/17/NOnote/4/index.html","6cb32ab378289b2c43edd0181b83c12e"],["/2022/11/17/NOnote/6/index.html","8edb493340b770fb64bafe0342d79cf3"],["/2022/11/17/NOnote/7/index.html","db733e504841c443057a7e03a38bdfa3"],["/2022/11/17/NOnote/9/index.html","badfad3406969921c6513bd70e1e94cd"],["/2022/11/24/NOnote/10/index.html","0a6e4067b3638424550b8d8f794c3966"],["/2022/12/01/DEnot/1/index.html","257b47383aed148b525379845ff6214e"],["/2022/12/01/NOnote/11/index.html","030d0c38d8d02b74d889380c898df08c"],["/2022/12/10/DEnot/2/index.html","28d257f47a15e8c7f183135873dc1d89"],["/2022/12/10/DEnot/3/index.html","67432d987841f0eb466f4db4a76a6eb7"],["/2022/12/12/DEnot/4/index.html","2bfa30b63fd9a48f076a912992a23e85"],["/2022/12/12/DEnot/5/index.html","245524faad216c15d38e3d22138ab030"],["/2022/12/22/CTM/1/index.html","ccfff8e4fe58cc72d243a83b40bb1518"],["/2022/12/22/CTM/2/index.html","55199a23d5e6cb9aa16589bf8a8d08ab"],["/2022/12/22/CTM/3/index.html","a7539725bea766c93ee0ad62b483680a"],["/2022/12/22/DEnot/6/index.html","af68fb486ee3fb6c34bcd1c8ef1a4dfe"],["/2022/12/28/CTM/4/index.html","ffc63b5300fcfaa024264c3867236ef6"],["/2022/12/29/DEnot/7/index.html","1dc2b45a0a77ceddc4d10cdfd2f91661"],["/2022/12/29/DEnot/8/index.html","18b4633573eb15965e00c6f3f732dd04"],["/2022/12/29/DEnot/9/index.html","6d7e744cd06b7769a977f61083505118"],["/2022/12/30/DEnot/10/index.html","827790cbeb7b45817d54d3d4f6e353d7"],["/2023/01/03/2023/Mon/1/index.html","1e8b47857b79f59718fbf9ec6f92f74c"],["/2023/01/06/2023/Mon/2/index.html","4b5ce08ce157c5118f07ab18a2e1938b"],["/2023/01/08/2023/Mon/3/index.html","50c495e0658a2ddbf4b9ed49ae360c12"],["/2023/01/09/2023/Mon/4/index.html","b0e96df954e2ac2380eedb9b8f2dbcc7"],["/404.html","84b64b05bdacc52371a7c83a227f7d8b"],["/about/index.html","926d32c742be04b697a363ba98474214"],["/anzhiyu/random.js","629ef36d5527e1d48437001a24fa8d4a"],["/archives/2022/10/index.html","ba3ed48ee458d24a6840b038907cae4e"],["/archives/2022/11/index.html","b15ba1c3e46c638622c9ea95179a413c"],["/archives/2022/12/index.html","75c1b10aa9d66ac91e271de2b859e2ef"],["/archives/2022/12/page/2/index.html","bf8a605dff43370cad0a4c3b99e7e635"],["/archives/2022/index.html","e9f154f6b75fdedf727703e6e1b95556"],["/archives/2022/page/2/index.html","04095c173c6b6bce8132665bac2c2aed"],["/archives/2022/page/3/index.html","ab7a56b8b2feb0533ada6de3fccbb280"],["/archives/2023/01/index.html","b70c01803f5db46324e11aac2aa79e37"],["/archives/2023/index.html","f04c034b2bbf3e884caceade8b6ed6d9"],["/archives/index.html","ffea4836c833005f87445f4bdd63161b"],["/archives/page/2/index.html","9da2b8d8813d141379c4f592c36cadcc"],["/archives/page/3/index.html","84ef5f14fdad00341373ec85f8503fc4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","a3722a45c8b3fa1c8e3c94cbfb060f5b"],["/categories/c语言/index.html","a0c104fc18fd71e508d9294f3eafdfc0"],["/categories/c语言/page/2/index.html","64e3e6681335f5704a9ca509d167da6d"],["/categories/c语言/page/3/index.html","9cdfbd867171d62267f1f6ed6a2238ab"],["/categories/index.html","87bd63d11f05548abcd3bc2abb20f081"],["/categories/经验分享/index.html","f86e208e8a64ee901ff64c96ddc1733d"],["/categories/计算机基础/index.html","d533f6552a4ce8cdaf4b748b2a5a47ad"],["/comments/index.html","29a0e5e6dd561b9d2d970b9eaab4cb88"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","677d48809dbaab937caf29150cd7f126"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","0f9a69827c21dbe9ba04e31b3b76d43d"],["/link/index.html","d06568f711e9cf062ab7c01fe277d23b"],["/page/2/index.html","8a34b683167220631f98a3693a24cb46"],["/page/3/index.html","a7bcc82be2bbdde3dbc1ff3d6295cab0"],["/sw-register.js","1ba70c2f99d39695ad5a895e222b3cb1"],["/tags/C语言/index.html","a42a60cac3c2b54c695b3609b402ba02"],["/tags/C语言/page/2/index.html","1136331a04e222001674067a2c28d128"],["/tags/C语言/page/3/index.html","7b0e491b234cb79c1c53410c79a3f7f3"],["/tags/C语言经典100题/index.html","3e555802aea8a915fbf2f759a315734f"],["/tags/index.html","787538cb64ac5f2fbea9d5deb69c110f"],["/tags/图床/index.html","108b226f1d432034b1d7aaa37c680403"],["/tags/计算机基础/index.html","4ab30f5e76cf1a5699c7f7e8a0c5d60a"]];
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
