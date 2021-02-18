import { H2, ContactSty, Input, Button } from "./Styled";


function Contact(){
    return(
        <div className="container">
            <ContactSty>
                <H2>Have Question in mind? <br /> Let us help you</H2> 
                <form action="/">
                    <Input />
                    <Button overview onClick="this.form.submit()">Send</Button>
                </form>          
            </ContactSty>
        </div>
    )
}

export default Contact;