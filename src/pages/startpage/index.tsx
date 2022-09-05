import { useNavigate } from "react-router-dom";
import * as S from "./style";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <S.startpages>
      <S.heading>
        <S.iconConfig>
          <p>Letras</p>
        </S.iconConfig>
      </S.heading>
    </S.startpages>
  );
};
export default StartPage;
