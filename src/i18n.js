import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            home: "Home",
            revista: "Nuna Vivi Magazine",
            aulas: "Classes",
            aulasMusica: "Music",
            aulasPortugues: "Portuguese",
            aconselhamentos: "Counseling",
            aconselhamentoFilosofico: "Philosophical Care",
            mentoriaArtistica: "Artistic Mentoring",
            musica: "Music",
            musicaOuvir: "To Listen",
            musicaPartituras: "Scores & Chords",
            servicos: "Other Services",
            sobre: "About Nuna Fari"
          }
        }
      },
      pt: {
        translation: {
          menu: {
            home: "Início",
            revista: "Revista Nuna Vivi",
            aulas: "Aulas",
            aulasMusica: "Música",
            aulasPortugues: "Português",
            aconselhamentos: "Aconselhamentos",
            aconselhamentoFilosofico: "Cuidado Filosófico",
            mentoriaArtistica: "Mentorias Artísticas",
            musica: "Música",
            musicaOuvir: "Para Ouvir",
            musicaPartituras: "Partituras e Cifras",
            servicos: "Outros Serviços",
            sobre: "Sobre Nuna Fari"
          }
        }
      },
      es: {
        translation: {
          menu: {
            home: "Inicio",
            revista: "Revista Nuna Vivi",
            aulas: "Clases",
            aulasMusica: "Música",
            aulasPortugues: "Portugués",
            aconselhamentos: "Consejerías",
            aconselhamentoFilosofico: "Cuidado Filosófico",
            mentoriaArtistica: "Mentorías Artísticas",
            musica: "Música",
            musicaOuvir: "Para Escuchar",
            musicaPartituras: "Partituras y Acordes",
            servicos: "Otros Servicios",
            sobre: "Sobre Nuna Fari"
          }
        }
      }
    },
    fallbackLng: "en", // inglês continua como padrão se faltar tradução
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;