/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/24/NOnote/10/index.html","7c9a5dcb028547896f4bdd1f1f4887e2"],["/2022/12/01/DEnot/1/index.html","94f0e0b2af22e59a739972b4d18a4d17"],["/2022/12/01/NOnote/11/index.html","ca50a0ff7e7e31746d71eb307b24402d"],["/2022/12/10/DEnot/2/index.html","6e9194f919491e9e6a35adea25c035f6"],["/2022/12/10/DEnot/3/index.html","bf0493384034ae6fecb17b75a4e818cd"],["/2022/12/12/DEnot/4/index.html","3aedab5457b0c5bd712556a1ff600934"],["/2022/12/12/DEnot/5/index.html","edb1481154512b63c895aabb794344c3"],["/2022/12/22/CTM/1/index.html","bb30b4688990b3aa0cb87f27ef220c9b"],["/2022/12/22/CTM/2/index.html","3b20cca65defdf378aa0175e1597ae8f"],["/2022/12/22/CTM/3/index.html","324ebed108d95d3a0e66e32412cb3503"],["/2022/12/22/DEnot/6/index.html","991028e83f56289a37a1464c8c2dfb30"],["/2022/12/28/CTM/4/index.html","f6b7420476fea7ddbf9298220360e720"],["/2022/12/29/DEnot/7/index.html","53feded0f376fe737f466a7afd428d69"],["/2022/12/29/DEnot/8/index.html","b2ce71ebc2d580d419f36a2181a04ca2"],["/2022/12/29/DEnot/9/index.html","1b29fb11fc9dd9bae08de91db50922c0"],["/2022/12/30/DEnot/10/index.html","930c4efba6f457fe7501374dc893fa4d"],["/2023/01/10/2023/Mon/1/index.html","989997267b2f0eab4e2b5d5c2f0579ca"],["/2023/01/10/2023/Mon/2/index.html","3ad4e0afa64e9ac67de9d19a6cc8c180"],["/2023/01/10/2023/Mon/3/index.html","377041ec2930b047c65c2c3d5b631455"],["/2023/01/10/2023/Mon/4/index.html","1689e3a0312f87dc0cc91e5906dde204"],["/2023/01/11/2023/Mon/Untitled/index.html","8aa0e77da0940667ea061426e1aff5be"],["/2023/01/11/NOnote/1/index.html","7eebf7cb913f689e17cb29611eec1f1d"],["/2023/01/11/NOnote/2/index.html","84f390da16aae79753eb36d7e585153a"],["/2023/01/11/NOnote/3/index.html","8ed2ef55a1f5372b58c033314bdcdc5d"],["/2023/01/11/NOnote/4/index.html","89cf3cde9c96fb06bde4f11ca8004d13"],["/2023/01/11/NOnote/5/index.html","ba5758fd8fd3c99e8871ed2d04dcddba"],["/2023/01/11/NOnote/6/index.html","6b3c9bb4f31e8c9b3961deeb0216d80d"],["/2023/01/11/NOnote/7/index.html","899d600360b01d45a425c407779a47da"],["/2023/01/11/NOnote/8/index.html","41e5a2886ebdf278094b5c3fafc93079"],["/2023/01/11/NOnote/9/index.html","fb8f9054f1742d83966fea1da7284dbd"],["/2023/01/11/OCnote/1/index.html","08b397621193efe24b1f7167990525fc"],["/404.html","c3c436535fb354327d04a02a332d9359"],["/about/index.html","54f591f455fb1f283c02e111f1233225"],["/anzhiyu/random.js","b8d07dd49c206691e9e002f5c08f0a5f"],["/archives/2022/11/index.html","fd823762d7ff75d0fee66089929d8e0a"],["/archives/2022/12/index.html","73a5ed2f022ddf2380aa0c3c2afe6533"],["/archives/2022/12/page/2/index.html","e0401028a2203c23a2791caaed28c54f"],["/archives/2022/index.html","0dfae005070be51c30b48246dc646852"],["/archives/2022/page/2/index.html","cc37654aacb9d2bed106de7b9ff9d58c"],["/archives/2023/01/index.html","2078eafef22fa6846b7867e6a38630db"],["/archives/2023/01/page/2/index.html","276a821fead0ab88d8e05126a1af9a2f"],["/archives/2023/index.html","9e2e5da08c961ec372890a5efd691c72"],["/archives/2023/page/2/index.html","ab25d6bb53c6e8e36ce708d1ca6db13f"],["/archives/index.html","d88a74455cf5076011c78016a00fe263"],["/archives/page/2/index.html","c9b1ca166a7821451514bd744f57bf6e"],["/archives/page/3/index.html","5a67eb9801a4c81a0e95116a5c7c1155"],["/archives/page/4/index.html","19048f15f0cf697b07d33d3a88b55988"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","67b8f8bf613670b3e27128be823d2551"],["/categories/c语言/index.html","4e119784c3ea16dda5118364e24a299d"],["/categories/c语言/page/2/index.html","74b54982973ef5f6d45343c81222273d"],["/categories/c语言/page/3/index.html","84365be5c3619368dff1a2865d5fbe7b"],["/categories/index.html","bab7ab7d2e53770f839bbe7b14b6cd45"],["/categories/经验分享/index.html","4cd6c97de571ddbb85554da24f0e8a78"],["/categories/计算机基础/index.html","1aea3af313e68b1a8682be0b85039345"],["/comments/index.html","5fa0862c60a6e3f9a58382614919891d"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","27efe6af2baa29be82493b6a5baaf771"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","7b95835f925f73aa9eac6db9d90798bf"],["/link/index.html","9e6ecfc0572c7f62162435fe63504772"],["/page/2/index.html","f6ab0f2aac03409e658ef738d1608906"],["/page/3/index.html","5b1c2c5d7e7b058da59b69b09be1eb1b"],["/sw-register.js","3b3a24d66f9e07b41017e1a043b0d323"],["/tags/C语言/index.html","8898c01a7d1e7e36cc873564c5f4954c"],["/tags/C语言/page/2/index.html","75b0e2fd3edfcbf65e093ba3dfc1c15a"],["/tags/C语言/page/3/index.html","3d76978c5af7b9ccd1bab6a968ddf872"],["/tags/C语言经典100题/index.html","b095f1ea5a2fe5720c7ab9c3a66a4ea4"],["/tags/index.html","34db42d2affa46d5508385d15da97a88"],["/tags/图床/index.html","9ffe5763315da8099191e035fbf27c6d"],["/tags/计算机基础/index.html","4fe432c12f10d597db136b16ab29631b"]];
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
