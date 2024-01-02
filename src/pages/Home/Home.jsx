import {MainScreen, BasicInfo, TransactionInfo, MarketInfo, CardBasic } from "./Style";
import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars";

export default function Home() {
    return (
        <ScreenWithBars>
            <MainScreen>
                <BasicInfo>
                    <CardBasic color={"linear-gradient(90deg, rgb(36, 59, 85), rgb(20, 30, 48) 100%)"}>
                        <h1>Dinheiro na Carteira</h1>
                        <span>R$ 4.202,30</span>
                    </CardBasic>
                    <CardBasic color={"linear-gradient(90deg, rgba(85,36,36,1) 35%, rgba(48,20,20,1) 100%)"}>
                        <h1>Dívidas à vencer</h1>
                        <span>R$ 8.765,03</span>
                    </CardBasic>
                    <CardBasic color={"linear-gradient(90deg, rgba(36,85,42,1) 35%, rgba(20,48,23,1) 100%)"}>
                        <h1>Investimentos </h1>
                        <span>R$ 32.123,11</span>
                    </CardBasic>
                </BasicInfo>
                <MarketInfo>
                    {/* CDI IPCA E SELIC DO DIA */}
                </MarketInfo>
                <TransactionInfo>
                    {/* Lançamentos de todas as compras e ganhos feitos */}
                    {/* Aqui também terá um botão de lancamento de compras e ganhos */}
                </TransactionInfo>
            </MainScreen>
        </ScreenWithBars>
    )
}