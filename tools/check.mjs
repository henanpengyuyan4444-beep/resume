// 轻量体检：脚本是否执行、导航高亮、横向溢出、异常
const BASE = 'http://127.0.0.1:9222';
const URL = process.argv[2] || 'http://127.0.0.1:4321/';

const t = await (await fetch(`${BASE}/json/new?${encodeURIComponent(URL)}`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
const errs = [];
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m.result); pending.delete(m.id); }
  else if (m.method === 'Runtime.exceptionThrown') errs.push(m.params.exceptionDetails.text);
};
const send = (method, params = {}) => {
  const i = ++id;
  ws.send(JSON.stringify({ id: i, method, params }));
  return new Promise((r) => pending.set(i, r));
};
const ev = async (expr) => (await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true })).result.value;

await send('Runtime.enable');
await send('Page.enable');
await new Promise((r) => setTimeout(r, 2500));
await ev('window.scrollTo({top:1600,behavior:"instant"})');
await new Promise((r) => setTimeout(r, 900));

const report = JSON.parse(await ev(`JSON.stringify({
  revealSections: document.querySelectorAll('main > section.reveal').length,
  revealed: document.querySelectorAll('main > section.reveal.in').length,
  activeNav: [...document.querySelectorAll('#header a')].filter(a => a.className.includes('text-gray-900')).map(a => a.textContent.trim()),
  overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
  title: document.title
})`));
report.exceptions = errs.length;

// 移动端溢出检查
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
await new Promise((r) => setTimeout(r, 600));
report.mobileOverflow = await ev('document.documentElement.scrollWidth > window.innerWidth + 1');

console.log(JSON.stringify(report, null, 2));
await fetch(`${BASE}/json/close/${t.id}`).catch(() => {});
ws.close();
setTimeout(() => process.exit(0), 200);
