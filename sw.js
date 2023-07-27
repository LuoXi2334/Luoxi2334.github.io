/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","23b5df4ef25136b3f2aa7b467206d655"],["/2022/11/03/NOnote/1/index.html","e83163e5c10d53c784785e8254223fde"],["/2022/11/10/NOnote/2/index.html","25bcdfa571813e753fe6fa73f17602f6"],["/2022/11/10/NOnote/3/index.html","6f78896a87fff39bb4feb895dba751fe"],["/2022/11/10/NOnote/5/index.html","0df9aae8ce7248c94418b00b90306567"],["/2022/11/10/NOnote/8/index.html","1a5f2b3d81e89c3c22a987191f85d7ca"],["/2022/11/17/NOnote/4/index.html","53404caa5668e4a74d1d8470dff4df83"],["/2022/11/17/NOnote/6/index.html","45d4cca3734c060083b8489ae66dffe6"],["/2022/11/17/NOnote/7/index.html","1a52eba25e545a3f7a47bf1b6c0b687a"],["/2022/11/17/NOnote/9/index.html","95dd586f04eabc1ccc75a3e8c3731c63"],["/2022/11/24/NOnote/10/index.html","1bd6b3bbd101837ba714010d42459dd1"],["/2022/12/01/DEnot/1/index.html","51909453c43ed60637bbdaccb2db123f"],["/2022/12/01/NOnote/11/index.html","374ef952dd7f70c060ff675582c0fbcf"],["/2022/12/10/DEnot/2/index.html","0814f14d3dc9f1c00059875847053565"],["/2022/12/10/DEnot/3/index.html","22979fb5a2623d0cf72e1515c1240f37"],["/2022/12/12/DEnot/4/index.html","dda287dd830c05aa7eb9d4cb3c5585a9"],["/2022/12/12/DEnot/5/index.html","8aa60eb29c943902cf8dfd85dd102934"],["/2022/12/22/CTM/1/index.html","0c6bad24bbdb217181f142af56ef320e"],["/2022/12/22/CTM/2/index.html","071831e9c01fb55a896d7d31f09fca7d"],["/2022/12/22/CTM/3/index.html","02df1c80b048367e1aa58132b365f398"],["/2022/12/22/DEnot/6/index.html","722523b50475c0bb93249130ccb34c4f"],["/2022/12/28/CTM/4/index.html","f0ef1da74a1db41e35d30c176874b795"],["/2022/12/29/DEnot/7/index.html","125b4380536a282fea5fb04b881a43bf"],["/2022/12/29/DEnot/8/index.html","d5344de83aa422a5217bb91fd9b809a4"],["/2022/12/29/DEnot/9/index.html","5e1dfeafad881959e53dc6fab7575500"],["/2022/12/30/DEnot/10/index.html","c3631d281a16fdaad60dbf3fd88c0ad1"],["/2023/01/03/2023/Mon/1/index.html","2d9482fc88cb1bc74e8901819e6bd467"],["/2023/01/06/2023/Mon/2/index.html","fa96aed1e2272378cafbda3464dcf2f5"],["/2023/01/08/2023/Mon/3/index.html","e7cb7251bcd91861423dd93f9be8404f"],["/2023/01/09/2023/Mon/4/index.html","12a61fbc0a24d20570ddca58761817f1"],["/2023/01/19/2023/Mon/5/index.html","b89d4c0ec0033d4865bd397b01ded10d"],["/2023/01/21/2023/Mon/6/index.html","290ab1884702e1339a0e582850922cd5"],["/2023/01/21/2023/Mon/7/index.html","a8efb73201de69b7d17b0f6a3e3d0acd"],["/2023/01/22/2023/Mon/8/index.html","1acb4429bcc0a15fa2afbb1b51a6baf1"],["/2023/01/23/2023/Mon/9/index.html","943e0db386c96a9fa4559bb6475abf6b"],["/2023/01/29/2023/Mon/10/index.html","437ce1d73e6c3813470168987b632166"],["/2023/01/30/2023/Mon/11/index.html","3dd5a53a5bc86542dd2f4448751389ad"],["/2023/01/31/2023/Mon/12/index.html","6067871b536bfc1e29b442dcfcdcf356"],["/2023/01/31/2023/Mon/13/index.html","2642ecfdb9fa5a0950eaeb93917fdaf9"],["/2023/02/06/2023/Feb/1/index.html","3197dda350c7ffda2bb7c70c8b2e4fe4"],["/2023/02/08/2023/Feb/2/index.html","a01a3481748b59feeb20c4ce37198b7d"],["/2023/06/01/2023/June/1/index.html","35d3482a432766fdce293e7097923bec"],["/2023/06/14/2023/June/2/index.html","b9fc9b2d1303f39bcf241ced6b6baaca"],["/2023/07/27/2023/July/1/index.html","24011b6a029f1e360c5a8ba6a1558649"],["/404.html","efcafc58a766eebced45e80ea4f94c08"],["/about/index.html","3e6c34422e6442794e010fc986e2ab76"],["/anzhiyu/random.js","3bdab7ca9bc1c0de346e41ced04c9dca"],["/archives/2022/10/index.html","be87cb73bf1093ceeda21031bffd9627"],["/archives/2022/11/index.html","d5651cd695064412aba88cd38b34fb02"],["/archives/2022/12/index.html","da8a0c72089eef124e8f0bfdfe54fa57"],["/archives/2022/12/page/2/index.html","ac20483627fbc8e7be6f15f3b64a6b37"],["/archives/2022/index.html","817c686a72371662762a57f97b541cee"],["/archives/2022/page/2/index.html","48cb0b7d5d13cc8a920673b563a50a98"],["/archives/2022/page/3/index.html","c2ad3fed2981c7603b2cea3e4e3c29bc"],["/archives/2023/01/index.html","5f86479e40cf157bd1188b9568c59ce3"],["/archives/2023/01/page/2/index.html","13b319f791dbb4fe4d667bc91192f502"],["/archives/2023/02/index.html","97770febc991ec79df6a9c20c7f49e82"],["/archives/2023/06/index.html","9cbb6658fdfcf8a74b61275a9394947a"],["/archives/2023/07/index.html","a0bce596bf89e370e9b2308cce29a759"],["/archives/2023/index.html","55bed51751a670c85e79268b54d3d1fd"],["/archives/2023/page/2/index.html","3c53468e3441ab2907f9c8f458f545f0"],["/archives/index.html","d6936fadc561529ca5dddf4d8a3dc1de"],["/archives/page/2/index.html","b14508490cc13fbe7d9b4285ed1195d7"],["/archives/page/3/index.html","b1c0abced457839e0ba31d01b5f83812"],["/archives/page/4/index.html","800e05c779d7156fae171bb69dd6c146"],["/archives/page/5/index.html","8ee3d9aeca9e3f4db184967897feabfd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","234823c6b4cb14536adc4936d584795f"],["/categories/C语言经典100题/index.html","9311666b9eb32d136143841edc875240"],["/categories/c语言/index.html","8632a66105354b5c18032ea014a15635"],["/categories/c语言/page/2/index.html","6494a7f76cdac4b821dbeef2328c03de"],["/categories/c语言/page/3/index.html","bfbe0721892c98ea4fa8e860c5992f54"],["/categories/index.html","326c6fdd7d6455f9187cd8b3a443e06d"],["/categories/经验分享/index.html","6ee11598c1472be001df23fe46a8d8bf"],["/categories/计算机基础/index.html","244268f080ead97ed137771c98631aa9"],["/comments/index.html","dce90c67aa3caa616bdb9a669ff15274"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","18a23c92149364f1d524c671cb73ddd7"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","906ae6222521cd0ba21d777ad620a1c1"],["/link/index.html","32ca669493510d3758225a0894141f3d"],["/page/2/index.html","f09ad79713410bd2ec7036156776a32b"],["/page/3/index.html","7f4e3ebbc81585be7e82d942fa099964"],["/page/4/index.html","3f1aae8a0dbaf5623c75813abfc8e5bf"],["/sw-register.js","f5601bf2e40840f625251e6c4303a7e3"],["/tags/C/index.html","b06bc75b9e7b7fbc8dd5c5a4b48f40db"],["/tags/C语言/index.html","479fae3364910d75f667a921fa177557"],["/tags/C语言/page/2/index.html","ab969a3ec88caa243e9bddc5e55f9623"],["/tags/C语言/page/3/index.html","3466d0444caf09f8d3242842e214ee0e"],["/tags/C语言经典100题/index.html","01d36cd283accfd71eafa0ea432fb1e9"],["/tags/index.html","c4f3c4a26f3778bbf1e52d417361d188"],["/tags/类和对象/index.html","13c172b438688646f2ed239f76ddb2c6"],["/tags/经验分享/index.html","5866c0d967c27b12b2a1c2cf807f74e2"],["/tags/计算机基础/index.html","27bd337d068eba8c4f9376e094292897"]];
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
