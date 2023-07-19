import Menu from "../../components/Menu";
import StatusJob from "../../components/StatusJob";
import { ContainerStatus, BannerContainer, LogoSkater } from "./styles";
import Title from "../../components/Title";
import CardAbout from "../../components/CardAbout";
import skater from "../../assets/images/bgastro.png"
import CardProject from "../../components/CardProject";
import CardExperience from "../../components/CardExperiencie";
import CardSkills from "../../components/CardSkills";
import { ScrollTop } from "../../components/ScrollTop";
import GitHub from "../../components/CardProject/GitHub";
import CardContact from "../../components/CardContact";
import Footer from "../../components/Footer";
export default function Home() {
  return (
    <>
      
      <ContainerStatus>
        <StatusJob />
      </ContainerStatus>
      <BannerContainer>
        <Menu />
        <Title />
       <LogoSkater>
        <img src={skater} alt="" />
       </LogoSkater>
      </BannerContainer>
      <CardAbout />
      <CardProject/>
      <GitHub/>
      <CardExperience/>
      <CardSkills/>
      <CardContact/>
      <Footer/>
      <ScrollTop/>
    </>
  );
}
