import Contact from './Contact';
import FooterNav from './FooterNav'

function Footer({links}){
    return(
        <>
        <footer id="footer">
            <Contact />
            <FooterNav link={links} />
        </footer>
        </>
    );
}

export default Footer;