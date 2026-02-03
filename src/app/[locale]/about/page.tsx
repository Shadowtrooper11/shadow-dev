import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}