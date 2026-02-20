import { readFileSync } from "fs";
import path from "path";

const TEMPLATE_PATH = path.join(process.cwd(), "src/lib/email/registration-email.html");

export function getRegistrationEmailHtml(params: {
  logoUrl: string;
  bodyContent: string;
  year?: number;
}): string {
  const template = readFileSync(TEMPLATE_PATH, "utf-8");
  const year = params.year ?? 2024;
  return template
    .replace(/\{\{LOGO_URL\}\}/g, params.logoUrl)
    .replace(/\{\{BODY_CONTENT\}\}/g, params.bodyContent)
    .replace(/\{\{YEAR\}\}/g, String(year));
}
