/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","8c706185c14e6591ae76b14a21b7301a"],["/2022/11/03/NOnote/1/index.html","00236c7ffc9a1d025100216e37b35dba"],["/2022/11/10/NOnote/2/index.html","c978c92978953714c5ad07904af7b4e2"],["/2022/11/10/NOnote/3/index.html","f20108e973b1aefe112f755db398e574"],["/2022/11/10/NOnote/5/index.html","1a08d90501b84a460ca4dbcb461955f9"],["/2022/11/10/NOnote/8/index.html","582b8da0937a4916b93cf1bda3b438c9"],["/2022/11/17/NOnote/4/index.html","f200f930b0501a8a85808aae1b312e67"],["/2022/11/17/NOnote/6/index.html","870ff0b4be53326dbdc1411a3f814125"],["/2022/11/17/NOnote/7/index.html","9bebc5b45c58ad3cf9fc92d45bb3807b"],["/2022/11/17/NOnote/9/index.html","9a3d3d5f14a535389d5796a977e8ded5"],["/2022/11/24/NOnote/10/index.html","2349b2393c40fe4f61eb77675cf5924d"],["/2022/12/01/DEnot/1/index.html","ad02259b4cea19aeb382e6646453eb9c"],["/2022/12/01/NOnote/11/index.html","3734db71d41c396e4c299c34aca72e48"],["/2022/12/10/DEnot/2/index.html","af1ee0b4c129b40f15afcada9ed93657"],["/2022/12/10/DEnot/3/index.html","03ed5bf3645920db647f18e84282614c"],["/2022/12/12/DEnot/4/index.html","0301829469954df2131cabf0b6147b97"],["/2022/12/12/DEnot/5/index.html","a22cd64bc2cc38c37347b3380bc5ae48"],["/2022/12/22/CTM/1/index.html","531281793ce977078522477d20802eca"],["/2022/12/22/CTM/2/index.html","fd0f7b8ecf03f86e591e4ac60d4cc308"],["/2022/12/22/CTM/3/index.html","741b4abe3c9afb0916416892c73a476d"],["/2022/12/22/DEnot/6/index.html","1314db0a08cadf83b5a1bcaaaca830d6"],["/2022/12/28/CTM/4/index.html","22bf7fbe19bd9739bee997e69fcf3409"],["/2022/12/29/DEnot/7/index.html","4990c4fbf7c8d8ddb8aabaf24effe272"],["/2022/12/29/DEnot/8/index.html","e4ee2832171a7368e6029801581ba804"],["/2022/12/29/DEnot/9/index.html","e66569f83b8d98b2d26ed42a38e24deb"],["/2022/12/30/DEnot/10/index.html","b7d68882be0b006d07236b083c83f198"],["/2023/01/03/2023/Mon/1/index.html","9e0e37aa0ebd863586a0a8c5e2a61ece"],["/2023/01/06/2023/Mon/2/index.html","027c23692e27a7cb2bcfb9860bcd985a"],["/2023/01/08/2023/Mon/3/index.html","e0184d0996e1577739d35ba062c19dd9"],["/2023/01/09/2023/Mon/4/index.html","bd2edbe5e104fbe18bc93b1d555ee533"],["/2023/01/19/2023/Mon/5/index.html","1fb49b43272ae3ab876fb990962aaf8f"],["/2023/01/21/2023/Mon/6/index.html","1c546ee4c836962447a5acfb959ffade"],["/2023/01/21/2023/Mon/7/index.html","c172ed4ed30bcb6d25072eb75685b377"],["/2023/01/22/2023/Mon/8/index.html","a0069bb6c93d6f92271ccfcf5c5f3c18"],["/2023/01/23/2023/Mon/9/index.html","6ca00f8fe919d116f8b1492e3c62f030"],["/2023/01/29/2023/Mon/10/index.html","d3d8d9f941bcd595dc81ede813dd83f8"],["/2023/01/30/2023/Mon/11/index.html","4608b3bd391c9d6d51fa20a66362a7ca"],["/2023/01/31/2023/Mon/12/index.html","64e92be42953fa218a634481bf356d4d"],["/2023/01/31/2023/Mon/13/index.html","9cadd898136bc608280bb13c947c2dd3"],["/404.html","3b6712191641bed59b3e141e3b9a1a46"],["/about/index.html","d9b80fd0236b913882400fafb221fad6"],["/anzhiyu/random.js","f5d355103827923e8581c6516ec8404a"],["/archives/2022/10/index.html","b2a26429e2aa3b072b035904fe18788f"],["/archives/2022/11/index.html","4fd8bc2c6d6ad8ca61b62bc7ef733599"],["/archives/2022/12/index.html","b3117228c68dba5e737a1310797f18b6"],["/archives/2022/12/page/2/index.html","1b466821fa4b5cbf7eb400b70da5308f"],["/archives/2022/index.html","46e652c99033d821fad3db83fdf090d8"],["/archives/2022/page/2/index.html","40ce632fb2af1b95c52a68c60a395a24"],["/archives/2022/page/3/index.html","29f8f40414f55f0f5df5a3252cdd095e"],["/archives/2023/01/index.html","e281a7564b986b3c7e07d66467f8e276"],["/archives/2023/01/page/2/index.html","e53b05a1aa210b29667280933cee14a6"],["/archives/2023/index.html","070364313804e0f6800f0238cfe758d9"],["/archives/2023/page/2/index.html","40629ad6de89b8d91a0d8885eec0c188"],["/archives/index.html","fa58719523323ca764a352a7a87cf094"],["/archives/page/2/index.html","2333714328ceada617b7a7ac01c70361"],["/archives/page/3/index.html","fad1fdfb9e2805359826d2676ef42e01"],["/archives/page/4/index.html","22f18c80aa93384ba905666dffc91f5b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","e2cb6e12c32136940bf9f2f6c1aaf088"],["/categories/C语言经典100题/index.html","1ad5d15d49c5fcac01e6125f2cb3cc51"],["/categories/c语言/index.html","bb59e7161fe5c2c508ccebdd2af8cb80"],["/categories/c语言/page/2/index.html","2fff6592ae807d88e0a16ea4a2c44a54"],["/categories/c语言/page/3/index.html","70f266a00d7eb2414276ff6ec13ee10b"],["/categories/index.html","9eb8f7a0c41629b945c0cdba55a20f35"],["/categories/经验分享/index.html","67f9cd43fb5c49294fadd63a3a8eccfe"],["/categories/计算机基础/index.html","e0dbfb9fb9080cbd6b1e730f64bbfdfc"],["/comments/index.html","1371297ec037fb4fe4536f965ddc9d87"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1feb87170f233ef8b222245ecc6ad24e"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","5177db7fb34fbb5d070712285e84d9af"],["/link/index.html","2ead1ecd2b51e784b16b34a4de4a60c5"],["/page/2/index.html","508babb5de1f53a9d021bc75eaef58d8"],["/page/3/index.html","a3c3d9f06b3ec830497e6cae7c578981"],["/page/4/index.html","c90da92e6fb3288d8e2ac188e2443138"],["/sw-register.js","f98eb4dace4fe14ed62078477b04db62"],["/tags/C/index.html","3cc6a0b45464ad69abb50df9d8022a52"],["/tags/C语言/index.html","3027eca0702045b33117cb85bf5b5b9f"],["/tags/C语言/page/2/index.html","c4e78673bdc083ec31d64bec7c0b1d3b"],["/tags/C语言/page/3/index.html","a9befff34eb88584e9445ae48941327a"],["/tags/C语言经典100题/index.html","168cbc742e56b966bdac79c7f5ab5aef"],["/tags/index.html","48a2833fd283db9c2406de6bb7d0a83d"],["/tags/图床/index.html","33a6fc10a48f7b0bbbfe62f937292140"],["/tags/类和对象/index.html","2151abcb630a96e884f9e92db18913eb"],["/tags/计算机基础/index.html","055ce88498596a7494379d9037fdea36"]];
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
