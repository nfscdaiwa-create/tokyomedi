import { BUILD_META } from "./build-meta.js";
import { SITE, L, D } from "./content.js";
import { home, page, sitemap, headers } from "./views.js";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, "") || "/";

    if (pathname === "/__build") {
      return Response.json(BUILD_META, {
        headers: headers({ "cache-control": "no-store" })
      });
    }

    if (pathname === "/healthz") {
      return Response.json({
        ok: true,
        service: "tokyomedi",
        commit: BUILD_META.commit
      }, {
        headers: headers({ "cache-control": "no-store" })
      });
    }

    if (pathname === "/robots.txt") {
      return new Response(
        "User-agent: *\nAllow: /\nSitemap: " + SITE + "/sitemap.xml\n",
        { headers: headers({ "content-type": "text/plain; charset=UTF-8" }) }
      );
    }

    if (pathname === "/sitemap.xml") {
      return new Response(sitemap(), {
        headers: headers({ "content-type": "application/xml; charset=UTF-8" })
      });
    }

    if (pathname === "/") {
      return Response.redirect(new URL("/en", url), 302);
    }

    const parts = pathname.split("/").filter(Boolean);
    const locale = parts[0];
    const slug = parts[1] || "";

    if (!L[locale]) {
      return Response.redirect(new URL("/en", url), 302);
    }

    let html;
    if (!slug) {
      html = home(locale);
    } else if (D[locale] && D[locale][slug]) {
      html = page(locale, slug);
    } else {
      return new Response("Not Found", {
        status: 404,
        headers: headers({ "content-type": "text/plain; charset=UTF-8" })
      });
    }

    return new Response(html, {
      headers: headers({
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=0, must-revalidate",
        "content-language": locale === "zh" ? "zh-CN" : locale
      })
    });
  }
};
