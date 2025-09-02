// This component is the first thing on Home Page.

import { Link } from "react-router-dom";

function Hero() {
  const hero = {
    title: "Nuna Fari",
    slogan: "Fazendo agora. Fazendo o agora.",
    subtitle:
      "Sincronizando o Bom, o Belo, o Prazeroso, o Eficiente e o Saudável, através das Artes, das Línguas, Filosofia e Conhecimento.",
    callToAction: "Conheça a Nuna Vivi",
  };

  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-green-600">{hero.title}</h1>
      <p className="text-2xl text-gray-700 mt-4 italic">{hero.slogan}</p>
      <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
        {hero.subtitle}
      </p>
      <div className="mt-8">
        <Link
          to="/about"
          className="bg-green-500 text-white px-6 py-3 rounded-2xl text-lg shadow-md hover:bg-green-600 transition"
        >
          {hero.callToAction}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
