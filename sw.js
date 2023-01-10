/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/11/19/NOnote/1/index.html","a0f40116cc5a3317054e60cc234ff117"],["/2022/11/19/NOnote/2/index.html","a8565f51a317020e2d56192f907fbfeb"],["/2022/11/19/NOnote/3/index.html","176c1a873661b455f77c9eeaaff952e8"],["/2022/11/19/NOnote/4/index.html","1cf579f76d9867f8397c7478c61aa1e5"],["/2022/11/19/NOnote/5/index.html","1a40d147fab9ccf558fcfde5000e5eaa"],["/2022/11/19/NOnote/6/index.html","381d66ff06140c9c514af2a0e7156645"],["/2022/11/19/NOnote/7/index.html","8ac7b07b4936db5085f055ae5c256efe"],["/2022/11/19/NOnote/8/index.html","38d283b65684521851bf6c63ff48f119"],["/2022/11/19/NOnote/9/index.html","f91dfcab02a5cfddb22e36df7c2b350e"],["/2022/11/19/OCnote/1/index.html","3b9c3ea5741b527ceb50da3bbb17bf8a"],["/2022/11/24/NOnote/10/index.html","40d1ab70f16432b04ceff2b777ba31b4"],["/2022/12/01/DEnot/1/index.html","21fc19b5570cf77973b437343db8f339"],["/2022/12/01/NOnote/11/index.html","948727d7a599f00dd99bba3c40f0571d"],["/2022/12/10/DEnot/2/index.html","18d05d3780c44cafa0e1d40cf549575a"],["/2022/12/10/DEnot/3/index.html","c68277b94e038363a4f4b445abdd59d2"],["/2022/12/12/DEnot/4/index.html","6d992d686066ae8fb7ae068e737039f3"],["/2022/12/12/DEnot/5/index.html","068d21a2e7e9912bddfeb8ad7cae9f6c"],["/2022/12/22/CTM/1/index.html","c4c302614302db0a5275184f48feb140"],["/2022/12/22/CTM/2/index.html","ed44a6386d3b75e2c0f80ebdc184b437"],["/2022/12/22/CTM/3/index.html","6dd324700884e2f70fbd72e14ac0d75d"],["/2022/12/22/DEnot/6/index.html","4d75c4f439334b40d9b1a8e241184305"],["/2022/12/28/CTM/4/index.html","3357f9a0237b4b28f97d5e286d1909a3"],["/2022/12/29/DEnot/7/index.html","58a8e7ca2942e9463d64f3f3a1118236"],["/2022/12/29/DEnot/8/index.html","1059c2d39363a34b4d31f0716d452662"],["/2022/12/29/DEnot/9/index.html","3b7e8eaee835dcf4fbb272e2c634fe16"],["/2022/12/30/DEnot/10/index.html","b2c145037cbe6908d6be385e27764868"],["/2023/01/03/2023/Mon/1/index.html","8f9d88f8609f7add259df3b3f2e2c320"],["/2023/01/06/2023/Mon/2/index.html","9e74565db0175bb0b368f7db09d1eb57"],["/2023/01/08/2023/Mon/3/index.html","8a05db85084d0215696774a4d70ec549"],["/404.html","45ebb80acfe2d6fa974a37f663610e93"],["/about/index.html","3ad2fa8077d998e25934db8325eb7ccc"],["/anzhiyu/random.js","379d0dbbbce1c241518f265aac17427e"],["/archives/2022/11/index.html","7c1aec252817ccffdedabdaebce980ae"],["/archives/2022/11/page/2/index.html","f0878174ecd26281e131039ac0fe8be0"],["/archives/2022/12/index.html","93f215356f51a969088793fb2e2ed9c1"],["/archives/2022/12/page/2/index.html","c9aee0c8a7d4bc8ae84daa253a839c81"],["/archives/2022/index.html","00e1d8da43fc5251b13d7b2a1266e093"],["/archives/2022/page/2/index.html","566e6fd67351f49ffde58e819327a02a"],["/archives/2022/page/3/index.html","2d50aa6d3c27e2e9e6c7367f48ba6914"],["/archives/2023/01/index.html","8683942ced13768a69c70ce422054026"],["/archives/2023/index.html","de64cc6dfe1d3133ad0b1ec4255a4e01"],["/archives/index.html","e6a9ae34e6d3ddae6c3bfaf87dc25fdc"],["/archives/page/2/index.html","2a7716de089d0db30c202e69837f5d69"],["/archives/page/3/index.html","680977bb0262be2890ff004d13720781"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C语言经典100题/index.html","ed14fc0d1dc27e16c3a35e9c5e6751a1"],["/categories/c语言/index.html","ebb0fba2c85d4d46bb4dfe0c97c99cf8"],["/categories/c语言/page/2/index.html","71b2e1370b7cfca0df0d8093a85e75f0"],["/categories/c语言/page/3/index.html","8fbc6b541d1518436bbb71cf4047fcc2"],["/categories/index.html","15341a2f7d1cf99c30535b050f1b5283"],["/categories/经验分享/index.html","17cda467eaa79be60562b1c4f6bffdde"],["/categories/计算机基础/index.html","efca03d31120576eb8cafe45402fa152"],["/comments/index.html","e3f949f22169242801b02231700f6631"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","b66a3cfc74647cb43e74f1f0f92f0804"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","694e068efc8e0a06cdcbde55b7276186"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","797aa7e013c30745a3e3c17e5764a5e1"],["/link/index.html","0035d3d02da7b0873916dc7d99615245"],["/page/2/index.html","0f941591d5dba3dc9e2846c797e74645"],["/page/3/index.html","0d7378047d87aefba0897ab4f0de6d26"],["/sw-register.js","1e616ee945b37f89ac6e5c8f85c05f3f"],["/tags/C语言/index.html","85ecd3be07e57464e8508e1fe671c287"],["/tags/C语言/page/2/index.html","203463108224eeefeac2bbaa74b43b91"],["/tags/C语言/page/3/index.html","1c85571a5f2326142bbda95f64e278c0"],["/tags/C语言经典100题/index.html","99c562a79db4489201ae0af8f2268638"],["/tags/index.html","dfca0b1bec1de2fad24f4d036bf0665e"],["/tags/图床/index.html","0ec346f068f9a06663367447c033be9d"],["/tags/计算机基础/index.html","bc32703d4acfe591477eaa598c8c4ad0"]];
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
