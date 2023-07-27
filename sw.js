/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","b269e28970bb5834103e5a14145f8d22"],["/2022/11/03/NOnote/1/index.html","8a474f629784cf05f7226ac25dd21dee"],["/2022/11/10/NOnote/2/index.html","818af507124667712d4a8c99faa7abf5"],["/2022/11/10/NOnote/3/index.html","0e0d949ddb8ade123368b14017b3df97"],["/2022/11/10/NOnote/5/index.html","fae75ba84a92dee8944b71ef761be19b"],["/2022/11/10/NOnote/8/index.html","11d95039f48dda37d8259c6d11d2c0f6"],["/2022/11/17/NOnote/4/index.html","c080a7d1542bd7df5b46a4e327955f06"],["/2022/11/17/NOnote/6/index.html","d413f61689ea1f3cdd2eb833bb49518d"],["/2022/11/17/NOnote/7/index.html","f061921ce1939dcebefc2485f22d6262"],["/2022/11/17/NOnote/9/index.html","a36340b76a89f3dc7644b7848c41bd90"],["/2022/11/24/NOnote/10/index.html","dfe69adcbf8915f70dea8840b848425d"],["/2022/12/01/DEnot/1/index.html","96dc2e19482d89d173a41cebc6099f4f"],["/2022/12/01/NOnote/11/index.html","8939a24a7be9b71072e16cb96258a9ba"],["/2022/12/10/DEnot/2/index.html","777b5ce1c73ad51e7e937a8bcc9e0077"],["/2022/12/10/DEnot/3/index.html","61a57e2a56bb072329d7fa27cbbabe3a"],["/2022/12/12/DEnot/4/index.html","cdad2f82b75945627bcb5e4f4c317a43"],["/2022/12/12/DEnot/5/index.html","1304bab979343c1c57c139bd3f41f208"],["/2022/12/22/CTM/1/index.html","2134806e798369f7f052ef04ea050399"],["/2022/12/22/CTM/2/index.html","5c88167e9ec62ec13a1d6f4143242a61"],["/2022/12/22/CTM/3/index.html","aa12e01d6d5c54efdc464354bab40d6d"],["/2022/12/22/DEnot/6/index.html","21bea499cff6fb3ab0ae408b8b9c24f4"],["/2022/12/28/CTM/4/index.html","9bed52370bf26d15bde39917e569f666"],["/2022/12/29/DEnot/7/index.html","b105ce9f939a14d15bd8cf366aa6a5ca"],["/2022/12/29/DEnot/8/index.html","013c9f4c2a0cf91b28d44a89eee19463"],["/2022/12/29/DEnot/9/index.html","5f88d7e2ebe78b1168ac732e70eff882"],["/2022/12/30/DEnot/10/index.html","cba6f9bcea44fac9233dfa85a332794f"],["/2023/01/03/2023/Mon/1/index.html","dd4aa6fc74f3d60a811c91b280f2cb0a"],["/2023/01/06/2023/Mon/2/index.html","5c6f269c015c6fad9c8f7770c3260bc7"],["/2023/01/08/2023/Mon/3/index.html","4070607e9f9d33264904d6cdc44ec776"],["/2023/01/09/2023/Mon/4/index.html","e5c32e43337f5fa1b1bb2dfc9eeed735"],["/2023/01/19/2023/Mon/5/index.html","b919c78f4cc829f6800051caf1350d75"],["/2023/01/21/2023/Mon/6/index.html","3f0bd356929e9c694536d611e1770af7"],["/2023/01/21/2023/Mon/7/index.html","c09248c4c61aa7393db6335828562d1b"],["/2023/01/22/2023/Mon/8/index.html","5fdc340d533a5a402476fd72578fb3d1"],["/2023/01/23/2023/Mon/9/index.html","5558349d6e0a8436d162ad47e85cdb48"],["/2023/01/29/2023/Mon/10/index.html","a0ad9b819d67d50614e84d629cf0d632"],["/2023/01/30/2023/Mon/11/index.html","b12630789bf3847ec8bfef9a934973e5"],["/2023/01/31/2023/Mon/12/index.html","21a528b23205446a16df63606141bc6f"],["/2023/01/31/2023/Mon/13/index.html","e9192f30d3aeb4546f0e466cc69ad518"],["/2023/02/06/2023/Feb/1/index.html","5e1c141638272f163974f27448daa217"],["/2023/02/08/2023/Feb/2/index.html","2e109c46c6d80c61bdc2e89099623607"],["/2023/06/01/2023/June/1/index.html","89ca26b27a6c07e93b863373bdfd1788"],["/2023/06/14/2023/June/2/index.html","4c688386f31750c9c8825906dd3298c8"],["/2023/07/27/2023/July/1/index.html","e6fef955300ff26e882a4da25ca0b831"],["/404.html","5a00d27cb39b46cffbb65f10aa65d45b"],["/about/index.html","3e2c3d8a862b001d91614075fa00df7b"],["/anzhiyu/random.js","57885100e38027be4e4b35d59b0aa4ba"],["/archives/2022/10/index.html","20b66b0ad7f70a67a62a0f4fc76337b5"],["/archives/2022/11/index.html","3ef65004ed489bb1722e54743ab3b046"],["/archives/2022/12/index.html","737df9c87eeb3bb62a8ffad18a07c342"],["/archives/2022/12/page/2/index.html","2c70fe356647b9afa96fed32d581353e"],["/archives/2022/index.html","029f7aac264e512ada59856c958a394b"],["/archives/2022/page/2/index.html","dafe823843eede4ca7a1467921ff9a53"],["/archives/2022/page/3/index.html","14b7271105d5566363320fb8183ebb12"],["/archives/2023/01/index.html","adfcfc0c5c5b9a95208885ca73b52cf3"],["/archives/2023/01/page/2/index.html","a3c0a16ba4d359debd42921125dcfe17"],["/archives/2023/02/index.html","6b5d75db9eadf5a9c310ca8b040ed19f"],["/archives/2023/06/index.html","eab6f23e8902d0f2847b66e2165d63dd"],["/archives/2023/07/index.html","75f1e90f9fc0f27d55171e235ab3a2ee"],["/archives/2023/index.html","3817d023044c860505ad31be50b1fe86"],["/archives/2023/page/2/index.html","9120674c295219259b4b2b93559a019a"],["/archives/index.html","10ac776839ec1dbc4277c43788f2b97f"],["/archives/page/2/index.html","9b4a6ead899555a0fa8173253c31b238"],["/archives/page/3/index.html","5947885311a3e31a6bdf376def63adc1"],["/archives/page/4/index.html","bcbb4d7d87cb2035de06ecfc02830777"],["/archives/page/5/index.html","572970f65002dc01418df92a8fa8b979"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","053e613b3ef95c470b09191222f5ff61"],["/categories/C语言经典100题/index.html","079f861b61376d78c09cd2f29aa6cbd2"],["/categories/c语言/index.html","efbd1ea5d256bcef1def3d590317bbc6"],["/categories/c语言/page/2/index.html","9db2bc19b1a89af3397dd4e21c73f0b2"],["/categories/c语言/page/3/index.html","90b90b305b738373b99bf513136988c1"],["/categories/index.html","c2370f2ba890e3ce0d92b13658e5d018"],["/categories/经验分享/index.html","21f5b566961b70c78153aa3ce061ff4a"],["/categories/计算机基础/index.html","915c3c58c19f5f4db3421be99a556665"],["/comments/index.html","7df4ddafd5e206f9bbd352b668b420c6"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0931c8655c5f030222f241f04ed37e71"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","4abd58c5bdae939631ad9f1b860078ef"],["/link/index.html","84d4a8e62b1046ad9001ff49b816f30a"],["/page/2/index.html","89798c1f33ec53c6bc99a5aff11e20a8"],["/page/3/index.html","fafa9fb444c0794d18124311f50566f6"],["/page/4/index.html","c2037192427f32e68bc0dede8518fede"],["/sw-register.js","5c01934202e50aa5be031ebf5a51b682"],["/tags/C/index.html","a7ddac5b57e424990a08ae4873527c38"],["/tags/C语言/index.html","6ba9e9e90fce609d0aadeaf2b7499c2d"],["/tags/C语言/page/2/index.html","9ec666aedda2212a208a9b6744f72e4c"],["/tags/C语言/page/3/index.html","d223500cef265e5960a3333a282f4ecd"],["/tags/C语言经典100题/index.html","8e59bf5d774702fb39279c62a6cf1f5a"],["/tags/index.html","84c70abbe7203a5c01476c1da66e90e3"],["/tags/类和对象/index.html","9d78182a61c645f78b8e97047eb7e49a"],["/tags/经验分享/index.html","fac1bd0dd2ee277c14660ad02b4eeff9"],["/tags/计算机基础/index.html","30ad78946129cb93aa0d42e9da27cbeb"]];
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
