import { ButtonContact, Container, ContentContact } from "./styles";
import logoContact from "../../assets/images/contactBanner.png";
import { TelegramLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function CardContact() {
  return (
    <Container id="contato">
      <ContentContact>
        <div className="contact-text">
          <h1>Vamos Conversar !</h1>
          <p>
            Será um prazer receber uma mensagem sua. Envie sua proposta,
            questionamentos ou ideias. Farei o meu melhor para respondê-lo(a) o
            quanto antes!
          </p>
        </div>

        <img src={logoContact} alt="logo contato astrounauta" />
      </ContentContact>
      <ButtonContact>
        <Link
          to={"mailto:lucasbelatodev@gmail.com?subject=Oportunidade de Emprego"}
        >
          Entre em contato <TelegramLogo size={16} weight="bold" />
        </Link>
      </ButtonContact>
    </Container>
  );
}
