import { ScreenContainerHeader, Avatar } from "./Style"
import LogoMyWallet from "../LogoMyWallet"
import { Link } from "react-router-dom"
import perfil from "../../assets/img/perfil.jpeg"


export default function Header() {    
    return (
        <ScreenContainerHeader>
            <Link to="/">
                <LogoMyWallet/>
            </Link>
            <Avatar src={perfil} alt="ProfileUser" />
        </ScreenContainerHeader>
    )
}