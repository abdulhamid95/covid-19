import { Title, H1, H2, P, Image, OverviewBlog, Button } from "./Styled";
import { Container } from "./index";
import  img1 from '../assest/images/img1.svg';
import  img2 from '../assest/images/img2.svg';

function HomeComp({obj}){
    return(
        <>
        <section className="overview">
            <Container>
                <div className="col-12 col-lg-6">
                    <OverviewBlog>
                        <Title>{obj.title}</Title>
                        <H1>{obj.subtitle}</H1>
                        <P>{obj.description}</P>
                        <Button overview>Let Us Help</Button>
                    </OverviewBlog>
                </div>
                <div className="col-12 col-lg-6">
                    <Image src={img1} overview alt="covid19-overview-image" />
                </div>
            </Container>
        </section>
        <section className="about">
            <Container>

                <div className="col-12 col-lg-6 order-lg-6">
                    <OverviewBlog m0>
                        <Title small>{obj.title2}</Title>
                        <H2>{obj.subtitle2}</H2>
                        <P small>{obj.description2}</P>
                        <Button light>Learn More</Button>
                    </OverviewBlog>
                </div>
                <div className="col-12 col-lg-6 oder-lg-1">
                    <Image src={img2} about alt="covid19-overview-image" />
                </div>
            </Container>
        </section>
        </>
    );
}

export default HomeComp;