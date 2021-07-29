'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "45c64a20a64bfb9dc56b9a1f7a0aeaf9",
".git/config": "0e317d6ab024a032839889e45d5ce58e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "046abf8668ceea6fc1a934e44d54d0d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "948114fc6243d8732666429faed5384c",
".git/logs/refs/heads/master": "948114fc6243d8732666429faed5384c",
".git/logs/refs/remotes/origin/master": "c61242687d620ada83e484462997ae2a",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0f/b0031a16cfa3577536da5743f1d682424037e2": "f3bc2c85691b8d80a6dbf14eff1aeca7",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/20/f6c2b928074aa1d6c83e703160e08730f23617": "83cb9b78ef7faafacde1bb4b45e6d8e8",
".git/objects/24/e35b4652a5ae9d329eda73101ad583aadf4215": "528f1ba310d6645435aeb3a283dc0d3c",
".git/objects/2b/68e7450aba3be90f3b5f037980509f950c4f1c": "cc76edf9449db5c32f94950f51ee6c78",
".git/objects/2e/1568ef4ecd25f092771cbdd7bc6726795d8cc2": "6c6b30b57ff1d1b62ad26e42098ee28f",
".git/objects/31/baddcbffc7ae3dcc4828cfc196708705767821": "66d01b22c89c9b3a1b396036b228dfe2",
".git/objects/32/045c967fc806825b60710550de1bc540ac9a6d": "6401464e71745d7828801bc670e11314",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/fb0177643fdb1e5d98b6e7749eee48a77bd956": "b23e5311c9c548fc8def66701da45656",
".git/objects/3d/80e4635962e7d5560b224fc02eb2b04ea4e019": "18f198b9191bb321f0a064c2465c5d89",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/51/50e6a3d776c8927d17b033204e85f47cd725ed": "3d1a22a27d26f43a18306aad889f24f0",
".git/objects/5c/f8f8f5f990daea8d16ea78b6922b03560b3bf5": "eca1e0b4a208e5425074369cd44e6829",
".git/objects/5d/97f44240fd0153796208b1fd05b6b000a6a21b": "1529e3fc2e2c83d6d72142e20383976f",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/6b/7209464e6013e596a99299dd1dff7c038708fb": "64e112b23c499844e835f3ef3ec255fe",
".git/objects/6f/2073ee85ef8bff60af5d532000f0d816a7cf74": "3e5f34987de119a489d89f66c62e4ce0",
".git/objects/74/1dcdc1cf3511d0e1f838321ffc2d3239822030": "6afdeeba32b1d5f87ac048553a6d4d5e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/86/13db5c1a7d966773832f250bc75d5f9eb37ec2": "4ee1e7be4c2a34c86cff083de957b8ad",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/f702a4573db2c7120d7adf1b16d426616e7560": "cf4d96561ff4148f02787821ee4cc912",
".git/objects/a7/1689325e319d4283ca50e1c029cb499fb0600b": "4e67723847ad172874d7d0254896dfad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/dd2ce0b69ce309b27d846a208a00bc8c105837": "1fdb57833fd2b126ffb6f77c01306471",
".git/objects/aa/acd27d3717bc3ffd1cf4e601b33da1bf6ae316": "99d95db38945d53d05c5497331b9ec4c",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6b5acfcd0042f3a1f88c0970ec2849e7a1ed15": "56a7f21954c13daa2c3f05218cfeaea8",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/bf4a06f1464f444e723f0d8610839158b73fb5": "4f2395cfa51ab696e3cee1d0f9bc3898",
".git/objects/be/ea945f397e4bee273b74a7abb4cccfd1b8e47c": "755a2289787925bebe94a8a4e52edf62",
".git/objects/bf/38d396b580644d8c738f8c65843ef4c1a825a8": "3a89be40944e409a7910c85b92363981",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b73665e51069fed840e5b26c1248867d39926": "8d0bee58d06506d55d594bf54f67c968",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/refs/heads/master": "cd9281720cf2a040e88563e63fd8e2dc",
".git/refs/remotes/origin/master": "cd9281720cf2a040e88563e63fd8e2dc",
"assets/AssetManifest.json": "e46c33c66f0982413fd7b4638f4cd6bf",
"assets/FontManifest.json": "0b0e6a1b443b9022d56a0d8758c46d8a",
"assets/fonts/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/avatar.png": "463e5c048a2f6462f2f465b1494c65ed",
"assets/images/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/images/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/images/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/images/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/NOTICES": "10ad5c8433902f608e2c0c7cb6cfd896",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon.png": "c651cd99cec2ab70dc598d3d1fb0bbdf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b7764871f8e25cc6de8c362dc15cd561",
"/": "b7764871f8e25cc6de8c362dc15cd561",
"main.dart.js": "8eb515122cf1b7717776a35197876bac",
"manifest.json": "560e0f8389812c45c2c8fa2b4df0a67b",
"version.json": "1bcd77b377a76afa446cafde42f21bda"
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
