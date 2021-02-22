import { H2, P, Title } from "./Styled";
import symptoms from '../assest/images/symptoms.svg'

function SymptomsComp({desc}){
    return(
        <section className="symptoms">
            <div className="container">
                <div className="center">
                    <Title>{desc.title}</Title>
                    <H2>{desc.subtitle}</H2>
                    <P rows="true">{desc.description}</P>
                    <figure>
                        <img width="100%" src={symptoms} alt=""/>
                    </figure>
                </div>
            </div>
        </section>

    );
}

export default SymptomsComp;