import { ButtonContact, Container, ContentContact } from "./styles";
import logoContact from "../../assets/images/contactBanner.png";
import { TelegramLogo } from "phosphor-react";

export default function CardContact() {
  return (
    <Container>
      <ContentContact>
        <div className="contact-text">
          <h1>Vamos Conversar !</h1>
          <p>
            Sinta-se à vontade para entrar em contato comigo enviando o
            formulário abaixo e retornarei o mais breve possível
          </p>
        </div>

        <img src={logoContact} alt="logo contato astrounauta" />
      </ContentContact>
      <ButtonContact>
        Entre em contato <TelegramLogo size={16} weight="bold"/>
      </ButtonContact>
    </Container>
  );
}
