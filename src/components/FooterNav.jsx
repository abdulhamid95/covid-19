import Logo from './Logo';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLinks, Flex, Social, FooterP } from './Styled'
import { faFacebook, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSpinn } from "@fortawesome/free-brands-svg-icons";

function FooterNav({link}){
    
    const arr = [];

    link.forEach((e,i) =>{
        arr.push(<NavLinks to={e} key={i}>{e}</NavLinks>)
    });

    return(
        <>
        <div className="container">
            <Flex>
            <Logo />
                <nav className="nav">
                    {arr}
                </nav>
                <Social>
                    <a href="https://www.facebook.com/abdulhameed.hamsho.3/"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://studio.youtube.com/channel/UC0vMqyCJK8IililRgUdoMwQ/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://github.com/abdulhamid95"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://twitter.com/abdulhamidh1"><FontAwesomeIcon icon={faTwitter} /></a>
                </Social>
            </Flex>
            <FooterP>2021 @ All rights reserved by Abdulhamid HAMSHO</FooterP>
        </div>
            
        </>
    );
}

export default FooterNav;