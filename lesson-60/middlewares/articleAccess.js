export function checkArticleAccess(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res
      .status(403)
      .send("Forbidden. You don't have access to articles.");
  }
  next();
}
