/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","889365ec37b0debfa8d0e0c2c479fd7a"],["/2022/11/03/NOnote/1/index.html","3a4a433b480bd435c58da816aaa445c3"],["/2022/11/10/NOnote/2/index.html","03b35e3d202a00a85153f74fa0961285"],["/2022/11/10/NOnote/3/index.html","f78358794b88a70b7e35fe4ddbe9f8f5"],["/2022/11/10/NOnote/5/index.html","feeb4524317900334d28d91ace632daa"],["/2022/11/10/NOnote/8/index.html","b8383c3b04c9d61b3b942c663666956e"],["/2022/11/17/NOnote/4/index.html","ebc862292077f6432731974e258446a5"],["/2022/11/17/NOnote/6/index.html","ebf5e7943d3d28a96bd8b368f65bf256"],["/2022/11/17/NOnote/7/index.html","3aa954721e16ad4168fbd8ea5f8666b7"],["/2022/11/17/NOnote/9/index.html","8947affae0b21c4e748c832ad68a518f"],["/2022/11/24/NOnote/10/index.html","145ae55a45a37a309a6c4fff7b5cf336"],["/2022/12/01/DEnot/1/index.html","4cd42a177a6092ce7f86c933690766b0"],["/2022/12/01/NOnote/11/index.html","0094ba90f320354ff13a27dfba0c3369"],["/2022/12/10/DEnot/2/index.html","9f0aa11806801d9211ec74c29f98972f"],["/2022/12/10/DEnot/3/index.html","c2f548522572f4c1d76498978ac160ef"],["/2022/12/12/DEnot/4/index.html","a985848477eef4296a9b0c6d60ac15ed"],["/2022/12/12/DEnot/5/index.html","b235cd0a18e00b4b9a57f954b4923e33"],["/2022/12/22/CTM/1/index.html","4380f9237da819b14a778521861a36b0"],["/2022/12/22/CTM/2/index.html","740ea98268dc2e53c65a8af74ce16edf"],["/2022/12/22/CTM/3/index.html","207d15abc60e634d7dda5522f1685ca3"],["/2022/12/22/DEnot/6/index.html","06d57454adbcebc235866a0270f7600b"],["/2022/12/28/CTM/4/index.html","fd20462e60e2b9c5e2bd745e8535ea09"],["/2022/12/29/DEnot/7/index.html","5c20a53239446ce24b4447972563fa70"],["/2022/12/29/DEnot/8/index.html","ff2f45720c909d2bc2d55f84425547fc"],["/2022/12/29/DEnot/9/index.html","99235e946dfe2b4fa7efc5109511c383"],["/2022/12/30/DEnot/10/index.html","034341750c350274259f3673fd244a0d"],["/2023/01/03/2023/Mon/1/index.html","f744985b501176a8136f123ff37885cd"],["/2023/01/06/2023/Mon/2/index.html","4bf3f618fa0688ff9c2ff26993be1027"],["/2023/01/08/2023/Mon/3/index.html","b67d868a46011c9123bd05d5bae85b03"],["/2023/01/09/2023/Mon/4/index.html","2788cbc43c4170f958b4c728fa4c7cdd"],["/2023/01/19/2023/Mon/5/index.html","7075708020265ff771cbdbc92228aeef"],["/2023/01/21/2023/Mon/6/index.html","e0b3d8ae82da1b458468fed472224998"],["/2023/01/21/2023/Mon/7/index.html","f7381070725c279d5a8ba4cdb2487b7f"],["/2023/01/22/2023/Mon/8/index.html","588f1164a8a0922f69ab905636bf7cd8"],["/2023/01/23/2023/Mon/9/index.html","2607421fa0eba4bc7ce01caa58c2eaf9"],["/2023/01/29/2023/Mon/10/index.html","7d7777dcfc6acf6034666e614da232ab"],["/2023/01/30/2023/Mon/11/index.html","1d21c209a2bd987cd64fdd3f270584ce"],["/2023/01/31/2023/Mon/12/index.html","e02b636c816eb6e4e924c74b960bedfc"],["/2023/01/31/2023/Mon/13/index.html","ae3683cde99bca926f156618d5fe6365"],["/2023/02/06/2023/Feb/1/index.html","a108678d9fda0f18f12ee88bddc1cad9"],["/2023/02/08/2023/Feb/2/index.html","3454e6086fe79982c6c1e27f60f19c8d"],["/2023/06/01/2023/June/1/index.html","b0c3fe1fb6c99ee799ea4416b6ccb0ff"],["/2023/06/01/2023/June/2/index.html","f3cc4ea05262ea9958c2b5c401f1e6b9"],["/404.html","8279db5f02b9cefcb84693f55c447daa"],["/about/index.html","0ea505a80dbcb02f2bda62362735d589"],["/anzhiyu/random.js","07f6113b5d594bc429208e29b27109b0"],["/archives/2022/10/index.html","f7cceddbf54ab70862111efb3c20847c"],["/archives/2022/11/index.html","fe531fc0e96269461462bbce1e5f924d"],["/archives/2022/12/index.html","0e3dbf3227c158931aa162883e4884cc"],["/archives/2022/12/page/2/index.html","73234621163fc7a2a246c9210b2e8115"],["/archives/2022/index.html","635358509d114b9d37791e64dc5f6117"],["/archives/2022/page/2/index.html","659c154948a9c28a3cb2970d7ada2ac0"],["/archives/2022/page/3/index.html","ca500b0c99b29537bf9d2fab6d735340"],["/archives/2023/01/index.html","bbee7813aeb51f84a0b9bb8d9bc3e6c8"],["/archives/2023/01/page/2/index.html","678f7f240aabdb90f9d21219f889a337"],["/archives/2023/02/index.html","084c1d38ba65d7ba458a5c8672b801e4"],["/archives/2023/06/index.html","b37cb8d01376aea8c8ee37ef9d39b7e9"],["/archives/2023/index.html","0d96d722280818cafc47c58e6cc48747"],["/archives/2023/page/2/index.html","f9695c4cca1c76a04a85851092110ec3"],["/archives/index.html","65ed0b59d80615e68cd44f05b3b5f306"],["/archives/page/2/index.html","1b96acfe27cd018ca94a3caaeee17388"],["/archives/page/3/index.html","39a769f3bb38d67d6d2a6e2e1c04103a"],["/archives/page/4/index.html","c0c8d7353e8d192a5207a56a2fb04975"],["/archives/page/5/index.html","6806abfb3afc1c6b17b1577103e09297"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","7f3683b0fafc2c304b50a0e5765dec21"],["/categories/C语言经典100题/index.html","2f08d2c180a570f68aade8e6e7692401"],["/categories/c语言/index.html","e701922e3f3eacec189c1ec4fa98fd71"],["/categories/c语言/page/2/index.html","d2fec968172a2e2b0a0c571b0437eca1"],["/categories/c语言/page/3/index.html","92c4cc0ebd8852d5653e107e937f9c8e"],["/categories/index.html","e692bf7be0aef7997a61449cceea167b"],["/categories/经验分享/index.html","858fe5bcaf415a709639c66407363dea"],["/categories/计算机基础/index.html","7565a2c744b3d9490ed3c48c46e0a9f2"],["/comments/index.html","423929affcca5e0d4319733afae0d655"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5924cf8487ba601bf9f4d67907d69edf"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","8417a8a4ee658378c54a8f7e3520bd3a"],["/link/index.html","2d8c621b06c835885f96508ee0ddf2b7"],["/page/2/index.html","75d9a4c49908fadf1ba576afd0cb018d"],["/page/3/index.html","ca3e8521df6be583901584440d76b105"],["/page/4/index.html","791273cca1589708ea409c8ca430de43"],["/sw-register.js","d0859bef0403ad3856dbd6864a7c5e5e"],["/tags/C/index.html","a3255991049467c69b9d5723d215c36a"],["/tags/C语言/index.html","c22bacaaae993f8ae4780a677b10c54d"],["/tags/C语言/page/2/index.html","b2435477cfce475bec84b9106ef769e8"],["/tags/C语言/page/3/index.html","3311d89be985c6d32f766ff071184880"],["/tags/C语言经典100题/index.html","93286ed3d6c60c4ff9fdb863cbd707c0"],["/tags/index.html","42a85677c20c5b824e61a7cd43cf655f"],["/tags/图床/index.html","9824637abd84b3b7a7747c5619799774"],["/tags/类和对象/index.html","363c3b69a5cfa1aab0f7b81efc4bb342"],["/tags/计算机基础/index.html","463f1ed3179b66d40ce087bfbfa79c52"]];
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
