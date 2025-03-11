import express from "express";
import { getArticle} from "../controllers/paywallController";

const router = express.Router();


router.get("/article", getArticle);

export default router;
