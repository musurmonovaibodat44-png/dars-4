import { useTranslation } from "react-i18next";

export function About() {
    const { t } = useTranslation();

    return (
        <section style={{ padding: "20px" }}>
            <h2>{t("about_title")}</h2>

            <p>{t("about_text1")}</p>
            <p>{t("about_text2")}</p>

            <img src="https://www.texnoman.uz/uploads/blogs/fc0e3a5697b330a6cb374718e77a83eb.jpg" alt="" />

            <h3>{t("matn")}</h3>

            <ul className='container'>
                <li>{t("matn1")}</li>
                <li>{t("matn2")}</li>
                <li>{t("matn3")}</li>
            </ul>
        </section>
    );
}