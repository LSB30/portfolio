import { ButtonGit, ContainerGit, ContentGit , Cubo, Container} from "./styles";
import { AiOutlineAppstore } from "react-icons/ai";
export default function GitHub() {
  return (
    <Container>
    <ContainerGit>
      <h4>Todos os Projetos</h4>
      <ContentGit>
        <a href="https://github.com/LSB30" target="_blank">
          <ButtonGit>
            Projetos <AiOutlineAppstore size={20} />
          </ButtonGit>
        </a>
        <Cubo>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <img src="/skills/html.svg" alt="Html" />
              </div>
              <div className="face2">
                <img src="/skills/react.svg" alt="React JS" />
              </div>
              <div className="face3">
                <img src="/skills/javascript (2).svg" alt="JavaScript" />
              </div>
              <div className="face4">
                <img src="/skills/typescript.svg" alt="TypeScript" />
              </div>
              <div className="face5">
                <img src="/skills/css.svg" alt="Css" />
              </div>
              <div className="face6">
                <img src="/skills/next-js.svg" alt="Next JS" />
              </div>
            </div>
          </div>
        </Cubo>
      </ContentGit>
    </ContainerGit>
    </Container>
  );
}
