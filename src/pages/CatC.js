import React from "react";
import { connect } from "react-redux";
import "./catC.css"
import  HeadExercise  from "../components/headExercise/HeadExercise";
import NavExercise from "../components/NavExercise/NavExercise";
import bgImg from '../assets/img/introduction.jpg'
import { DescCatC } from "../exercises/descCat/DescCatC";

 const CatC =(props)=>{
    return(
    <div>
        <DescCatC/>
        <div className='bgImg' style={{backgroundImage:`url(${bgImg}) `}}></div>
        <div className='baseScreen container-fluid' >
                <div className='dispCat'>
                    <div>
                        <h4>{props.headerLeft}</h4>
                        <h4>{props.headerRight}</h4>
                    </div>
                </div>
                <NavExercise curCatReducer={'QuizCatC'}/>
                <HeadExercise curCatReducer={'QuizCatC'}/>
               <hr/>
                {props.componentCat}
                <hr></hr>
            </div>
    </div>
)}

const mapStateToProps=(state)=>{
return(
    {
    componentCat:state.QuizCatC.cat.subCat[state.QuizCatC.selectSubCat].component,
    selectSubCat:state.QuizCatC.selectSubCat,
    numQuestion:state.QuizCatC.numQuestion,

    headerLeft:state.QuizCatC.cat.catHeader[0],
    headerRight:state.QuizCatC.cat.catHeader[1]
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(CatC)