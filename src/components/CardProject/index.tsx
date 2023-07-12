import {
  ButtonProject,
  Container,
  ProjectContainer,
  ProjectsContent,
  Title,
} from "./styles";
import projects from "../../data/projects";
import { ArrowRight } from "phosphor-react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import code from "/skills/codeTwo.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CardProject {
  id: number;
  url: string;
  img: string;
  title: string;
  type: string;
  icon: string;
  github: string;
  web: string;
  tablet: string;
  mobile: string;
}

export default function CardProject() {
  return (
    <Container id="projects">
      <Title>
        Projetos
        <span>
          <HiOutlineDesktopComputer /> Projects
        </span>
        <img src={code} alt="" />
      </Title>
      <ProjectContainer>
        {projects.slice(0, 9).map((project) => {
          return (
            <a href={`${project.url}`} key={project.id} target="_blank">
              <ProjectsContent>
                <img src={project.img} alt={project.title} className="banner" />
                <div className="title">
                  <h2>{project.title}</h2>
                  <span>{project.type}</span>

                  <div className="tags">
                    {project.tags.map((tag) => {
                      return (
                        <img
                          src={tag.icon}
                          alt={tag.name}
                          key={tag.name}
                          className="tagsImg"
                        />
                      );
                    })}
                  </div>

                  <div className="telemovel">
                    {project.mobileImgs.map((mobileImg) => {
                      return (
                        <img
                          src={mobileImg.mobile}
                          alt={project.title}
                          key={project.title}
                        />
                      );
                    })}
                  </div>
                  <div className="btns">
                    <ButtonProject>
                      Ver Projeto <ArrowRight />
                    </ButtonProject>
                  </div>
                </div>
              </ProjectsContent>
            </a>
          );
        })}
      </ProjectContainer>
    </Container>
  );
}
