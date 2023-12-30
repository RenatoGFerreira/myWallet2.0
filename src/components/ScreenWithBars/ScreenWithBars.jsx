import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import { ScreenContainerApp } from "./Style"

export default function ScreenWithBars({ children }) {
    return (
        <ScreenContainerApp>
            <Header/>
            {children}
            <Menu/>
        </ScreenContainerApp>
    )
}