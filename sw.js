/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","ed499029f48b0ea1a5064634164591d7"],["/2022/11/03/NOnote/1/index.html","5fb80a4744ea6fc38e7c1fde997c4ffa"],["/2022/11/10/NOnote/2/index.html","efea870460b7b8788f2a2795f48b3a3c"],["/2022/11/10/NOnote/3/index.html","72abb04d603e9eb5c0a19df14ee7d3fe"],["/2022/11/10/NOnote/5/index.html","b5bb2a216f2a7fcd7db87bb904e16164"],["/2022/11/10/NOnote/8/index.html","b39ec2eb6f32710ccf943c54b0f5ba42"],["/2022/11/17/NOnote/4/index.html","e4bf04b40d5a1d379d23f3489d2319ed"],["/2022/11/17/NOnote/6/index.html","e72c5d917d4b566dfe203ecf7231364f"],["/2022/11/17/NOnote/7/index.html","feb3e87fcddd2096ab54f662c4ef747d"],["/2022/11/17/NOnote/9/index.html","5519fb3cf78b6bcbc7a288c981cc99de"],["/2022/11/24/NOnote/10/index.html","98e7937d5233b2ae64a8f85709d2b354"],["/2022/12/01/DEnot/1/index.html","0b05f67af9fbe8142732e70356f879ff"],["/2022/12/01/NOnote/11/index.html","f7774b4e3e0772242e2e716da060ad74"],["/2022/12/10/DEnot/2/index.html","fb21fc2428940ac558b53e726a18585d"],["/2022/12/10/DEnot/3/index.html","f40c1f421149e4eb54530aaef8f82989"],["/2022/12/12/DEnot/4/index.html","208709844225d96148c1690cecca265b"],["/2022/12/12/DEnot/5/index.html","d37f443f2aadc76f79a73c1f153434d7"],["/2022/12/22/CTM/1/index.html","95ef376932842053d6c7063f32462b43"],["/2022/12/22/CTM/2/index.html","d8d3fc7a41bba138977fad5ce7cd3db0"],["/2022/12/22/CTM/3/index.html","9d13981f1055c8ce1c5f546daab7050b"],["/2022/12/22/DEnot/6/index.html","211249e4bcebf2301517d824451b9997"],["/2022/12/28/CTM/4/index.html","c36d879b66bab187d42e8a1be5b10b99"],["/2022/12/29/DEnot/7/index.html","1fad1856f5e30ead7e69dfdc66737620"],["/2022/12/29/DEnot/8/index.html","4fe1a3a61a7fbc8fbd5d3f1c14f1df5e"],["/2022/12/29/DEnot/9/index.html","6f6627c4423f85aaaf35b167652e2caa"],["/2022/12/30/DEnot/10/index.html","8376abf8cd9eccf67913f5d6933616c7"],["/2023/01/03/2023/Mon/1/index.html","e2a5bd3d92ab9bbec039eb3e3421d84b"],["/2023/01/06/2023/Mon/2/index.html","1f587360c1e59678b376290c422f3db4"],["/2023/01/08/2023/Mon/3/index.html","7d97ad2f1998ccf30877810f19cba244"],["/2023/01/09/2023/Mon/4/index.html","8953a58738013c80d17f7b4518d9bbfe"],["/2023/01/19/2023/Mon/5/index.html","53268c027e77283ac03949f5b728922c"],["/2023/01/21/2023/Mon/6/index.html","bbc0ed461790e866a9e89c8afb864cf7"],["/2023/01/21/2023/Mon/7/index.html","42f7add57313feb88f4c68ea0d81ae01"],["/2023/01/22/2023/Mon/8/index.html","44b06df08f3dbdeeae8c31596c348c8d"],["/2023/01/23/2023/Mon/9/index.html","9ee7e8e2b47856e429a14727f6650a20"],["/2023/01/29/2023/Mon/10/index.html","e32a0779b34c8790f6f2359ad2021323"],["/2023/01/30/2023/Mon/11/index.html","1864b68a7b7c4cd7820d1585912772a7"],["/2023/01/31/2023/Mon/12/index.html","dac6f317fddc396f24ec74558718d4f2"],["/2023/01/31/2023/Mon/13/index.html","b14859b54a8d68e2b4d6e22b8b146d37"],["/2023/02/06/2023/Feb/1/index.html","58629db1226e4b6c8528498ef07da477"],["/2023/02/08/2023/Feb/2/index.html","916d518d4c235dcc85655a6457156ba0"],["/404.html","0ce31dac425a235d453df5086e42e462"],["/about/index.html","031f12b7a9ddb8c937457d02d9e54db7"],["/anzhiyu/random.js","9a2f36deefc66efb08e3cefc9378dd43"],["/archives/2022/10/index.html","facc51af0b4ebbd05a12027fd9a81ae8"],["/archives/2022/11/index.html","0a1ac915f033fab3a48d01c350f88d39"],["/archives/2022/12/index.html","541e45ee89dc2e6b79f1e1eca04fd416"],["/archives/2022/12/page/2/index.html","1cb0e7be71d2d4c1d0b7040900245965"],["/archives/2022/index.html","ad9b62d999d33aca248f6b429e7af89f"],["/archives/2022/page/2/index.html","23e5a365d47bfdb2d4cfa8e7d9b527d4"],["/archives/2022/page/3/index.html","48fec3999016c4e93c4206c994ef9b2a"],["/archives/2023/01/index.html","c5fe68a3ab41e26edc572eaa2fbb6f4f"],["/archives/2023/01/page/2/index.html","67d95622802374533a79726dcf7cf61b"],["/archives/2023/02/index.html","604425e70a18d20fba5547c4dcf2059a"],["/archives/2023/index.html","f1d6c8aa3a4b09d214e5f23051ddbf0e"],["/archives/2023/page/2/index.html","e28c1fcf2ab22ac7c080cfb8fe4409b5"],["/archives/index.html","978e71fafc0263375ac98380fc3734b2"],["/archives/page/2/index.html","dc8aea4cac4fefd2f6aac7ec3186d182"],["/archives/page/3/index.html","4041adfca7aae48c2a8ed73fefd4e26d"],["/archives/page/4/index.html","84c634dc4a3d9099cb45df9c34f1f533"],["/archives/page/5/index.html","a9b0a69a1555c96668318f94f5cdc67f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","fef84558fdaee3114c4fb34c47ca74fc"],["/categories/C语言经典100题/index.html","8daf0320566d1e048a4f8b5d3b4d648d"],["/categories/c语言/index.html","04e70d34a851417d85444c9edff9a5c9"],["/categories/c语言/page/2/index.html","a570703cdd1e07cd8ba42a6c0493e4a7"],["/categories/c语言/page/3/index.html","b08c204c72e0af39273c2533fb60149f"],["/categories/index.html","337246794a2302248b1c6d5013cab1cb"],["/categories/经验分享/index.html","5d4d670e3535eecb9dc04f3fc2d8e170"],["/categories/计算机基础/index.html","64ac37e14cf7d40e06c6c90d682c779f"],["/comments/index.html","a92ca30263975195984051a1de838d8b"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6827ba6b89c0ebd5211b401148b68f9f"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","d5f86a4c818e4c0a347800315849f68f"],["/link/index.html","3abed013a386bb9915a236ace17062b1"],["/page/2/index.html","d7ea11e6f1fd160c1bab5fa52bf1ed5e"],["/page/3/index.html","eed9e30b77503fd93137e750b5f77ead"],["/page/4/index.html","c42909dc09548a23ae29a3aae0e8131a"],["/sw-register.js","de580bd50ec9523fdb9ebaaae833a80f"],["/tags/C/index.html","b6d651d37d8fdffef1a478ced52b0ffc"],["/tags/C语言/index.html","dbf92af29d529ec2eb9c7b5a807fa16a"],["/tags/C语言/page/2/index.html","869ed4dbf01d4ea3535ee0f9f01d616a"],["/tags/C语言/page/3/index.html","53086289e143e160dc14fa255b17f156"],["/tags/C语言经典100题/index.html","110275a59db5aed77ceb1b9818fb846d"],["/tags/index.html","bcf072a5f311b219fcbd0e24a17d2492"],["/tags/图床/index.html","72328cf74b193606dd34a196686f30b6"],["/tags/类和对象/index.html","8a01e02303959c42917ab6708d03918b"],["/tags/计算机基础/index.html","26a84599dbf8741660fa2079270f78c0"]];
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
