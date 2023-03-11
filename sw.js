/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/10/27/OCnote/1/index.html","3f30e2bd239c317d1171076de263d501"],["/2022/11/03/NOnote/1/index.html","238ec81305544cc6265c1457b103c468"],["/2022/11/10/NOnote/2/index.html","1b749d819366d00342a49a3eeaed5b4c"],["/2022/11/10/NOnote/3/index.html","3169b1163bcf8b72258c7eb57be28a93"],["/2022/11/10/NOnote/5/index.html","e34c1310b4e6a740a0293f96fbb0ca33"],["/2022/11/10/NOnote/8/index.html","078ad29904aca9afddba2cf3eaeef209"],["/2022/11/17/NOnote/4/index.html","199baa8414debaab884c6568751b02c1"],["/2022/11/17/NOnote/6/index.html","089f9321f7be89d62741b49266e338a9"],["/2022/11/17/NOnote/7/index.html","485a42282566da5ba3aed147b8187955"],["/2022/11/17/NOnote/9/index.html","f7edd53fe7ef8cf281c56e92fcb39fe5"],["/2022/11/24/NOnote/10/index.html","ce68fde51065ce15736f7b7b63de611e"],["/2022/12/01/DEnot/1/index.html","b2cc9a7190ea9c77b62b1421f78c3f46"],["/2022/12/01/NOnote/11/index.html","8345de91cb46b33b1f5c2e571233138d"],["/2022/12/10/DEnot/2/index.html","f9821d5f9d1985cfca209253c3cd456c"],["/2022/12/10/DEnot/3/index.html","97ba89d51c4f1efa161fb9bbf8867f5b"],["/2022/12/12/DEnot/4/index.html","707f3c5a2b8917eda520c43dd96709da"],["/2022/12/12/DEnot/5/index.html","9fb065aef3878e58c364351e057d9226"],["/2022/12/22/CTM/1/index.html","b5251c3fbbc7f0a67bcfd03b4a312cd6"],["/2022/12/22/CTM/2/index.html","ceb8afc4042b16229669dc2d8ad09bfc"],["/2022/12/22/CTM/3/index.html","88131a4e10aa5549a070732dbfdea6bd"],["/2022/12/22/DEnot/6/index.html","0718d89da142ce4e038dbc316dc9f5c3"],["/2022/12/28/CTM/4/index.html","14507b153435b23b4ae0da66b3ccd5ed"],["/2022/12/29/DEnot/7/index.html","ecd237641ee8acee5b56dfaf19429fa6"],["/2022/12/29/DEnot/8/index.html","fd8098d23d47c773d27b65b9f58e8629"],["/2022/12/29/DEnot/9/index.html","1ecb459c38ff612d4dffe45ee876e67c"],["/2022/12/30/DEnot/10/index.html","b1561de792da6e61d35d21c097a11cbc"],["/2023/01/03/2023/Mon/1/index.html","a109ebe9df1af057f4615a4da2f90dcb"],["/2023/01/06/2023/Mon/2/index.html","9b4b84c17e9f0b69d5e85d3695c9a348"],["/2023/01/08/2023/Mon/3/index.html","a2724e6f5c0480ab9d0bd1a808d8cef8"],["/2023/01/09/2023/Mon/4/index.html","39dc6bef2ab4a527c851b86fff2c1786"],["/2023/01/19/2023/Mon/5/index.html","eaf44feb2b0f70da65d1dfa18fc74685"],["/2023/01/21/2023/Mon/6/index.html","4df949674e921c9f9a95643630ce18f2"],["/2023/01/21/2023/Mon/7/index.html","3868352671e4c5f9ee80e8c082b55a69"],["/2023/01/22/2023/Mon/8/index.html","8db611cf168f2b76983f397c2afaba64"],["/2023/01/23/2023/Mon/9/index.html","004f4572fa32bf17698dbc74ce6ea1a5"],["/2023/01/29/2023/Mon/10/index.html","1e561a18a9bdb3d53575c062b8a3a096"],["/2023/01/30/2023/Mon/11/index.html","efbcda25bd1d20cb246b2c63d243132a"],["/2023/01/31/2023/Mon/12/index.html","809d6012c850737786e84382c5154fda"],["/2023/01/31/2023/Mon/13/index.html","33601524fe42372a368eb1715b376bbd"],["/2023/02/06/2023/Feb/1/index.html","92ebeb10d37b18d4b29e03742f8e67dc"],["/2023/02/08/2023/Feb/2/index.html","0440c18b51f6cca97e6d000c14dc23fb"],["/404.html","68fa9b29a6ade1b33592fbf637d35ec1"],["/about/index.html","f5ba49f7f6b034e589b4b93dc61f70dd"],["/anzhiyu/random.js","2edbb21037ed3e25c7e7af75171a772f"],["/archives/2022/10/index.html","ffe7a094250333cfca9a040f35819556"],["/archives/2022/11/index.html","7a7640d20e799c5025f22d904fcf0eae"],["/archives/2022/12/index.html","0dc3fd449648c09c97fb617508f423f6"],["/archives/2022/12/page/2/index.html","7a2497114b55650d810a41a7828bf7ca"],["/archives/2022/index.html","7d2edb59df0837c4493ba13bf79a44fe"],["/archives/2022/page/2/index.html","d6fef8a41cf7be25591c78a46c4e3019"],["/archives/2022/page/3/index.html","0f724b53437c69324bf0d2e9b3560872"],["/archives/2023/01/index.html","c4217cb89b0eceb7cf677734a23c0b51"],["/archives/2023/01/page/2/index.html","06b71c0b7cff483c52359eb36386f707"],["/archives/2023/02/index.html","1a7f7d4d77f2507b1b421394861f78cb"],["/archives/2023/index.html","df9fb1a64c24bf45bbed92db891ec4e3"],["/archives/2023/page/2/index.html","becc03d984dcd36ced986e7fba82ac9d"],["/archives/index.html","2632242832f21989331b13bdd53c678a"],["/archives/page/2/index.html","46a42bf90e8423f49d357168323c0cb7"],["/archives/page/3/index.html","7313319ceb6f38e37f51595505984555"],["/archives/page/4/index.html","d49112b3ff6ede3159fc804c75829319"],["/archives/page/5/index.html","347260a2b68d4364a68bdd83bb89eb02"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/C/index.html","55d45f9777924cfb295dd9dee82f3b18"],["/categories/C语言经典100题/index.html","4e5e7879c9b2c0b316e5dea4e03710a8"],["/categories/c语言/index.html","2c4cfeb18273fa7c50e4001b6cf7ba4c"],["/categories/c语言/page/2/index.html","41cc846b651170f085ddc320b6baa65c"],["/categories/c语言/page/3/index.html","abc846a122c71629aa3bbab28f581862"],["/categories/index.html","1c3848bd5c920156370227798c26df1f"],["/categories/经验分享/index.html","09c091a02ba1a3470b57c54f090475d6"],["/categories/计算机基础/index.html","fe91094cbad69c2c3ce7ddcc2baff096"],["/comments/index.html","7f27296aa24e45a9a9070cb443351cec"],["/css/custom.css","4384a4a5127f3af771c67bfa636b8b82"],["/css/custom/fixed_comment.css","4a13f11bf88d95afd9dcb34ace06cbbd"],["/css/gdt.css","049296443baa31b7c72c2ab5cc9b3086"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","380cbc2029ab25a3d435fece353e14e1"],["/css/kslink.css","988e07eccb1ac5cfbb183404d269614e"],["/css/rightmenu.css","8d5ac7632e19fbfdc6815e3710f95d0a"],["/css/sb.css","0c18189695fb2d736167d221ddde96d5"],["/css/universe.css","3c914732a006790a59be2868c26d4563"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","24c736a3efaca1add42cee488e30575e"],["/js/custom/fixed_comment.js","9a83cbf9c5f727e21991f447a2172fb1"],["/js/kslink.js","c5e1f13cf2b125ab4d8637718a88e903"],["/js/light.js","957b028a255768a1078eeaf3e1f25706"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/rightmenu.js","c77cab225006afee657c08410ba14e0c"],["/js/sb.js","6646a0ba50aa212b1f0f92847ffa6185"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/title.js","e1afdca6b3edfe9316318ed492925304"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/universe.css","634bbccd301760e7e1d016c7a5512783"],["/js/universe.js","f7c885843b78012c3066320c6088b7b1"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/yh.js","1dc869f8bcf357ea87570a0a5076e734"],["/link/index-1.html","c307ada3ea1ae34f796d9d2e45acc390"],["/link/index.html","84aa4db503f879c680797c22bc271ba3"],["/page/2/index.html","e5289a5275505fa82ef7a68f6747978d"],["/page/3/index.html","e9da7c06141f9231541dbd7d7a7b5291"],["/page/4/index.html","b9b9bb2971fd13e7bf5847eabcfed6e8"],["/sw-register.js","0c29122da04a1bc9307a7f5c01477f53"],["/tags/C/index.html","29f2d6ce432a40d15475f5acd87db770"],["/tags/C语言/index.html","276b5cf66efcb39477125bfb5f56f2c0"],["/tags/C语言/page/2/index.html","e23fc62936b42195c393cc485c03b7f9"],["/tags/C语言/page/3/index.html","db5033a78b73909bf7d71ba25c97336c"],["/tags/C语言经典100题/index.html","c16654b655b0992c9a276e29324ab09c"],["/tags/index.html","e5671dd1268bb1fddd941d86fedbdbb3"],["/tags/图床/index.html","a1cc988938ff9cbf637fb2705a8915d9"],["/tags/类和对象/index.html","aeccde473da5fcefc27afe0ff5b2f3da"],["/tags/计算机基础/index.html","7ceb8b539790dc6f868a1afffd90e27c"]];
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
