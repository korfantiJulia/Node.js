import { Router } from "express";
import * as articlesController from "../controllers/articles.controller.js";
import { checkArticleAccess } from "../middlewares/articleAccess.js";

const router = Router();
router.use(checkArticleAccess);

router.get("/", articlesController.getArticles);
router.post("/", articlesController.createArticle);
router.get("/:articleId", articlesController.getArticleById);
router.put("/:articleId", articlesController.updateArticle);
router.delete("/:articleId", articlesController.deleteArticle);

export default router;
