import { Container } from "./index";
import { H3, ExchangeCard, CardTitle, Search } from "./Styled";
import MapImg from '../assest/images/MapImg.svg';
import CovidCount from './CovidCount'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from "react"
import axios from "axios";


function capitaliz(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


function Map(){

    const [res, setRes] = useState([])
    const [city, setCity] =useState([]);

      var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = 'Today: ' + dd + '/' + mm + '/' + yyyy;

        useEffect(() => {
          axios.get('https://abdulhamid95.github.io/flags_json/db.json')
            .then(function ({data}) {
               const arr =[];
              data.forEach(({name, file_url}, i)=> {
                arr.push({name, file_url})
              })
              setCity(arr);   
            })
            .catch(function (error) {
              console.log("sorun var => ", error)
            })
        }, []);

      const cta = () => {
        const input = document.getElementById("country");
          let country = city.find(city => city.name.toLowerCase() == input.value.toLowerCase()); 
          console.log(country?.file_url)
          input.value = '';
      }
       

    return(
        <Container>
            <div className="col-12 col-lg-8">
                <figure>
                    <img className="map_image" width="100%" src={MapImg} alt=""/>
                </figure>
                <Search>
                  <div className="search">
                      <a className="searchico" onClick={cta}>
                        <FontAwesomeIcon icon={faSearch} />
                      </a>
                      <input type="text" id="country" className="country"/>
                  </div>
                </Search>
            </div>
            <div className="col-12 col-lg-4">
                <ExchangeCard>
                    <H3>Live Raports</H3>
                    <CardTitle>{today}</CardTitle>
                    <CovidCount />
                </ExchangeCard>               
            </div>
        </Container>
    );
}
export default Map;