/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","652151ac8b0c6fea17503a3a8b6995a3"],["/2022/11/03/NOnote/1/index.html","73c22958eebec20cde413d272f8dc704"],["/2022/11/10/NOnote/2/index.html","5cf7539f6b17b3b1c224c66a7d903359"],["/2022/11/10/NOnote/3/index.html","6944acec0cdc243ea98d83a6ba21d6ab"],["/2022/11/10/NOnote/5/index.html","a510c5c05d50cd89b73bcf60cdbeda55"],["/2022/11/10/NOnote/8/index.html","75ec7b7a94bb5347db15b033d4bf0edb"],["/2022/11/17/NOnote/4/index.html","b6824c1c8c2a5a416d9f2fbd99227209"],["/2022/11/17/NOnote/6/index.html","5fd288557495e25a25e412122128907b"],["/2022/11/17/NOnote/7/index.html","8406b432ff1618196edca3d06905de0a"],["/2022/11/17/NOnote/9/index.html","b484a74b0e8171cbb9b565b13f593cce"],["/2022/11/24/NOnote/10/index.html","108360df67e53c238f552fdf93ca5551"],["/2022/12/01/DEnot/1/index.html","5bfa4f0f03d92a296c8b673f4895163a"],["/2022/12/01/NOnote/11/index.html","796ba2c6261627d14ac1e4eacfc72afe"],["/2022/12/10/DEnot/2/index.html","5ab350d1e5911c3b91e8f74a68000527"],["/2022/12/10/DEnot/3/index.html","0d439bb190484957b8428211e9f7ff60"],["/2022/12/12/DEnot/4/index.html","7bd63761d3726b5f6d880641d2df64c7"],["/2022/12/12/DEnot/5/index.html","08e7d820103c71b7274fee817f7e7bb1"],["/2022/12/22/CTM/1/index.html","d4bf5e093f9ff2c2650345b45eeea362"],["/2022/12/22/CTM/2/index.html","f67f7fb0fc6402f5d0f867af0b406125"],["/2022/12/22/CTM/3/index.html","43bcd52bb875ad8d7e8e048c9669fb91"],["/2022/12/22/DEnot/6/index.html","17db41a9f2c82d5973bf1ee10b2a6cae"],["/2022/12/28/CTM/4/index.html","9b89361f6efa3144f4afb22c9c5df526"],["/2022/12/29/DEnot/7/index.html","72aed2110e6a89b34813164c120bec2a"],["/2022/12/29/DEnot/8/index.html","48185c0bd068d0cfd40b615bcaf00f3e"],["/2022/12/29/DEnot/9/index.html","a5bef8b9113573e4ce4472151e502598"],["/2022/12/30/DEnot/10/index.html","5a688b496991962e889b1939066c5830"],["/2023/01/03/2023/Mon/1/index.html","0b1128414091ef75b07251a72d308e1f"],["/2023/01/06/2023/Mon/2/index.html","bab3dc29fefa284c93f806abac864dfa"],["/2023/01/08/2023/Mon/3/index.html","d0cf36f53db0c7d32fbc593fa1dcffb1"],["/2023/01/09/2023/Mon/4/index.html","7422ce66748f50796eba4e94472bf150"],["/2023/01/19/2023/Mon/5/index.html","51c8cbdc6e9cf9f085e307667895c4ff"],["/2023/01/21/2023/Mon/6/index.html","1979246195d3ec5cfb1097604ef653fd"],["/2023/01/21/2023/Mon/7/index.html","b9baa7ce3db0e16e46a2a678149a163f"],["/2023/01/22/2023/Mon/8/index.html","0e8014d1aaec5b00e36d6127b7772da1"],["/2023/01/23/2023/Mon/9/index.html","4a5f4d74925e120221c1f65044ec12b2"],["/2023/01/29/2023/Mon/10/index.html","43530eb0bd2dea6081b530319eff7e34"],["/2023/01/30/2023/Mon/11/index.html","437e08daa8e445d6b5d4bb7285990c42"],["/2023/01/31/2023/Mon/12/index.html","e5a6ddc0bf98d181bb563902eb54f647"],["/2023/01/31/2023/Mon/13/index.html","9e0aef34be8309cb2d9d650bf4cd14b7"],["/2023/02/06/2023/Feb/1/index.html","80276259286d038907fe0d7cae5674ac"],["/2023/02/08/2023/Feb/2/index.html","a8e0544f6b0a8b69d90e7ffd950ff6e0"],["/2023/06/01/2023/June/1/index.html","ef9f899598cd55e74f3dbfe546666aca"],["/2023/06/14/2023/June/2/index.html","ab48ab6b487549c9e7c33cbcfdb8e122"],["/404.html","f6a32c31a237b42891664faa0bf72a9c"],["/about/index.html","37b9b1ddaedf4640b158a0197264c2b5"],["/anzhiyu/random.js","088f6274353a88bc13e905d742c9ad9a"],["/archives/2022/10/index.html","412f108c7406d4ff96a6637499dd968b"],["/archives/2022/11/index.html","dd5d0aee14e5f5c90ed0773311ed16c4"],["/archives/2022/12/index.html","372008d04e53db9e6c58aacc8b824981"],["/archives/2022/12/page/2/index.html","7234300dba47b908f7891c66d41cf98c"],["/archives/2022/index.html","1e0e3875ca1c01e3bfdd76e04370596e"],["/archives/2022/page/2/index.html","61582b4f9ef2c78370b4158992b05c95"],["/archives/2022/page/3/index.html","0f768bede96c5b3232a2aedc67465ca2"],["/archives/2023/01/index.html","36c572f1c89930536eec370c5c2526c7"],["/archives/2023/01/page/2/index.html","ddaca3d54060619c6b30a843c19d227e"],["/archives/2023/02/index.html","d4d2ce5dbf6b24c290d0ae8410193c6e"],["/archives/2023/06/index.html","c96fd6e7698d2e337917d4a5ac4fb2c0"],["/archives/2023/index.html","214c6da260213efed5a3eda6ae36aa37"],["/archives/2023/page/2/index.html","d0fda485d6853d253826cabc1bba68ad"],["/archives/index.html","9e4398005f675a93787bae11665e0a41"],["/archives/page/2/index.html","c8c93d742d824b8a6cdc9d746f699886"],["/archives/page/3/index.html","173024a4acb69dc0160c102a51597ae6"],["/archives/page/4/index.html","d4853a0bf1dba3836f79dceee82e61f1"],["/archives/page/5/index.html","d4c6b8dc7e689cb6d10186c4b77c60e1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","76d3791bc2522c0cc863f1d744b17aec"],["/categories/C语言经典100题/index.html","26143d2db4698a05927060c63a2f2831"],["/categories/c语言/index.html","cc6a7b83f170459bb173c627390cfc19"],["/categories/c语言/page/2/index.html","fddc800341051dd85fa170385efffc15"],["/categories/c语言/page/3/index.html","b3d3f77aa3fad0174dc112adf1f8fc22"],["/categories/index.html","8099e22bc30151af9fd45531b2810d37"],["/categories/经验分享/index.html","841f99ae83bf361f9aa7f15f3ab88791"],["/categories/计算机基础/index.html","8a689b1ac22fc965ab2ab3ed301c68bc"],["/comments/index.html","a47dcd5a7084d451e4d05d910da120b7"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7bce3712cca0946925fa2c845fcf5d20"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","759a2c1c2dc9f191729cb4832336e55d"],["/link/index.html","684936fc89f52f60399b76cab790947e"],["/page/2/index.html","3c526ec473a369d27bde7fd12dfa2571"],["/page/3/index.html","5e056334d748015c53407344d9896de2"],["/page/4/index.html","101040936dbcc87d343859707ed15262"],["/sw-register.js","1f408ec5b652928b41106effed7a605f"],["/tags/C/index.html","80ffdc7f51ce8ab5ae7b44bf77026975"],["/tags/C语言/index.html","8910601f71534a3ae0840deb8b0d0056"],["/tags/C语言/page/2/index.html","f6ab8b293ec72de98ab5f15a62c06beb"],["/tags/C语言/page/3/index.html","c989fa36de3234c0c76d1e2adcf33b3d"],["/tags/C语言经典100题/index.html","185c93eb27f1a3772b2db7d91f404e33"],["/tags/index.html","1959d135b75a999213ca10645818d10a"],["/tags/图床/index.html","36fb5bbce07e35f6f4ef1326041110ae"],["/tags/类和对象/index.html","480b6a665351c59a34a6dd7d2ba08397"],["/tags/计算机基础/index.html","84dd6d3169ae9f4b481e4aad9446a188"]];
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
