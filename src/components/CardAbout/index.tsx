import { Link } from "react-router-dom";
import {
  ContentAbout,
  ContainerAbout,
  Button,
  ButtonAlternatives,
} from "./styles";
import astrounataCoffee from "../../assets/images/eugato.png";
import { ArrowRight, TelegramLogo } from "phosphor-react";
import CardAnimation from "../CardAnimation";
export default function CardAbout() {
  return (
    <>
      <ContainerAbout id="sobre">
        <CardAnimation />
        <ContentAbout>
          <div className="aboutImg">
            <img src={astrounataCoffee} alt="" />
          </div>

          <div className="aboutContent">
            <div className="aboutDescription">
              <h2>Deixe-me apresentar</h2>
              <p>
                Sou uma pessoa que nunca se cansa de buscar conhecimentos novos,
                sempre estou disposto a ouvir e aprender com outras pessoas.
                Sendo um profissional que gosta do que faz e com isso busco me
                tornar cada vez melhor e eficiente.Sempre busco me atualizar nas
                tecnologias do mercado e nunca tenho o pensamento de ficar
                estagnado,por isso,busco novos desafios que possam me levar para
                o próximo nível.Cresci com a tecnologia e hoje faço dela a minha
                paixão.
              </p>
              <div className="aboutBtns">
                <Link to="mailto:lucasbelatodev@gmail.com?subject=Oportunidade de Emprego">
                  <Button>
                    Entre em Contato
                    <TelegramLogo
                      style={{
                        marginBottom: "-0.1rem",
                        marginLeft: "0.2rem",
                      }}
                      size={16}
                      weight="bold"
                    />
                  </Button>
                </Link>
                <Link to="#">
                  <ButtonAlternatives>
                    Ler mais
                    <ArrowRight
                      style={{
                        marginBottom: "-0.1rem",
                        marginLeft: "0.2rem",
                      }}
                      weight="bold"
                      size={16}
                    />
                  </ButtonAlternatives>
                </Link>
              </div>
            </div>
          </div>
        </ContentAbout>
      </ContainerAbout>
    </>
  );
}
