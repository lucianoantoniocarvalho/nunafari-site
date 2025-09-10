import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

// Estudar essa função
function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggle = (name) => setOpenMenu(openMenu === name ? null : name);

  const closeMenus = () => {
    setOpenMenu(null);
    setLangOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeMenus();
  };

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
  ];
  const currentLang = i18n.language || "en";

  // Mudar o css para tailwind:
  return (
    <header className="nf-header" role="banner">
      <div className="nf-header-inner">
        {/* Logo */}
        <Link to="/" className="nf-brand" onClick={closeMenus} aria-label="Nuna Fari - Home">
          <img src={`${import.meta.env.BASE_URL}assets/logo-nunafari-fundo-verde.png`} alt="Nuna Fari logo" />
        </Link>

        {/* Navegação */}
        <nav className="nf-nav" role="navigation" aria-label="Menu principal">
          <ul className="nf-menu">
            {/* Links principais */}
            <li><Link to="/" className="nf-link" onClick={closeMenus}>{t("menu.home")}</Link></li>
            <li><Link to="nuna-vivi" className="nf-link">{t("menu.revista")}</Link></li>

            {/* Aulas */}
            <li className={`nf-has-sub ${openMenu === "aulas" ? "is-open" : ""}`}>
              <button className="nf-link nf-sub-toggle" onClick={() => toggle("aulas")} aria-expanded={openMenu === "aulas"} aria-haspopup="true">
                {t("menu.aulas")}
              </button>
              <ul className="nf-submenu" role="menu">
                <li><Link to="/music-classes" className="nf-sublink" onClick={closeMenus}>
                  {t("menu.aulasMusica")}
                </Link></li>
                <li>
  <Link to="/portuguese-classes" className="nf-sublink" onClick={closeMenus}>
    {t("menu.aulasPortugues")}
  </Link>
</li>
              </ul>
            </li>

            {/* Aconselhamentos */}
            <li className={`nf-has-sub ${openMenu === "acons" ? "is-open" : ""}`}>
              <button className="nf-link nf-sub-toggle" onClick={() => toggle("acons")} aria-expanded={openMenu === "acons"} aria-haspopup="true">
                {t("menu.aconselhamentos")}
              </button>
              <ul className="nf-submenu" role="menu">
                <li><a href="#" className="nf-sublink">{t("menu.aconselhamentoFilosofico")}</a></li>
                <li><a href="#" className="nf-sublink">{t("menu.mentoriaArtistica")}</a></li>
              </ul>
            </li>

            {/* Música */}
            <li className={`nf-has-sub ${openMenu === "musica" ? "is-open" : ""}`}>
              <button className="nf-link nf-sub-toggle" onClick={() => toggle("musica")} aria-expanded={openMenu === "musica"} aria-haspopup="true">
                {t("menu.musica")}
              </button>
              <ul className="nf-submenu" role="menu">
                <li><a href="#" className="nf-sublink">{t("menu.musicaOuvir")}</a></li>
                <li><a href="#" className="nf-sublink">{t("menu.musicaPartituras")}</a></li>
              </ul>
            </li>

            <li><a href="#" className="nf-link">{t("menu.servicos")}</a></li>
            <li><Link to="/about" className="nf-link" onClick={closeMenus}>{t("menu.sobre")}</Link></li>

            {/* Dropdown de idioma */}
            <li className="nf-lang">
              <button className="nf-link" onClick={() => setLangOpen(!langOpen)}>
                {currentLang.toUpperCase()}
              </button>
              {langOpen && (
                <ul className="nf-lang-dropdown">
                  {languages.filter(l => l.code !== currentLang).map(l => (
                    <li key={l.code}>
                      <button onClick={() => changeLanguage(l.code)}>{l.label}</button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
