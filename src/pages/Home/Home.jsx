import { MainScreen, BasicInfo, MediumScreen, TransactionInfo, GraphInfo, GraphInfo2, HealthFinantialInfo } from "./Style";
import ScreenWithBars from "../../components/ScreenWithBars/ScreenWithBars";
import CardInfo from "../../components/CardInfo/CardInfo";

export default function Home() {
    return (
        <ScreenWithBars>
            <MainScreen>
                <BasicInfo>
                    {/* Aqui terá os principais cards, ganhos, despesas etc */}
                    
                    <CardInfo/>
                    <CardInfo/>
                    <CardInfo/>
                    <CardInfo/>
                </BasicInfo>
                <MediumScreen>
                    <GraphInfo>
                        {/* Aqui será lançado um gráfico de gastos por dia */}
                    </GraphInfo>
                    <GraphInfo2>
                        {/* Aqui será lançado um grafico de pizza com os gastos por categoria */}
                    </GraphInfo2>
                    <TransactionInfo>
                        {/* Lançamentos de todas as compras e ganhos feitos */}
                        {/* Aqui também terá um botão de lancamento de compras e ganhos */}
                    </TransactionInfo>
                    <HealthFinantialInfo>
                        {/* Aqui irá um objeto informando quanto de dinheiro está ocmprometido no orçamento */}
                    </HealthFinantialInfo>
                </MediumScreen>
            </MainScreen>
        </ScreenWithBars>
    )
}