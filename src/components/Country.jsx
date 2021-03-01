import { Overlay, Title, H3 } from "./Styled";
import { Container } from "./index";

function Country({id, src, e}){
    return(
        <Overlay id={id}>
        <figure>
          <img src={src} className="" />
        </figure>
        <H3 className="title">This is Covid-19 cases report of {id}</H3>
        <Container>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Cases: </span>
            <Title>{e.cases}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Today Cases: </span>
            <Title>{e.todayCases}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Deaths: </span>
            <Title>{e.deaths}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Recovered: </span>
            <Title small>{e.recovered}</Title>
          </div>
          </Container>
          <Container>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Active: </span>
            <Title>{e.active}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Critical: </span>
            <Title>{e.critical}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Cases Per One Million: </span>
            <Title>{e.casesPerOneMillion}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <span className="cases">Deaths Per One Million: </span>
            <Title>{e.deathsPerOneMillion}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-6">
            <span className="cases">Total Tests: </span>
            <Title>{e.totalTests}</Title>
          </div>
          <div className="col-6 col-md-4 col-lg-6">
            <span className="cases">Tests Per One Million: </span>
            <Title>{e.testsPerOneMillion}</Title>
          </div>
        </Container>
        <a href="#page" className="close">X</a>
      </Overlay>
    )
}

export default Country;