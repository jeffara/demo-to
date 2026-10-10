/** Servidor local sem dependências, com fixtures sob drafts/ e código na raiz. */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
export function serve(
  port = 4173,
  root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."),
) {
  const types = {
    ".js": "text/javascript",
    ".mjs": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".html": "text/html",
  };
  const server = http.createServer((req, res) => {
    let url;
    try {
      url = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    } catch {
      res.writeHead(400);
      res.end();
      return;
    }
    if (url.startsWith("/.rum/")) {
      res.writeHead(204);
      res.end();
      return;
    }
    // Aliases locais espelham as URLs públicas. No Author, .html permanece válido.
    if (["/index", "/index.html"].includes(url)) {res.writeHead(301,{Location:"/"+new URL(req.url,"http://localhost").search});res.end();return;}
    if (url.endsWith(".html") && !url.endsWith(".plain.html") && !url.startsWith("/drafts/") && fs.existsSync(path.join(root,"drafts",url.slice(1)))) {res.writeHead(301,{Location:url.slice(0,-5)+new URL(req.url,"http://localhost").search});res.end();return;}
    if (url === "/") url = "/index.html";
    if (!path.extname(url)) url += ".html";
    const rel = url.slice(1);
    let file = path.resolve(root, rel);
    if (!file.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (url.endsWith(".html")) {
      const fixture = path.resolve(root, "drafts", rel);
      if (fixture.startsWith(root + path.sep) && fs.existsSync(fixture))
        file = fixture;
    }
    try {
      res.setHeader(
        "Content-Type",
        types[path.extname(file)] || "application/octet-stream",
      );
      res.end(fs.readFileSync(file));
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
  return new Promise((resolve) =>
    server.listen(port, "127.0.0.1", () => resolve(server)),
  );
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  await serve(Number(process.env.PORT) || 4173);
  console.log("http://127.0.0.1:4173/ — http://127.0.0.1:4173/demo-toranja");
}
