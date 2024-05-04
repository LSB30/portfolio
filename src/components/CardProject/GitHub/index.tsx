import { ButtonGit, ContainerGit, ContentGit , Cubo, Container} from "./styles";
import { AiOutlineAppstore } from "react-icons/ai";
export default function GitHub() {
  return (
    <Container id="projetos">
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
                <img src="/skills/java.svg" alt="Java" />
              </div>
              <div className="face2">
                <img src="/skills/react.svg" alt="React JS" />
              </div>
              <div className="face3">
                <img src="/skills/springboot.svg" alt="SpringBoot" />
              </div>
              <div className="face4">
                <img src="/skills/typescript.svg" alt="TypeScript" />
              </div>
              <div className="face5">
                <img src="/skills/aws.svg" alt="AWS" />
              </div>
              <div className="face6">
                <img src="/skills/mongodb.svg" alt="MongoDB" />
              </div>
            </div>
          </div>
        </Cubo>
      </ContentGit>
    </ContainerGit>
    </Container>
  );
}
