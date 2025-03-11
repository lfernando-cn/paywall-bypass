import dotenv from "dotenv";

dotenv.config();

export const GOOGLEBOT_HEADERS = {
  "User-Agent": process.env.USER_AGENT || 
    "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.6533.119 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
};

export const BASE_URL = process.env.BASE_URL;
