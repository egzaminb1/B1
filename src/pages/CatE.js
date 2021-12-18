import React from "react";
import { connect } from "react-redux";
import "./catE.css"
import NavExerciseDE from "../components/NavExercise/NavExerciseDE";
import bgImg from '../assets/img/introduction.jpg'
import { DescCatE } from "../exercises/descCat/DescCatE";
import { WzorE } from "../exercises/quizCatE/WzorE";

 const CatE =(props)=>{
    return(
    <div className='catE'>
        <DescCatE/>
        <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div>
        <div className='baseScreen container-fluid' >
            <div className='dispCat'>
                <div>
                    <h4>{props.headerLeft}</h4>
                    <h4>{props.headerRight}</h4>
                </div>
            </div>
            <NavExerciseDE curCatReducer={'QuizCatE'} curCat={'catE'}/>
           
        <div className='exeE'>
        <div className='headE'>
            <h4>Instrukcja wykonania zadań</h4>
            <p>W tej części egzaminu należy przedstawić dwie wypowiedzi monologowe i odegrać rolę w dialogu z członkiem komisji. Po wylosowaniu zestawu zdający ma ok. 5 minut na przygotowanie. Egzamin rozpoczyna się od krótkiej rozmowy z komisją egzaminacyjną. Należy wykonać trzy zadania (kolejność dowolna), zgodnie z poleceniami. W trakcie wypowiedzi członkowie komisji egzaminacyjnej mogą zadawać pytania.</p>
            <h4>Zasady oceniania zadań</h4>
            <h5>Kryteria oceny:</h5>
            <div className='pointE'>
            <table>
                <thead>
                    <tr><td>Wykonanie zadań (20 p.)</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Zadanie 1 (opis fotografii)</td>
                        <td>0 – 7 p.</td>
                    </tr>
                    <tr>
                        <td>Zadanie 2 (monolog)</td>
                        <td>0 – 7 p.</td>
                    </tr>
                    <tr>
                        <td>Zadanie 3 (sytuacja komunikacyjna)</td>
                        <td>0 – 6 p.</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr><td>Poprawność językowa (20 p.)</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Gramatyka</td>
                        <td>0 – 8 p.</td>
                    </tr>
                    <tr>
                        <td>Słownictwo i styl</td>
                        <td>0 – 8 p.</td>
                    </tr>
                    <tr>
                        <td>Poprawność fonetyczna i płynność wypowiedzi</td>
                        <td>0 – 4 p.</td>
                    </tr>
                </tbody>
            </table>
            <p>RAZEM: maksymalnie 40 p.</p>
            </div>
        </div>
            <hr></hr>
            {   (props.selectExe===0)?<WzorE></WzorE>:
                <div className='exerciseE'>
                <h5>Zadanie {props.selectExe}.1.</h5>
                <p>{props.zad1}</p>
                <img alt='' src={props.img}></img>
                <h5>Zadanie {props.selectExe}.2.</h5>
                <p>{props.zad2}</p>
                <h5>Zadanie {props.selectExe}.3.</h5>
                <p>{props.zad3}</p>
            </div>
            }
        </div>
        </div>
    </div>
)}

const mapStateToProps=(state)=>{
return(
    {
    selectExe:state.QuizCatE.selectExe,
    headerLeft:state.QuizCatE.catE.catAHeader[0],
    headerRight:state.QuizCatE.catE.catAHeader[1],
    zad1:state.QuizCatE.currentQuiz.exercise[0],
    zad2:state.QuizCatE.currentQuiz.exercise[1],
    zad3:state.QuizCatE.currentQuiz.exercise[2],
    img:state.QuizCatE.currentQuiz.img
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CatE)