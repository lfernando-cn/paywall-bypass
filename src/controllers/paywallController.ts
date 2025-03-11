import { Request, Response } from "express";
import { bypassPaywall } from "../services/paywallService";

export const getArticle = async (req: Request, res: Response): Promise<void> => {
  const url = req.query.url as string;
  if (!url) {
    res.status(400).send("Provide a valid URL.");
    return;
  }

  try {
    const content = await bypassPaywall(url);
    res.send(content);
  } catch (error) {
    res.status(500).send(error instanceof Error ? error.message : "Unknown error.");
  }
};
