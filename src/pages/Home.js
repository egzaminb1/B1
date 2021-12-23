import React from "react";
import { connect } from "react-redux";
import  Navbar  from "../components/Navbar";
import Statistic from "../components/statistic/Statistic";
import './home.css'

import grammar from '../assets/img/grammar.jpg'
import listening from '../assets/img/listening.jpg'
import reading from '../assets/img/reading.jpg'
import speaking from '../assets/img/speaking.jpg'
import writing from '../assets/img/writing.jpg'
import introduction from '../assets/img/introduction.jpg'
import { NavLink } from "react-router-dom";
import { clearStateA, clearStateB, clearStateC, clearStatistic } from "../store/actions/actionCreaters";

 const Home =(props)=>{
   
 return(
    <div className='home container-fluid'>
        
        <div className='row introdaction text-center image' style={{backgroundImage:`url(${introduction}) `}}>
        <Navbar></Navbar>
        {/* <div className='intMaska'></div> */}
                <div className=' intContainer'>
                    {/* <h2>Egzamin B1</h2> */}
                    <h3> Przykładowe testy z języka polskiego certyfikatowe dla poziomu B1</h3>
                    <p>Tu znajdziecie wszystkie typy zadań obowiązujące w testach certyfikatowych. Treść i forma ćwiczeń zostały podporządkowane wykazowi funkcji i pojęć językowych, wykazowi tematycznemu i zagadnieniom gramatycznym, które zawarte są w standardach wymagań egzaminacyjnych dla poziomu B1.</p>
                    <p></p>
                </div>
               
        </div>
        <hr></hr>
        <div className='row cat catA'>
            <NavLink to="/CatA" className="nav-link col-md-6 left" onClick={props.clearStateA}>
            <div className='image' style={{backgroundImage:`url(${listening})`}}>
                <h2>Rozumienie ze słuchu</h2>
                {/* <img src={reading}></img> */}
                <div className='imgDown'>
                    <h2>.<span>A</span></h2>
                </div>
            </div>
            </NavLink>
            <div className='col-md-6 right'>
                <p>
                Część A zawiera wszystkie typy zadań, które mogą pojawić się w teście egzaminacyjnym (luki do uzupełnienia, prawda/fałsz, wybór wielokrotny, dobieranie informacji, zadania z wykorzystaniem materiałów graficznych). Teksty do ćwiczeń na rozumienie ze słuchu zostały nagrane.
                </p>
                <NavLink to="/CatA" className="nav-link" onClick={props.clearStateB}><button className='myBtn'>Rozpocznij</button></NavLink>
            </div>
        </div>
        <hr></hr>
        <div className='row cat catB'>
        <NavLink to="/CatB" className="nav-link col-md-6 left" onClick={props.clearStateB}>
            <div className='image' style={{backgroundImage:`url(${grammar})`}}>
                <h2>Poprawność gramatyczna</h2>
                <div className='imgDown'>
                    <h2>.<span>B</span></h2>
                </div>
            </div>
        </NavLink>
            <div className='col-md-6 right'>
                <p>
                Ćwiczenia sprawdzające umiejętności gramatyczne zostały zamieszczone w części B. Znajdująsię tu zadania, w których trzeba wybrać poprawną formę (wybór wielokrotny, wybór z ramki) lub ją stworzyć (zadaniaz lukami, transformacje).
                </p>
                <NavLink to="/CatB" className="nav-link" onClick={props.clearStateB}><button className='myBtn'>Rozpocznij</button></NavLink>
            </div>
        </div>
        <hr></hr>
        <div className='row cat catC'>
        <NavLink to="/CatC" className="nav-link col-md-6 left"   onClick={props.clearStateC}>
        <div className='image' style={{backgroundImage:`url(${reading})`}}>
            <h2>Rozumienie tekstów pisanych</h2>
            <div className='imgDown'>
                    <h2>.<span>C</span></h2>
                </div>
            </div>
        </NavLink>
            <div className='col-md-6 right'>
            <p>Część C zawiera wszystkie typy zadań testujących kompetencję w zakresie rozumienia tekstów pisanych, które mogą pojawić się podczas egzaminu (prawda/fałsz, wybór wielokrotny, dobieranie informacji, zadania z lukami). Wybrane ćwiczenia to wzorcowe formy pisemne, które są wymagane na poziomie Bl (list nieoficjalny formalny, recenzja, podanie). Tym samym, sprawdzając swoje umiejętności w zakresie rozumienia tekstu pisanego, można przypomnieć sobie reguły obowiązujące przytworzeniu niektórych form pisemnych.</p>
            <NavLink to="/CatC" className="nav-link" onClick={props.clearStateC}><button className='myBtn'>Rozpocznij</button></NavLink>
            </div>
        </div>
        <hr></hr>
        <div className='row cat catD'>
        <NavLink to="/CatD" className="nav-link col-md-6 left" onClick={props.clearStatistic}>
        <div className='image' style={{backgroundImage:`url(${writing})`}}>
                <h2>Pisanie</h2>
                <div className='imgDown'>
                    <h2>.<span>D</span></h2>
                </div>
            </div>
        </NavLink>
            <div className='col-md-6 right'>
            <p>Część D zawiera dwie wzorcowe formy pisemne (list oficjalny i list nieoficjalny) oraz propozycje tematów prac pisemnych w formie przykładowych zestawów egzaminacyjnych.</p>
            <NavLink to="/CatD" className="nav-link" onClick={props.clearStatistic}><button className='myBtn'>Rozpocznij</button></NavLink>
            </div>
        </div>
        <hr></hr>
        <div className='row cat catE'>
        <NavLink to="/CatE" className="nav-link col-md-6 left" onClick={props.clearStatistic}>
        <div className='image' style={{backgroundImage:`url(${speaking})`}}>
            <h2>Mówienie</h2>
            <div className='imgDown'>
                    <h2>.<span>E</span></h2>
                </div>
            </div>
        </NavLink>
            <div className='col-md-6 right'>
            <p>Część E zawiera wzory wypowiedzi na wskazane tematy, w których wytłuszczono zdania i wyrażenia pomocne przy tworzeniu samodzielnych wypowiedzi. Znaleźć tu można schemat opisu ilustracji, monolog, sytuację komunikacyjną oraz zestawy przykładowych pytań egzaminacyjnych.</p>
            <NavLink to="/CatE" className="nav-link" onClick={props.clearStatistic}><button className='myBtn'>Rozpocznij</button></NavLink>
            </div>
        </div>
        <hr></hr>
        <div className='Statistic'>
        {
            (props.arrStatistic.length===0)?null:<Statistic></Statistic> 
        }
        </div>
    </div>
)}

const mapStateToProps=(state)=>{
    //console.log(state)
return(
    {
        arrStatistic:state.Statistic.arrStatistic
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        clearStateA:()=>dispatch(clearStateA()),
        clearStateB:()=>dispatch(clearStateB()),
        clearStateC:()=>dispatch(clearStateC()),
        clearStatistic:()=>dispatch(clearStatistic())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Home)