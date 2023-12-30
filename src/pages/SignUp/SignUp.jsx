import { ScreenContainer, LeftContainer, RightContainer, LoginContainer } from "./Style";
import peaceful from "../../assets/img/peaceful.png"
import LogoMyWallet from "../../components/LogoMyWallet";

export default function SignUp() {
    return (
        <ScreenContainer>
            <LeftContainer>
                <img src={peaceful} alt="você mais tranquilo como deve ser." />
                <h1>Gerencie suas despesas, receitas e orçamento de forma simples e eficiente. Tenha o poder de tomar decisões informadas para impulsionar sua estabilidade financeira.</h1>
                {/* <h1>Tome decisões embasadas com dados visuais que simplificam a complexidade financeira.</h1>
                <h1>Mantenha-se organizado e evite surpresas desagradáveis.</h1> */}
            </LeftContainer>
            <RightContainer>
                <LogoMyWallet />
                <LoginContainer>
                    

                </LoginContainer>
            </RightContainer>
        </ScreenContainer>
    )
}