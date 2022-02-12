import React from "react";
import { connect } from "react-redux";
import "./catD.css"
import NavExerciseDE from "../components/NavExercise/NavExerciseDE";
import bgImg from '../assets/img/introduction.jpg'
import { DescCatD } from "../exercises/descCat/DescCatD";
import { WzorD } from "../exercises/quizCatD/WzorD";
import { ExerciseD } from "./ExerciseD";

 const CatD =(props)=>{
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [props]);
    return(
    <div className='catD'>
        <DescCatD/>
        <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div>
        <div className='baseScreen container-fluid' >
            <div className='dispCat'>
                <div>
                    <h4>{props.headerLeft}</h4>
                    <h4>{props.headerRight}</h4>
                </div>
            </div>
            <NavExerciseDE curCatReducer={'QuizCatD'} curCat={'catD'}/>
           
        <div className='exeD'>
        <div className='headD'>
            <h4>Instrukcja wykonania zadań</h4>
            <p>W tej części egzaminu znajdują się trzy zestawy. W każdym zestawie są dwa zadania: a i b. Należy wybrać tylko jeden zestaw i wykonać obydwa zadania (a i b) z danego zestawu, zgodnie z poleceniami, np.:</p>
            <ul>
                <li>zestaw I – zadania <i>a</i> i <i>b</i> z zestawu I , lub</li>
                <li>zestaw II – zadania <i>a</i> i <i>b</i> z zestawu II , lub</li>
                <li>zestaw III – zadania <i>a</i> i <i>b</i> z zestawu III</li>
            </ul>
            <h5>Kryteria oceny:</h5>
            <div className='pointD'>
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <td>wykonanie zadania</td>
                        <td>0 – 10 p.</td>
                    </tr>
                    <tr>
                        <td>środki językowe</td>
                        <td>0 – 10 p.</td>
                    </tr>
                    <tr>
                        <td>poprawność językowa</td>
                        <td>0 – 10 p.</td>
                    </tr>
                </tbody>
            </table>
            <p>RAZEM: maksymalnie 30 p.</p>
            </div>
        </div>
        
            <hr></hr>
            {(props.selectExe===0)?<WzorD></WzorD>:
            <ExerciseD currentQuiz={props.currentQuiz} selectExe={props.selectExe} arrQuizes={props.arrQuizes}></ExerciseD>
            }
        </div>
        </div>
    </div> 
)}

const mapStateToProps=(state)=>{
return(
    {
    selectExe:state.QuizCatD.selectExe,
    headerLeft:state.QuizCatD.catD.catHeader[0],
    headerRight:state.QuizCatD.catD.catHeader[1],
    arrQuizes:state.QuizCatD.catD.quizes.length,
    currentQuiz:state.QuizCatD.currentQuiz
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CatD)