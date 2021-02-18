import { Header } from "./Styled";
import Logo from "./Logo"
import Navbar from './Navbar'
function HeaderComp({navbars}){
    return(
        <>
        <Header>
            <Logo />
            <Navbar links={navbars} />
        </Header>
        </>
    )
}

export default HeaderComp;


// 