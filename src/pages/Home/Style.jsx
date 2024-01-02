import styled from "styled-components";

export const MainScreen = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 70px;
`
export const BasicInfo = styled.div`
    display: flex;
`
export const TransactionInfo = styled.div`
    border: 1px solid blue;
    width: 500px;
    height: 300px;
    display: block;
`

export const MarketInfo = styled.div`
    border: 1px solid blue;
    width: 500px;
    height: 300px;
    display: block;
`

export const CardBasic = styled.div`
    width: 250px;
    height: 130px;
    background: rgb(36,48,85);
    background: ${props => props.color } ;
    box-shadow: rgb(0,0,0,0.7) 5px 5px 5px ,rgb(0,0,0,0.7) -5px 0px 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 15px;
    &>span{
        font-size: 25px;
        font-weight: 700;
        color: #fff;
    }
    &>h1{
        width: 100%;
        color: #fff;
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 14px;
        font-weight: 700;
    }
`