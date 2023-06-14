/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","51acf5b81d543d5952a4b0adb9de7953"],["/2022/11/03/NOnote/1/index.html","35a764ec4975df0a27e9de618bbcc2ae"],["/2022/11/10/NOnote/2/index.html","5e46c364d717131c150dccc7d2f209f6"],["/2022/11/10/NOnote/3/index.html","e6979a7e78194e446131dfd6cab32323"],["/2022/11/10/NOnote/5/index.html","3050d8ec2e44ceae43d0d507e24a88a7"],["/2022/11/10/NOnote/8/index.html","2670796bdf209f004f50f5912dd37eac"],["/2022/11/17/NOnote/4/index.html","e56a274fde4785546b06efbc00262cfd"],["/2022/11/17/NOnote/6/index.html","8641451d76009b2bc3cbba4c6714c89f"],["/2022/11/17/NOnote/7/index.html","a571550ac11599056a5638b5538cbed8"],["/2022/11/17/NOnote/9/index.html","384aee38f90e723c967c6c53155906d0"],["/2022/11/24/NOnote/10/index.html","32df9c88df9ec51dfaa61ecd31b1bbdc"],["/2022/12/01/DEnot/1/index.html","6931d603d130a05d859ef1a50a78a0f1"],["/2022/12/01/NOnote/11/index.html","33532e4bfc59ce67268534ec84d2be0c"],["/2022/12/10/DEnot/2/index.html","fa51964db8a1f5ffa0344f71b671180f"],["/2022/12/10/DEnot/3/index.html","0a0c2f902663e1358498ef5237d557b5"],["/2022/12/12/DEnot/4/index.html","e552421f1c420f89d504f8c585dfa691"],["/2022/12/12/DEnot/5/index.html","863a85d34485b57b1a1416b4476459eb"],["/2022/12/22/CTM/1/index.html","d32ccb6a10f2c6ead6a73c48daf007b7"],["/2022/12/22/CTM/2/index.html","5a0b02952d6f743c42054de5c054baef"],["/2022/12/22/CTM/3/index.html","2a0d1b2f951c612f85fb783b8ea0e267"],["/2022/12/22/DEnot/6/index.html","35175623e634c15c5018f8771daafa86"],["/2022/12/28/CTM/4/index.html","099c230a756bb3352292a13d48110cb3"],["/2022/12/29/DEnot/7/index.html","db161e1a129d4477bf127c4bef1f3f82"],["/2022/12/29/DEnot/8/index.html","29fdd602085c474ee3b1bc5f5e07bbc6"],["/2022/12/29/DEnot/9/index.html","61739ee33a76591fe8ddcb75fd2279ac"],["/2022/12/30/DEnot/10/index.html","f41a8b159de0b01832e92684b25726ce"],["/2023/01/03/2023/Mon/1/index.html","0a759241b43b106bfef1946ae73775e5"],["/2023/01/06/2023/Mon/2/index.html","fc2c675791612369eaedbafc69527cb9"],["/2023/01/08/2023/Mon/3/index.html","a067d523bc7590c8dc6e655faa940f27"],["/2023/01/09/2023/Mon/4/index.html","dcb793dfa507c45e7b635f54018cb463"],["/2023/01/19/2023/Mon/5/index.html","d3d5a64a4ca8f1ebd716708d0711645d"],["/2023/01/21/2023/Mon/6/index.html","d227b3dbb42fccf69d8bbf9eb87d0615"],["/2023/01/21/2023/Mon/7/index.html","1bdd3fc262c775437174c7c79e8ac08e"],["/2023/01/22/2023/Mon/8/index.html","1f9b02bb323fdcb1c10c6ccc41414626"],["/2023/01/23/2023/Mon/9/index.html","59864c2f89d6a8a75ab1c96630337b8c"],["/2023/01/29/2023/Mon/10/index.html","d5b2a71596f7da522335cfa397d979e5"],["/2023/01/30/2023/Mon/11/index.html","afe83f571e07a4ae827fb9832016ed7b"],["/2023/01/31/2023/Mon/12/index.html","09e2bc952d634c74428a4bbd83df105b"],["/2023/01/31/2023/Mon/13/index.html","36a0717f82884b2318848c4ddf918cff"],["/2023/02/06/2023/Feb/1/index.html","b1f4d20f3b28c31999eb43db727d1121"],["/2023/02/08/2023/Feb/2/index.html","eb07d3e5e53a857d3b35cce1d114fed1"],["/2023/06/01/2023/June/1/index.html","016f7fb2fd7de4abd94c5f97b6fa2761"],["/2023/06/01/2023/June/2/index.html","e34ad4990fd04bc3275435e6211a3879"],["/404.html","7aa0bbaf8cae5f892e07b15f8aac2d81"],["/about/index.html","02a6a1ec413110ed517eeac79ed86208"],["/anzhiyu/random.js","81bad95e4201225c778b7a2acd43b5e7"],["/archives/2022/10/index.html","ce91f4a8c8287e9df0a799a8dfd3d0fd"],["/archives/2022/11/index.html","6acfa5f61354e34185d17a50a2182b8c"],["/archives/2022/12/index.html","dea34284902e21398aacb67a60044f4c"],["/archives/2022/12/page/2/index.html","0b93b4e8efa679a2064b2a0cb4634426"],["/archives/2022/index.html","10f30f08a4b12f8d49251d9926a2aef2"],["/archives/2022/page/2/index.html","9715da2998ef66de122923ad28d5d99e"],["/archives/2022/page/3/index.html","68d5490de608fb23fc16c78f2141b011"],["/archives/2023/01/index.html","7dd2c749662a966ae98d1b755c58c6f7"],["/archives/2023/01/page/2/index.html","f8d5c9313f681bc639a10d5a35f01bd0"],["/archives/2023/02/index.html","0052b777540d23141a429775b265278b"],["/archives/2023/06/index.html","2817df4b59fad9671c76200ae1090d68"],["/archives/2023/index.html","31b2bffdbf99a5c21f1bfa514c441d1b"],["/archives/2023/page/2/index.html","374d89cfc27334694f5c26d880285c03"],["/archives/index.html","dbf6040b092c342ac3b385057f52d856"],["/archives/page/2/index.html","20faceaee216b8f976ef239aca48f689"],["/archives/page/3/index.html","c903a1b46d73d644c2682afc3790ed5f"],["/archives/page/4/index.html","a4a98e15048b48911088366f6555e1ec"],["/archives/page/5/index.html","cb07c059939553ee1fd6fa67d70586c9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","43873a31f6b7b50179dd4e75a5f482f7"],["/categories/C语言经典100题/index.html","4108533a490b2edf5d8bf6dc74ea5caa"],["/categories/c语言/index.html","4f5ee92182de932926b5db69b9db3d19"],["/categories/c语言/page/2/index.html","522b809c9993679c2fc0c8ffe456c6d3"],["/categories/c语言/page/3/index.html","6ad67b6e7455d193e025471f90077c85"],["/categories/index.html","2e41cf56ed80781b065a22ae67a01288"],["/categories/经验分享/index.html","15a6c3ffa9118d51b246b0de53739b7e"],["/categories/计算机基础/index.html","fe282b51fc394c6d18dcfb7bf5eee445"],["/comments/index.html","195d4283de7301ccc52b1605b9815daf"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7a1777627042594bf9cbbbdffea76f0c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","531c34aab03f3db1f2754827852696e1"],["/link/index.html","543412affc4fe27ba40b0cf8a69a2ac6"],["/page/2/index.html","90219285a4b0502f04ccd4d679d7395d"],["/page/3/index.html","ce063bed18ca77c5cdb328698f65bcc9"],["/page/4/index.html","67e052b49cb7fd3810a89100480a5ae0"],["/sw-register.js","469645ebc45734c09b6cdda62ddd5710"],["/tags/C/index.html","646e14ceeb77c8581bdeae8b11286dbd"],["/tags/C语言/index.html","cc1c016bf767bf64f39e605bdc6d821a"],["/tags/C语言/page/2/index.html","05bae5f0058be61b08715e16d34869c8"],["/tags/C语言/page/3/index.html","2aa0d1805439731961ad50e67d562b4c"],["/tags/C语言经典100题/index.html","f12d9e7f701318b9f71f32dc8b5be6d3"],["/tags/index.html","0fb449adf335f922cf396dd6990acfaa"],["/tags/图床/index.html","8bb8925e4e34b8ce0bdcc55bcb69b897"],["/tags/类和对象/index.html","14162540512cd8dac8a348e8a1dc8d1b"],["/tags/计算机基础/index.html","4332b3f2166f8760aa7dfe5d4497b386"]];
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
