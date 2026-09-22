import { BUILD_META } from "./build-meta.js";

const esc = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[c]);

function page() {
  const shortCommit =
    BUILD_META.commit === "local"
      ? "local"
      : BUILD_META.commit.slice(0, 12);

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>TOKYO MEDI — Deployment Check</title>
  <style>
    :root{font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#101828;background:#f7f9fc}
    *{box-sizing:border-box}
    body{margin:0;min-height:100vh;display:grid;place-items:center;padding:24px;background:radial-gradient(circle at 50% 0%,#fff 0,#f7f9fc 58%)}
    main{width:min(760px,100%)}
    .brand{display:flex;align-items:center;gap:12px;margin-bottom:28px;font-weight:800;letter-spacing:.06em}
    .mark{width:38px;height:38px;display:grid;place-items:center;border-radius:12px;background:#0b6bcb;color:#fff}
    .card{background:#fff;border:1px solid #e5eaf0;border-radius:24px;padding:clamp(24px,5vw,44px);box-shadow:0 24px 70px rgba(16,24,40,.07)}
    .ok{display:inline-flex;align-items:center;gap:8px;color:#067647;background:#ecfdf3;border:1px solid #abefc6;border-radius:999px;padding:7px 11px;font-size:13px;font-weight:700}
    h1{margin:20px 0 10px;font-size:clamp(34px,7vw,58px);line-height:1;letter-spacing:-.045em}
    p{margin:0 0 28px;color:#667085;line-height:1.7}
    dl{display:grid;grid-template-columns:150px 1fr;gap:12px 18px;margin:0;padding-top:24px;border-top:1px solid #edf0f3}
    dt{color:#98a2b3}
    dd{margin:0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere}
    @media(max-width:560px){dl{grid-template-columns:1fr;gap:5px}dd{margin-bottom:10px}}
  </style>
</head>
<body>
  <main>
    <div class="brand"><span class="mark">T</span><span>TOKYO MEDI</span></div>
    <section class="card">
      <span class="ok">● Deployment diagnostics</span>
      <h1>Clean foundation.</h1>
      <p>This page exists only to prove that Cloudflare is serving the exact GitHub revision before the full website is built.</p>
      <dl>
        <dt>Commit</dt><dd>${esc(BUILD_META.commit)}</dd>
        <dt>Short commit</dt><dd>${esc(shortCommit)}</dd>
        <dt>Branch</dt><dd>${esc(BUILD_META.branch)}</dd>
        <dt>Build UUID</dt><dd>${esc(BUILD_META.buildUuid)}</dd>
        <dt>Built at</dt><dd>${esc(BUILD_META.builtAt)}</dd>
      </dl>
    </section>
  </main>
</body>
</html>`;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/__build") {
      return Response.json(BUILD_META, {
        headers: { "cache-control": "no-store" }
      });
    }

    if (url.pathname !== "/") {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(page(), {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "no-store"
      }
    });
  }
};
