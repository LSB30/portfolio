import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { Container, Title, WorkContainer, WorkContent } from "./styles"
import { Briefcase } from 'phosphor-react'
import works from "../../data/works"
export default function CardExperience() {
  return (
    <Container>
      <Title>
      Experiência
      <span>
      <Briefcase /> Experience
      </span>
      </Title>

      <div>
        <VerticalTimeline lineColor="#8485f6">
          {works &&
            works.map(work => {
              return (
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#070d1e ",
                  borderBottom: "0.7rem solid #070d1e",
                  boxShadow: " 0px 5px 0px 0px #8485f6"
                }}
                contentArrowStyle={{borderRight: "1rem solid #070d1e"}}
                dateClassName="date"
                date={work.date}
                icon={
                  <img 
                    src={work.img}
                    alt={work.title}
                    className="imgWork"
                  />
                }
                iconStyle={{
                  boxShadow: "0px 0px 0px 3px #8485f6",
                  background: "#8485f6"
                }}
                key={work.id}
                >
                  <WorkContainer>
                    <WorkContent>
                      <h1>{work.title}</h1>
                      <h2>{work.subTitle}</h2>
                      <span>{work.office}</span>
                      <p>{work.description}</p>
                      <ul>
                        <h3>Techs:</h3>
                        {work.tags.map(tag => {
                          return (
                            <img key={tag.name} src={tag.icon} alt={tag.name} />
                          )
                        })}
                      </ul>
                    </WorkContent>
                  </WorkContainer>
                </VerticalTimelineElement>
              )
            })}
        </VerticalTimeline>
      </div>
    </Container>
  )
}