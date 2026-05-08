import type { ContactRequestBody } from "../server/contactEmail";
import { handleContactRequest } from "../server/contactEmail";

interface VercelRequest {
  method?: string;
  body?: ContactRequestBody | null;
}

interface JsonResponse {
  json(body: unknown): void;
}

interface VercelResponse {
  setHeader(name: string, value: string | string[]): void;
  status(code: number): JsonResponse;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({
      success: false,
      error: "Método não permitido. Use POST.",
    });
    return;
  }

  const result = await handleContactRequest(req.body ?? {});
  res.status(result.status).json(result.body);
}
