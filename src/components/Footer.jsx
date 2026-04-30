import { useTranslation } from "react-i18next";

export function Footer() {
    const { t } = useTranslation();

    return (
        <footer style={{ backgroundColor: "#1a2b55ff", color: "white", padding: "10px", textAlign: "center" }}>
            <p>2026 {t("title")}</p>
        </footer>
    );
}