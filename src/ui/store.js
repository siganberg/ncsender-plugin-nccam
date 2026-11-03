// Recent parts and their settings, kept in this browser (IndexedDB), so
// ncCAM opens where it was left. Fails quietly: then it just starts empty.
const DB = 'nccam', STORE = 'kv';

function open() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function run(mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const req = fn(tx.objectStore(STORE));
    tx.oncomplete = () => { db.close(); resolve(req?.result); };
    tx.onerror = tx.onabort = () => { db.close(); reject(tx.error); };
  });
}

export const load = (key) => run('readonly', (s) => s.get(key)).catch(() => null);
export const save = (key, value) => run('readwrite', (s) => s.put(value, key)).catch(() => {});
export const remove = (key) => run('readwrite', (s) => s.delete(key)).catch(() => {});

// Recent parts: an index ('recent': [{ key, name, size, savedAt }], newest
// first) and each part's file and settings under 'part:<key>'
export const RECENT_MAX = 10;
export const partKey = (name, bytes) => `${name}|${bytes.byteLength}`;

export async function recent() {
  const list = await load('recent');
  if (Array.isArray(list)) return list;
  // Before the list: only the last part was kept
  const last = await load('last');
  if (!last?.bytes) return [];
  const key = partKey(last.name, last.bytes);
  await save(`part:${key}`, last);
  const made = [{ key, name: last.name, size: last.bytes.byteLength, savedAt: last.savedAt || Date.now() }];
  await save('recent', made);
  await remove('last');
  return made;
}

// Saves the part and puts it first; returns the new list
export async function keep(record, list) {
  const key = partKey(record.name, record.bytes);
  await save(`part:${key}`, record);
  const next = [{ key, name: record.name, size: record.bytes.byteLength, savedAt: record.savedAt }, ...list.filter((r) => r.key !== key)];
  for (const r of next.slice(RECENT_MAX)) await remove(`part:${r.key}`);
  await save('recent', next.slice(0, RECENT_MAX));
  return next.slice(0, RECENT_MAX);
}

export async function forget(key, list) {
  await remove(`part:${key}`);
  const next = list.filter((r) => r.key !== key);
  await save('recent', next);
  return next;
}
