import axios from "axios";
import React, { useState, useEffect } from "react"
import { Countries, Overlay, Title, H3 } from "./Styled";
import { Container } from "./index";
import Country from "./Country";

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
         <Country e={e} src={resp[i]} id={countries[i]} />
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
          <Countries href={'/Prevention#' + countryName}>
            <div className="left">
            <img src={flag} className="flags" alt=""/>
            <p>{countryName}</p>
          </div>
          <div className="right">
            <span>{count.cases}</span>
          </div>
        </Countries>
        <Country e={count} src={flag} id={countryName} />
          </>
        )
      }

}

export default CovidCount;