import axios from "axios";
import { GOOGLEBOT_HEADERS, BASE_URL } from "../config/config";
import * as cheerio from "cheerio";
import { isValidUrl } from "../utils/urlValidator";

function modifyHtml(content: string, url: string): string {
  const $ = cheerio.load(content);

  $("head").prepend(`<base href="${url}">`);
  $("script").remove();

  $("body").append(`
    <script>
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link) {
          e.preventDefault();
          window.location.href = '${BASE_URL}/article?url=' + encodeURIComponent(link.href);
        }
      });
    </script>
  `);
 
  return $.html();
}

export async function bypassPaywall(url: string): Promise<string> {
  if (!isValidUrl(url)) {
    throw new Error("Invalid URL");
  }

  try {
    const response = await axios.get(url, { 
      headers: GOOGLEBOT_HEADERS,
      timeout: 10000
    });

    if (typeof response.data !== 'string') {
      throw new Error("Invalid server response");
    }

    return modifyHtml(response.data, url);
  } catch (error) {
    throw new Error(`Failed to access content: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
