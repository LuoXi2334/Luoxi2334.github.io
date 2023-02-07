/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","70be84ab1f69f407dba9ac6dcd1d3084"],["/2022/11/03/NOnote/1/index.html","a3238340014b74ed776f7c298dac3329"],["/2022/11/10/NOnote/2/index.html","3629db25e60b4852f2586d984b1d14c9"],["/2022/11/10/NOnote/3/index.html","7eff2b46ccc9e09daf3c7d11d484b9b2"],["/2022/11/10/NOnote/5/index.html","ea013ad2f9675fb94f5f45b4a6e94731"],["/2022/11/10/NOnote/8/index.html","024a292158a4d3fd4ecbccc3da642286"],["/2022/11/17/NOnote/4/index.html","a4ac7c42e01c3e3d3f634fcb3b6fd60c"],["/2022/11/17/NOnote/6/index.html","20e022db261b881ec4817799f4bc2fb2"],["/2022/11/17/NOnote/7/index.html","8462570da9dff07be5781012bd8b9d26"],["/2022/11/17/NOnote/9/index.html","3f797531b077d2fbd64c9d16cf944224"],["/2022/11/24/NOnote/10/index.html","20a96aca17d33764bd97b060b82acfcd"],["/2022/12/01/DEnot/1/index.html","13aa167bcd983d0d204234ec5da5eca8"],["/2022/12/01/NOnote/11/index.html","80e0eeaef057a440efd6e231336c216d"],["/2022/12/10/DEnot/2/index.html","c44001bb373482cf87aefbfa107fd005"],["/2022/12/10/DEnot/3/index.html","e5282b638aa2f6389b531043378c9883"],["/2022/12/12/DEnot/4/index.html","424624be361442536e90dad7efed62a5"],["/2022/12/12/DEnot/5/index.html","cd481e50c5d4de18ab3619145be48985"],["/2022/12/22/CTM/1/index.html","b59e38ed0acadaaee622ff1a95a57a13"],["/2022/12/22/CTM/2/index.html","242824409fcfa54b16be5298f13fcf48"],["/2022/12/22/CTM/3/index.html","9f19fe07bb689beb1623fdd7b17151f9"],["/2022/12/22/DEnot/6/index.html","3a76f4f7b42bcbb8820a3f01b2dfeb70"],["/2022/12/28/CTM/4/index.html","8d00f67c1bbea03bb0e44a11593fa96c"],["/2022/12/29/DEnot/7/index.html","1753c2bc1a807d882a00e0268485575e"],["/2022/12/29/DEnot/8/index.html","c4abfc08089a92fcf8a5d7f3a1ce9ba6"],["/2022/12/29/DEnot/9/index.html","d3112f0cdf16b6caecd2845cb5ee772b"],["/2022/12/30/DEnot/10/index.html","5b398e16c626c248ba9f25e36edf6af6"],["/2023/01/03/2023/Mon/1/index.html","c2e2a255ceeecbd0a179eec75ecc7409"],["/2023/01/06/2023/Mon/2/index.html","2cf32eddced528ea0221d52aa43bc08b"],["/2023/01/08/2023/Mon/3/index.html","fb19e91c8e293fd3f4fdb8d745926d09"],["/2023/01/09/2023/Mon/4/index.html","f207c91af7f01bf824f6c51c07c27627"],["/2023/01/19/2023/Mon/5/index.html","251b039c150a67ea510c6a448ae7574e"],["/2023/01/21/2023/Mon/6/index.html","e7d9fbf52eb5b92ba80d7c48354bb68a"],["/2023/01/21/2023/Mon/7/index.html","054e3c6cfe5605b424c44876b585399a"],["/2023/01/22/2023/Mon/8/index.html","73eeeebb7e8fbe2b23f89d80de70fccc"],["/2023/01/23/2023/Mon/9/index.html","700ade94085c4fe89807a7a435c29668"],["/2023/01/29/2023/Mon/10/index.html","6097e8ca6c3136d6923402dbd55f180c"],["/2023/01/30/2023/Mon/11/index.html","a61dffc90508cf70eff7e1e76d0ad311"],["/2023/01/31/2023/Mon/12/index.html","5a877ec5cb0886dd635bb54c8d39a2b0"],["/2023/01/31/2023/Mon/13/index.html","b793bef8058f3a527f2d8c5614f8bf39"],["/2023/02/06/2023/Feb/1/index.html","f6393df08e049b472356580a8259e4e9"],["/404.html","870f0e0998bde88f6a46f00ae422e773"],["/about/index.html","b27c0657c72ad265ab2cd112fa6a07e0"],["/anzhiyu/random.js","1c7bace80dfcbdd4a0d25a526bf2ee91"],["/archives/2022/10/index.html","3f9b2973fce2f35fc057d80152199ed1"],["/archives/2022/11/index.html","c11f46ea4565596137c0fe17efd2a5e1"],["/archives/2022/12/index.html","aaaf0fa664c9296cc2ed01993e338547"],["/archives/2022/12/page/2/index.html","d617120070372a897062fa2370a47494"],["/archives/2022/index.html","3b8162be7257fe2a4004c02217e99e77"],["/archives/2022/page/2/index.html","37ba27d92021d7ab62bb4a9fbc3295c9"],["/archives/2022/page/3/index.html","c99b067a0f4fb387f20cb9cbcec44d3a"],["/archives/2023/01/index.html","82d044153e0670879b6d04422fef4d6e"],["/archives/2023/01/page/2/index.html","a08f1dc0af3e626f72d9b0a08c28ec5b"],["/archives/2023/02/index.html","ba68ad36a01efcd8d4771ec2b8898f38"],["/archives/2023/index.html","5a5608bc5d2715bd4813c34ac3bab251"],["/archives/2023/page/2/index.html","c75dd34a19ed68032add7a679f350088"],["/archives/index.html","a6fc5c368fce7434687c06f71ee8f97b"],["/archives/page/2/index.html","9a187dd9821f52528927492e647f667c"],["/archives/page/3/index.html","8510e2cd56cf39ffae55e69f345dae05"],["/archives/page/4/index.html","a6258c24b044727eda3902a8e978711d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","d8148166950a3d66c0537d7a939cd0a9"],["/categories/C语言经典100题/index.html","c0edc99f09c7abd1ce13ec69ed905fa6"],["/categories/c语言/index.html","447a5cd040eaf66c8804ffd742283e3b"],["/categories/c语言/page/2/index.html","d36eebcfcb25fdc5e4dc9dfdbc688058"],["/categories/c语言/page/3/index.html","cdb9325b3a4fd7dacbbaaf11df0721ef"],["/categories/index.html","67f443243493122e62ec3191e0abd11a"],["/categories/经验分享/index.html","011b71543f279c443c88b97ec0fefbfd"],["/categories/计算机基础/index.html","980fb63c2cd9c7190ef1a70d300f7b2f"],["/comments/index.html","74e07db29b122dd7182f4571a362a6e6"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","21fc08f4371166fd87161fa425fccc29"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","e621e5904c70aed44f6304874ea39911"],["/link/index.html","346114eeb5b7226c2993075e6ab915b4"],["/page/2/index.html","3021835037bff4ba6181a8ff2a0eac4a"],["/page/3/index.html","aae3228e2bdab185bbfd9e654a2051ae"],["/page/4/index.html","920dd33d91a298347c3abcd11d6f045c"],["/sw-register.js","3d8bdb5e074a7150dde34c42e9e9e65d"],["/tags/C/index.html","99273f33276ce584904bd2b05872c127"],["/tags/C语言/index.html","cbbadbc5a7b0d6b9415b2ae3f6338898"],["/tags/C语言/page/2/index.html","728e19bad100a2eee3f282cdc055513b"],["/tags/C语言/page/3/index.html","2480f5103bed122dfb5aefecb3cce61f"],["/tags/C语言经典100题/index.html","631b7311bc3c18f7248264afd528501f"],["/tags/index.html","7ed11f350fc896ab4e59bcd0d40d2cab"],["/tags/图床/index.html","f047d218f1e6f3a20127f089357f5f10"],["/tags/类和对象/index.html","563847d122c3940f2d05b0d358f68b21"],["/tags/计算机基础/index.html","68a30a4780de8b262462a0c83b22759a"]];
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
