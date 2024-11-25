import imgnovidades from "../../assets/images/imgnovidades.png";
import { Wrapper, Section, Div, Button, Footer } from "./style";

export default function Novidades() {
  return (
    <Wrapper>
      <Section>
        <img src={imgnovidades} alt="" />
        <Div>
          <h2>PREPARAÇÃO</h2>
          <h3>Níveis de torra</h3>
          <p>
            Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra
            Escura? Estas são as torras que fazem parte dos níveis de torra
            Starbucks®
          </p>
          <Button>SAIBA MAIS</Button>
        </Div>
      </Section>
     <Footer>
        <p>© 2024 Starbucks - Todos os direitos reservados.</p>
      </Footer>
    </Wrapper>
  );
}
