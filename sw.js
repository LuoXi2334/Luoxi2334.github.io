/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","b9c3194ffd2e1fa615cbdfe63480db04"],["/2022/11/03/NOnote/1/index.html","b502af25a37bbf6c9d6d6299675881be"],["/2022/11/10/NOnote/2/index.html","300a4be64b3b6fe0607ff1310f573352"],["/2022/11/10/NOnote/3/index.html","35d3037508050509e795d86d670ef8a5"],["/2022/11/10/NOnote/5/index.html","7f0a376fba311c9ea5cdfc6afc173e49"],["/2022/11/10/NOnote/8/index.html","a732528e399993c1fea1497d638c0177"],["/2022/11/17/NOnote/4/index.html","5e9d2e466ce0b5f9032df15d7f82bbec"],["/2022/11/17/NOnote/6/index.html","4756731a9b5bb20a49313d5c9c5d8e06"],["/2022/11/17/NOnote/7/index.html","d0868c65c72ddad54de1464dd142af3a"],["/2022/11/17/NOnote/9/index.html","56263899ca84c704d35e9bda783c629b"],["/2022/11/24/NOnote/10/index.html","75cb08247b2734072bafe8898b8b3ef3"],["/2022/12/01/DEnot/1/index.html","747999ee12edee26f48f810f33efd212"],["/2022/12/01/NOnote/11/index.html","add6715b72ac010ca45220fe2c056e41"],["/2022/12/10/DEnot/2/index.html","43c9930cae337e6c3146fce85f150083"],["/2022/12/10/DEnot/3/index.html","7bbfd578ce4afe5e477f14fea14cabad"],["/2022/12/12/DEnot/4/index.html","a661462ebeacb994c56153c6e9081d6e"],["/2022/12/12/DEnot/5/index.html","0afd693eeca94bb85e41e969c3910ffb"],["/2022/12/22/CTM/1/index.html","8eafaee628ac35e6b5adb413e9892c6c"],["/2022/12/22/CTM/2/index.html","cc4c2ca2857d12b445241e1bd248d4e0"],["/2022/12/22/CTM/3/index.html","ee795e5f2a4481265275491523a708db"],["/2022/12/22/DEnot/6/index.html","009f4969448106e0e207086c26a7706b"],["/2022/12/28/CTM/4/index.html","cd50a3e69864826999798757a3c77a0f"],["/2022/12/29/DEnot/7/index.html","fc534550614ab1a0e5f846605c25d56e"],["/2022/12/29/DEnot/8/index.html","8db2defc36e957a17565a9266bfee187"],["/2022/12/29/DEnot/9/index.html","f80b680fca198e7426a4788630557168"],["/2022/12/30/DEnot/10/index.html","4afe8d523f008bc9c5e3dce3561a51bd"],["/2023/01/03/2023/Mon/1/index.html","6a6efdf7249237433079f5868f2827cf"],["/2023/01/06/2023/Mon/2/index.html","03e9773b0b75eb7965f996dea1c11886"],["/2023/01/08/2023/Mon/3/index.html","e1b9ae7c8078db0f2dc3b5c835f7640b"],["/2023/01/09/2023/Mon/4/index.html","0939c3ff010450e3b8e8ef0349389268"],["/2023/01/19/2023/Mon/5/index.html","fc86482eaaa51d8f7ea82fb0c2c445ee"],["/2023/01/21/2023/Mon/6/index.html","0d9535a81e572715769ad0edccdd2c66"],["/2023/01/21/2023/Mon/7/index.html","46a235ea0c177463ddf0a04d039388dc"],["/2023/01/22/2023/Mon/8/index.html","02d64dce6ca22252c25f0a6456c18579"],["/2023/01/23/2023/Mon/9/index.html","ead9205a0dc4aff4c0cf0295f51d702e"],["/2023/01/29/2023/Mon/10/index.html","ea35bfa14e65d2c1d68e023af215086f"],["/2023/01/30/2023/Mon/11/index.html","bf5a36a2b809d8b36d0a364ff97a1cfe"],["/2023/01/31/2023/Mon/12/index.html","8cbf9727800ec55ffad75f5df87d287f"],["/2023/01/31/2023/Mon/13/index.html","c239d33440b26305f4be67d4d0ea33a0"],["/2023/02/06/2023/Feb/1/index.html","393b152fdad66789e4daf9cef43dd8da"],["/2023/02/08/2023/Feb/2/index.html","6fb65379952f7fd98d94741b2b0c816d"],["/2023/06/01/2023/June/1/index.html","494a73492ed04ce5255a9714403720cd"],["/2023/06/14/2023/June/2/index.html","f385cd713240780ad62de4474df3b46b"],["/2023/07/27/2023/July/1/index.html","0ef7b0c043d4720e4cf66616b5c5c688"],["/404.html","bf970c60841e7badcc2df46da8026e65"],["/about/index.html","dc9df575b509ce773d4e712ed2341a17"],["/anzhiyu/random.js","6513ade5902a9b4ded0d60a614bfcb35"],["/archives/2022/10/index.html","ed9c2ecc15e77c72544b781da5772c2a"],["/archives/2022/11/index.html","44ef097f52047c5fd051c18ca7c849c2"],["/archives/2022/12/index.html","d49860b46a673af87a48e72da138d8ed"],["/archives/2022/12/page/2/index.html","b9df544de0a365747f0bbf20fb8bde82"],["/archives/2022/index.html","0386bb960679c762c036a596d902d0da"],["/archives/2022/page/2/index.html","606b7113538fcdb7202c9e3bdfe9c307"],["/archives/2022/page/3/index.html","7553139b650755e3352f79ea84570cdb"],["/archives/2023/01/index.html","9c1c1fc6b0b482fe8a18f3ad87419a18"],["/archives/2023/01/page/2/index.html","a23aa00cb93e757b55909a768e9fd021"],["/archives/2023/02/index.html","2a0ccaac0115d3aac4deba2cd2414afe"],["/archives/2023/06/index.html","c7fe9244d7a1cdee89a286458e98deea"],["/archives/2023/07/index.html","9bf08b1424a02d77c695f51b697ab129"],["/archives/2023/index.html","872875731dd6bbe739d9ed80642f130d"],["/archives/2023/page/2/index.html","6bda2d582bd06814cbf565cda5165153"],["/archives/index.html","260c7dcbe5bfdd8376bbed1ba4748749"],["/archives/page/2/index.html","6a8ed45f28a65a82d8371e01cbd29870"],["/archives/page/3/index.html","ae4a801ada3c705222936d462c41c949"],["/archives/page/4/index.html","6be2a7002f76017335c557d3ec6ccb82"],["/archives/page/5/index.html","109f194b4f8464d7808b368aa52d8c5f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","734e59dd8ed7d2869217fe6e5aa32319"],["/categories/C语言经典100题/index.html","ec30b68a885da08f941b4343e892abb5"],["/categories/c语言/index.html","9cc811a894765ad17a1c8d1169471504"],["/categories/c语言/page/2/index.html","d9792e2817993beece9a979c6f42bc6a"],["/categories/c语言/page/3/index.html","d7097fa8758d61b6aeb0b924bef58f96"],["/categories/index.html","0eb9105135d0fb2b2b65c0ae3979b893"],["/categories/经验分享/index.html","98cde2b7b8dabb7be569cece55e8e5f8"],["/categories/计算机基础/index.html","3de5cf70eaa3b925dc54ac3af7cdb3a3"],["/comments/index.html","9ee7631873f8848265a765d3cfb764f3"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","baba0243ece5b60703fecf636581897e"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","5d84ef14914469f58936fd29472e4377"],["/link/index.html","1a5675183ea33f216c761a4d1108a49e"],["/page/2/index.html","6119a9fab4ff5a91f5d2abb652d843bc"],["/page/3/index.html","9f19b6a7524ac6571777cfa8f65416e7"],["/page/4/index.html","a87d1e3ecce7ed60d78f6b447f665044"],["/sw-register.js","e169617c92d9823d906e89a985951e36"],["/tags/C/index.html","e80cfd9c6d5ca699edb948dbb410a6ec"],["/tags/C语言/index.html","c8463707fec389ec161d2add6ac3a674"],["/tags/C语言/page/2/index.html","6de49fe9e96f07761d72560d5cc413c4"],["/tags/C语言/page/3/index.html","f91359fb70672c78c6bb1fd2ff23ca6d"],["/tags/C语言经典100题/index.html","26d0f10343c4224d27fd6414d94b99b7"],["/tags/index.html","38fe0d788487b7e532abf6e97bd1faf6"],["/tags/类和对象/index.html","78a407e99905cc237e3ae017ad6f5c97"],["/tags/经验分享/index.html","e9dce6907ec007d61713a7a64ff3d107"],["/tags/计算机基础/index.html","d3d4ca9c756555a85c709447cff66fac"]];
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
