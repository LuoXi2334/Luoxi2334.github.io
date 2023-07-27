/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","76b883e5da999611599127b528d65804"],["/2022/11/03/NOnote/1/index.html","adf761c6b851ddf1711cde3675d89467"],["/2022/11/10/NOnote/2/index.html","9b2215807f02bb7116213b9ed2008eec"],["/2022/11/10/NOnote/3/index.html","b0e9a66f03e1268e9f661fc76f2f278c"],["/2022/11/10/NOnote/5/index.html","51669bd111166c1c60aed6d08fb8b14c"],["/2022/11/10/NOnote/8/index.html","270bd51f34125cd502d772f2480e58ce"],["/2022/11/17/NOnote/4/index.html","1940cb99cefb49fb33cc8211963d036a"],["/2022/11/17/NOnote/6/index.html","57a4e80e8a33a7b421ee2d74e70a5266"],["/2022/11/17/NOnote/7/index.html","dcc2f948ff30d31f20180c1bd65f9119"],["/2022/11/17/NOnote/9/index.html","47ca2bc7a42ced834de22d6f605f74d4"],["/2022/11/24/NOnote/10/index.html","750045484b7aa9a6dfcbccec3cdbac1c"],["/2022/12/01/DEnot/1/index.html","182a3b6e6cd7d2201f99ca829effc770"],["/2022/12/01/NOnote/11/index.html","fd3b5414e857a1c306c23d6797e00e97"],["/2022/12/10/DEnot/2/index.html","92193c63872e3418525c0ec38da26183"],["/2022/12/10/DEnot/3/index.html","3a8e8d0046cac96250bd449f7ccf6cab"],["/2022/12/12/DEnot/4/index.html","3bfa6b135d3fa157ef788aeb971cadab"],["/2022/12/12/DEnot/5/index.html","df12521d94501c0a971d0165ca737059"],["/2022/12/22/CTM/1/index.html","4b742edfa4895a5269d43a0e90998a4e"],["/2022/12/22/CTM/2/index.html","8d2a5e5f72aa893c2343be961ffce06f"],["/2022/12/22/CTM/3/index.html","16e74e683897c05e5091b17f347f67cb"],["/2022/12/22/DEnot/6/index.html","2a099400b8940fd6824305467eae0435"],["/2022/12/28/CTM/4/index.html","349d9cbd85ae58d4eb621b12d9e9680a"],["/2022/12/29/DEnot/7/index.html","33638ad36b555a67959f8f2f1c4f8c31"],["/2022/12/29/DEnot/8/index.html","67f5c4e68b8f359407190f30a01c95d1"],["/2022/12/29/DEnot/9/index.html","9e34f0761a8542a5f3dbc806fe674206"],["/2022/12/30/DEnot/10/index.html","3c3c6205200a94171ec04ecdba2f28ba"],["/2023/01/03/2023/Mon/1/index.html","164a73e4e41cfac4a3e994637f30d81f"],["/2023/01/06/2023/Mon/2/index.html","d0d70deff9cdd30edd95488478e7b3ac"],["/2023/01/08/2023/Mon/3/index.html","32721706e1a7fedab5f3a3476c7f7bed"],["/2023/01/09/2023/Mon/4/index.html","8fd2c4657665c6aa1d383131f23b7f5d"],["/2023/01/19/2023/Mon/5/index.html","2413383c2963e7f864d241ab52b8d69d"],["/2023/01/21/2023/Mon/6/index.html","5eb72617fe37453eeb7291e194040ec9"],["/2023/01/21/2023/Mon/7/index.html","bd35bfe32f31d140441473c30eca7931"],["/2023/01/22/2023/Mon/8/index.html","04a9dcac3651cc885943d9d5f47e4837"],["/2023/01/23/2023/Mon/9/index.html","f279128475135587434c61783cbd8735"],["/2023/01/29/2023/Mon/10/index.html","47dacc4da399e99a2549991fcaaaf2cd"],["/2023/01/30/2023/Mon/11/index.html","7a585970f6c5015d100c706d212c0a75"],["/2023/01/31/2023/Mon/12/index.html","4ed6db5eda063d005b8cbafa4c084b5b"],["/2023/01/31/2023/Mon/13/index.html","401e2684e6aac2ab3f173537d519dd51"],["/2023/02/06/2023/Feb/1/index.html","8c5a9f6b56ecb5f061d5e378d558d2b3"],["/2023/02/08/2023/Feb/2/index.html","69209ac87e30eaf9f9869aa7274a122a"],["/2023/06/01/2023/June/1/index.html","74d58e08b62fde84153b31b0ff4854fe"],["/2023/06/14/2023/June/2/index.html","691e538fb0d26d44a4cd83988fb8116e"],["/2023/07/27/2023/July/1/index.html","6a5b846191f1076fa6c56e9f91f273b3"],["/404.html","60a492d3dcf96da3aa1b7e184bbfc214"],["/about/index.html","4c8ab8cb20d37cdcb63061a31f5c8e45"],["/anzhiyu/random.js","bf2a037238949af15cbd27c2737710a1"],["/archives/2022/10/index.html","8fc96a7e06493d11cc01671fdf250c97"],["/archives/2022/11/index.html","d8f5cf0830bcc068b41ce51f5257d52a"],["/archives/2022/12/index.html","bfcbe2c316557bae19b04e7af300db2d"],["/archives/2022/12/page/2/index.html","783cc0c8689638a039bc7072acc27a1e"],["/archives/2022/index.html","392763dd0836d068f41d028da097c64f"],["/archives/2022/page/2/index.html","213237a9d1b20d52c81bc6952e987837"],["/archives/2022/page/3/index.html","00f72705071055f38d0fd7ed008031d2"],["/archives/2023/01/index.html","f6a237c642769c504f4733ec71167f91"],["/archives/2023/01/page/2/index.html","ea81ec7b69fe8607a17024eca0d7d01b"],["/archives/2023/02/index.html","490adf24ec4cdeaa3aef31d1074941ac"],["/archives/2023/06/index.html","e24eb47b7264b613b9acf24dace4d4ae"],["/archives/2023/07/index.html","df707cc0ec428603992e6306d7c12c25"],["/archives/2023/index.html","d6483f55b877a3b53d79a0b27ab2385f"],["/archives/2023/page/2/index.html","1e6bd554aec66ef8f95aac0159605e05"],["/archives/index.html","009abaa4df49fe590d3962c92eff4409"],["/archives/page/2/index.html","7bc186707fb324b8cd707c2a2a72846a"],["/archives/page/3/index.html","145282594335d82e36dbfcc9837d44e3"],["/archives/page/4/index.html","c386ff9bb9ee1df542d1113eb1ccd51d"],["/archives/page/5/index.html","be3611402957176335911eedadd5ace3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","dbf489f6e7a5dbcc195ef4f3c9fd848d"],["/categories/C语言经典100题/index.html","78461f7cc0c3ed842e31ece6adfc2b30"],["/categories/c语言/index.html","06e017dca0f43fd2fcd5a6b785492560"],["/categories/c语言/page/2/index.html","7290738f03cf2ae6d3c18f3266f4a582"],["/categories/c语言/page/3/index.html","708fbed1072a79441c991db4e3383e61"],["/categories/index.html","f0c32b65db7cf075cf3114b279c67531"],["/categories/经验分享/index.html","a0586a7e89a131f59c187b9f197abc8c"],["/categories/计算机基础/index.html","0205ae2a3c935d7c765b4255d49844dc"],["/comments/index.html","86d5bfb9f2a47a4810b57f1dc4fc2e30"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","89527fc67a63021c68d2bf27318a6d6f"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","67c2e363e452167f70c209437cd2feeb"],["/link/index.html","db871a4eb38a85d7e2d6725484a5ac4e"],["/page/2/index.html","d140ed1f820998c8f9de0f430b6f059c"],["/page/3/index.html","27c46ac1dada1a0f64519ff8016ece63"],["/page/4/index.html","a953ebdddbba7b20560af4a6afaffb3f"],["/sw-register.js","a77e8b6c663984e8300cf84635ec492c"],["/tags/C/index.html","49e73d1d891d41d1b0323fe142128003"],["/tags/C语言/index.html","5b24702899c90c6f1feacb8a36d4ae9b"],["/tags/C语言/page/2/index.html","00551dd4d9339caacc1e9390570a8a81"],["/tags/C语言/page/3/index.html","da18dea9fdbfb11156972986063370e2"],["/tags/C语言经典100题/index.html","8fc87cdce62d75338aca7d4f89d09d9c"],["/tags/index.html","121e8006cfa4077532475e45f59b8a78"],["/tags/类和对象/index.html","c647f5d2d812d9fb0142a9670b96dd2e"],["/tags/经验分享/index.html","1e427e88299577323a5e7e07559e7007"],["/tags/计算机基础/index.html","dccb046468842c1dd9070f7758bba6ca"]];
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
