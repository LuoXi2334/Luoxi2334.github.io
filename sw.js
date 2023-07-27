/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","a5156ba686c3adfc5446d476692b049c"],["/2022/11/03/NOnote/1/index.html","0bb0384b5f15423c07c47efb63f1211f"],["/2022/11/10/NOnote/2/index.html","811a9fadbaa82ec83f683de7c702d98f"],["/2022/11/10/NOnote/3/index.html","cc2b5e08833cdeca4fea6bb8349d1ca4"],["/2022/11/10/NOnote/5/index.html","7cd2b7cc23e1fa84893c2d476752cb60"],["/2022/11/10/NOnote/8/index.html","d151d4001fe8ef331d1d7b1804204a29"],["/2022/11/17/NOnote/4/index.html","1376f357e75e004bdb956db2fe715ae5"],["/2022/11/17/NOnote/6/index.html","5772efd433865b7fd64bf3aca30206dd"],["/2022/11/17/NOnote/7/index.html","4c6a5d42feb9461e04f949e800706f5f"],["/2022/11/17/NOnote/9/index.html","b08d551c300b386f13a65236b3b575ba"],["/2022/11/24/NOnote/10/index.html","1a7da9320d12006fe0c238e4918ab558"],["/2022/12/01/DEnot/1/index.html","3001781e2766bfcce172bab86dffbc22"],["/2022/12/01/NOnote/11/index.html","2e40b558a219608f1b098f127f764e98"],["/2022/12/10/DEnot/2/index.html","73ba4547ea5f3b0b0f0585c5ab8f627f"],["/2022/12/10/DEnot/3/index.html","4dc3f1e347d4a26e32f2a94c5275357d"],["/2022/12/12/DEnot/4/index.html","c1d31899409eac4523fa139c62dd4ec0"],["/2022/12/12/DEnot/5/index.html","47de1e2a42134c5944ea8e36962ed48e"],["/2022/12/22/CTM/1/index.html","99833e8230a7a4931d03eddad35c0fda"],["/2022/12/22/CTM/2/index.html","a9f6f6534aa3083e05564896b8a1fcbb"],["/2022/12/22/CTM/3/index.html","88157f5abd88ce5fa74869c4863e5493"],["/2022/12/22/DEnot/6/index.html","c24bad8a790d41467fd7eef517892030"],["/2022/12/28/CTM/4/index.html","48c77ed075b0620c2372e1f12ef5234f"],["/2022/12/29/DEnot/7/index.html","3d3d479a08019cead3484b7d67fe427f"],["/2022/12/29/DEnot/8/index.html","642bcf08c5c15c4f257a42edad5a0d85"],["/2022/12/29/DEnot/9/index.html","2671f25bcc3a751f8188c6f77725c4c5"],["/2022/12/30/DEnot/10/index.html","3e2687a3adfd534fe2f5225b19366a8b"],["/2023/01/03/2023/Mon/1/index.html","c9824cbff77681901a29ea8046a23402"],["/2023/01/06/2023/Mon/2/index.html","c0ab1d62e9aaf65c14ea4f329f116ad9"],["/2023/01/08/2023/Mon/3/index.html","674bf8749518d5bd259cd6e55a2990fa"],["/2023/01/09/2023/Mon/4/index.html","3eec60cc384b5e4c747fe2b35b233cfd"],["/2023/01/19/2023/Mon/5/index.html","5b7512653eaeaaba690f0b635a54602b"],["/2023/01/21/2023/Mon/6/index.html","edf76121ecce7f9fcfd2b2414e0d5ed0"],["/2023/01/21/2023/Mon/7/index.html","7cb4b24d3a974692cc31782efe4e87ce"],["/2023/01/22/2023/Mon/8/index.html","22913cee4d323b5624b06a0714dc2806"],["/2023/01/23/2023/Mon/9/index.html","f74d61116fcb4f7ac71e6a740aaf4908"],["/2023/01/29/2023/Mon/10/index.html","1bf0e978716b9fc0cbfa870503eaba57"],["/2023/01/30/2023/Mon/11/index.html","0684dcbc241b1e73a54f4939cd1b90a6"],["/2023/01/31/2023/Mon/12/index.html","acb453733c2bb821c340027edd1ba71f"],["/2023/01/31/2023/Mon/13/index.html","c6bba0e6b8b0db2ac1abc36640328cee"],["/2023/02/06/2023/Feb/1/index.html","32d14364d8557c190c808860e4217603"],["/2023/02/08/2023/Feb/2/index.html","fa198812da50514705a5e820ba243830"],["/2023/06/01/2023/June/1/index.html","2efd0171b49f466cbd2309ec7c37549b"],["/2023/06/14/2023/June/2/index.html","95a0d03611f8959f198dfc1b85413f75"],["/2023/07/27/2023/July/1/index.html","5c21d6be4897c2b4297f82afe80c616a"],["/404.html","1532f2b7e62e203eebe60a77e5bf4723"],["/about/index.html","9a89e95ac81ca6e7d23c5515dfc505fc"],["/anzhiyu/random.js","ca3d2ca518096218027e77b6a7103eed"],["/archives/2022/10/index.html","38a97f7ab921de94f629e05f0ae9d76d"],["/archives/2022/11/index.html","488bcf605c10c191be8cb9896e82aa35"],["/archives/2022/12/index.html","9346ad233b0b1afdfe977d86c9f92545"],["/archives/2022/12/page/2/index.html","96f3d569d84483d4330fb7d6b3a90cc8"],["/archives/2022/index.html","0b5933f496299368b1878d2c1de508af"],["/archives/2022/page/2/index.html","410db8d9fa82fd3d8e7bd6fd8a3ffbb4"],["/archives/2022/page/3/index.html","8aeacfcf531d7b5128c518e97f300694"],["/archives/2023/01/index.html","8261ae4bfd5b7f6b6237fafbd3bd54e1"],["/archives/2023/01/page/2/index.html","d938ca5e4e5c3785f09936e669703936"],["/archives/2023/02/index.html","352fa4b8d925ad10641cf55d8007fa27"],["/archives/2023/06/index.html","13e578780c6b0a5490e8f1498d8ec1ac"],["/archives/2023/07/index.html","79f79e6663780fe9984fe22eb1a6bd65"],["/archives/2023/index.html","7a894a7ed465c998faf89c15f978c411"],["/archives/2023/page/2/index.html","c5261bb9999efdc6ea8a190a340d0486"],["/archives/index.html","bf861159683368af229f9fce212ab2b2"],["/archives/page/2/index.html","ffbd1814158fa1d953287af39be6f028"],["/archives/page/3/index.html","74b1495a43debc6064e45819e954b46c"],["/archives/page/4/index.html","5de1028fec07cae2ad3c7b159944fc8d"],["/archives/page/5/index.html","fceee6071075e44cf9350fe7e33027e5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","d08442efb2ce6b539fc1aa22eff67735"],["/categories/C语言经典100题/index.html","4835af3044b51553136a25e23092b26c"],["/categories/c语言/index.html","4661eab67a68c58c3a2bd07601a28fbb"],["/categories/c语言/page/2/index.html","6fedd574ef9c6dbc3ecfa1719dd748a0"],["/categories/c语言/page/3/index.html","58446e43ab3d408826cf8aff2d165a05"],["/categories/index.html","0eb77061d6ede930d5830e4ee4d10db2"],["/categories/经验分享/index.html","5ad3bd626c31b9e9bb9d2f09a59a8db5"],["/categories/计算机基础/index.html","d22c79454794e2be9b0c33b65730dd96"],["/comments/index.html","918a4de7af616ff345f1edffc3eef59e"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b5c2ce904246c1356c58bee0f064b5bb"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","2e19861c1d81e3d49292b8f2daecaf19"],["/link/index.html","ce9e07f5980a0ea972d3eb28f8a9e0b5"],["/page/2/index.html","86ef4c9c8e0d0b1e97721d5ffa2f5710"],["/page/3/index.html","42cfe7a35ce89d1614ef6c2212251292"],["/page/4/index.html","433af88f4872b2b1c03e5c9d06e5f0ce"],["/sw-register.js","45c4c8116f239aa10b321ee8605c5d79"],["/tags/C/index.html","6f9d75c16633ac284501668b7dcd78e7"],["/tags/C语言/index.html","8c57f7c812af352ba4b9ff10ff053574"],["/tags/C语言/page/2/index.html","53cd7142de73f7923e0932fc1c3b598a"],["/tags/C语言/page/3/index.html","6006e65b318048ed6443ac9c2b550b48"],["/tags/C语言经典100题/index.html","bb9ffb97f91fd1e4440a39c77e164c57"],["/tags/index.html","5ddcfc840cb8d29c79951e3b5d062290"],["/tags/类和对象/index.html","b27ddbaf5793cdd8bf3b338a26495cf3"],["/tags/经验分享/index.html","e7fb930d00f9a8b21dccd2cf2fb545ad"],["/tags/计算机基础/index.html","362e50a010c4b8245734a61e3a0b86b0"]];
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
