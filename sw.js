/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","8d448fc35da74c20ce22fd41c0136427"],["/2022/11/03/NOnote/1/index.html","6580c65f7d41f571a177cc5c1330fd7b"],["/2022/11/10/NOnote/2/index.html","7317901f3a6eaf7d46bd97970521303b"],["/2022/11/10/NOnote/3/index.html","2e4a5c7cb62b150db57c531ad484e32e"],["/2022/11/10/NOnote/5/index.html","7215a0ea66270f9e1998e3faa432adea"],["/2022/11/10/NOnote/8/index.html","27cef7071f8a0e4b900ea85ed7862baa"],["/2022/11/17/NOnote/4/index.html","71e12f6fbc689968b91dc93e9bed70f0"],["/2022/11/17/NOnote/6/index.html","5122e804b8b777d325db8eda04dbdea1"],["/2022/11/17/NOnote/7/index.html","b64f4c06c21a1f5c98b9cde399edc4f7"],["/2022/11/17/NOnote/9/index.html","e339e04a0341cfbf916743f9c659142c"],["/2022/11/24/NOnote/10/index.html","c8c4f29f529713975ebc9ac77a04413c"],["/2022/12/01/DEnot/1/index.html","0fddbd7ea67d6f746934aaf46be19515"],["/2022/12/01/NOnote/11/index.html","3c0d90a085c1de9d61f9ea91eecb0998"],["/2022/12/10/DEnot/2/index.html","ab163d5417e9f1649e1191842cd83020"],["/2022/12/10/DEnot/3/index.html","9057c23d8e0c7b8c0e3266da8855403c"],["/2022/12/12/DEnot/4/index.html","00226e5be620d5d449f7f08dcea2b3a1"],["/2022/12/12/DEnot/5/index.html","96d37bcd5d019ccd2fe9f94f15b081f7"],["/2022/12/22/CTM/1/index.html","a03ded69c43e76d21e52a55f41eaa9ae"],["/2022/12/22/CTM/2/index.html","17abaee77a08e9499c672a0c6ff5b76e"],["/2022/12/22/CTM/3/index.html","da8bce8cc6455615c2d6fee928e0e912"],["/2022/12/22/DEnot/6/index.html","a2bb1128d67fff5d76d38c6cd8429983"],["/2022/12/28/CTM/4/index.html","db9ba8186d347eaedf72a0c04c3e658e"],["/2022/12/29/DEnot/7/index.html","80dccccea7def72def52d87a2a123ed9"],["/2022/12/29/DEnot/8/index.html","8c1405b6116c6123a5a161e555d11056"],["/2022/12/29/DEnot/9/index.html","37c41e3fe65407bd92b24c659c4cb602"],["/2022/12/30/DEnot/10/index.html","204dd1dfd1afb1ad9756f1dda5e0f70d"],["/2023/01/03/2023/Mon/1/index.html","b22db3976991448d7556f4648542765e"],["/2023/01/06/2023/Mon/2/index.html","b1c865c25ab6afa05f37d2ca108da2ba"],["/2023/01/08/2023/Mon/3/index.html","1bc1bedc1dafa71e59e3a933b565eba6"],["/2023/01/09/2023/Mon/4/index.html","78999d6ae60c41fa0e5228e72fc5ebd1"],["/2023/01/19/2023/Mon/5/index.html","f7068c668d9a61f6447760457907c3d2"],["/2023/01/21/2023/Mon/6/index.html","a069b75b89c07c180798817f339fd586"],["/2023/01/21/2023/Mon/7/index.html","983d96ca38137099ef225376f172470c"],["/2023/01/22/2023/Mon/8/index.html","6f15cb1ab74d80d28df854d645688637"],["/2023/01/23/2023/Mon/9/index.html","aeb29be6a773d086f660b42f01fcf91a"],["/2023/01/29/2023/Mon/10/index.html","df1993553ee13acf0e4c956dfb1ed92e"],["/2023/01/30/2023/Mon/11/index.html","73f56cc180ca5165f2ae174832a1c91d"],["/2023/01/31/2023/Mon/12/index.html","af092cd83a25782ace5275289798f902"],["/2023/01/31/2023/Mon/13/index.html","507d595aa7c298d17feb6ec01ceb65b2"],["/2023/02/06/2023/Feb/1/index.html","81f4e6cebd7ed678bc7c65cfc91d16c9"],["/2023/02/08/2023/Feb/2/index.html","4626a90ba2e4734e3249ad2e75260bb5"],["/404.html","02b24aa5ce728153969b235a1e8e1f32"],["/about/index.html","51536fedebcf5fe19631512cad8531a9"],["/anzhiyu/random.js","5752c439e81751e086e8731760b610fa"],["/archives/2022/10/index.html","962cce04b4463d33f7f6159695bd33be"],["/archives/2022/11/index.html","a9acd7d02385921cdfac3dbc67954b8b"],["/archives/2022/12/index.html","93481342ddf2b37c39bafaa187933a63"],["/archives/2022/12/page/2/index.html","b6944ef542a2b2be1a745b76c070fb54"],["/archives/2022/index.html","99d02bb0bacda137dea95cf46dbb5f2a"],["/archives/2022/page/2/index.html","aa25b9fe1c32546addb916bd745a7a13"],["/archives/2022/page/3/index.html","ce8dcdffa919c0ba3ebcfbadeb595850"],["/archives/2023/01/index.html","0584aed0ad3daac7d9ba9e13edd74372"],["/archives/2023/01/page/2/index.html","fc4c3ef72a59a20400a4896c594647d1"],["/archives/2023/02/index.html","31891fd70c4792f72272f046c739589c"],["/archives/2023/index.html","d21e9637b6e6e9d5c31ee28f4acaf786"],["/archives/2023/page/2/index.html","eb11f7dc57a6e0252304c50b35ecaf1d"],["/archives/index.html","28d4341ecb7c14572759d09acc139a74"],["/archives/page/2/index.html","e835b2542c4a585ec1a71933929b16a7"],["/archives/page/3/index.html","c12ca160714b5350c8d0c5b3b981ddff"],["/archives/page/4/index.html","84205036a26f04231a9299cf8be4a2b8"],["/archives/page/5/index.html","e63c0353252612b8d302e39e31bc8d72"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","9737e95e0363f6e88d4991815b7517e8"],["/categories/C语言经典100题/index.html","b3b742e89bedba90f79e41b9051e4204"],["/categories/c语言/index.html","996827e9e45dc401bb1b1bc238136656"],["/categories/c语言/page/2/index.html","0547d677604aed52df25653d653911c1"],["/categories/c语言/page/3/index.html","fe36ebe1d4f13e70ed307410c449df78"],["/categories/index.html","3594067fc6b240e1b4990cc42b05ad47"],["/categories/经验分享/index.html","74d9879d9f44ea0224d93e21ee37865d"],["/categories/计算机基础/index.html","599f3b15fda188ae98fa4528bbc1cb0a"],["/comments/index.html","0dcc4bd31144a39d1e57ebe4a3485c0b"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fe8ec1a53e5526e809321b12ae974d79"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","2fd65c5808edec2e697d84a3d9f52b11"],["/link/index.html","01dd9fb0f1d7d8a6db1d4f284aac16a2"],["/page/2/index.html","a1d02ed4421067c1fa6ca635eacb03b9"],["/page/3/index.html","8b53194d3d00003ccbde9c0ef9a6ceb2"],["/page/4/index.html","4eab6e8179094eb63936eda346ebb544"],["/sw-register.js","e9a47480811df7e89ceac4dc841200a1"],["/tags/C/index.html","1e8dc62f2a8e777f4f7d2ad353089788"],["/tags/C语言/index.html","96cab0f425c6de7d98c1276f79820262"],["/tags/C语言/page/2/index.html","0bbfd41948b185ea357b4a135c9ca3e5"],["/tags/C语言/page/3/index.html","e3b32dd7f2f40e7f7fe5319adb165537"],["/tags/C语言经典100题/index.html","d119273f85015c1d1e550becd9daa347"],["/tags/index.html","e5f15feb0927fc1200bb46973c1b502b"],["/tags/图床/index.html","4f2825d392c132521f3aa53c91a99e22"],["/tags/类和对象/index.html","784f206d5b5400a4ad43d489c178969f"],["/tags/计算机基础/index.html","182242daf68b7bf11fe9ece898eceac1"]];
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
