/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","fbbf7c8924ff90758a275ae8f9105042"],["/2022/11/03/NOnote/1/index.html","fe0ec0e1ded94237028253d1f192146e"],["/2022/11/10/NOnote/2/index.html","ffa68fcbbc63dfda07623656961c1be9"],["/2022/11/10/NOnote/3/index.html","85a05ce2f1d13e5d0323301d80ba1613"],["/2022/11/10/NOnote/5/index.html","08d217cf37a8fd0794fa2664ffa369bd"],["/2022/11/10/NOnote/8/index.html","ba99b123c857f0aab2a374981faf070b"],["/2022/11/17/NOnote/4/index.html","cc083a4b01ddad7e87a2b632337c7476"],["/2022/11/17/NOnote/6/index.html","9d5ee1878520256ec8949a9263924506"],["/2022/11/17/NOnote/7/index.html","545b7a2b5ddefe3979711f3f2ff1961f"],["/2022/11/17/NOnote/9/index.html","d727967bb7e775d34adedd5e7ea3f24c"],["/2022/11/24/NOnote/10/index.html","e43281682daca55f914a75ca6bc2cf26"],["/2022/12/01/DEnot/1/index.html","980eeeb791cc632da463b1fe27ef803d"],["/2022/12/01/NOnote/11/index.html","6b3683d7c51b40a858cf8a44e4b6dcc4"],["/2022/12/10/DEnot/2/index.html","f2c559ea18b07eff8345f1ee3889618b"],["/2022/12/10/DEnot/3/index.html","38b64f1b5c927de1e0756dc0228abcac"],["/2022/12/12/DEnot/4/index.html","c344991b9dcf33a6b1e1bbb1fee9217b"],["/2022/12/12/DEnot/5/index.html","1b7eb3788f35f541a6dfdabde4bef0d5"],["/2022/12/22/CTM/1/index.html","d635562768347d6c4f2e2faa2fc11d46"],["/2022/12/22/CTM/2/index.html","fa0c0fe01729fdf28ae722dbe5b8080d"],["/2022/12/22/CTM/3/index.html","a30d91a49299c31aa01abadff28c3493"],["/2022/12/22/DEnot/6/index.html","8c18393a00e956c73c5754b2433d9acc"],["/2022/12/28/CTM/4/index.html","11d87d0196fe3c990dd29cd9831e6df1"],["/2022/12/29/DEnot/7/index.html","8316d7c10327414aeaf3d1a034b1b245"],["/2022/12/29/DEnot/8/index.html","4a17717a2161f55eac7e301d1e7cc4c7"],["/2022/12/29/DEnot/9/index.html","163283fd877da3bbe9712d2e3a7c7c21"],["/2022/12/30/DEnot/10/index.html","e950e62465ba653795297203d444402a"],["/2023/01/03/2023/Mon/1/index.html","c69a89cf5e5a48d8aba0b54e547ff54d"],["/2023/01/06/2023/Mon/2/index.html","e60a3162bb2e4985b355ea2e380e4061"],["/2023/01/08/2023/Mon/3/index.html","32007ad93c61babece4766df59d25010"],["/2023/01/09/2023/Mon/4/index.html","0ab63b2af5544ee13e29a0f5c66a9fca"],["/2023/01/19/2023/Mon/5/index.html","e121478f42fb093fa99f31585846c90e"],["/2023/01/21/2023/Mon/6/index.html","636d0c6b6406e6b463490603edee9122"],["/2023/01/21/2023/Mon/7/index.html","9627f12d7ae2494f4bb4f76673b642ad"],["/2023/01/22/2023/Mon/8/index.html","71d216723c47840d5a85436d68fdd52d"],["/2023/01/23/2023/Mon/9/index.html","3f511d4e6fa4d213395f2b7fe2eaa776"],["/2023/01/29/2023/Mon/10/index.html","2979fca629f858df8b7e1e8957a4ff95"],["/2023/01/30/2023/Mon/11/index.html","22817c7d2014af9b177b64da4e8689b0"],["/2023/01/31/2023/Mon/12/index.html","8d2695dd0ea284718593d1f382b4e4a5"],["/2023/01/31/2023/Mon/13/index.html","1271efd2118653ebf120416ad1a2e63a"],["/404.html","8620af70df630f8f5c278104bd3a6f96"],["/about/index.html","81e35525efa5120f514a6a1a99610a68"],["/anzhiyu/random.js","fa6c20440acc32703a650d8bf185eb64"],["/archives/2022/10/index.html","84c097ede1d990813e2d1cc9f09150e3"],["/archives/2022/11/index.html","2cf38f9b16576984655acfb226add764"],["/archives/2022/12/index.html","2e649df1cf183f24797a70b92f081cb3"],["/archives/2022/12/page/2/index.html","c2e4628b1a22f3bf65ab4896fdb19f31"],["/archives/2022/index.html","8b55043e23ceaa059328cf3bac3a1ff6"],["/archives/2022/page/2/index.html","2c43def79c42fdb0a00c5a07e87488a3"],["/archives/2022/page/3/index.html","eee96e0140873fb6d4f2e603003ae3f7"],["/archives/2023/01/index.html","c3e7101df12a1fbb2bd25879bad22c29"],["/archives/2023/01/page/2/index.html","0db8ffe19a9a27420355d701bf570f1e"],["/archives/2023/index.html","a6263d0d4da2b60ea2e4f15a6aab83c2"],["/archives/2023/page/2/index.html","61a2024c3965ecd1864a40b4cb853947"],["/archives/index.html","e9a82837b5d051cef6e3d3b4e2132008"],["/archives/page/2/index.html","bc38c4346f607399388ade72dad4fd5b"],["/archives/page/3/index.html","abde779c6d08d3686415a1858e8bc414"],["/archives/page/4/index.html","943f20a09d1d7ce150711c1edbf73d11"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","e46878884e9c85aebb075eda68dcd929"],["/categories/C语言经典100题/index.html","94df4a6b5acde28b150db10d864baf48"],["/categories/c语言/index.html","4bfd659d27c22c6bb2d5e7de6c0ab98a"],["/categories/c语言/page/2/index.html","f2d827057574c7fd6cd1ae0d179e983f"],["/categories/c语言/page/3/index.html","8ca46d7529c66fac53ccecd8de1022a0"],["/categories/index.html","7842beff3dafb5bd999f0911ae2f6ea7"],["/categories/经验分享/index.html","bfee21b3bbf5632eb76e9199d0cf93d9"],["/categories/计算机基础/index.html","0ec10367a9d709e03aa289af5aee5efd"],["/comments/index.html","ec2e6ea588bf1ce7a5730640303e5ed2"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","63543a5e4c5a15154f6dcd04c03ed3b4"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","2d7717506a92303f7b9c48f6d88cf098"],["/link/index.html","b369e9a7490ea2c6822e86503a3789c0"],["/page/2/index.html","d7dd868890d82a17105578d9df031330"],["/page/3/index.html","3220b0ccbb5949786aadf5cbfc9a35c1"],["/page/4/index.html","b9ad44fb8345debba417c68942956255"],["/sw-register.js","47bccefeacbde1c8b82fb9378d863820"],["/tags/C/index.html","ae3c17b96531c08444cbf5dba9e67052"],["/tags/C语言/index.html","6a8b770c1412d90b33909cd6ba2e94e5"],["/tags/C语言/page/2/index.html","a9fc4447d797e804e577b5c2dabf9314"],["/tags/C语言/page/3/index.html","2ffcd09f581028a7a31609786d18b557"],["/tags/C语言经典100题/index.html","e9bc6c6b6f5efb3232f6a295a29c529e"],["/tags/index.html","32700ed90e8278fbfc4c8b749b122e2e"],["/tags/图床/index.html","0d7b91199703cb5336585cd06cc5720e"],["/tags/类和对象/index.html","b695e90b8e89307ef5f294b83aee8fa5"],["/tags/计算机基础/index.html","076dd3eea0a30428d1a041f88366bf26"]];
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
