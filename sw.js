/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","d7d87b39718081a0a459c815602d91b4"],["/2022/11/03/NOnote/1/index.html","96441d1fd5541b94d7490c66f7b1360a"],["/2022/11/10/NOnote/2/index.html","b82d268d8fc7391fc00149ff47b03d51"],["/2022/11/10/NOnote/3/index.html","08132a2fc8cc22c80bef7779211e39c0"],["/2022/11/10/NOnote/5/index.html","007b428bbac46474c40dbe44f16544ac"],["/2022/11/10/NOnote/8/index.html","6f6dbe3c955f226ec2e83b4f52bcb1ff"],["/2022/11/17/NOnote/4/index.html","9df2f61d2b00e2cf17d806f7fa5ee563"],["/2022/11/17/NOnote/6/index.html","283dd37e65b84bd25ddf6ded0d41b834"],["/2022/11/17/NOnote/7/index.html","692d89b3511442d8ef1df774d686c91f"],["/2022/11/17/NOnote/9/index.html","978f361900c89bf38a1c91b9d6570f6e"],["/2022/11/24/NOnote/10/index.html","ee02c34809a2f0f43bdcc487dac0517a"],["/2022/12/01/DEnot/1/index.html","1be455dc27dd37483dc8d1dc368eec2c"],["/2022/12/01/NOnote/11/index.html","f37855edf5001d0ee33feb326152de59"],["/2022/12/10/DEnot/2/index.html","1ebe71e6876f9ece8d834c52550fd3f2"],["/2022/12/10/DEnot/3/index.html","dc54fff579aadc5a094e6ddaedc2add1"],["/2022/12/12/DEnot/4/index.html","6246e7428a0e7c8930209d1a755b7992"],["/2022/12/12/DEnot/5/index.html","ac0ad6a41eafd004d9acefe451d2a1ff"],["/2022/12/22/CTM/1/index.html","7920fab5da7c1a64315b8397a97b09ca"],["/2022/12/22/CTM/2/index.html","ab88128af178028e974c63fa704dbc51"],["/2022/12/22/CTM/3/index.html","aba1f9e0cc8b61be9c06d3e2e5d644da"],["/2022/12/22/DEnot/6/index.html","c5f810956d266f8adc89c4da400d017d"],["/2022/12/28/CTM/4/index.html","0fb0bff28d2702ba4eb6464504b89b08"],["/2022/12/29/DEnot/7/index.html","df4e433029c2847f5f07f257be82ec48"],["/2022/12/29/DEnot/8/index.html","35c6cd1f24680432d7b5643793ed53bf"],["/2022/12/29/DEnot/9/index.html","e8e4f27a0b70dc33b606a8f884e2a5e8"],["/2022/12/30/DEnot/10/index.html","d3aa440e2c07f88c955b32a5a2c086b7"],["/2023/01/03/2023/Mon/1/index.html","4ed4e57c9fec7e249386f2f3ebaccc60"],["/2023/01/06/2023/Mon/2/index.html","29904c559c50a30a0eca316701eba1db"],["/2023/01/08/2023/Mon/3/index.html","d4c7b880d6ee13a639391a39dd1328e6"],["/2023/01/09/2023/Mon/4/index.html","c3c613f5823efbb7c9a2e09d4f640551"],["/2023/01/19/2023/Mon/5/index.html","330f71214367816bf3d5e3ca4344f1ac"],["/2023/01/21/2023/Mon/6/index.html","d726989deb2592788eaa644cda5ab4f9"],["/2023/01/21/2023/Mon/7/index.html","452e58ad38b74df203e1652ad2b77649"],["/2023/01/22/2023/Mon/8/index.html","8321d20713d82cb1900095df3b15acd2"],["/2023/01/23/2023/Mon/9/index.html","ae4377f868827350d657cbf5455dd8ba"],["/2023/01/29/2023/Mon/10/index.html","dc1f6de8774b976501b7ab6ff16603db"],["/2023/01/30/2023/Mon/11/index.html","68eacd960436def0315e8db576946e1e"],["/2023/01/31/2023/Mon/12/index.html","ebaddfb8ceb33794b856a8b5418c4e1f"],["/2023/01/31/2023/Mon/13/index.html","83f6da626a1f03491c675dac9c5bf90e"],["/404.html","67593e6d84668a554caf9e6bcb27fd9b"],["/about/index.html","f58e4e3a497ec00d9c7d40784ac58923"],["/anzhiyu/random.js","14a9471f5af109c2a364f4306484d1d2"],["/archives/2022/10/index.html","c22f62db4d930af8fabc29b1c905e7c9"],["/archives/2022/11/index.html","c85680b60b462dac82dc6d9c273faa61"],["/archives/2022/12/index.html","6c75c8597f50ab15c21fe1c415243ab8"],["/archives/2022/12/page/2/index.html","65a92ee815d83b5a4c01f9ab17f74c99"],["/archives/2022/index.html","efc8fd35e7a3078b106eb560c3463ace"],["/archives/2022/page/2/index.html","958bb91e07b485d23e1a1090671c2f32"],["/archives/2022/page/3/index.html","45f405ccadadbffc6f7136e1a5daa271"],["/archives/2023/01/index.html","a951de088afcfdad114de1881c7c523a"],["/archives/2023/01/page/2/index.html","a941327a964b703ba35103564659d663"],["/archives/2023/index.html","2e25682a60da2cfa0fec93bfca6c213a"],["/archives/2023/page/2/index.html","cf54f17cf5ddda5ca56192489d16b9d6"],["/archives/index.html","b82849d07b154a1db00b193ae223c30d"],["/archives/page/2/index.html","cef518159a2c1a614efd8d3d2be3d79e"],["/archives/page/3/index.html","9077cdea4147d710310b68362a786b40"],["/archives/page/4/index.html","e514a9d9812b640b2a8e544db56a97a6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","f9468172ee46198330c4b31388210d21"],["/categories/C语言经典100题/index.html","e01c6b3cc1e2f51bd582685d58c90ba3"],["/categories/c语言/index.html","af8fcb10c941024ff6a9301f327c65cd"],["/categories/c语言/page/2/index.html","a5464c5d124e0cee858837b0f1e5ac86"],["/categories/c语言/page/3/index.html","114423c20ff131b6c2b31d3d27bb448f"],["/categories/index.html","be170e56ca9882e31431c081f1b0ef80"],["/categories/经验分享/index.html","344bd6012f69e1a76090c312359b30d5"],["/categories/计算机基础/index.html","832cdfb42d6f3380f11077f12aded500"],["/comments/index.html","1e421a661f5a7cd2bf9da762e4804762"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0768064cab81eda9e57628588e8727f3"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","94d21b67d3768bf527af7a9e5f4581c5"],["/link/index.html","b70db08785be021de141ff8353f2b13d"],["/page/2/index.html","4232ee6cd4bd14a7d0c6ef2b309869cf"],["/page/3/index.html","38fd497678077fe06139c9b8a5aa8c46"],["/page/4/index.html","7df93812b7e77744124707bcb268f111"],["/sw-register.js","542f91409f2af5c66c0cca46fb635700"],["/tags/C/index.html","711425d4ffd741088e45b1eee4050762"],["/tags/C语言/index.html","0dbd30fffe706b49e8890ac7bded09d4"],["/tags/C语言/page/2/index.html","1c2516c60a0f5cb19ecb8f456fdd5e70"],["/tags/C语言/page/3/index.html","d27d306480c721df26ec77ef33e72e7e"],["/tags/C语言经典100题/index.html","34d593cb81455f51768f7c5a5d47edd8"],["/tags/index.html","7a51bcd23a09bdf43936bc1b8c9b3051"],["/tags/图床/index.html","095daa0c410e01d954761a7d38cb0bc6"],["/tags/类和对象/index.html","388e9fe74c62587bf709a1445e0e5125"],["/tags/计算机基础/index.html","a2357656b7e4cef61c72a33730281bfc"]];
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
