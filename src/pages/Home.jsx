import { useTranslation } from "react-i18next";

export function Home() {
    const { t } = useTranslation();

    return (
        <section style={{ padding: "20px" }}>
            <h2>{t("city_about")}</h2>
            <h3><b><i>{t("city_name")}</i></b></h3>

            <p>{t("city_desc")}</p>

            <img src="https://api.darakchi.uz/media/news_preview/2024/07/30/image-xl_tqFDoP4_EPlNpPE_LjgNnjQ_oQppXvP_I0Bpl6M_tkd297p_K4TIUgq_PF4WrgT_8ybNOmB_htRv6Lb_WvGbNat_VpSyNEK_ngw1t31_tRaIu0P_w00z35F_MYcEjiZ_951RklO_Op6EwDj_uF707yI_qxb_JRWiK7d.medium.webp" alt="" />

            <h3>{t("joylar")}</h3>
            <ul className='container'>
                <li>{t("joy1")}</li>
                <li>{t("joy2")}</li>
                <li>{t("joy3")}</li>
            </ul>
        </section>
    );
}