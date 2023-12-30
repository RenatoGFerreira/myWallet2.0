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
    background-color: white;
    height: 100vh;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LoginContainer = styled.div`
    border: 1px solid red; 
    width: 450px;
    height: 650px;
`