import { H2, CardTitle, P, Title, CardLi } from "./Styled";
import { Container } from "./index";
import prevetion1 from '../assest/images/prevetion1.svg';
import prevetion2 from '../assest/images/prevetion2.svg';
import prevetion3 from '../assest/images/prevetion3.svg';
import prevetion4 from '../assest/images/prevetion4.svg';

const PrevImg = [prevetion1, prevetion2, prevetion3, prevetion4]

function PreventionComp({desc}){

    const arr = [];
//console.log(desc)
    desc.forEach((e,i)=>{
        arr.push(
        <CardLi key={e.id}>
            
                <div className="col-12 col-md-6">
                <CardTitle>{e.title}</CardTitle>
                <P>{e.description}</P>
                </div>
                <div className="col-12 col-md-6">
                    <figure>
                        <img width="100%" src={PrevImg[i]} alt=""/>
                    </figure>
                </div>
            
        </CardLi>

        )
    });

    return(
        <section className="prevetion">
            <div className="container">
                <div className="center">
                <Title>Covid-19</Title>
                <H2>What Should We Do</H2>
                <P rows="true">Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</P>
                </div>
                <div className="row">
{arr}
</div>
            </div>
            
        </section>
    );
}

export default PreventionComp;