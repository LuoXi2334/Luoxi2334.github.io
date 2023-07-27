/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","b91873bbe5c9833816005f01b6056178"],["/2022/11/03/NOnote/1/index.html","88f1e0cab81478b9eacb1310a35e0b05"],["/2022/11/10/NOnote/2/index.html","67ae0daee39f762a92328edad2cf5f8b"],["/2022/11/10/NOnote/3/index.html","ebbc83234a4b705e3dc85dd781b59699"],["/2022/11/10/NOnote/5/index.html","77e1f0fa9ac01af3c4dfd1dc825ffef6"],["/2022/11/10/NOnote/8/index.html","9be141a92db977c9a439593c31899286"],["/2022/11/17/NOnote/4/index.html","b08f73cbd182d54eabb7988b30e80fb9"],["/2022/11/17/NOnote/6/index.html","9956bb32e35ca6f0cd2f4f43cec5cd04"],["/2022/11/17/NOnote/7/index.html","a2df152a16ef0a4b4b468628969d7c53"],["/2022/11/17/NOnote/9/index.html","eee013961bff4b69fb726cedf2418dae"],["/2022/11/24/NOnote/10/index.html","a055f99f024eb38d9638c925f3336d61"],["/2022/12/01/DEnot/1/index.html","57fe8accde9de821ec79d53456fe647a"],["/2022/12/01/NOnote/11/index.html","e7fccdf35e4811a0564968afafbbeadd"],["/2022/12/10/DEnot/2/index.html","49655e4886720bd9af8b109396fadfd1"],["/2022/12/10/DEnot/3/index.html","e6635c2100ece9dfc562d657e6715271"],["/2022/12/12/DEnot/4/index.html","4ae254273e1e1f06048953b94764d3b1"],["/2022/12/12/DEnot/5/index.html","cec8fb8042e1e5ad73b68f299b09604f"],["/2022/12/22/CTM/1/index.html","713faabdf8a7202ecb3927f50d9fa04e"],["/2022/12/22/CTM/2/index.html","6b429ec6861f5b786ae00b69a1ce9338"],["/2022/12/22/CTM/3/index.html","4aef0335a4c7d89e838bc9d9050ecfe9"],["/2022/12/22/DEnot/6/index.html","38a66360c74a560ba7e3554ff2250cda"],["/2022/12/28/CTM/4/index.html","ac68d28713546606383aec63059720de"],["/2022/12/29/DEnot/7/index.html","8d58b8c857d2575b4b1192cb1fc6a1dd"],["/2022/12/29/DEnot/8/index.html","7da1e2d87e64fe3aaa66a57b1641fed8"],["/2022/12/29/DEnot/9/index.html","117587130d6768eebfe06754a5977683"],["/2022/12/30/DEnot/10/index.html","86606e0d2d982ac3f8fe72ce4b637d80"],["/2023/01/03/2023/Mon/1/index.html","ed64d368f304bf120eb2a2d4022761ff"],["/2023/01/06/2023/Mon/2/index.html","30ef40716801baf9f10a7e71a3dddff5"],["/2023/01/08/2023/Mon/3/index.html","94b13b44e30542a49db0f611d7411835"],["/2023/01/09/2023/Mon/4/index.html","ec3305b5440a6e508d995c6ccc46bcb0"],["/2023/01/19/2023/Mon/5/index.html","a884fa54e644d585d0272bc21cf6e030"],["/2023/01/21/2023/Mon/6/index.html","8fad78f2f2bddd3e886ec143ff6b3375"],["/2023/01/21/2023/Mon/7/index.html","e0a600bb14bb35d10de53918400a6ef6"],["/2023/01/22/2023/Mon/8/index.html","02fa500d442047e78b9b9ce3a16770e0"],["/2023/01/23/2023/Mon/9/index.html","466ef0ce740570f84e98e8dc91386b76"],["/2023/01/29/2023/Mon/10/index.html","c86a68fd83555ee6a8cd6dbde15e7744"],["/2023/01/30/2023/Mon/11/index.html","bf384804de5ac19c261ce78d77896665"],["/2023/01/31/2023/Mon/12/index.html","8ad97929a4bc91b67b16ad27a62ee2ce"],["/2023/01/31/2023/Mon/13/index.html","541335def91b8eb11d7fb2bf8700031b"],["/2023/02/06/2023/Feb/1/index.html","077a3a7bf81c0038c08b1033c2caf40f"],["/2023/02/08/2023/Feb/2/index.html","31e44d29caddf8032308ece36273d043"],["/2023/06/01/2023/June/1/index.html","149c4428a49ead6c6744f788be6e9404"],["/2023/06/14/2023/June/2/index.html","d7828707f788ed39101e4d3a95c2b712"],["/2023/07/27/2023/July/1/index.html","e69adea9f3060f385244a92043ac9eb8"],["/404.html","0677754ee6b5fb4f7631ea0d141c8080"],["/about/index.html","e34e0716fc1b506f057ca391832c37d3"],["/anzhiyu/random.js","5e3914213ee484f97f6dc42e9605f8dd"],["/archives/2022/10/index.html","305d5861f17fa6dcb017f0c9fd5483b9"],["/archives/2022/11/index.html","5285227c084452b72ed9fcfcd132fc50"],["/archives/2022/12/index.html","b131ec7e2a4b65ea944db92735134b16"],["/archives/2022/12/page/2/index.html","1bfb19f828b406b6be9d189c87008a5b"],["/archives/2022/index.html","d18289f167dcc0f5c5e3d83269a83fff"],["/archives/2022/page/2/index.html","79ca8095e65c985603de0d5c31771e76"],["/archives/2022/page/3/index.html","ec3591124d9f85847145c1377e5daee1"],["/archives/2023/01/index.html","6469a634dea7f8fd052742d1014f6e47"],["/archives/2023/01/page/2/index.html","692606b9afac9e35030d6df047c3543a"],["/archives/2023/02/index.html","277090f5b542f0a289d2427aaaa84bef"],["/archives/2023/06/index.html","d26209813d06c89e8909048be368c562"],["/archives/2023/07/index.html","09c67d7dc72970e79031f429350b2ad7"],["/archives/2023/index.html","fb0c5b35ebd54eff246bc4c5f150c728"],["/archives/2023/page/2/index.html","f210cdfae11ad9b449e586df658b0edc"],["/archives/index.html","0a343880ce8e9b1cd3239d1c8d666a9e"],["/archives/page/2/index.html","47f3ce350c4f0f6da6912bacaa7e0501"],["/archives/page/3/index.html","22b2c03c8f59095fbc8c8e92df808acb"],["/archives/page/4/index.html","b9a8f01d5d679d3ee7d816b416b7f405"],["/archives/page/5/index.html","0ccdb5af969cd0770f6fc924c963a932"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","ec34522c767ae24cd26afff485786927"],["/categories/C语言经典100题/index.html","f3428a7f517562698afbc0372e2f77f9"],["/categories/c语言/index.html","1807d6c3f496c226aafc8020f1e47b95"],["/categories/c语言/page/2/index.html","7ad7e56ac2a5513c9b48286702385c3a"],["/categories/c语言/page/3/index.html","3b43b09b868229f3df565035185613ec"],["/categories/index.html","67c2d79b4a2423826582aba99007d4e8"],["/categories/经验分享/index.html","1a1527fec295ca4670a28d119872457f"],["/categories/计算机基础/index.html","bd113f761131360b3afebfa6790d595c"],["/comments/index.html","7cc2e08a0110e83644449859505905f7"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5f09c58209c90397a66de08f42ad7fbe"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","4616c79e400c4a45a0351215982022e6"],["/link/index.html","405bbcd1cb8f8c20db12a71b3a670b01"],["/page/2/index.html","5a2de47ad6ebe13384788c4c759c0a7b"],["/page/3/index.html","e8966d5e5f0774a38bb0bd0b57953dd6"],["/page/4/index.html","30992e3da6dd2de9f4dc1194710295ac"],["/sw-register.js","bb558b399cf3aa99eacd840973fd0925"],["/tags/C/index.html","ceee81f817ed4f36309e2bc10a946690"],["/tags/C语言/index.html","d2a271ab242d66fc82a8cef54ef2d54c"],["/tags/C语言/page/2/index.html","9a844a24823ad7be8ed80edbacaa2281"],["/tags/C语言/page/3/index.html","db177c2c1e129a3f5082f5c21e19379c"],["/tags/C语言经典100题/index.html","b200ebfc021f89448804cb4a8ff7afb0"],["/tags/index.html","1b98d4fa6652c98c17c1beec1c3c60f3"],["/tags/类和对象/index.html","67acef06ad03e6a7a25f584249b8b27b"],["/tags/经验分享/index.html","9c960a8677389e99fa9ac4e2a60b8f97"],["/tags/计算机基础/index.html","bfa561690f1c8fdfa4dc8b3148a77dd1"]];
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
