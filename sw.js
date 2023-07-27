/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","422ab70030372ad241225bac4b22c1fc"],["/2022/11/03/NOnote/1/index.html","7cdd47f3fc7ccd5a0731e133f8a2c525"],["/2022/11/10/NOnote/2/index.html","3ba79517f3010c99a9eb991f434b85d9"],["/2022/11/10/NOnote/3/index.html","95862ce622b7bb075388eecb9d49d85e"],["/2022/11/10/NOnote/5/index.html","23b8acda2f4793d448b7d3800b2ad0e3"],["/2022/11/10/NOnote/8/index.html","9e5584f5a435e34e61e54e74e2e463c8"],["/2022/11/17/NOnote/4/index.html","11688ff6df5bb2e65461c69b71a40031"],["/2022/11/17/NOnote/6/index.html","46b45e5bdfbc798b0b17e77fb9d8ca2e"],["/2022/11/17/NOnote/7/index.html","7702b3dfea5afcc431efd796550d6c87"],["/2022/11/17/NOnote/9/index.html","dcf9e85f07f89b0943258c86d97353ec"],["/2022/11/24/NOnote/10/index.html","8554257f38fb2b1b3a28397a38abc260"],["/2022/12/01/DEnot/1/index.html","0356b5bab8e937a798aea32c5470427f"],["/2022/12/01/NOnote/11/index.html","ecf9a1b1daf0fcd428e8127eeb3bc259"],["/2022/12/10/DEnot/2/index.html","b77199c54f4a51c560cc4945920ca5db"],["/2022/12/10/DEnot/3/index.html","1d5e5deb539506bcf8eb88d602fcc64b"],["/2022/12/12/DEnot/4/index.html","b61acd70c8a36a6c2db87579a615e2ae"],["/2022/12/12/DEnot/5/index.html","1bd9adde0f74213d3cd73d7d737935c3"],["/2022/12/22/CTM/1/index.html","0e272a4e5bbc05041d6161fbe7ba7d2b"],["/2022/12/22/CTM/2/index.html","066b5c562906e8a94f087ea29ea38d96"],["/2022/12/22/CTM/3/index.html","be152b26650101bfa0bbb3e79002b8f2"],["/2022/12/22/DEnot/6/index.html","7d7ed83ed703bd23d56024eaa0c50aa0"],["/2022/12/28/CTM/4/index.html","ef03564b8e121ef15d4150b798f7d400"],["/2022/12/29/DEnot/7/index.html","670a25cdbdbc0a4d3b11b22aebc4c7f0"],["/2022/12/29/DEnot/8/index.html","d0ad26941a18210a07cd2b283db12c18"],["/2022/12/29/DEnot/9/index.html","5d89c083193fdb383de402d290458690"],["/2022/12/30/DEnot/10/index.html","370b791943abd72f5b3cbdae2e9ed145"],["/2023/01/03/2023/Mon/1/index.html","38a289489d59b05e4faa9917759e79a8"],["/2023/01/06/2023/Mon/2/index.html","767241961c7db4c0ab5d63f001d29ba4"],["/2023/01/08/2023/Mon/3/index.html","e90a325b4c489eae533540400ced3e2d"],["/2023/01/09/2023/Mon/4/index.html","f94c1785404cb821f45ce2e7ac78b77e"],["/2023/01/19/2023/Mon/5/index.html","b694384b3869448dd5a8e58c5fa9a07f"],["/2023/01/21/2023/Mon/6/index.html","b9f32c33ba3b7516ddac34474b39a745"],["/2023/01/21/2023/Mon/7/index.html","241069b6178bc84f36dbffa6107c9750"],["/2023/01/22/2023/Mon/8/index.html","405782b2bde0c52eea03b0f2cfbad6fa"],["/2023/01/23/2023/Mon/9/index.html","98c5bcf69afeb55c41ffdbbbef7c56c5"],["/2023/01/29/2023/Mon/10/index.html","4125bf04f1b1e043beed31653a3169b6"],["/2023/01/30/2023/Mon/11/index.html","dadc2034cb19c4928d5f75b41a04cf38"],["/2023/01/31/2023/Mon/12/index.html","179e8d6fd78b16e114cc0b29c375b9e8"],["/2023/01/31/2023/Mon/13/index.html","dbedc8b008c8f21e6ab13d34b02586c1"],["/2023/02/06/2023/Feb/1/index.html","d4cd1221e781972fdfb2b3bca97cc15b"],["/2023/02/08/2023/Feb/2/index.html","e8e8eb2e5d239e1c5bcfff67b2a83f48"],["/2023/06/01/2023/June/1/index.html","e0bac999c4f8fe403176088f567174fd"],["/2023/06/14/2023/June/2/index.html","4f6c8799c010bad202c3dbca5b3ffbff"],["/2023/07/27/2023/July/1/index.html","b2dd168f4a9c4e1a2c988500c04bb273"],["/404.html","9b208fb5d189102a6aaabb87112edca4"],["/about/index.html","61f38fa2c740cb65f9c8a1734a90f6ab"],["/anzhiyu/random.js","c18d7472deb3216248c1eb6c3fe16212"],["/archives/2022/10/index.html","80dc211fff37f401a0bd177e2a7baa60"],["/archives/2022/11/index.html","7cf720226cabd80ce254123f2603da6a"],["/archives/2022/12/index.html","45b20ab564c2ca07450fd5a01db6cab1"],["/archives/2022/12/page/2/index.html","7f9adf7a8c120a2a7112c3d1e1ecaf8d"],["/archives/2022/index.html","c10485bd7820c610b623f3da66f894b1"],["/archives/2022/page/2/index.html","49633634bb89c922ca927b195037c4da"],["/archives/2022/page/3/index.html","4fb5fd7ba77c7dec26b3f205f88e180d"],["/archives/2023/01/index.html","4b4250d1aab8ba848ae75380a7259006"],["/archives/2023/01/page/2/index.html","569c2f954558e0770705908d8b2b2be4"],["/archives/2023/02/index.html","0c7c8ccdac93034bd35edc4aea1d3f2b"],["/archives/2023/06/index.html","57d31785a4dc03a028ed1f0ab0934728"],["/archives/2023/07/index.html","72c10376c048ab636b9d3e6a745644de"],["/archives/2023/index.html","bdca17dc2d84b1db3d0244a0627662eb"],["/archives/2023/page/2/index.html","e8d9e53429c785b7d2c0cf3beb918be5"],["/archives/index.html","19706f266a97ba91da5059d5eeab34a7"],["/archives/page/2/index.html","c375ab0c007542bd41dba383512d1b73"],["/archives/page/3/index.html","b0b68b0ebc2b044ed82d513c15e71a51"],["/archives/page/4/index.html","f32b561f8a18e4fe74f9a81d8bfca1ee"],["/archives/page/5/index.html","076cf7017c529a982e037f2cc8ffddb8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","9bfbdf218a85bca7d5448a81e82b9dbd"],["/categories/C语言经典100题/index.html","f4dd0880d4c6828bdfb30724f8a56347"],["/categories/c语言/index.html","bd2d73e8378b961a4aad67e7f680a5cf"],["/categories/c语言/page/2/index.html","3ff62b7faa4e081d432edf93736ae805"],["/categories/c语言/page/3/index.html","afc1aa6ea1be4a3e7a46f81d9e9c69b7"],["/categories/index.html","eb5bcb25a3bdba0d93a1db30f50f18b5"],["/categories/经验分享/index.html","1151eddc9d57e9b0ae1cfc2d2ca9b626"],["/categories/计算机基础/index.html","1c766fdd3edec2f3dcba14b08a07e4df"],["/comments/index.html","6c127aace9dc1003c065aff3c420fe21"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0acbe549fe8dd11a1b75e92b6433f34f"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","71aee4c352559a85af794a606dfb3de6"],["/link/index.html","9c8d7adeebf3e232f55b7951ddf97e33"],["/page/2/index.html","66c6f4a8212546df330a5ed104b0f210"],["/page/3/index.html","237a611308e657ab9c252b76a46fc15e"],["/page/4/index.html","78132b7d5396101a3c34bb433ba444b3"],["/sw-register.js","f068691183d53bd7b14d23352dd67672"],["/tags/C/index.html","de3f73c3724e17c7530781c86a7c5fc7"],["/tags/C语言/index.html","a004733c449b933f813bcf06a807a4a8"],["/tags/C语言/page/2/index.html","b032def67a0b9103960ffe24507e5285"],["/tags/C语言/page/3/index.html","acc4950f9a9ee7937ecd05408cd0b7b3"],["/tags/C语言经典100题/index.html","c90ff6e228d6478d9fd651d3a36fdb22"],["/tags/index.html","c62c262f2cbe3a7b0cae19e08fee4b2c"],["/tags/类和对象/index.html","3e9e26b6642ce8410d00c9b7b449bfdb"],["/tags/经验分享/index.html","bc5b5afd85ff6097329591051ba1a0d7"],["/tags/计算机基础/index.html","6ef47080a40bcc8485abda1a2d9efeeb"]];
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
