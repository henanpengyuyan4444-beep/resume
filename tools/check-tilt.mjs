const BASE = "http://127.0.0.1:9222";
const URL = "http://127.0.0.1:4330/resume/";

const t = await (await fetch(`${BASE}/json/new?${encodeURIComponent(URL)}`, { method: "PUT" })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
};
const send = (method, params = {}) => {
  const i = ++id;
  ws.send(JSON.stringify({ id: i, method, params }));
  return new Promise((r) => pending.set(i, r));
};
const ev = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true })).result.value;

await new Promise((r) => setTimeout(r, 2500));
await ev("window.dispatchEvent(new PointerEvent('pointermove',{clientX:1200,clientY:300,bubbles:true}))");
await new Promise((r) => setTimeout(r, 700));
const transform = await ev("document.getElementById('avatar-card').style.transform");
const decoded = await ev("JSON.stringify({w: innerWidth, cards: document.querySelectorAll('#avatar-card').length})");
console.log(JSON.stringify({ transform, decoded }));

await fetch(`${BASE}/json/close/${t.id}`).catch(() => {});
ws.close();
setTimeout(() => process.exit(0), 150);
