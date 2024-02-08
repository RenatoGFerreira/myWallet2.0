import styled from "styled-components";
import { FaMoneyCheckAlt } from "react-icons/fa";
// import { BiMoneyWithdraw } from "react-icons/bi";
// import { FaMoneyBillTransfer } from "react-icons/fa6";

export const ScreenMain = styled.div`
box-shadow: 2px 2px 2px rgba(0,0,0,.2);
background-color: #fff;
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
border-radius: 10px;
max-width: 100%;
min-width: 22%;
margin: 3px;
height: 75px;
padding: 0 5px;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const IconContainer = styled.div`
    background-color: blue;
    color: #fff;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Icon = styled(FaMoneyCheckAlt)`
    color: #fff;
    font-size: 16pt;
`;

export const InfoContainer = styled.div`
    background-color: #fff;
    width: 150px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    background-color: #fff;
    font-size: 16px;
    text-align: center;
`

export const Subtitle = styled.h2`
    background-color: #fff;
    font-size: 21px;
    text-align: center;
`
