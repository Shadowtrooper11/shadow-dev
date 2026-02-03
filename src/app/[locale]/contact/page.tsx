import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="p-10 text-center text-white">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}