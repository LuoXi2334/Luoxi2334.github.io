/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/24/NOnote/10/index.html","1d90a19a6887b44799cc254597c9aadd"],["/2022/12/01/DEnot/1/index.html","344a58e037742a3db9eb6c745c3d5cb5"],["/2022/12/01/NOnote/11/index.html","78a32f4986c63c885028a4b9a44d4db0"],["/2022/12/10/DEnot/2/index.html","ed2d6d60f4ed9279ba6a873cb49d2500"],["/2022/12/10/DEnot/3/index.html","12454090ce3ba5864ae3654215ad80b6"],["/2022/12/12/DEnot/4/index.html","5e3c1d5c18defe13f3f433c0df503d88"],["/2022/12/12/DEnot/5/index.html","5569d368f5fb116b4048d057cd8918a7"],["/2022/12/22/CTM/1/index.html","9c7952b7cc27dc7849cc462151dfa01f"],["/2022/12/22/CTM/2/index.html","8eba6945320371b5626e9cbf142472c9"],["/2022/12/22/CTM/3/index.html","433dca36d676b0fc0cf9462bb1fab8d9"],["/2022/12/22/DEnot/6/index.html","b7c876ae11c99dddf1e7155ed45ebea0"],["/2022/12/28/CTM/4/index.html","727dbea9257319c90bcc2647d5e94c5a"],["/2022/12/29/DEnot/7/index.html","64a47ca5f4a098cdb61245f12f0d06c1"],["/2022/12/29/DEnot/8/index.html","1e8694d09803e60aa15bd958f1588a6a"],["/2022/12/29/DEnot/9/index.html","a275855a9faa7952f30ab20068338d99"],["/2022/12/30/DEnot/10/index.html","c88a30284ccc3ca3e3357e91846ed68b"],["/2023/01/03/2023/Mon/1/index.html","54dbd9811dcd0f386a712f2c890bd629"],["/2023/01/06/2023/Mon/2/index.html","cab1997c87fbf72e6f5492f80b395ebe"],["/2023/01/08/2023/Mon/3/index.html","af39a6532d8860a7962673ada9e0f859"],["/2023/01/10/2023/Mon/4/index.html","b3e1c39804b619a789be1f5a7bd0d882"],["/2023/01/10/2023/Mon/Untitled/index.html","122f710f19241af2c4bafbbdbc8890df"],["/2023/01/11/NOnote/1/index.html","deeb0e657bdebb2fb1bc6a4abf7b6029"],["/2023/01/11/NOnote/2/index.html","0d5cbb1aeafd07d6d109b56381490e0f"],["/2023/01/11/NOnote/3/index.html","0d5455c35ca68ada5f7f9666533afc81"],["/2023/01/11/NOnote/4/index.html","9267fc4b1b362525614749500b316437"],["/2023/01/11/NOnote/5/index.html","ff429f5c84db1e802c7cbd1d611c6478"],["/2023/01/11/NOnote/6/index.html","52d93f71de9bc0012cbe2135fd5558b9"],["/2023/01/11/NOnote/7/index.html","472f2b17ba12ffbbba0bd50194255549"],["/2023/01/11/NOnote/8/index.html","0d6ea0661a2da910e083877465b59adf"],["/2023/01/11/NOnote/9/index.html","d598a70ad7489c4b7ba5931470ca8a8d"],["/2023/01/11/OCnote/1/index.html","004f18b63d29df543e567980a9a27248"],["/404.html","4da61c8b2651f17c9b377ee4576ac3f3"],["/about/index.html","d6312bf389b8525bd20ae71660c0847c"],["/anzhiyu/random.js","03c7df7ec468c00b5f533c77ca21a7b8"],["/archives/2022/11/index.html","d542c2d087c608498202e0c7f821151c"],["/archives/2022/12/index.html","19630ce89d01705f3c44725e3f67d832"],["/archives/2022/12/page/2/index.html","d69194ed5b2cd82641985bb3e5884476"],["/archives/2022/index.html","13eb3e673f54b500064cb5633b904069"],["/archives/2022/page/2/index.html","547a954db3156de7490b1833812a7fbf"],["/archives/2023/01/index.html","8e43938ae147273e97e6e33965ed9e0e"],["/archives/2023/01/page/2/index.html","10fac0fc3929e5f616290461c37c6ec6"],["/archives/2023/index.html","623afe7ee22522a6c26167eaec8ca915"],["/archives/2023/page/2/index.html","a569e01d8984af2a1a07c2bad1092fad"],["/archives/index.html","5871f877dc291cb4358609975fc7c98e"],["/archives/page/2/index.html","7a80cd3bd02870e8e604bb25c49c2e1f"],["/archives/page/3/index.html","a7d86d56e178b7ad678000ae930cf0fa"],["/archives/page/4/index.html","01700678949db7a2f8eee5dd6e6025f7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","d69d50fd24de1f7e62a7cbfeaf4d5bb9"],["/categories/c语言/index.html","2f01972183a0dffa7b76ddbda434e11a"],["/categories/c语言/page/2/index.html","a2fbc7903e3c8de65dd2cdaf9a0a5b09"],["/categories/c语言/page/3/index.html","195f9b2148bb5bc5af3fe9fe3d947b04"],["/categories/index.html","1e9772067a578293110ff83b86b27fb5"],["/categories/经验分享/index.html","be44d5e0a2e6f5cc8cbb5a72c2440316"],["/categories/计算机基础/index.html","679c9e8d34bf7aa794d227411d6454c8"],["/comments/index.html","feb6b0577a5461aa5cbdc096ed17acaf"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c7f0af53f6ad29961e4604c292221992"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","93439b6cb2f9c20c9896668329bef169"],["/link/index.html","85cb4e6b729be1c6858d0d717036d3c9"],["/page/2/index.html","53e39fd06096ca1f0e8abf141b99a0da"],["/page/3/index.html","1f178c18b42c8e1bd02dfdcf5b65becd"],["/sw-register.js","02945adf7b33a7e0295cd1f5ee47b6a1"],["/tags/C语言/index.html","d87adf0362ec8b14565df0748a243fc2"],["/tags/C语言/page/2/index.html","10419bd0599991afa5a68c4816230518"],["/tags/C语言/page/3/index.html","6ee3d3478aeca030a3f4da78f44d34b6"],["/tags/C语言经典100题/index.html","6177f277324a0b42000d24e61bc0db0a"],["/tags/index.html","7e1c883e8830c2ebd8c247d71a472744"],["/tags/图床/index.html","acaa424d3c5d6e6ecb42564a004342fb"],["/tags/计算机基础/index.html","86aebbce6a81347387a76e055ca435e8"]];
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
