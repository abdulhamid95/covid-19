import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Header, Home, Contagion, Prevention, Symptoms } from './components/index';
import axios from "axios"
import Footer from './components/Footer'
import { HeaderFixed } from "./components/Styled";
function App() {

  const [navbar, setNavbar] = useState([])
  const [homeDesc, setHomeDesc] = useState([])
  const [contagion, setContagion] = useState([])
  const [contagionCard, setContagionCard] = useState([])
  const [symptoms, setSymptoms] = useState([]);
  const [prevetion, setPrevetion] = useState([]);


  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json')
      .then(function ({data}) {
        setNavbar(data[0].headerLinks);
        setHomeDesc(data[0].indexPage);
        setContagion(data[0].contagionPage);
        setContagionCard(data[0].contagionPage.cards);
        setSymptoms(data[0].symptompsPage);
        setPrevetion(data[0].preventionPage);
        //setSymptoms(data[0])

        // console.log("sorun yok => ", data)

        //console.log(contagion.cards[0].title)
      })
      .catch(function (error) {
        console.log("sorun var => ", error)
      })
  }, [])

  //console.log(contagionCard);


  return (
    <>
    <Router>
      <HeaderFixed>
        <Header navbars={navbar} />
      </HeaderFixed>
      
      <main>
        <Switch>
            <Route path="/Contagion">
              <Contagion conta={contagion} card={contagionCard} />
            </Route>
            
            <Route path="/Symptoms">
            <Symptoms desc={symptoms} />
            </Route>
            <Route path="/Prevention">
              <Prevention desc={prevetion} />
            </Route>
            <Route path="/">
              <Home desc={homeDesc} />
            </Route>
        </Switch>
      </main>
      <Footer links={navbar} />
    </Router>
    </>
  );
}

export default App;
