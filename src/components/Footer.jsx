import Contact from './Contact';
import FooterNav from './FooterNav'

function Footer({links}){
    return(
        <>
        <footer>
            <Contact />
            <FooterNav link={links} />
        </footer>
        </>
    );
}

export default Footer;