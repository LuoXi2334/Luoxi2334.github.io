/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","2ddf69da2382436ad09d3393fa173276"],["/2022/11/19/NOnote/2/index.html","e89079eaa1dec2f0b0ce627decff01d2"],["/2022/11/19/NOnote/3/index.html","317a5be34e01672269aa212571f1439f"],["/2022/11/19/NOnote/4/index.html","af263ac4f71a3083a693a8f396f7366a"],["/2022/11/19/NOnote/5/index.html","f503cdaa26b6722bb1a4a237a9ac7466"],["/2022/11/19/NOnote/6/index.html","bce42f78d98b5400e075b1204d3c74e4"],["/2022/11/19/NOnote/7/index.html","71523d6f52dfdaf99c83000c2bb81a1d"],["/2022/11/19/NOnote/8/index.html","f612180382c4cdcf0461a06daefc2969"],["/2022/11/19/NOnote/9/index.html","351f3a8073d223c3a5570e11372dd45e"],["/2022/11/19/OCnote/1/index.html","5f4d777220e2ef502586b7100c6fc09f"],["/2022/11/24/NOnote/10/index.html","b610c6e60dcc0d518251f3ba88598bc0"],["/2022/12/01/DEnot/1/index.html","56b75e42eca4c19c447cb28424d8195d"],["/2022/12/01/NOnote/11/index.html","08e8b51c79e013f54b907f706afc6b0a"],["/2022/12/10/DEnot/2/index.html","c8577b1697bd1e81e41be373ad9c09ff"],["/2022/12/10/DEnot/3/index.html","8fdc94edd57c57121f764815e939ad7e"],["/2022/12/12/DEnot/4/index.html","ed6e5c1e4cd8f47db835592ff8ea4ed7"],["/2022/12/12/DEnot/5/index.html","09185e7d54af421118259d5768ca15aa"],["/2022/12/22/CTM/1/index.html","0e398363388e53358d5d31750b20a37f"],["/2022/12/22/CTM/2/index.html","fcdc5f977b369d26f5caf14a8949adbc"],["/2022/12/22/CTM/3/index.html","c62048a95f4271bb39d4add9e7238a3d"],["/2022/12/22/DEnot/6/index.html","5c61cc77f9d117c15d317eb073f3be22"],["/2022/12/28/CTM/4/index.html","e558baa38aa41f2e21ff63da4248cabe"],["/2022/12/29/DEnot/7/index.html","b6a8d1bcb09440ca9e52d13ff548a5f7"],["/2022/12/29/DEnot/8/index.html","fdbd12d44cf82895ceed22671ae467f6"],["/2022/12/29/DEnot/9/index.html","ea0045f66a495492a65993becfcf3abe"],["/2022/12/30/DEnot/10/index.html","8ce55677cc5f551a77e1dc35807768d8"],["/2023/01/03/2023/Mon/1/index.html","479f02307928736030e3c227f26f9350"],["/2023/01/06/2023/Mon/2/index.html","4eccf6b131bc24097aad366f9f8843fa"],["/2023/01/08/2023/Mon/3/index.html","639551983947aab5604b1727c4bbd97e"],["/404.html","9e5f45114b53d0bceee05ebc9c4fb351"],["/about/index.html","a8eb4075037938e025c77014a188f3a2"],["/anzhiyu/random.js","2f0ddc8b2ab06915bc3abbdb333d9e19"],["/archives/2022/11/index.html","b79efb9afb04a56351bb3e7fb019098d"],["/archives/2022/11/page/2/index.html","92c5f20ee5722fadd1d9f1d7b6344282"],["/archives/2022/12/index.html","5ea8d187b867a92a53f74e689b112a32"],["/archives/2022/12/page/2/index.html","f86dde75c25562e2f13d47b37706bf51"],["/archives/2022/index.html","a4f8623817734060bde33448132eeff0"],["/archives/2022/page/2/index.html","876ecd1931d6e94346b1b199bf7a55c5"],["/archives/2022/page/3/index.html","d4105e79a644963104cfcbf313346300"],["/archives/2023/01/index.html","a929ba49dad6262f270f396cef27d701"],["/archives/2023/index.html","2f8a7b663e47b13f4bde0d47215e37a1"],["/archives/index.html","d918244dd89578cbe1fc9da2262a0512"],["/archives/page/2/index.html","8e34bb2a869fd04246c6e83e9efefce4"],["/archives/page/3/index.html","77fcbc9f46609eada24b6fba92e01131"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","d7ee599d39bee1c0caa434b3567519aa"],["/categories/c语言/index.html","2dd239cdbcc8361ec9b2f7721e9e529e"],["/categories/c语言/page/2/index.html","8ab9075f8ce31403e796c74dee63d6ce"],["/categories/c语言/page/3/index.html","dae392da1245a0225ba7a873c6e8c96a"],["/categories/index.html","7b5c45cbb696dd390ca502d9dc149f15"],["/categories/经验分享/index.html","0491c3a730d63c3c6261da57263a2a14"],["/categories/计算机基础/index.html","e96bf5a7911cab49a05152e8cf235594"],["/comments/index.html","d2022ca94bfc367a6bab6d696d5d52d0"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fb0ea909ec4437d44eadcaff7d926163"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","a37697021440ffe6c2e94822144daec6"],["/link/index.html","d509380c32a625ec572abada97924869"],["/page/2/index.html","fe5155f6a28c175c66146b6695bc2876"],["/page/3/index.html","39fe64cd7b08f64a6b181e6e30dcb2b4"],["/sw-register.js","71a6e81814c311831d3cf802c2b2a138"],["/tags/C语言/index.html","851745e7b9d82e798c03d3b359c0418a"],["/tags/C语言/page/2/index.html","f897ac12f07d81cccefd3c61454fce45"],["/tags/C语言/page/3/index.html","929cc4736e81a34efb228c5f88b40bf3"],["/tags/C语言经典100题/index.html","d28eaec03758813b168cbc00b32b177b"],["/tags/index.html","0940a6ba538a68875facdb7df0a7f23f"],["/tags/图床/index.html","3769f1c0ce38be3912af2be850cc07d9"],["/tags/计算机基础/index.html","f1ab10e8d8c95c7a20dd592f07c78ed0"]];
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
