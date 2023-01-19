import i18n from "i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next, useTranslation } from 'react-i18next';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        load: "languageOnly",
        fallbackLng: "en",
        detection: {
            order: [
                'cookie',
                'localStorage',
                'htmlTag',
                'path',
                'subdomain'
            ],
            caches: ['cookie']
        },
        backend: { loadPath: '/locales/{{lng}}/translation.json' }

    }, (error, t) => {
        if (error)
            console.error("ERROR-->>" + error);
    }

    );

export default i18n;