export const sendResponse = (res, statusCode, html) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("Content-Length", Buffer.byteLength(html));
  res.statusCode = statusCode;
  res.end(html);
};

export const sanitize = (str) =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
