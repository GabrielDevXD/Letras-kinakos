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
      <S.content>
        <S.text1></S.text1>
        <S.text2></S.text2>
        <S.text3>
        
         
        </S.text3>
      </S.content>
      <S.primaryFooter>
        <S.divFooter>
          <h5>Empresa</h5>
        </S.divFooter>
        <S.divFooter>
          <h5>Contato</h5>
        </S.divFooter>
        <S.divFooter>
          <h5>FAQ</h5>
        </S.divFooter>
      </S.primaryFooter>
      <S.secundaryFooter>
        <p>© 2022 • Letras kinakos • Todos os direitos reservados </p>
      </S.secundaryFooter>
    </S.startpages>
  );
};
export default StartPage;
