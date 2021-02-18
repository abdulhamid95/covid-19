import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Header, Home, Contagion, Prevention, Symptoms } from './components/index';
import axios from "axios"
import Footer from './components/Footer'

function App() {

  const [navbar, setNavbar] = useState([])
  const [homeDesc, setHomeDesc] = useState([])

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json')
      .then(function ({data}) {
        setNavbar(data[0].headerLinks)
        setHomeDesc(data[0].indexPage)
        // console.log("sorun yok => ", data)
      })
      .catch(function (error) {
        console.log("sorun var => ", error)
      })
  }, [])



  return (
    <>
    <Router>
      <Header navbars={navbar} />
      <main>
        <Switch>
            <Route path="/Contagion">
              <Contagion  />
            </Route>
            <Route path="/Prevention" component={Prevention} />
            <Route path="/Symptoms" component={Symptoms} />
            <Route path="/">
              <Home desc={homeDesc} />
            </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
