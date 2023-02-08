/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","2fb05a263f1ace1e2587706cb6b179a8"],["/2022/11/03/NOnote/1/index.html","cbc0d2465d7a1d43b09c739191e35c4d"],["/2022/11/10/NOnote/2/index.html","0e451bb7092d5524a940d3ffae6c4eed"],["/2022/11/10/NOnote/3/index.html","59f3107c01f5ce27a81ad74631a37cde"],["/2022/11/10/NOnote/5/index.html","9e9bdf0f6a7f1c2a5625ecbb064797a5"],["/2022/11/10/NOnote/8/index.html","24c3b981d1f1d3a749f96a1d31b9bcf4"],["/2022/11/17/NOnote/4/index.html","6cec1934185af6ec8212e6696c7134ea"],["/2022/11/17/NOnote/6/index.html","6ed20749b45922aaa766a131571370e0"],["/2022/11/17/NOnote/7/index.html","14a17febf0678ef9394eda3939342d2c"],["/2022/11/17/NOnote/9/index.html","b05148da49ef0ceaa5416a363edfa93f"],["/2022/11/24/NOnote/10/index.html","853603e4c362b6b6f39b890bc3d79221"],["/2022/12/01/DEnot/1/index.html","be28fa74312be95ecca58b2fa23aa2c5"],["/2022/12/01/NOnote/11/index.html","8b90685c93259a979caae2973d7acc17"],["/2022/12/10/DEnot/2/index.html","edce618914abd50c454c2a5eaab38ef6"],["/2022/12/10/DEnot/3/index.html","514078997c8e29259b4df15ef53e66b1"],["/2022/12/12/DEnot/4/index.html","c1962192333f99e043d7b3e8e9a95467"],["/2022/12/12/DEnot/5/index.html","540313b592343f5710ffd42a9b7db668"],["/2022/12/22/CTM/1/index.html","83f1a6a68931f1ce07a3ee0ad5ece7ba"],["/2022/12/22/CTM/2/index.html","1c1a6cdc6cf25efa55e4ff4e3f1f66cf"],["/2022/12/22/CTM/3/index.html","1996329d6184959d8728777be52b0ecf"],["/2022/12/22/DEnot/6/index.html","68702ac6121f423dc5c624afb92d4bea"],["/2022/12/28/CTM/4/index.html","c165dbcfd3c5701e7d0697a9e3dbd8f1"],["/2022/12/29/DEnot/7/index.html","13bb529340283252191bca0400eafea6"],["/2022/12/29/DEnot/8/index.html","39fb5ee6d75a5439fb162795c9fc8a1c"],["/2022/12/29/DEnot/9/index.html","6b96afacc30496c8c453cf2ffc110e9f"],["/2022/12/30/DEnot/10/index.html","d920d4dc690f47aebd1b06fcc53dd0b4"],["/2023/01/03/2023/Mon/1/index.html","123e2c88cab061a32158d7fbd97307ef"],["/2023/01/06/2023/Mon/2/index.html","28ee9fe15767525cd6cb7fc535260c55"],["/2023/01/08/2023/Mon/3/index.html","99675609335db22250a215115cb30956"],["/2023/01/09/2023/Mon/4/index.html","548fa40ea7cea9b153f7806ed1369cba"],["/2023/01/19/2023/Mon/5/index.html","9346dc96650a3f6bcc38af428cc73fa7"],["/2023/01/21/2023/Mon/6/index.html","a2d7f9c6646585e9de0f5e9841750ee6"],["/2023/01/21/2023/Mon/7/index.html","04c4c308a8a39279f9efe5352196aa3f"],["/2023/01/22/2023/Mon/8/index.html","c56e20d88ca31ca48d6c47f5c732029e"],["/2023/01/23/2023/Mon/9/index.html","4b885a70880a70a2530f84dbd3e638d1"],["/2023/01/29/2023/Mon/10/index.html","31a2d4823842b45baca02747a56571d0"],["/2023/01/30/2023/Mon/11/index.html","838e94feb5081b2d72a33d46889ac5e6"],["/2023/01/31/2023/Mon/12/index.html","45cd097c084843431a367db0d8fecbaa"],["/2023/01/31/2023/Mon/13/index.html","efff7cfaaaf431c3a31c1ecbd019d5c7"],["/2023/02/06/2023/Feb/1/index.html","5d6dc7f1b0156d6d595ac5d18282c9bd"],["/404.html","a6c830cc7cd581d7e235297044e8e3db"],["/about/index.html","2c65c13394d9cb3c0b8a99cababc3805"],["/anzhiyu/random.js","6d2c2c89071dd517457fbe846ff4d41a"],["/archives/2022/10/index.html","a5c606336e0dd49c10678d147c52c772"],["/archives/2022/11/index.html","fa0c0a2a69d824fdcaafd1635d409c89"],["/archives/2022/12/index.html","363ebcc0a33c6b6d3cf9f47e02faaade"],["/archives/2022/12/page/2/index.html","bb13df03fd0e1babcf223baaf41bc412"],["/archives/2022/index.html","ab8fd9085b6abb17d35e4503863feee7"],["/archives/2022/page/2/index.html","152246c2f3a3d5806ae726598b84d74f"],["/archives/2022/page/3/index.html","97a183d47bf85d0f084de0a62697ff71"],["/archives/2023/01/index.html","d06a262f8427a4f9ed0e842578d9ca64"],["/archives/2023/01/page/2/index.html","b09cd6bfed193acfb334ee28b5778053"],["/archives/2023/02/index.html","38b67ff2db589df7034dbe4da9c35403"],["/archives/2023/index.html","15f161cddcc51d035ebd656651415eb5"],["/archives/2023/page/2/index.html","e294c68fa358a136be5b3a1589f6323f"],["/archives/index.html","d3a22cd8cf3ebdc4cd0c1379ed57c2b7"],["/archives/page/2/index.html","9a2fccf8db81ac0f98b0ed1737ecc66e"],["/archives/page/3/index.html","55308d3fc57f9c1e7ce88a34c3b9353e"],["/archives/page/4/index.html","c5096452b8efc4b3cffd03946dffa825"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","6d53d750640993caba7e59f27921f173"],["/categories/C语言经典100题/index.html","f644670967f24617bcf84f8e9789da94"],["/categories/c语言/index.html","f95d7465ba3bf04060f17b0101d4904c"],["/categories/c语言/page/2/index.html","8030164cd0573a0a8b1c7dac51609032"],["/categories/c语言/page/3/index.html","8faa8c3b5efaedb2d9943b99680d8db5"],["/categories/index.html","1e4e8a1143d6626409c6db1c12a85a1e"],["/categories/经验分享/index.html","456ce8b33b694b168872440517fce9da"],["/categories/计算机基础/index.html","81ae9e79bbc5828f76d0372c8f0ef0cb"],["/comments/index.html","4596fbf6ef9604ed12f4ca7d80842713"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","dd78817a9eb3aed94d05838c1db2e905"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","aee369a0e93751f60ff6f644d5492cc3"],["/link/index.html","86792b8a2b967d05c0bf46fe555b312f"],["/page/2/index.html","b416c311283e5359c104d8433ee40eec"],["/page/3/index.html","3cd3cbe58530a3065c54c074b4d46456"],["/page/4/index.html","b9e1b759fc79a8d8746d9f92356a0d61"],["/sw-register.js","1016c0c2d7c034500ea65176ac3dc980"],["/tags/C/index.html","703571d0fbe948bca61890e5f847a822"],["/tags/C语言/index.html","868c87ae04ae756ad3d218ac1bae0382"],["/tags/C语言/page/2/index.html","70d367a54c18cc8f8344dcf1b66d3071"],["/tags/C语言/page/3/index.html","4058e4275a63ef738a17b4e611da207b"],["/tags/C语言经典100题/index.html","cbf67de17213d845e25cd0ff7550b96c"],["/tags/index.html","0d8ca47674421c7f6e234556c400ba7d"],["/tags/图床/index.html","b36ae0d8438f0f0a18b6cfb55c31573a"],["/tags/类和对象/index.html","35f9f3815890e09546e814ed505ac926"],["/tags/计算机基础/index.html","fb2b69dd08cffc61df07115d8ea7b953"]];
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
