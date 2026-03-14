import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <div className="p-10 text-center text-white">
      <div className="max-w-3xl mx-auto bg-gray-800/50 rounded-lg p-8 border border-gray-700">
        <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
        <div className="grid grid-cols-2">
          <div>
            <p className="text-lg mb-8">{t("description")}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>
              <form>
                
                <label htmlFor="email" className="block text-left mb-2 text-gray-200">
                  {t("emailLabel")}
                </label>
                <input 
                  type="email"
                  id="email"
                  placeholder={t("emailPlaceholder")}
                  required
                  className="border-2 border-gray-600 rounded-lg p-2 focus:border-2 focus:border-blue-400 focus:outline-none w-full bg-gray-800 text-white mb-4">
                </input>

                <label htmlFor="name" className="block text-left mb-2 text-gray-200">
                  {t("nameLabel")}
                </label>
                <input 
                  type="text"
                  id="name"
                  placeholder={t("namePlaceholder")}
                  required
                  className="border-2 border-gray-600 rounded-lg p-2 focus:border-2 focus:border-blue-400 focus:outline-none w-full bg-gray-800 text-white mb-4">
                </input>

                <label htmlFor="phone" className="block text-left mb-2 text-gray-200">
                  {t("phoneLabel")}
                </label>
                <input 
                  type="tel"
                  id="phone"
                  placeholder={t("phonePlaceholder")}
                  className="border-2 border-gray-600 rounded-lg p-2 focus:border-2 focus:border-blue-400 focus:outline-none w-full bg-gray-800 text-white mb-4">
                </input>

                <label htmlFor="message" className="block text-left mb-2 text-gray-200">
                  {t("messageLabel")}
                </label>
                <textarea 
                  id="message"
                  placeholder={t("messagePlaceholder")}
                  rows={4}
                  minLength={10}
                  maxLength={5000}
                  required
                  className="border-2 border-gray-600 rounded-lg p-2 focus:border-2 focus:border-blue-400 focus:outline-none w-full bg-gray-800 text-white mb-4">
                </textarea>

                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  {t("submitButton")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}