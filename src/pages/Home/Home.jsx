import {MainScreen, BasicInfo, TransactionInfo, MarketInfo } from "./Style";
import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars";

export default function Home() {
    return (
        <ScreenWithBars>
            <MainScreen>
                <BasicInfo>
                    {/* 3 informacões: Total/ A pagar / Investimentos */}
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