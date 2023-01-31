/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","6bb31e506c95830d1e9fa0354a5611ae"],["/2022/11/03/NOnote/1/index.html","3b88bc5880bcc732d63bab69294ed695"],["/2022/11/10/NOnote/2/index.html","6a714288f9366e92ac0005b8ce676aa2"],["/2022/11/10/NOnote/3/index.html","cd7e54436671479a3f49f8cf68ac7249"],["/2022/11/10/NOnote/5/index.html","80a2d1fc6edfdd8b90db51885a46de79"],["/2022/11/10/NOnote/8/index.html","84fc5a8bad1598fe466af9aa1450ef64"],["/2022/11/17/NOnote/4/index.html","fbd18d3dc8213bcaaa26b05066f9c62c"],["/2022/11/17/NOnote/6/index.html","a316202381e385ad8402f1999b697804"],["/2022/11/17/NOnote/7/index.html","e9518d1a0b5491b97864c435f2de3660"],["/2022/11/17/NOnote/9/index.html","17a8c51560b0d8fa83ecb9ad34ef41db"],["/2022/11/24/NOnote/10/index.html","ea3612791b2972fd8d6297aebdfb75b8"],["/2022/12/01/DEnot/1/index.html","6821508c46d9b440350096a6cc71bbc8"],["/2022/12/01/NOnote/11/index.html","35fa3495722b89cd35990a3eb27143f6"],["/2022/12/10/DEnot/2/index.html","64a38b7a7f10c39782881587b9a23357"],["/2022/12/10/DEnot/3/index.html","e7196a8d2bf92801e3f91dd7aff247bc"],["/2022/12/12/DEnot/4/index.html","8ca74d4f14225be02bb931eea05177ad"],["/2022/12/12/DEnot/5/index.html","caeeea732a18b60d3d6edbdb89785f8f"],["/2022/12/22/CTM/1/index.html","f185bb895d1a97f0f3b037fe6967b055"],["/2022/12/22/CTM/2/index.html","5ac967253ce00e7733fc9069c31fe9b4"],["/2022/12/22/CTM/3/index.html","d0b3ef20e48b6ec2661fc58ce9401a0d"],["/2022/12/22/DEnot/6/index.html","521763c4cbb40763dfe32cdb9954560b"],["/2022/12/28/CTM/4/index.html","50e55256f496d823ffe8f958798de86e"],["/2022/12/29/DEnot/7/index.html","f9a8917f477c098249436b995c8f78a6"],["/2022/12/29/DEnot/8/index.html","a7d4203681b884838d1fe67b71d3435f"],["/2022/12/29/DEnot/9/index.html","45d5fbc84c87e6556288b4286597f999"],["/2022/12/30/DEnot/10/index.html","4af40e80f354d4be9a1ae2742e77a524"],["/2023/01/03/2023/Mon/1/index.html","ad6ebdeeeca47983016e88b785a6ab2e"],["/2023/01/06/2023/Mon/2/index.html","a9c1ed3cfe0001cdc1406f1d91c366a7"],["/2023/01/08/2023/Mon/3/index.html","6ca0d804cb97a438b2e37ea62391cbb5"],["/2023/01/09/2023/Mon/4/index.html","be91d88f0b9eb210bd61aa47e6947f8e"],["/2023/01/19/2023/Mon/5/index.html","afd74c3561d48900f28461debd9f1d7b"],["/2023/01/21/2023/Mon/6/index.html","56042e70f46555639f1b81e677108330"],["/2023/01/21/2023/Mon/7/index.html","d86e230a0cca2de7b3a30769c8c3a9ba"],["/2023/01/22/2023/Mon/8/index.html","986a6ba9a0c6362c4c1b0fe0d3aad927"],["/2023/01/23/2023/Mon/9/index.html","035f58a15f60451ca3ab8b6271864200"],["/2023/01/29/2023/Mon/10/index.html","9596e6b092671447e27d835c42e749ce"],["/2023/01/30/2023/Mon/11/index.html","028801991fb31ce4e0997898f4c3d034"],["/2023/01/31/2023/Mon/12/index.html","4fb7d086b417c07fb4a5f701d62a4f0c"],["/2023/01/31/2023/Mon/13/index.html","37931dc1f9cd543bd51c5141d0eec349"],["/404.html","d2f0e6c2af8d3d712cf3dc7fd16b6e01"],["/about/index.html","eb8ff88bc2f2e559b15b2cc3224f346c"],["/anzhiyu/random.js","88096692f60b564b0bb140ea11abdfd8"],["/archives/2022/10/index.html","a7a69dd060fdf8c6c99c9c276b1c642a"],["/archives/2022/11/index.html","64bbf8971cfa59adb577f777f851c55f"],["/archives/2022/12/index.html","63f6a2e2d346c596ce6931aa1f02b23f"],["/archives/2022/12/page/2/index.html","f6216213b32f6451aa1254bc2488f53b"],["/archives/2022/index.html","c46483cd9e50f7d4df2edae4f812ebe1"],["/archives/2022/page/2/index.html","952d6b1e94e0b0b5819930828137db26"],["/archives/2022/page/3/index.html","bacc6ccdb6afae4ed1e80350bbfa0a80"],["/archives/2023/01/index.html","092bdd467ba53fe28a5307694bd29d4b"],["/archives/2023/01/page/2/index.html","6379361353ec403b5fe147e57f7b4577"],["/archives/2023/index.html","6d81dae421099bfd0091a6721b4cbcaa"],["/archives/2023/page/2/index.html","92927d8088f972035c3a12de45d2eec8"],["/archives/index.html","e82e3633726c15e17fdffaa8068fe35c"],["/archives/page/2/index.html","8bebeab9156fc62f011a365c177b00bb"],["/archives/page/3/index.html","dd2c7885ff9aff509088daa0adeaa6de"],["/archives/page/4/index.html","2ddd59c586bdbe645193125eb0e6d9ae"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","f954248a3a465bee0bfd12708c5e8c3d"],["/categories/C语言经典100题/index.html","01be09693fd339914f3a7f319c5fd1d3"],["/categories/c语言/index.html","c8361daea99a83861ff2c5dae6e44704"],["/categories/c语言/page/2/index.html","aa1e3d84b32e93c494cdfc21d54f18a9"],["/categories/c语言/page/3/index.html","70a8e47224eb2f599d9c3fd3fb72295b"],["/categories/index.html","a8cdc7fb5f2f651a5edc1646239bcd6a"],["/categories/经验分享/index.html","6c81ee97eb85c4c8a506f506a06928e6"],["/categories/计算机基础/index.html","0dbb728dd3894334f5ffdc7978dacb2d"],["/comments/index.html","9d69abb9b10d11a233730e3d56f35512"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fa00b9d88fde497cd70c525eef255a34"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","868d0ee24cc69f5b57d86946157389b0"],["/link/index.html","e6574611b888d22cbe3bc480f8b2de3b"],["/page/2/index.html","6b4fb101fc6c63c3197b1127c31b1d44"],["/page/3/index.html","4cce07a8f23db187f84d345278de3381"],["/page/4/index.html","0627cf7bd16411357c21ea2ad64e6207"],["/sw-register.js","bf2d57d0c5e58d627e5a6052af17bb1d"],["/tags/C/index.html","39e67563c44dd0ea4332ebdaa2976e46"],["/tags/C语言/index.html","2e81c31ea662b8be3b4fae421405792e"],["/tags/C语言/page/2/index.html","a4232ca6a317aa2e4444568d329a9952"],["/tags/C语言/page/3/index.html","50512d01fcfceddc2d776c47c6692bca"],["/tags/C语言经典100题/index.html","a4e5feeded088e4647e18b5fd47e437b"],["/tags/index.html","d9cc635d94452be487d67d623a97430a"],["/tags/图床/index.html","547ff5418ecf755abbe2bace5093be7d"],["/tags/类和对象/index.html","48022ca3c15ab8215726ef9e26aa103a"],["/tags/计算机基础/index.html","5e2817bf78c0b49283c3b2316da0628e"]];
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
