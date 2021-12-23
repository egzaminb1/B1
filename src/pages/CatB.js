import React from "react";
import { connect } from "react-redux";
import "./catB.css"
import  HeadExercise  from "../components/headExercise/HeadExercise";
import NavExercise from "../components/NavExercise/NavExercise";
import bgImg from '../assets/img/introduction.jpg'
import { DescCatB } from "../exercises/descCat/DescCatB";

 const CatB =(props)=>{
    return(
    <div>
        <DescCatB/>
        <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div>
        <div className='baseScreen container-fluid' >
                <div className='dispCat'>
                    <div>
                        <h4>{props.headerLeft}</h4>
                        <h4>{props.headerRight}</h4>
                    </div>
                </div>
                <NavExercise curCatReducer={'QuizCatB'}/>
                <HeadExercise curCatReducer={'QuizCatB'}/>
               <hr/>
                {props.componentCat}
                <hr></hr>
            </div>
    </div>
)}

const mapStateToProps=(state)=>{
return(
    {
    componentCat:state.QuizCatB.cat.subCat[state.QuizCatB.selectSubCat].component,
    selectSubCat:state.QuizCatB.selectSubCat,
    numQuestion:state.QuizCatB.numQuestion,

    headerLeft:state.QuizCatB.cat.catHeader[0],
    headerRight:state.QuizCatB.cat.catHeader[1]
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CatB)