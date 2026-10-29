// The last part and its settings, kept in this browser (IndexedDB), so
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
