import styled from "styled-components"
import  lost  from "../../assets/img/lost.png"

export default function ErrorPage() {
    return (
        <Container>
            <img src={lost} alt="Perdido" />
            <h1>Desculpe, mas esta página não existe.</h1>
        </Container>
    )
}


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;
    &>img{
        width: 540px;
    }

    &>h1{
        font-size: 25px;
        text-transform: uppercase;
    }

`