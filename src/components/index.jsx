import HeaderComp from './HeaderComp';
import HomeComp from './HomeComp';
import ContagionComp from './ContagionComp';
import PreventionComp from './PreventionComp';
import  SymptomsComp from './SymptomsComp';
import { Children } from 'react';

export const Header = ({navbars}) =>{
    return <HeaderComp navbars={navbars} />
}

export const Home = ({desc}) =>{
    return <HomeComp obj={desc} />
}

export const Contagion = ({conta, card}) =>{
    // console.log(card);
    return <ContagionComp conta={conta} contacard={card} />
}

export const Prevention = ({desc}) =>{
    return <PreventionComp desc={desc} />
}

export const Symptoms = ({desc}) =>{
    return <SymptomsComp desc={desc} />
}

export const Container = (props) => {
    return  (      
    <div className="container">
        <div className="row">
            {props.children}
        </div>
    </div>
    ) ;
}


