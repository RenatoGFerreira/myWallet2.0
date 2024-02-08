import styled from "styled-components";

export const MainScreen = styled.div`
    width: 95%;
    height: calc(100vh - 180px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1600px) {
        border: 1px solid yellow;
    }
    @media (max-width: 1200px) {
        
    }
    @media (max-width: 992px) {
        
    }
    @media (max-width: 768px) {
        
    }
    @media (max-width: 480px) {

    }
`
export const MediumScreen = styled.div`
    border: 1px solid orange;
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 992px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`
export const BasicInfo = styled.div`
    display: flex;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
export const GraphInfo = styled.div`
    border: 1px solid red;
    width: 70%;
    height: 50%;
    display: block;
    @media (max-width: 992px) {
        width: 100%;
    }
`

export const GraphInfo2 = styled.div`
    border: 1px solid yellow;
    width: 30%;
    height: 50%;
    @media (max-width: 992px) {
        width: 100%;
    }
`
export const TransactionInfo = styled.div`
    border: solid 1px green;
    width: 70%;
    height: 50%;
    @media (max-width: 992px) {
       width: 100%;
    }
`
export const HealthFinantialInfo = styled.div`
    border: 1px solid pink;
    width: 30%;
    height: 50%;
    @media (max-width: 992px) {
        width: 100%;
    }
`