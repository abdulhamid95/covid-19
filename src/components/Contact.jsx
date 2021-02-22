import { H2, ContactSty, Input, Form, SendButton } from "./Styled";


function Contact(){
    return(
        <div className="container">
            <ContactSty>
                <H2>Have Question in mind? <br /> Let us help you</H2> 
                <Form>
                    <Input placeholder="snmonydemo@gmail.com" />
                    <SendButton>Send</SendButton>
                </Form>          
            </ContactSty>
        </div>
    )
}

export default Contact;