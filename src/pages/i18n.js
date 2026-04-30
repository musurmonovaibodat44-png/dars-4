import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    uz: {
      translation: {
        title: "Mening shahrim",
        home: "Bosh sahifa",
        about: "Men haqimda",

        city_about: "Shahrim haqida",
        city_name: "Shahrisabz shahri",
        city_desc: "Bu mening tug‘ilib o‘sgan shahrim. Bu yer juda chiroyli va odamlar mehmondo‘st.",
        joylar: "Diqqatga sazovor joylar",
        joy1: "Markaziy bog‘",
        joy2: "Tarixiy muzey",
        joy3: "Yangi savdo markazi",

        about_title: "Men haqimda",
        about_text1: "Men dasturlashni o‘rganayotgan oddiy talabalardan biriman.",
        about_text2: "Robototexnika menga juda qiziq.",
        matn: "Maqsadlarim",
        matn1: "Kuchli dasturchi bo‘lish",
        matn2: "Yaxshi loyihalar qilish",
        matn3: "IT sohada ishlash"
      }
    },

    en: {
      translation: {
        title: "My City",
        home: "Home",
        about: "About Me",

        city_about: "About my city",
        city_name: "Shahrisabz city",
        city_desc: "This is my hometown. It is very beautiful and people are hospitable.",
        joylar: "Places of interest",
        joy1: "Central park",
        joy2: "Historical museum",
        joy3: "Shopping center",

        about_title: "About me",
        about_text1: "I am a student learning programming.",
        about_text2: "I am very interested in robotics.",
        matn: "My goals",
        matn1: "Become a strong programmer",
        matn2: "Build good projects",
        matn3: "Work in IT field"
      }
    },

    ru: {
      translation: {
        title: "Мой город",
        home: "Главная",
        about: "Обо мне",

        city_about: "О моем городе",
        city_name: "Город Шахрисабз",
        city_desc: "Это мой родной город. Он очень красивый и люди гостеприимные.",
        joylar: "Достопримечательности",
        joy1: "Центральный парк",
        joy2: "Исторический музей",
        joy3: "Торговый центр",

        about_title: "Обо мне",
        about_text1: "Я студент, изучающий программирование.",
        about_text2: "Мне очень интересна робототехника.",
        matn: "Мои цели",
        matn1: "Стать сильным программистом",
        matn2: "Делать хорошие проекты",
        matn3: "Работать в IT"
      }
    }
  },

  lng: localStorage.getItem("lang") || "uz", 
  fallbackLng: "uz",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;