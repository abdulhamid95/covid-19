import axios from "axios";
import React, { useState, useEffect } from "react"
import { Countries, Overlay, Title, H3 } from "./Styled";
import { Container } from "./index";


function CovidCount({flag, countryName, count}){
    const [res, setRes] = useState([]);
    const [resp, setResp] = useState([]);
    const[cites, setCites] =useState([]);
    // var res = [];

    const resultHtml = [];

    const countries = ["USA", "Italy", "China", "Spain", "Germany", "Iran"];


  useEffect(() => {
    axios.get('https://abdulhamid95.github.io/flags_json/db.json')
      .then(function ({data}) {
        const array =[];
        countries.forEach((e) =>{             
          const countryname = data.find(name => name.name == e);
          array.push(countryname.file_url);        
        }); 
        setResp(array);       
      })
      .catch(function (error) {
        console.log("sorun var => ", error)
      })
  }, []);

    useEffect(() => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
          .then(function ({data}) {
            const arr =[];
            countries.forEach((e) =>{             
              const country = data.find(country => country.country == e);
              arr.push(country);              
            });
            setRes(arr);     
          })
          .catch(function (error) {
            console.log("sorun var => ", error)
          })
      }, []);

      res.forEach((e, i) =>{
        resultHtml.push(
          <>
            <Countries href={'/Prevention#' + countries[i]} key={i}>
              <div className="left">
              <img src={resp[i]} className="flags" alt=""/>
              <p>{countries[i]}</p>
            </div>
            <div className="right">
              <span>{e.cases}</span>
            </div>
          </Countries>
          <Overlay id={countries[i]}>
            <figure>
              <img src={resp[i]} className="" />
            </figure>
            <H3 className="title">This is Covid-19 cases report of {countries[i]}</H3>
            <Container>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Cases: </span>
                <Title>{e.cases}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Today Cases: </span>
                <Title>{e.todayCases}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Deaths: </span>
                <Title>{e.deaths}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Recovered: </span>
                <Title small>{e.recovered}</Title>
              </div>
              </Container>
              <Container>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Active: </span>
                <Title>{e.active}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Critical: </span>
                <Title>{e.critical}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Cases Per One Million: </span>
                <Title>{e.casesPerOneMillion}</Title>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <span className="cases">Deaths Per One Million: </span>
                <Title>{e.deathsPerOneMillion}</Title>
              </div>
              <div className="col-12 col-md-6">
                <span className="cases">Total Tests: </span>
                <Title>{e.totalTests}</Title>
              </div>
              <div className="col-12 col-md-6">
                <span className="cases">Tests Per One Million: </span>
                <Title>{e.testsPerOneMillion}</Title>
              </div>
            </Container>
            <a href="#page" className="close">X</a>
          </Overlay>
        </>
        )
      })

      if(countryName == null){
        return(
          <>
          {resultHtml}
          </>
          )
      } else {
        return(
          <>
          {resultHtml}
          <Countries>
            <div className="left">
            <img src={flag} className="flags" alt=""/>
            <p>{countryName}</p>
          </div>
          <div className="right">
            <span>{count}</span>
          </div>
        </Countries>
          </>
        )
      }

}

export default CovidCount;