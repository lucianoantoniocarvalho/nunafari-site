import { useTranslation } from "react-i18next";
import Magazine000 from "./magazine-000/Magazine000";
import Title from "./Title";

export default function Magazine() {
  const { t } = useTranslation();

  return (
    <main>
      {/* 
      <p>Aqui haverá um índice com os números da Revista Nuna Vivi.</p>
      <p>Por enquanto, estamos felizes de haver somente o número 0. É um momento especial que nunca mais se repetirá, quando chegar o número 1! Mas aí será um novo momento especial! Todos eles sempre acontecendo, porém, no mesmo agora!</p>
      */}
      <Title />
      <Magazine000 />
    </main>
  );
}
