import { H2, P, Title, Card, CardTitle, CardParagraph } from "./Styled";
import { Container } from "./index";
import React, { useState, useEffect } from "react"
import axios from "axios"
import card1 from '../assest/images/card1.svg';
import card2 from '../assest/images/card2.svg';
import card3 from '../assest/images/card3.svg';

function ContagionComp({conta, contacard}){
    //console.log(conta.cards[1].title)
  const [contagion, setContagion] = useState([]);
  const [card, setCards] = useState([]);

  const images = [card1,card2,card3];

  // const cards = conta.cards;

  // useEffect(() => {
  //   axios.get('https://raw.githubusercontent.com/omergulcicek/bootcamp/master/React/data.json')
  //     .then(function ({data}) {
  //       // setNavbar(data[0].headerLinks)
  //       // setHomeDesc(data[0].indexPage)
  //       setContagion(data[0].contagionPage)
  //       setCards(data[0].contagionPage.cards)
  //       // console.log("sorun yok => ", data)

  //       console.log(contagion.cards[2])
  //     })
  //     .catch(function (error) {
  //       console.log("sorun var => ", error)
  //     })
  // }, [])

  const resultHtml = [];

  contacard.forEach((e,i) => {
  resultHtml.push(
    <div className="col-12 col-md-6 col-lg-4" key={i}>
      <Card>
        <figure>
          <img width="100%" src={images[i]} alt=""/>
        </figure>
        <CardTitle>{e.title}</CardTitle>
        <CardParagraph>{e.description}</CardParagraph>
      </Card>
  </div>
  )
});

// console.log(contacard)


    return(
      <section className="contagion">
        <Container>
            <div className="center">
              <Title>{conta.title}</Title>
              <H2>{conta.subtitle}</H2>
              <P rows="true">{conta.description}</P>
              <div className="row">
              {resultHtml}
              </div>
            </div>
        </Container>
        </section>
    );
}

export default ContagionComp;