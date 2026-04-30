import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
    const { i18n, t } = useTranslation();

    const changeLang = (lang) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
    };

    return (
        <header style={{ backgroundColor: "#1a2b55ff", color: "white", padding: "15px" }}>
            <h1>{t("title")}</h1>

            <nav style={{ marginTop: "10px" }}>
                <pre><Link to="/" style={{ color: "white",marginRight: "90px" }}>
                    {t("home")}
                </Link>

                
                <Link to="/about" style={{ color: "white" }}>
                    {t("about")}
                </Link></pre>
                 <br/>
                <button onClick={() => changeLang("uz")} style={{ color: "white",marginRight: "50px" }}>UZ</button>
                <button onClick={() => changeLang("en")} style={{ color: "white",marginRight: "50px" }}>EN</button>
                <button onClick={() => changeLang("ru")} style={{ color: "white",marginRight: "50px" }}>RU</button>
            </nav>
        </header>
    );
}