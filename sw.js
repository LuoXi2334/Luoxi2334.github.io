/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","850041a4d6a86da52399f973835059b2"],["/2022/11/03/NOnote/1/index.html","c5b3b6aab9937af5dd02a9cb923ec3c7"],["/2022/11/10/NOnote/2/index.html","3a715ff535761ed6ca1a5778a40cdc2c"],["/2022/11/10/NOnote/3/index.html","513da4e677a2a6e3d69ce29868cc83a2"],["/2022/11/10/NOnote/5/index.html","1b12c7f632c18c1f7e2ea21768fa5fd7"],["/2022/11/10/NOnote/8/index.html","f4ce83adca586f6579fab76af00d3b01"],["/2022/11/17/NOnote/4/index.html","88ef151084405f39cfbdacb6dc47ef87"],["/2022/11/17/NOnote/6/index.html","12537fe193cdd6a7f79f0aebefb6c56c"],["/2022/11/17/NOnote/7/index.html","26e7a8e03098b35bb53c5be74d9f6293"],["/2022/11/17/NOnote/9/index.html","15dcf6914616b7e036d0e0d9f18d226b"],["/2022/11/24/NOnote/10/index.html","2793e361d66df5ea4d38beea0b1b9bbd"],["/2022/12/01/DEnot/1/index.html","e42f78ce3d958a34c7d71d790924d112"],["/2022/12/01/NOnote/11/index.html","24e61991b6c40d63f11aca47567472d2"],["/2022/12/10/DEnot/2/index.html","998ae83822f70c8003f17f0866e5ab20"],["/2022/12/10/DEnot/3/index.html","b4aa102e71c86460fee332ccc7bb4351"],["/2022/12/12/DEnot/4/index.html","7e853770b8c70beff92dfdd9bdfa2a2a"],["/2022/12/12/DEnot/5/index.html","38249e1d68cc30ffb74f4fc1ee720836"],["/2022/12/22/CTM/1/index.html","998db953ee2d690080a4d5123eb242de"],["/2022/12/22/CTM/2/index.html","f8b7b9a664ed4a62a8b64473c1e945e5"],["/2022/12/22/CTM/3/index.html","3afe813061e91a3e6011f11e0b70b5aa"],["/2022/12/22/DEnot/6/index.html","801a2bfaa2ad7527c3cadd08fbba44b3"],["/2022/12/28/CTM/4/index.html","5133a71f989927803043cb77450658f0"],["/2022/12/29/DEnot/7/index.html","788a9f888a0839fe646294718bcf3235"],["/2022/12/29/DEnot/8/index.html","6823158447088154ec5ba2f8237a749d"],["/2022/12/29/DEnot/9/index.html","95e7f603afc2819b65aea055ea2fbe61"],["/2022/12/30/DEnot/10/index.html","4daae74aea5b6d80a6b4b4eaba365503"],["/2023/01/03/2023/Mon/1/index.html","e7b504e06584accbd46af121fb1c2c49"],["/2023/01/06/2023/Mon/2/index.html","5ee4ec03fc2787fdfec2341711d80558"],["/2023/01/08/2023/Mon/3/index.html","3f46e69ce752b7d9c1a942c5d77d4c87"],["/2023/01/09/2023/Mon/4/index.html","3051474bcdfdc2cdc5deba4760a85c23"],["/2023/01/19/2023/Mon/5/index.html","d5b43a1022305f546a6d918758d31d6e"],["/2023/01/21/2023/Mon/6/index.html","57b44966e488f8f8e0919a93fae4703e"],["/2023/01/21/2023/Mon/7/index.html","a985d88972eaa6d0910eee0e393be0fa"],["/2023/01/22/2023/Mon/8/index.html","ba4af0b16a6999b08f3f8b7388343bd4"],["/2023/01/23/2023/Mon/9/index.html","96a94ea8afc1d27ace0d3d0d21475bdb"],["/2023/01/29/2023/Mon/10/index.html","aedffbee961f9dbd6bf393ea4405d777"],["/2023/01/30/2023/Mon/11/index.html","f841aebd8f148d4f6a7c132e5d79dce2"],["/2023/01/31/2023/Mon/12/index.html","6589a884b5cc9d70959a4c4c8a1f3753"],["/2023/01/31/2023/Mon/13/index.html","e960b3c16c410c204d2ffa5ff212cb13"],["/2023/02/06/2023/Feb/1/index.html","391f4ffb9035d5d1eb5b6b626817802c"],["/2023/02/08/2023/Feb/2/index.html","550da5958990c50ee39d32f1f62333cf"],["/404.html","bf8dfd61bad502f6cc8ee5f93f5db29d"],["/about/index.html","1c0e5e1725038db04791f699a870bfd4"],["/anzhiyu/random.js","f514c57f0f9e4d66c75a07ff774d797e"],["/archives/2022/10/index.html","014ccb83905ba7f8d032a5539f8aa6cd"],["/archives/2022/11/index.html","b6facca1721069d86414e2dd7ddb0f6b"],["/archives/2022/12/index.html","072ad0de33be610f9e322ae1ac89bda6"],["/archives/2022/12/page/2/index.html","cca7a215323217768093d2da337bedd3"],["/archives/2022/index.html","1b364e02a6616f6bd5f391321c8aad8b"],["/archives/2022/page/2/index.html","d6ee15bd4e4946f5ad36c8c5b6a9ce0f"],["/archives/2022/page/3/index.html","8afc74f18e75a2e9f40c4f57b6591d81"],["/archives/2023/01/index.html","0c29a6b689e44472ba28a3018896ba57"],["/archives/2023/01/page/2/index.html","b942291a8ebadd148c489c8a31f4be2c"],["/archives/2023/02/index.html","a9e0364cc4c72ee9057c80c31be39e72"],["/archives/2023/index.html","3d294dc1337693773b2d2dac9c910e65"],["/archives/2023/page/2/index.html","71fa8ef3e695485b8085b0f0706b8fed"],["/archives/index.html","26faa9a0b7d7b4deb4cb675831d40593"],["/archives/page/2/index.html","8c633952fd5e77615285e186ac8aa963"],["/archives/page/3/index.html","add527ab1dde7bc50dd08743ec6cc5bb"],["/archives/page/4/index.html","584e6475a957c4347a0be0e1bb4ebfdc"],["/archives/page/5/index.html","3b50e99904dd16adc339993703e5de8f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","01dc374b04281b5a3fe03fc0f4a452b1"],["/categories/C语言经典100题/index.html","4364dd4ad8533f248d838dc002b74ba6"],["/categories/c语言/index.html","781892bffad9865753ef512f88d6f6d4"],["/categories/c语言/page/2/index.html","95e834269f2b27b7fd2d164fe0e777fd"],["/categories/c语言/page/3/index.html","25247cbaf8dfbd5399c74aeb06e00482"],["/categories/index.html","1646058147d9991e96b60ee21e323786"],["/categories/经验分享/index.html","50928398917fd3aa80194e61144dd21c"],["/categories/计算机基础/index.html","7e1dc99d2803ca9171473c0e45960c93"],["/comments/index.html","ada0921e9f6aa41a674d8050aa0697de"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6d6fb650c58110bbc040c7ee6d24be70"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","be91a1a7d95afacfa80685e3629e86c3"],["/link/index.html","b3266ffa9cffb29039751c3fefce60ab"],["/page/2/index.html","a4213d3965ba65b3c0e5d5a225e95ea4"],["/page/3/index.html","4992193bc2af477b4b72b3d88df2db59"],["/page/4/index.html","ad9c433200f84c435e326a653070be3a"],["/sw-register.js","bedb60bcdb9fff5f45efe30a5a45cba4"],["/tags/C/index.html","2142d64d73690128b67e031504b80ee3"],["/tags/C语言/index.html","d3e77751ae1e10ee2e91143bb49b43cb"],["/tags/C语言/page/2/index.html","40a975fb2c73418065613ab787b99202"],["/tags/C语言/page/3/index.html","496beaa775958b613c4a2a7d9e4b6369"],["/tags/C语言经典100题/index.html","fb3864ad023e638b2cc9336a945ca42f"],["/tags/index.html","f99278780befbe13ec422b5bdbebae45"],["/tags/图床/index.html","bc69fd6228e1d4f4b810d9c2bb4f980b"],["/tags/类和对象/index.html","7e0cc7f9380ef68377b4a51213b421e2"],["/tags/计算机基础/index.html","59664b65c9555385e5d2ae37f1cc22d0"]];
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
