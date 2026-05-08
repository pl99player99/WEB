import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { handleContactRequest } from "./contactEmail";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function getOptionalEnv(name: string) {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

async function sendEmail(params: {
  serviceId: string;
  templateId: string;
  publicKey: string;
  privateKey?: string;
  templateParams: Record<string, string>;
}) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: params.serviceId,
      template_id: params.templateId,
      user_id: params.publicKey,
      accessToken: params.privateKey,
      template_params: params.templateParams,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    if (
      errorText.includes("strict mode") &&
      errorText.includes("no private key was passed")
    ) {
      throw new Error(
        "EmailJS strict mode está ativo. Defina EMAILJS_PRIVATE_KEY no servidor ou desative strict mode no EmailJS."
      );
    }
    throw new Error(`EmailJS request failed: ${response.status} ${errorText}`);
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const result = await handleContactRequest(req.body ?? {});
    res.status(result.status).json(result.body);
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
