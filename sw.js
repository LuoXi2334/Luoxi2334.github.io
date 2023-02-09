/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","2ab84d45ef24826489bc06dfbb5894e5"],["/2022/11/03/NOnote/1/index.html","2ca3a5bd2d24d680cf6004cc736ab530"],["/2022/11/10/NOnote/2/index.html","0d403717b8fda8c2ac2abea85845bf6c"],["/2022/11/10/NOnote/3/index.html","6329a5a94453d2e624112bcb8a1a888b"],["/2022/11/10/NOnote/5/index.html","e20243611765277c754ddba8b18615ee"],["/2022/11/10/NOnote/8/index.html","662108346d485ad557756394ad447a12"],["/2022/11/17/NOnote/4/index.html","355c01478d3578502f4b63d074052484"],["/2022/11/17/NOnote/6/index.html","82510c8c5aa3d09c35b2efd7152ee841"],["/2022/11/17/NOnote/7/index.html","91eb5057bf767a7e9aefc7e820ab1ba1"],["/2022/11/17/NOnote/9/index.html","42a94fea13a910c171715c37f3a5df66"],["/2022/11/24/NOnote/10/index.html","b8abbffa39ce0602bc6b9697f76d7fc9"],["/2022/12/01/DEnot/1/index.html","918f0a94d8015311d5a1bad155354004"],["/2022/12/01/NOnote/11/index.html","b1b6590e4ce2043c4203ea2c3347ca18"],["/2022/12/10/DEnot/2/index.html","bb0a90a9b6811f8c87c8ac7a83b1df81"],["/2022/12/10/DEnot/3/index.html","12b88358e66e619d13d6ea7976bf89be"],["/2022/12/12/DEnot/4/index.html","dce9af41e917ecb2174d227fcb0abbce"],["/2022/12/12/DEnot/5/index.html","db1b39a55c3a6b2f7d0268519bcdaf0d"],["/2022/12/22/CTM/1/index.html","f3f774d3ff6fc8bae162742545503cad"],["/2022/12/22/CTM/2/index.html","a774d278c26afcb44494a108b356e7d5"],["/2022/12/22/CTM/3/index.html","15259b43f9d6d0eb8a9d1737b0477d4d"],["/2022/12/22/DEnot/6/index.html","fca4ee019584a8bee7f64d5a31beca0d"],["/2022/12/28/CTM/4/index.html","503a972f7111dc2fa6bcdaa427334722"],["/2022/12/29/DEnot/7/index.html","22c689772d94100db763e1c03b8d2cc0"],["/2022/12/29/DEnot/8/index.html","7eef6c5f4a1bd3038131697d2e92a131"],["/2022/12/29/DEnot/9/index.html","6a34756796def4c2aaf6f328bb8068ae"],["/2022/12/30/DEnot/10/index.html","5406104a5ed04508cdd27e5b9fcdd7b1"],["/2023/01/03/2023/Mon/1/index.html","4742cbfad396c521a491e4b61e872afb"],["/2023/01/06/2023/Mon/2/index.html","fce1fcc2c12a7e5a980ddde1dfaf5a7e"],["/2023/01/08/2023/Mon/3/index.html","495b660d85c2881c2029f0069a21da1d"],["/2023/01/09/2023/Mon/4/index.html","b0a16e4c490398643b8824b9e2894583"],["/2023/01/19/2023/Mon/5/index.html","8f5280ff4b6cd114f77868dd11088b55"],["/2023/01/21/2023/Mon/6/index.html","4a01d3c66cb9c56689a4371a81ed5434"],["/2023/01/21/2023/Mon/7/index.html","900cfa793f16fe7ef399f1f963bace30"],["/2023/01/22/2023/Mon/8/index.html","a82d9d2d834c80ce86c47beedf6b9190"],["/2023/01/23/2023/Mon/9/index.html","04c4864d7fdd5eec2facce1d5864fcca"],["/2023/01/29/2023/Mon/10/index.html","40959005a840b9d919d46b6f9a857318"],["/2023/01/30/2023/Mon/11/index.html","c65e3747b5119a41e2caed730b8c7a58"],["/2023/01/31/2023/Mon/12/index.html","3ed113596ad98b1c43d49709e0f33040"],["/2023/01/31/2023/Mon/13/index.html","c354680849d8808a54ca61d3aa58d7cb"],["/2023/02/06/2023/Feb/1/index.html","b429e5b6783455d9d2cc6f54052a2859"],["/2023/02/08/2023/Feb/2/index.html","112a976d133cd058b7f2323891c517e0"],["/404.html","f81c6af771e32e8040192116f04db05b"],["/about/index.html","18454fb26d5397c6e3061d75acc0eb53"],["/anzhiyu/random.js","6db02672f99bce8f57671163f17554d8"],["/archives/2022/10/index.html","48a9200e9c23cdee66811c64cc9b0f3f"],["/archives/2022/11/index.html","8c86082f58ac4fcaa1a4b6810d6028e7"],["/archives/2022/12/index.html","76934447385941427d8768d0e282e677"],["/archives/2022/12/page/2/index.html","3b54db2101995235fda51f80791e3130"],["/archives/2022/index.html","87251020e4756dbc7d1a35271bc6f156"],["/archives/2022/page/2/index.html","370c51816c87a9acb9e74fd0b6caca61"],["/archives/2022/page/3/index.html","5b2500320b8f6a7e4dca9e5b202cd36c"],["/archives/2023/01/index.html","48cf41e343485a39151a8952662ec28f"],["/archives/2023/01/page/2/index.html","321de59466e9d86bdce54ff969f3bb37"],["/archives/2023/02/index.html","f9d0d193a2e99ea0c7704f805990f88d"],["/archives/2023/index.html","d9f0b61b1bbf6e368ca6fc82a2647e8e"],["/archives/2023/page/2/index.html","78c08eb222457a1d815046846a2e9939"],["/archives/index.html","96feff8c6e27aeede381a74114033779"],["/archives/page/2/index.html","9298bb6c95cfe679bab0eceb8a896679"],["/archives/page/3/index.html","d6870bc9b3b5e1b2ff3b05b932c4aecf"],["/archives/page/4/index.html","84cd51738b3d4160b4f4b454a70849bc"],["/archives/page/5/index.html","e15705bdcc75210fc2b13ee0d123911e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","2ae1346da8665fd91cc3e244fc564f94"],["/categories/C语言经典100题/index.html","fa8de6adb00f28cce6a13f0b6437884a"],["/categories/c语言/index.html","b108aa00982628cfc7090006e504858a"],["/categories/c语言/page/2/index.html","23524f9bd75444532cc593ff63e7956a"],["/categories/c语言/page/3/index.html","0cb6cd1cdf53f0bbca95d7affcac325d"],["/categories/index.html","c24aeac73f735fbafae092a17ba0ed74"],["/categories/经验分享/index.html","1410a99d5c42cbf69a90fc46cdd0dd95"],["/categories/计算机基础/index.html","2208585e96ba3c903b5861b7b479949e"],["/comments/index.html","a59832e57474db903c50d82a89d96f77"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","69fd44eb7732f6a4433bc7bc572b4692"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","de7db7c902567863aebbb9372531283b"],["/link/index.html","14decf6fac5a8a3fcfa02687211425df"],["/page/2/index.html","913c283a177e21a7ad8f486bd8c4b9ee"],["/page/3/index.html","1c0f6eabfd7c55415c9bdb6dc5d82a39"],["/page/4/index.html","4ad6edff440f4c51f3a7b82e215a4b89"],["/sw-register.js","ebb9c73921a5ee4410c2ab60af4dcf8b"],["/tags/C/index.html","1c77c9dfd30cb1d91bf54be961620c29"],["/tags/C语言/index.html","2ae2eb7ccbdfae45a0e80fb7b737ec56"],["/tags/C语言/page/2/index.html","92383479b87b6094b6b295f2b3de94b7"],["/tags/C语言/page/3/index.html","4a2ed81e890de90aa0e02563220c8b44"],["/tags/C语言经典100题/index.html","ab8a70c1b7a54b4357411160cf99d40d"],["/tags/index.html","05bbce8dd66ae67b5a19d94de7eb66cd"],["/tags/图床/index.html","6c095928933b034e198d4d8efc868c9a"],["/tags/类和对象/index.html","8096e2402348a080cea33367d149eb0e"],["/tags/计算机基础/index.html","c4f87ffa386170cde271bcd20f22ed58"]];
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
