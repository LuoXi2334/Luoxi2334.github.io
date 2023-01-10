/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/24/NOnote/10/index.html","c840a1b5c94c950b72ab1ead519da05b"],["/2022/12/01/DEnot/1/index.html","b6fe35f9d1eedd4470f76485ddfdbf2f"],["/2022/12/01/NOnote/11/index.html","9bd8a0fb7b383cba9d384bc9fef5edf1"],["/2022/12/10/DEnot/2/index.html","f02544fad41010436fd74b79875fe6c1"],["/2022/12/10/DEnot/3/index.html","5fe74de210f628ef30a7b200bfad6422"],["/2022/12/12/DEnot/4/index.html","846de4dcd2e3b925f2ace16ac1b754ae"],["/2022/12/12/DEnot/5/index.html","44ad62267752154ad3e77e1ff4dcac79"],["/2022/12/22/CTM/1/index.html","a6107eb07d9b3028b5630db46e0352fe"],["/2022/12/22/CTM/2/index.html","b458de8e40296c20b26eed4946cf8a59"],["/2022/12/22/CTM/3/index.html","ecf9efdbc570c8e9f5a97e3b04732568"],["/2022/12/22/DEnot/6/index.html","70c30dd228bc10502da5724aff71b45b"],["/2022/12/28/CTM/4/index.html","17826ab25f1ce8d0110e5b7952df3c6b"],["/2022/12/29/DEnot/7/index.html","534c241d4c0c59ac0d420dcd46ac58b9"],["/2022/12/29/DEnot/8/index.html","1b9c2d6a19e27a805685bdbe5afd7285"],["/2022/12/29/DEnot/9/index.html","fd18df37a3ef54721221d323e069c1a7"],["/2022/12/30/DEnot/10/index.html","8da7c5588630424344361fd8530ed1e3"],["/2023/01/03/2023/Mon/1/index.html","418b425764d6967b4dcd538150fa4810"],["/2023/01/06/2023/Mon/2/index.html","b9486630aec4695242d3f2b617cc91a2"],["/2023/01/08/2023/Mon/3/index.html","209115cfc68ba52019fc85d94ce63a9a"],["/2023/01/10/2023/Mon/4/index.html","61851a64904b4d1fe49a87e8be3ffdfe"],["/2023/01/11/2023/Mon/Untitled/index.html","0675279d6ebe578a477ee3889135e28e"],["/2023/01/11/NOnote/1/index.html","9e7a439310fd8537b1e61a9c158c8163"],["/2023/01/11/NOnote/2/index.html","a387dbd6d3c323a0202e2129c38e7038"],["/2023/01/11/NOnote/3/index.html","20829533dccc2601ea73a243a48856ef"],["/2023/01/11/NOnote/4/index.html","98d7c4b3bd068a7f72d223a6d9fb216b"],["/2023/01/11/NOnote/5/index.html","358f8a00fb039a53dbd1b0ecfc296905"],["/2023/01/11/NOnote/6/index.html","b80d9a8ab34bca7a52843ea44bf77493"],["/2023/01/11/NOnote/7/index.html","eaff5d373c9299135ed6f6ca05a889e5"],["/2023/01/11/NOnote/8/index.html","9f94f2051cb9b3c36b66ceac3c5a08e9"],["/2023/01/11/NOnote/9/index.html","164c30a27f0921a1cec7017bf74067da"],["/2023/01/11/OCnote/1/index.html","9f095d25f0f13f80855983e899722e57"],["/404.html","67432849f2dc287d392ed89f56d5d9ae"],["/about/index.html","7456eff922388b8a46662d3f0dae40ac"],["/anzhiyu/random.js","15b159a4cb7e46023aed83f0a682e431"],["/archives/2022/11/index.html","4a29f6a4b8336ee895b4a172b3ececab"],["/archives/2022/12/index.html","d75f234cf03e27e9e3761d106689d568"],["/archives/2022/12/page/2/index.html","75014f5770433a1e715e5ae3db555c45"],["/archives/2022/index.html","62c9342ce6bb2be86c4e32817bf3cdca"],["/archives/2022/page/2/index.html","1decc3cd81947d39ee2ceabefa059e37"],["/archives/2023/01/index.html","f24409b999f0cc8202bfa0b677268c28"],["/archives/2023/01/page/2/index.html","46be23a653cef73305017c2ef1e98196"],["/archives/2023/index.html","a04586c9a6c2944e914a664c2bddd174"],["/archives/2023/page/2/index.html","e9d33d3c8087f75dcd05b1a6455a8305"],["/archives/index.html","690456b95356208710595cde22586d2f"],["/archives/page/2/index.html","98db534599fd7120f1044b26fc8afb82"],["/archives/page/3/index.html","b4e17c6251437e90d027cc969e74ab45"],["/archives/page/4/index.html","5191ab821860bddd8d0b34e241f14756"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","6253d6864e22c3e8e2729aea1d70d43d"],["/categories/c语言/index.html","81498e03a0143c555736425648304ad0"],["/categories/c语言/page/2/index.html","5e2c93d54c998261ae542d405e3b064c"],["/categories/c语言/page/3/index.html","ba76247826ab0491c403e0a136bf79e0"],["/categories/index.html","26042e905e96481f95a90d230335b97e"],["/categories/经验分享/index.html","1f2bf7c7344880abacc753e079f42a19"],["/categories/计算机基础/index.html","0fa92014ba02a7ba56b4af7355460058"],["/comments/index.html","b0ec329f4130e3420ca5dcfb6a21260e"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f09adbf90988bf9ceec2c5f6f1e47f87"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","8ddaab706b86a4a6a59b767246652715"],["/link/index.html","3149c2563f0f7cae8cb9279dee18e354"],["/page/2/index.html","1bfc911a746082834cac259bd9cff8c5"],["/page/3/index.html","106f40dd85b44aff157ace19940b683a"],["/sw-register.js","2d5981ccac2b9e45dc4a4723b2a7da36"],["/tags/C语言/index.html","ce7921e0364439037cb32411ad120234"],["/tags/C语言/page/2/index.html","4d2846810c4bcd6b295e5030c2837c50"],["/tags/C语言/page/3/index.html","05382aa33c60697572ba6f65f05c1fb1"],["/tags/C语言经典100题/index.html","0fe1f3fa92791b8de32d2c9392c94244"],["/tags/index.html","776205089cebc8720f374c6ae82b2b60"],["/tags/图床/index.html","bbd24589977acefc00b845104108f52c"],["/tags/计算机基础/index.html","9ce493e4e1362bbd630dabeb1632645e"]];
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
