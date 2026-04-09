import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/wp-admin/admin-ajax.php"],
      disallow: [
        "/wp-admin/",
        "/wp-includes/",
        "/cgi-bin/",
        "/wp-login.php",
        "/readme.html",
        "/trackback/",
        "/xmlrpc.php",
      ],
    },
    sitemap: "https://worldpassimmigration.com/sitemap.xml",
  };
}
