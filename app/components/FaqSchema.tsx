import { faqSchemas } from "@/lib/faq-schemas";
import JsonLd from "./JsonLd";

export default function FaqSchema({ path }: { path: string }) {
  const schema = faqSchemas[path];
  if (!schema) return null;
  return <JsonLd data={schema} />;
}
