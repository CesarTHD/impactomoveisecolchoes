import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { event_name, event_id, user_data } = req.body;

    // Seu Pixel ID
    const pixelId = "620452886117441";
    // Seu Token (coloque em .env.local por segurança)
    const accessToken = process.env.META_CAPI_TOKEN;

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              event_name, // ex: "PageView", "Purchase"
              event_time: Math.floor(Date.now() / 1000),
              event_id, // opcional para deduplicação
              action_source: "website",
              user_data, // ex: { em: "hash_do_email" }
            },
          ],
        }),
      }
    );

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao enviar evento para Meta API" });
  }
}
