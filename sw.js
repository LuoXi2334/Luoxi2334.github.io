/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","5fd8255d5e73a724ad30e4490b42ac12"],["/2022/11/03/NOnote/1/index.html","a826beaa9b733329960940efcb3dab9b"],["/2022/11/10/NOnote/2/index.html","6069977be022ba88f84210b17278ba88"],["/2022/11/10/NOnote/3/index.html","b452f52ba2d9290b2958b45b2e1e1043"],["/2022/11/10/NOnote/5/index.html","71a0abd9c838472579daa7cfa4aee500"],["/2022/11/10/NOnote/8/index.html","9b6883bc40f19a090a3c0ad4ada48e1f"],["/2022/11/17/NOnote/4/index.html","004bc873f5449a61bf3d8b5ac4e8189b"],["/2022/11/17/NOnote/6/index.html","8fad3cadb4edd3b997e0ffad3210112d"],["/2022/11/17/NOnote/7/index.html","51e838c658b7e55df6aff2a7f393ebfb"],["/2022/11/17/NOnote/9/index.html","bdd367e6ac56be9be33db7a0c44546e5"],["/2022/11/24/NOnote/10/index.html","7e7ddaca3ba39025b87851b4d984f9b1"],["/2022/12/01/DEnot/1/index.html","fd8b69272f1e76fbb59425ae40750fd4"],["/2022/12/01/NOnote/11/index.html","64cfca24419b6f48075b1a284df32692"],["/2022/12/10/DEnot/2/index.html","aa6165b024446729f72308f18b3bba0e"],["/2022/12/10/DEnot/3/index.html","d11cde71b41a0b70c1d2d970fd400929"],["/2022/12/12/DEnot/4/index.html","435d53a7da50b5d7014e6c54d22b5840"],["/2022/12/12/DEnot/5/index.html","24ae0c99692efe33691f2b61caeb3167"],["/2022/12/22/CTM/1/index.html","593e1c910435faf92d54b57bb29dd479"],["/2022/12/22/CTM/2/index.html","e09c0fdb0d36bf2aae0384a5d2440446"],["/2022/12/22/CTM/3/index.html","b9911c284fd8763a8bec2766614f44f0"],["/2022/12/22/DEnot/6/index.html","24441ecc996f4a6bbb22fd236adfe1f3"],["/2022/12/28/CTM/4/index.html","864259c93b003ee05b88b69266972223"],["/2022/12/29/DEnot/7/index.html","564e8b649ce9c01aa31e2d32d083b2c8"],["/2022/12/29/DEnot/8/index.html","c01238f52a485b19d6fe864d7d2cec8f"],["/2022/12/29/DEnot/9/index.html","65446c65173365b96f2d1b22320f1a48"],["/2022/12/30/DEnot/10/index.html","e07bffaa39d499e384c197fc52e44015"],["/2023/01/03/2023/Mon/1/index.html","4a66dd0744fe1339b6c8f05b72e81a8d"],["/2023/01/06/2023/Mon/2/index.html","c64fe3ebead9833c7627b551ebd8f960"],["/2023/01/08/2023/Mon/3/index.html","91fb8b7decddee021c9fa357bb124c70"],["/2023/01/09/2023/Mon/4/index.html","29fbd27e1c28ec3d662e5a4dbd4ee989"],["/2023/01/19/2023/Mon/5/index.html","f43321172bf57fda1d8c8e439286977c"],["/2023/01/21/2023/Mon/6/index.html","96379c4e1d5da3d90edd9c9655af476a"],["/2023/01/21/2023/Mon/7/index.html","639cd6ad1a646d5fa8cea7a2574d3427"],["/2023/01/22/2023/Mon/8/index.html","95ef8131bd3e89ddbb2c9727c3572f75"],["/2023/01/23/2023/Mon/9/index.html","2e94e98b6ee2c7a8a5e2dacb9e91bfcf"],["/2023/01/29/2023/Mon/10/index.html","aa0645d51feae2a1d82f1da33680c13d"],["/2023/01/30/2023/Mon/11/index.html","1f23a4f5256927a290cdb2b34290dc83"],["/2023/01/31/2023/Mon/12/index.html","394d8458a51460816a302c7321c1ce1d"],["/2023/01/31/2023/Mon/13/index.html","be7ae4321c8e7eaa7c1fdf0b95993e1b"],["/2023/02/06/2023/Feb/1/index.html","ed240dfd07b9552cb248bb48a60d2584"],["/2023/02/08/2023/Feb/2/index.html","597caa4b9ce73d0e60d29138805d1aaa"],["/2023/06/01/2023/June/1/index.html","2a496026ecbeb2978ea5d007e00ea0de"],["/2023/06/14/2023/June/2/index.html","ab250ec5044b1bea48f07ed8d7b81ea1"],["/2023/07/27/2023/July/1/index.html","bac7b1557544746bc1ee39eb6482cbee"],["/404.html","b137a3eae7e2e02fd919f115c73f1718"],["/about/index.html","8aaba6b1df0aadfddb641b5b13a25adf"],["/anzhiyu/random.js","6f6502a1dbf8a4687e72db0b2a840f8a"],["/archives/2022/10/index.html","88dcbd9ec1e5f43151abe1efa44b3d74"],["/archives/2022/11/index.html","bf862deb32c339811fc1ce19832d23c3"],["/archives/2022/12/index.html","07b76254f59d8b1cf4cee03d18d557d1"],["/archives/2022/12/page/2/index.html","0239519e12068e396f55696a584b2332"],["/archives/2022/index.html","2df63411e96546b26c076f640f5584d0"],["/archives/2022/page/2/index.html","b2c9d8a98bad2cd1bcdf2b2e64d35b8e"],["/archives/2022/page/3/index.html","c53fcadbae21f5d8082f0cc1c343eb78"],["/archives/2023/01/index.html","3ad81c297f90288623ca6b86080ea4d6"],["/archives/2023/01/page/2/index.html","57bb32a6d54ff060016a49276ae7cd98"],["/archives/2023/02/index.html","b0c6d92c062a12f86daa68e59a229ea0"],["/archives/2023/06/index.html","37c5cfedbac4ad21998d4835387c5846"],["/archives/2023/07/index.html","1f93455dd7e797052cdea9d766de8ee6"],["/archives/2023/index.html","ef51a0c92e0bd0be422c8d1954009d7e"],["/archives/2023/page/2/index.html","87f56d2127cef556fd684edd76b15a70"],["/archives/index.html","9d609aa6c88c5c37b9bd227d73e08f55"],["/archives/page/2/index.html","2a4cc6675ba5f0e9aff2edc76593ac4a"],["/archives/page/3/index.html","d594084f6508eb5677d6c2addcb0c605"],["/archives/page/4/index.html","7effc466401f51af51f80100d5b12c1c"],["/archives/page/5/index.html","f4fcbf21ad394c929d4e2fd01e7c073d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","d0be045ed3b1fb3bccef2a8f379d0e86"],["/categories/C语言经典100题/index.html","1471ed0e956cae9feea544c694938224"],["/categories/c语言/index.html","7ec81832b615500182e54a3ad97801d7"],["/categories/c语言/page/2/index.html","8501f8a1a1a0b55d458b01ec70731378"],["/categories/c语言/page/3/index.html","144e66a10507d00bc4e3db5632d94f06"],["/categories/index.html","f2ea29ad7f0825c5635da5541a7f6745"],["/categories/经验分享/index.html","6a94d49e3da04ef7a05d82dcd6107a05"],["/categories/计算机基础/index.html","acfd0f4b0634bbe69a26802c623ea9f6"],["/comments/index.html","565729146f0ae7325bbda651b5fac035"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c2f56d50423e78dab8189e49f3b9ef8c"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","28323bcdb09c37773c568b03ab2c952e"],["/link/index.html","7a865332460faf6c888cf0cd7d83d859"],["/page/2/index.html","fbd0df8d83a7d55bf7a7bddbad011409"],["/page/3/index.html","55a12a83871efe7b241564b7cdfdf80f"],["/page/4/index.html","f271a2e20f24cd0c7e5c8eb6bd6842e3"],["/sw-register.js","870bef93cfe24c3f89796912838fce14"],["/tags/C/index.html","1642c36e98356a8cca45f5d75b4689b6"],["/tags/C语言/index.html","9dd2c5e42d6ab65aa4aef56ec49ebab3"],["/tags/C语言/page/2/index.html","b32d0a6f31228f5f6f8ed88d9fca5ebe"],["/tags/C语言/page/3/index.html","a1fbe2d48592b28de5f0e64e031c2a62"],["/tags/C语言经典100题/index.html","efe49c66b37ca4f1b9187eb00759d44d"],["/tags/index.html","0c030b5e220529ce95b4497f2d447af6"],["/tags/类和对象/index.html","7ca40b09b1f2b31ab00d9130faa4c6a0"],["/tags/经验分享/index.html","3a76e965ff8d06f58f3719428d0ff71c"],["/tags/计算机基础/index.html","6184f8f66391017184627c508d259cef"]];
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
