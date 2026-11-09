/* TREES Field Capture, the service worker.
 *
 * Copyright (c) 2026 Pomerayi Mutete. All rights reserved.
 *
 * Its whole job is to make the form open with no connection. On the first visit
 * it takes a copy of the files that make up the application. From then on every
 * request is answered from that copy, and the network is only consulted to find
 * out whether a newer version has been issued.
 *
 * Officer entries are NOT here. They live in the browser's own storage against
 * this address, which is the point of installing rather than opening a file: an
 * address does not change, and a downloaded file's does.
 *
 * WHEN A NEW VERSION IS ISSUED, change the line below. Telephones keep serving
 * the old form from their copy until this name changes, and nobody notices for
 * a season.
 */
var CACHE = "trees-field-capture-v5.7";
var FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(FILES); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) {
        fetch(e.request).then(function (fresh) {
          if (fresh && fresh.ok) {
            caches.open(CACHE).then(function (c) { c.put(e.request, fresh.clone()); });
          }
        }).catch(function () { /* no connection, which is the normal case */ });
        return hit;
      }
      return fetch(e.request).catch(function () {
        return caches.match("./index.html");
      });
    })
  );
});
