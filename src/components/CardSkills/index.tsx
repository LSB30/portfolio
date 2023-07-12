import { Container, SkillsContainer, SkillsContent, Title } from "./styles";
import { BsCodeSquare } from "react-icons/bs";
import skills from "../../data/skills";

interface CardSkills {
  id: number;
  title: string;
  img: string;
  color: string;
}

export default function CardSkills() {
  return (
    <Container>
      <Title>
        Habilidades
        <span>
          <BsCodeSquare /> Skills
        </span>
      </Title>
      <SkillsContainer >
        {skills.map(skill => {
          return (
            <SkillsContent color={skill.color} key={skill.id}>
              <img src={skill.img} alt={skill.title} width={60} height={60}/>
              <h4>{skill.title}</h4>
              <span className="border"></span>
            </SkillsContent>
          )
        })}
      </SkillsContainer>
    </Container>
  );
}
