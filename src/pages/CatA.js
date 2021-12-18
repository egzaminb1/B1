import React from "react";
import { connect } from "react-redux";
import "./catA.css"
import  HeadExercise  from "../components/headExercise/HeadExercise";
import NavExercise from "../components/NavExercise/NavExercise";
// import NavExercise from "../NavExercise/NavExercise";
import bgImg from '../assets/img/introduction.jpg'
// import bgImg from '../../assets/img/introduction.jpg'
import { DescCatA } from "../exercises/descCat/DescCatA";

 const CatA =(props)=>{
    return(
    <div>
        <DescCatA/>
        <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div>
        <div className='baseScreen container-fluid' >
                    {/*----- top header = dispCat*/}
                {/* <div className='dispCat' dangerouslySetInnerHTML={{__html:DescCatHeader[state.inputCat]}} /> */}
                <div className='dispCat'>
                    <div>
                        <h4>{props.headerLeft}</h4>
                        <h4>{props.headerRight}</h4>
                    </div>
                </div>
                <NavExercise curCatReducer={'QuizCatA'}/>
                <HeadExercise/>
               <hr/>
                {props.componentCat}
                <hr></hr>
            </div>
    </div>
)}

const mapStateToProps=(state)=>{
return(
    {
    componentCat:state.QuizCatA.catA.subCatA[state.QuizCatA.selectSubCat].component,
    selectSubCat:state.QuizCatA.selectSubCat,
    numQuestion:state.QuizCatA.numQuestion,

    headerLeft:state.QuizCatA.catA.catAHeader[0],
    headerRight:state.QuizCatA.catA.catAHeader[1]
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CatA)