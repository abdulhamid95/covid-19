import { Container } from "./index";
import { H3, ExchangeCard, CardTitle, Countries } from "./Styled";
import MapImg from '../assest/images/MapImg.svg';
import axios from "axios";
import React, { useState, useEffect } from "react"
import USA from '../assest/images/USA.svg';
import Italy from '../assest/images/Italy.svg';
import China from '../assest/images/China.svg';
import Spain from '../assest/images/Spain.svg';
import Germany from '../assest/images/Germany.svg';
import Iran from '../assest/images/Iran.svg';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Map(){

    const [res, setRes] = useState([]);

    // var res = [];

    const resultHtml = [];

    //const countries = [USA, Italy, China, Spain, Germany, Iran];

    const countries = [{
      country : USA,
      name: "USA"
    },
    {
      country : Italy,
      name: "Italy"
    },
    {
      country : China,
      name: "China"
    },
    {
      country : Spain,
      name: "Spain"
    },
    {
      country : Germany,
      name: "Germany"
    },
    {
      country : Iran,
      name: "Iran"
    }

  ]


    // const MonyEx = [res.USD, res.EUR, res.CNY, ]

    useEffect(() => {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
          .then(function ({data}) {
            // const countrys = data.country;
            const arr =[];
            countries.forEach(({name},i) =>{
              
            const country = data.find(country => country.country == countries[i].name);
            arr.push(country.cases)
              
          })
          setRes(arr)
            // setRes(country.cases);
          })
          .catch(function (error) {
            console.log("sorun var => ", error)
          })
      }, [])

      var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = 'Today: ' + dd + '/' + mm + '/' + yyyy;
      
        console.log(today)
      // fetch("https://coronavirus-19-api.herokuapp.com/countries")
      // .then(response => response.json())
      // .then(data => {
      //   var arr = [];
      //   countries.forEach(({name},i) =>{
      //     const country = data.find(country => country.country == countries[i].name);
      //     arr.push(parseInt(country.cases))
      //     // console.log(country.cases)
      //     // setRes(country.cases)
      //   });
      //   setRes(arr)


      // //   // for(var i =0 ; i<countries.length; i++){
      // //   //   const country = data.find(country => country.country == "USA");
      // //   //   // res.push(country.cases)
          
      // //   //   res.push(country)
      // //   // }
      // //     // console.log(country.todayCases);
      // })

      console.log(res)

      countries.forEach(({country, name}, i) =>{
        resultHtml.push(
          <Countries key={i}>
            <div className="left">
            <img src={countries[i].country} alt=""/>
            <p>{countries[i].name}</p>
          </div>
          <div className="right">
            <span>{res[i]}</span>
          </div>
        </Countries>
        )
      })


    return(
        <Container>
            <div className="col-12 col-lg-8">
                <figure>
                    <img width="100%" src={MapImg} alt=""/>
                </figure>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className="col-12 col-lg-4">
                <ExchangeCard>
                    <H3>Live Raports</H3>
                    <CardTitle>{today}</CardTitle>
                    
{resultHtml}
                    
                </ExchangeCard>
                
            </div>
        </Container>
    );
}
export default Map;