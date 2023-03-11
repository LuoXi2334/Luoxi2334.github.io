/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","721ccffb289d0a1ea57aba0575f04980"],["/2022/11/03/NOnote/1/index.html","fd1bc69d6bc86b157dc1e40cd7d8504b"],["/2022/11/10/NOnote/2/index.html","71b2c9b431062480c2c5f69e84f63aea"],["/2022/11/10/NOnote/3/index.html","a951d6eb4794a2a8099d78a9eb460589"],["/2022/11/10/NOnote/5/index.html","f47c531caef0429ec6a24e49cb15a91e"],["/2022/11/10/NOnote/8/index.html","2ce3f1ae8da7b22a2e96a671837ab104"],["/2022/11/17/NOnote/4/index.html","63d8a348f8f3d577bd8e6bc2af3a1d52"],["/2022/11/17/NOnote/6/index.html","2e7fe4e340d04d7a9a669f3f741f1d0a"],["/2022/11/17/NOnote/7/index.html","679b5692659e7b837387691bafbbfaa4"],["/2022/11/17/NOnote/9/index.html","72d69c6483c6848ddca742dfb736779b"],["/2022/11/24/NOnote/10/index.html","e2fa46cb3ae0bdbc27dc5d8175eb73f8"],["/2022/12/01/DEnot/1/index.html","bdea1bc1764b96097cf7c0b2a2c4b428"],["/2022/12/01/NOnote/11/index.html","53b627be07ffd119fe2bf211a79fb840"],["/2022/12/10/DEnot/2/index.html","fd6646b80d0bb2b7039369906b018ecd"],["/2022/12/10/DEnot/3/index.html","b22c8be10cecd9d24247f1a2f89a7579"],["/2022/12/12/DEnot/4/index.html","b21214212adf36e669cfdb1a6786bedc"],["/2022/12/12/DEnot/5/index.html","0eb42aa1ebe1840254f849b6282a6ebb"],["/2022/12/22/CTM/1/index.html","050e65fee3b6c07504529e58215dd1cc"],["/2022/12/22/CTM/2/index.html","a4d594751094740652d0a9132ae5a525"],["/2022/12/22/CTM/3/index.html","65368bb8a07e302c78fc7b5584252687"],["/2022/12/22/DEnot/6/index.html","33b9bc2cc717c8f26ac9869e44f7839e"],["/2022/12/28/CTM/4/index.html","7ef8f09ef41ac43b1d790ca0a36e3003"],["/2022/12/29/DEnot/7/index.html","3c050a71fd628974406178e99fa6e991"],["/2022/12/29/DEnot/8/index.html","7cff5bf023a85be28e0460d2ab9c4841"],["/2022/12/29/DEnot/9/index.html","79f26b91f0849e04b8eded858d63cc0c"],["/2022/12/30/DEnot/10/index.html","cc4ac7c859bc0936d2b1980f01f1ce48"],["/2023/01/03/2023/Mon/1/index.html","ae2ab4c19e946790052680bb650969b6"],["/2023/01/06/2023/Mon/2/index.html","50de252f4e76d2364cd9b1a5225aac1e"],["/2023/01/08/2023/Mon/3/index.html","fe5b7a1c93d5bd4cd92b19e2a9e0185e"],["/2023/01/09/2023/Mon/4/index.html","c2caa8bdc892a77c9a12d86dd9221c15"],["/2023/01/19/2023/Mon/5/index.html","49e65ec6787d45236d0249abb3af63f1"],["/2023/01/21/2023/Mon/6/index.html","6e18770bfff7c4818393238bf285b864"],["/2023/01/21/2023/Mon/7/index.html","574a432032d3fbcbb3210fae13e0b89e"],["/2023/01/22/2023/Mon/8/index.html","0b7fefda688385b40e223c9195d3f14d"],["/2023/01/23/2023/Mon/9/index.html","e61fd759723f715c2ac591c5e1a11d6f"],["/2023/01/29/2023/Mon/10/index.html","61b333aca9b2fce1382b0cfce6fa86a2"],["/2023/01/30/2023/Mon/11/index.html","ca80f31cb56666f52f9a29996de3c9f1"],["/2023/01/31/2023/Mon/12/index.html","4041be79be4e8d085a04d00b5a5226a5"],["/2023/01/31/2023/Mon/13/index.html","5d1f41848305d1aa256610d53487a2ae"],["/2023/02/06/2023/Feb/1/index.html","5396e802a26b9f8336ded9fd16c88df5"],["/2023/02/08/2023/Feb/2/index.html","22554ba024c6e2195c9419de58d05f8e"],["/404.html","1fb222ef147f27f59bf95a257a956478"],["/about/index.html","e182a3348a0e707ebe3b06b6856ac42a"],["/anzhiyu/random.js","85d38895893e95cf70b4e491559599bd"],["/archives/2022/10/index.html","e209b123270c8ab14e1aba315e3bf172"],["/archives/2022/11/index.html","74ea0b1905e351bff412fecf98ff18e8"],["/archives/2022/12/index.html","93f642703e9b5c94d25ba0f2f721fd36"],["/archives/2022/12/page/2/index.html","5b056f7d0634ac05493ac21bdfe7914d"],["/archives/2022/index.html","4854c21fb44c0c9f5a833f85c6f00fa0"],["/archives/2022/page/2/index.html","13b0729af59a62d013746532892155a7"],["/archives/2022/page/3/index.html","0c312d9dbe7eabf2f228b67ea96bb308"],["/archives/2023/01/index.html","7392816fda0f4112aae89ea23f9f5eab"],["/archives/2023/01/page/2/index.html","20ccad7c3b33e9c11bbb599d8e48d870"],["/archives/2023/02/index.html","c12099b537ee3b42907ed8c1a9768e4d"],["/archives/2023/index.html","e645ce922401d29bd74b219ca824ba88"],["/archives/2023/page/2/index.html","9185926fd7e6b145d62799a7dbb9a201"],["/archives/index.html","86579c89b0c7bac439a111f9ccb2b52d"],["/archives/page/2/index.html","a038240eb25af6616d92351296469ec8"],["/archives/page/3/index.html","675536415cd57120924dbd05e26dc077"],["/archives/page/4/index.html","a5dad7b831b5c78829a6391c99595252"],["/archives/page/5/index.html","e0650a43c27a8fdca5223fe84564f724"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","6f6331dbb2ba0392d3c3060b2330466a"],["/categories/C语言经典100题/index.html","a09aee766cb3dbc1a8c22fcf2b71609c"],["/categories/c语言/index.html","f05e7218c64985e4dd874a163a8645f9"],["/categories/c语言/page/2/index.html","66f7da26426f1856f1ec9feda1b23c9b"],["/categories/c语言/page/3/index.html","ebe837ab3e39b4938a586b591e1b237f"],["/categories/index.html","9caf5f5a5baef599eec6956a9f873967"],["/categories/经验分享/index.html","172b1c40a78f86eaffd1281c18127787"],["/categories/计算机基础/index.html","2e4014f1aacd0b4f06854dcf35d77089"],["/comments/index.html","20eb0150e79b34d6b151dba5c86c0f5b"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","393fc96958661574323237e2d232bd9f"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","4f40d8087483de9b951cad1359c46fe1"],["/link/index.html","79dcf22c2e24431eb538adb768e8a835"],["/page/2/index.html","136c3622a0a9eb6d089177a173119d78"],["/page/3/index.html","75abbcab127b860e2865c78e65d86b69"],["/page/4/index.html","bd100d4596c28875c3d8db1a922b69c8"],["/sw-register.js","bb88f743f423a9b8c9b09fe024194645"],["/tags/C/index.html","bd4be2cb8f83763779cee0222bec65a4"],["/tags/C语言/index.html","d0018df0568ea3d8645248c6e2aa541a"],["/tags/C语言/page/2/index.html","3aa2662e741c9b8e4f0fffb648ae36cf"],["/tags/C语言/page/3/index.html","8ecc043143011b67ae0b9e534cb4e59e"],["/tags/C语言经典100题/index.html","af766de2c2d75c989f27a342c2465445"],["/tags/index.html","ddd45eb3953900a1fb14d4cb975a5861"],["/tags/图床/index.html","c5703b140a69e54cad40c9f9722ab96e"],["/tags/类和对象/index.html","3ba5da51e38e23bfb4640980a1a3d5df"],["/tags/计算机基础/index.html","cd2748555b8dd5cbbaed0c3b3b2dbd25"]];
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
