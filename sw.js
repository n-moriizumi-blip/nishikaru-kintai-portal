// PWAインストール用の最小限のService Worker（勤怠申請アプリのsw.jsと同じ最小構成）
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => {});
