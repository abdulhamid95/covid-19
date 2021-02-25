import { NavLinks, Button, MobilMenu, NavItem, NavItems } from "./Styled";
import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assest/images/x.svg";
import { ReactComponent as MenuIcon } from "../assest/images/menu.svg";

function Navbar({links}){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const resultHtml = [];

    links.forEach((e,i) => {
        resultHtml.push(
            <NavItem onClick={closeMobileMenu} key={i}>
                <NavLinks exact activeClassName="selected" to={e}>{e}</NavLinks>
            </NavItem>
         )
    });
    
    return (
        <>
        <nav>
            <NavItems className={click ? "aktive" : ""}>
                {resultHtml}
                <Button href="#footer">Contact us</Button>
            </NavItems>
            <MobilMenu onClick={handleClick}>
                {click ? (
                <CloseMenu className="menu-icon" />
                ) : (
                <MenuIcon className="menu-icon" />
                )}
            </MobilMenu>
        </nav>
        </>
    )
}

export default Navbar;