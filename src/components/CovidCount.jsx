import axios from "axios";
import React, { useState, useEffect } from "react"
import { Countries } from "./Styled";



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
        // const countrys = data.country;
        const array =[];
        countries.forEach((e) =>{             
          const countryname = data.find(name => name.name == e);
          array.push(countryname.file_url);  
                   
        });
        // const country = data.find(name => name.name == city);  
        setResp(array);
        // setCites(country)
        // // setRes(country.cases);
        
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
            // const citycountry = data.find(citycountry => citycountry.country = {city});
            // console.log(citycountry)         
          })
          .catch(function (error) {
            console.log("sorun var => ", error)
          })
      }, []);
// console.log(flag)
// console.log(countryName)
      res.forEach((e, i) =>{
        resultHtml.push(
          <Countries key={i}>
            <div className="left">
            <img src={resp[i]} className="flags" alt=""/>
            <p>{countries[i]}</p>
          </div>
          <div className="right">
            <span>{e.cases}</span>
          </div>
        </Countries>
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