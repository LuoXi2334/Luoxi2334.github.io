/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","4e16062fe5c1f2b6a40289284bf22ea2"],["/2022/11/03/NOnote/1/index.html","4329dea589701da222563394262f22c6"],["/2022/11/10/NOnote/2/index.html","f5dc1ce13be71657cd5638de7a2638e1"],["/2022/11/10/NOnote/3/index.html","43ee995ef8de021b9f79834b42c8eb94"],["/2022/11/10/NOnote/5/index.html","f2f85fb9e77a223dcb895e4872c0ca1d"],["/2022/11/10/NOnote/8/index.html","e2048143ebaa328383948c9c8556df2e"],["/2022/11/17/NOnote/4/index.html","590ae3462bffdf32167aaec944a492af"],["/2022/11/17/NOnote/6/index.html","c005ebb9214e3a034e45535d508e8717"],["/2022/11/17/NOnote/7/index.html","1f74312d7277986e56cdb7fa0c875dec"],["/2022/11/17/NOnote/9/index.html","fb6d53815bb24b21ac74aaaaa97d10b3"],["/2022/11/24/NOnote/10/index.html","00eed1d75061f15ab280bcc7f73b41b1"],["/2022/12/01/DEnot/1/index.html","1a57a023c79b38b3e36c0cded5797dff"],["/2022/12/01/NOnote/11/index.html","9e25c48b304bfd9829748cb8eace56ad"],["/2022/12/10/DEnot/2/index.html","143d22eb85fa071b0015a466d54a3a6f"],["/2022/12/10/DEnot/3/index.html","93527bc2ab33f9fe3c2af861eafaa272"],["/2022/12/12/DEnot/4/index.html","74def0bd3e154848d4c35d4dc708ecfa"],["/2022/12/12/DEnot/5/index.html","2bae8e397c506e85be580f34fb01e482"],["/2022/12/22/CTM/1/index.html","51514b56e0aac09262ff8c9a0b566ebf"],["/2022/12/22/CTM/2/index.html","e5e2e58bba66d535bad46c8b42abd13e"],["/2022/12/22/CTM/3/index.html","adf3da1bfc5151f97cf9587d4b3609b2"],["/2022/12/22/DEnot/6/index.html","ddc34a6a77bd0713dd55f8556def7993"],["/2022/12/28/CTM/4/index.html","6867b1310694d4af573a1a7ce8813d03"],["/2022/12/29/DEnot/7/index.html","631f9ff4d55de5b33b4c1f9f58d94ebe"],["/2022/12/29/DEnot/8/index.html","fce15f324af2746e3abfd913d5eae623"],["/2022/12/29/DEnot/9/index.html","67081340478e15c1e72c821f77125922"],["/2022/12/30/DEnot/10/index.html","43a6d138351ff494f08d3b0f360109d7"],["/2023/01/03/2023/Mon/1/index.html","4610ae9e52e0bdfb6f8bd7c81a9e5994"],["/2023/01/06/2023/Mon/2/index.html","59d93d2f3fce4c8b0b41146418d6a281"],["/2023/01/08/2023/Mon/3/index.html","f312e5644e6bf2c38e8a01ef2c55f50b"],["/2023/01/09/2023/Mon/4/index.html","4346254dc7050386c0b29ffb9e519017"],["/2023/01/19/2023/Mon/5/index.html","8647737d64248093894ee331f2da60e6"],["/2023/01/21/2023/Mon/6/index.html","964750f9494531f9b800c7d6a89aa033"],["/2023/01/21/2023/Mon/7/index.html","7884897ca0aecf54286e0a4d399ac860"],["/2023/01/22/2023/Mon/8/index.html","49f53119dd6c7ebf7fbd3906e3431dd5"],["/2023/01/23/2023/Mon/9/index.html","2bb1f14b983e0a0d89b8883c14b94746"],["/2023/01/29/2023/Mon/10/index.html","6e39e820ae86cf2dec6544874f63e9c4"],["/2023/01/30/2023/Mon/11/index.html","9a64aedadf9c60a9202d6887bd02377c"],["/2023/01/31/2023/Mon/12/index.html","55c9796765a9f18b9e2cea85b4c901a6"],["/2023/01/31/2023/Mon/13/index.html","80569a291f9f423c77fc9631d3cb56a6"],["/2023/02/06/2023/Feb/1/index.html","eedcb1800752b722234e2ee35a2eda4c"],["/404.html","cc85ea025b19934c72c77917b56b8566"],["/about/index.html","56a9564025159b9d8ab71a35dd475367"],["/anzhiyu/random.js","ee02010d898ac4a9f5de45681b676a8b"],["/archives/2022/10/index.html","fb575d1a84646883ee1fed78b49067d8"],["/archives/2022/11/index.html","355be817a1849845e73dc64f3eaf38f3"],["/archives/2022/12/index.html","687c6549bc1e0497532e136696dab3e3"],["/archives/2022/12/page/2/index.html","52ee7058d8d5e92a18256e9649e7c0ee"],["/archives/2022/index.html","96bc5dc74ccb06c6903f0c362a995c5c"],["/archives/2022/page/2/index.html","5e3d73b4d1306dba065c2751d8535051"],["/archives/2022/page/3/index.html","0168b5feb8abe0ebeafc198e175e4d12"],["/archives/2023/01/index.html","b7d9512292d607c72fbafc2feba5c231"],["/archives/2023/01/page/2/index.html","b7b2d521502fb6e6723f4c33e51f13ad"],["/archives/2023/02/index.html","43f9f60f293f071cfbd5bc29caff0b5d"],["/archives/2023/index.html","4096da1d782d86af85e8711a83917b78"],["/archives/2023/page/2/index.html","7548f018575bc7d7ac0dc62f747d5bb8"],["/archives/index.html","6a767b31a0768293d701242f2f066e4c"],["/archives/page/2/index.html","f62179c1088135bfca8bfa2d80d51b1b"],["/archives/page/3/index.html","52ed3af85f2502ebc212bcb103ba0149"],["/archives/page/4/index.html","918727f47db94a0a5dad9bfd98497af5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","a7faaa3516d809ee50eee5f7a06aa466"],["/categories/C语言经典100题/index.html","04849b00dbd8608f0f4aba478e55b0b8"],["/categories/c语言/index.html","0aeff32f863d98d89b143570c916d3db"],["/categories/c语言/page/2/index.html","9518fd04661f9788483d79acc40bce0a"],["/categories/c语言/page/3/index.html","6885522802e4d090d04e4b92cc168fbd"],["/categories/index.html","fb064ae3cb1d66eae46773ba4e1191d4"],["/categories/经验分享/index.html","70d9b9d6da803f2bf6ae8573b865400c"],["/categories/计算机基础/index.html","bbb6f25b0e3ede01241d2f18d9857075"],["/comments/index.html","e56d59d2f562b72078a8c7bc691d78e9"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c7136c6d8d2c1428fe95da2834bd8ef9"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","b9d7ed4181ff643a38d7880406894107"],["/link/index.html","2eddaa4de72ee19265c376c73b5ece5d"],["/page/2/index.html","9762654bc02f799dbe7f689ee6d93fef"],["/page/3/index.html","4cc6b8dc4df3f5b506e19973de8728a9"],["/page/4/index.html","fbcffc7e57598b06fa4dec1ff16bb4d1"],["/sw-register.js","faad7ff4e588062955813140252fef7c"],["/tags/C/index.html","333065b5922ddcd12ab63dd01c5982e4"],["/tags/C语言/index.html","d72779c18d2dcb53ebf1da4caa03c774"],["/tags/C语言/page/2/index.html","6629624d59436cfc53b425b3e192ca6a"],["/tags/C语言/page/3/index.html","6bc751db2b08216bd9b8296f850eb4d2"],["/tags/C语言经典100题/index.html","a7f2be28d9c1bb317639495875b9ba0a"],["/tags/index.html","557701f6a7cb96e5d8ed71eefea03515"],["/tags/图床/index.html","bcadc9637f9de0c89c4790978a2ceaa0"],["/tags/类和对象/index.html","b404631c014fb99925eaababfa977bc4"],["/tags/计算机基础/index.html","fe92640ed5c98ebe426848581f9bff2e"]];
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
