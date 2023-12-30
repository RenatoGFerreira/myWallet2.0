import { ScreenContainer } from "../../components/ScreenContainer";
import { LeftContainer, LoginContainer, RightContainer } from "../SignUp/Style";
import freedon from "../../assets/img/freedon.png"
import LogoMyWallet from "../../components/LogoMyWallet";
import { StyledInput } from "../../components/StyledInput";
import { StyledButton } from "../../components/StyledButton"
import { StyledLink } from "../../components/StyledLink"
import { ThreeDots } from "react-loader-spinner"
import { useState } from "react";
import { StyledForm } from "../../components/StyledForm"
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [isLoading] = useState(false)
    const navigate = useNavigate()

    function handleLogin(){
        navigate("/home")
    }

    return (
        <ScreenContainer>
            <LeftContainer>
                <img src={freedon} alt="você mais tranquilo como deve ser." />
                <h1>Tome decisões embasadas com dados visuais que simplificam a complexidade financeira. Mantenha-se organizado e evite surpresas desagradáveis.</h1>
            </LeftContainer>
            <RightContainer>
                <LogoMyWallet />
                <LoginContainer>
                    <StyledForm onSubmit={handleLogin}>
                        <StyledInput placeholder="Email" />
                        <StyledInput placeholder="Senha" />
                        <StyledButton type="onSubmit" disabled={isLoading}>
                            {isLoading ? (
                                <ThreeDots width={50} height={50} color="#fff" />
                            ) : (
                                "Acesse já"
                            )}
                        </StyledButton>
                    </StyledForm>
                    <StyledLink to="/signup">
                        Ainda não possui conta? Clique aqui e cadastes-se
                    </StyledLink>
                </LoginContainer>

            </RightContainer>
        </ScreenContainer>
    )
}

