import imgSkatista from "../../assets/images/astronauta.svg";
import { CardContainer, CardContent } from "./styles";
export default function CardAnimation() {
  return (
    <>
      <CardContainer>
        <CardContent>
          <img src={imgSkatista} alt="" />
        </CardContent>
      </CardContainer>
    </>
  );
}
