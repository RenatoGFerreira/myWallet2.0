import styled from "styled-components";

export const ScreenContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
`
export const LeftContainer = styled.div`
    background-color: #a328d6;
    height: 100vh;
    width: 67%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    &>h1{
        color: white;
        font-size: 20px;
        width: 50%;
        text-align: justify;
    }
    &>img{
        width: 400px;
    }
`
export const RightContainer = styled.div`
    background-color: #eee;
    height: 100vh;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const LoginContainer = styled.div`
    margin: 20px;
    width: 450px;
    height: 650px;
    border-radius: 20px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 8px #7a7979;
`
export const TermsContainer = styled.div`
    display: flex;
    flex-direction: row;

    &>span{
        margin: 10px;
    }
`