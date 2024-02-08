import { ScreenMain, IconContainer, Icon, InfoContainer, Title, Subtitle } from "./Style"

export default function CardInfo() {
    return (
        <ScreenMain>
            <IconContainer>
                <Icon/>
            </IconContainer>
            <InfoContainer>
                <Title>
                    Saldo em Conta
                </Title>
                <Subtitle>
                    R$ 3123,12
                </Subtitle>
            </InfoContainer>
        </ScreenMain>
    )
}