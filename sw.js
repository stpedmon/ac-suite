const C = "ac-suite-v117";
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.add("./")).catch(()=>{})); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil((async () => { for (const k of await caches.keys()) if (k !== C) await caches.delete(k); await self.clients.claim(); })()); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  e.respondWith((async () => {
    try {
      const net = await fetch(r);
      if (r.mode === "navigate") { const c = await caches.open(C); c.put("./", net.clone()); }
      return net;
    } catch (err) {
      const cached = (await caches.match(r)) || (await caches.match("./"));
      return cached || Response.error();
    }
  })());
});
self.addEventListener("push", e => {
  let data = { title: "AC Suite", body: "Tienes una novedad" };
  try { if (e.data) data = Object.assign(data, e.data.json()); } catch (_) {}
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: "icon-192.png",
    badge: "icon-192.png",
    vibrate: [80, 40, 80],
    tag: "ac-crm",
    renotify: true,
    data: { url: "./" }
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: "window", includeUncontrolled: true }).then(cl => {
    for (const c of cl) { if ("focus" in c) return c.focus(); }
    return clients.openWindow("./");
  }));
});
