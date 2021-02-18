import { NavLinks, Button, MobilMenu, NavItem, NavItems } from "./Styled";
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assest/images/x.svg";
import { ReactComponent as MenuIcon } from "../assest/images/menu.svg";

function Navbar({links}){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const resultHtml = [];

    links.forEach(e => {
        resultHtml.push(
            <NavItem onClick={closeMobileMenu}>
                <NavLinks exact to={e}>{e}</NavLinks>
            </NavItem>
         )
    });
    
    return (
        <>
        <div>
            <NavItems className={click ? "aktive" : ""}>
                {resultHtml}
                <Button>Contact us</Button>
            </NavItems>
            <MobilMenu onClick={handleClick}>
                {click ? (
                <CloseMenu className="menu-icon" />
                ) : (
                <MenuIcon className="menu-icon" />
                )}
            </MobilMenu>
        </div>
        </>
    )
}

export default Navbar;