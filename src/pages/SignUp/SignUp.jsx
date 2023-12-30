import { LeftContainer, RightContainer, LoginContainer, TermsContainer } from "./Style";
import peaceful from "../../assets/img/peaceful.png"
import LogoMyWallet from "../../components/LogoMyWallet";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton"
import { StyledLink } from "../../components/StyledLink"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react";
import { ScreenContainer } from "../../components/ScreenContainer";

export default function SignUp() {
    const [isLoading] = useState(false)

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
                    <StyledInput placeholder="Nome" />
                    <StyledInput placeholder="Email"/>
                    <StyledInput placeholder="Senha"/>
                    <StyledInput placeholder="Confirme a Senha"/>
                    <TermsContainer>
                        <input type="checkbox" />
                        <span>Eu concordo com os termos e condicões de uso.</span>
                    </TermsContainer>
                    <StyledButton disabled={isLoading}>
                        {isLoading ? (
                            <ThreeDots width={50} height={50} color="#fff" />
                        ) : (
                            "Cadastrar"
                        )}
                    </StyledButton>
                    <StyledLink to="/">
                        Ja possui conta? Acesse aqui
                    </StyledLink>
                </LoginContainer>
            </RightContainer>
        </ScreenContainer>
    )
}