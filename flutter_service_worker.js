'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/objects/05/2316582f897a5074a41e3ee478cd947aa2934e": "bd43e2e19011eca771bec43b15e505f1",
".git/objects/0e/bf35d7388052bdbee2ba458b9e12fec5ff680c": "d8452bf69800288c872b0272f92c530a",
".git/objects/15/add50a633d055ccecc64b79db329bbd7fb9796": "50361acb3ef7795d19fa5b2ffd4eb8c8",
".git/objects/24/ad6bc04219726b5b8681459ec9f71c4b44dff0": "8501b30b63540fe6ad017525ce70a88a",
".git/objects/2b/1fe0008a1058c9e9df766502d8403d9948d533": "31707a8c17eee4109d762ba2da0a785e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/ada359c8c92a5567131f5588d429ce6d31e549": "12b3ab554efc9972662c5f5360ebdb64",
".git/objects/3f/4e46c65cfe4faf1b60360d6583b075abd48650": "3d4a491fa331450ac8aca907e5ad4232",
".git/objects/41/a09875e4536c913af7dd990261689af236d131": "b67054911781522c3f7e92ede4c3c0c4",
".git/objects/44/add11cb597f5e4eda22232cc37ae9997f09c22": "c908c06809c6867e693ddbc6126b5a59",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/ec5d6ca0bbb1abc438ac3582e252859d958520": "32eacffe6dadfe6acd610640857f4a36",
".git/objects/5c/b946248f98575db385736ebac6e7399bea7f1b": "033f5702c8d06ae8c5071f35ba87347b",
".git/objects/65/33740ad4fff02cae14c45cf810a28e6d40b412": "eaadaeb7116878cf9fadb37416cb153b",
".git/objects/6a/b85fb39fc8fe4f472764ac5bc1a2a8d6fabbf0": "7ceb291f865db699a7a7e89e05123e3b",
".git/objects/6c/2c093ae1af1d7683f1ab6185b50ee15fdc31b8": "84900895d1ffce281811aac17b52660b",
".git/objects/6f/58aa48cd00593d80117cfb935da73af2b48200": "ad4afdb2c2bf9a481d4545fb29c06b3a",
".git/objects/74/f908de661d5aaeb6883bbb19afbf0a82d556c9": "6ae91387ab667196c7758016e1c6e30c",
".git/objects/75/7f6a6578010bce137f621941b46fbc3105606a": "be1c86706a491233dd75a0135d0020bc",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/78/92a5073a7e3442c1ce1a8d2d8d563c7098580a": "6aa0494bf525a5f618a1ac4950a01dc5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/3de764e328c12e83cb8c7a3168da653059e264": "23b193f276e421ed4ba62ddd8ad9da71",
".git/objects/82/83edf65fecaebc0defff98f4eee4e89a9de6bb": "175f4bac4713405bc59a7ca20fe74be0",
".git/objects/9a/6be0ef1774f7146aa9d7a1bb0d1caa255a0563": "fef96ec2fa160186a5670b3a57ca7402",
".git/objects/ad/3bf931093530b34e88dba96caa43a1c1b4ea7a": "b2b6cb4bd1769aa35c8cd4699500268b",
".git/objects/b0/25867bace40fa1f9b1a85c70d1955834b891de": "0282bbccc1a44a5cf69f1095fd01050b",
".git/objects/b0/71367994d4cdeace0a402a84d8671271722825": "b3763518f176e0545fc47eb2e8ca12cf",
".git/objects/c4/9a5cd8427f41108a2d30a364fd78361526245f": "fa2010d38f289d2d28137f5648df4dac",
".git/objects/c6/cbaaad55d4867a06c2ed26518664f8da687742": "2d6a3426dbb6c546c1012db6be78e071",
".git/objects/cf/395065075644e892d40348f790d44f186fed26": "5718e56d7814aa2c191d86af4caf61b6",
".git/objects/d0/2dc87176cf0a26816ec406ffcb630c2cbc3c5b": "b683ff233464e2220b79764640a30722",
".git/objects/d4/30c975898bbb790cea61b47f83be5aa94255b1": "6867f53ed430c27e61374ed2d0f3b939",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/5e5d091603b9d87752f1b0d1ad9b17fcdf8958": "7216a4181cfd44dd15e736b336b406fa",
".git/objects/e2/82961f469c35517c6f3e21cf9d795dd726343a": "0e6b3deaee663cfac03e4cfa107a15fe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/4ef73fd3a4ac4008ddaffb306ffcfcb460bf16": "e8f58320cb62b01f0204ff5f23f2a112",
".git/objects/f3/787b1c3dbede781e90cd22785b74be36e73946": "cf5903369814b455da04c3210bb60823",
"assets/AssetManifest.json": "c600cf954c6ca41310469b1be95bf946",
"assets/assets/Down1.png": "963ea1c78ff0a492679c1a9b91fb0681",
"assets/assets/dp.png": "bc62c0e3d59f36f269315ae081d0d7ad",
"assets/assets/profile.jpg": "cf2dd3d4390773c2648a482ddcf3fc91",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2c89cbb7fad8be4f26153c64aea49920",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/sign_button/images/amazon.png": "af00fbd77763d45afd0131b85e5f78a5",
"assets/packages/sign_button/images/apple.png": "c82fbe8cbcecaa462da7bd30015b3565",
"assets/packages/sign_button/images/appleDark.png": "11238aa9e757b14b5e3460b467e6a2b4",
"assets/packages/sign_button/images/facebook.png": "f4dfe9871ac8cce8278c2aba8c897e1d",
"assets/packages/sign_button/images/facebookDark.png": "deface349f4fd6bece4039901e8c6c44",
"assets/packages/sign_button/images/github.png": "c67686f615f334806a07d41d594c34c1",
"assets/packages/sign_button/images/githubDark.png": "561b115749533c422a8c02e4843c73d2",
"assets/packages/sign_button/images/google.png": "46039fa62c3167028c4fdb86816c3363",
"assets/packages/sign_button/images/googleDark.png": "3a7df7781108618c2b3d05a5121abdfc",
"assets/packages/sign_button/images/instagram.png": "6c356b0bd4b0f7f80046fc2557e85757",
"assets/packages/sign_button/images/linkedin.png": "e4ae6d8c444c75a24d02cd9995072297",
"assets/packages/sign_button/images/mail.png": "c9172bdda51109489593c86da58f10e8",
"assets/packages/sign_button/images/microsoft.png": "dfb60902957a3204c63d4d3de2ae76ff",
"assets/packages/sign_button/images/pinterest.png": "4e9b78531f5968aad62a1ec26eb75b18",
"assets/packages/sign_button/images/quora.png": "b10aaad4707aad91cbab341ef33ea56c",
"assets/packages/sign_button/images/reddit.png": "1b200a970d87b9ab578ac556b24cf16b",
"assets/packages/sign_button/images/tumblr.png": "695506da08f97651af960af9f268dcc4",
"assets/packages/sign_button/images/twitter.png": "08ed456da7c064a42ed528098c78dfc0",
"assets/packages/sign_button/images/yahoo.png": "8d028327c009ae90e08ebfd965176f8b",
"assets/packages/sign_button/images/youtube.png": "615f39ecf21272fec7eceb7984ed8959",
"favicon.ico": "cfee66b3b3b14e4da9bce3147f21532b",
"icons/Icon-192.png": "ebe01e46a3cfa2d1ccb67ccfb4763d3b",
"icons/Icon-512.png": "f129d5fb3d734093e490cdc14c20d192",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5477f12d7322eb377ff7a177284d7279",
"/": "5477f12d7322eb377ff7a177284d7279",
"main.dart.js": "eec7b7e1634e27d61ffa914457603dcb",
"manifest.json": "cf1ed079680b5e8f9bbbd60f8ab8eeaf",
"version.json": "d785292f31f9fcadafdadbceed3b6573"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
