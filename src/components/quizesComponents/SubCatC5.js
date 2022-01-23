import React from "react";
import { connect } from "react-redux";
import {inpAnswC3} from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC5.css";

 const SubCatC5 =(props)=>{
    let count=0
    let arrCount=[]

    const par=(par, num)=>{
        let arrInp=[]
        let str=''
        let arrAsist=[]
        let arrText=par.split(' ')

        arrText.map((item,i)=>{
            if(item==='....'){
               arrAsist.push(count)
                arrInp.push(str)
                str=' '
                count++
            }else{
                str=str+item+' '
            }
            return i
        })
        arrCount.push(arrAsist)

        let arrP=arrInp.map((item, i)=>{
            let arr
            let sizeInp=props.quiz.arrAnswer[arrCount[num][i]].answ.length
            // if(i===0 && num===0){
            if(arrCount[num][i]===0){
                arr=(<div key={i}>{item}
                <input  className='inp' type='text' size={sizeInp} value={props.quiz.arrAnswer[arrCount[num][i]].answ} readOnly={true} ></input>
                </div>)
            }else{
                let val=(props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='bGreen')?props.quiz.arrAnswer[arrCount[num][i]].answ:props.quiz.arrAnswer[arrCount[num][i]].inpWord

                let hint=(props.hintMode && props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='red')?props.quiz.arrAnswer[arrCount[num][i]].answ:''
                let rO=(props.isChecked)?true:false

                arr=(<div key={i}>{item}<p>
                    <i className='hint'>{hint}</i>
                    <input  className={props.quiz.arrAnswer[arrCount[num][i]].cls} type='text' placeholder='.................' size={(val.length<sizeInp)?sizeInp:val.length} readOnly={rO} value={val} onChange={(e)=>(props.inpAnsw(e.target.value, arrCount[num][i]))}></input>
                </p>
                </div>)
            }
            return arr
        })
        arrP.push(<span key={'q'}>{str}</span>)
        return arrP
    }

   const questionsDiv=(text)=>{
    let arrDiv=text.map((item, i)=>{
       let arr= <div key={i} className={'paragraf'}>{par(item, i)}</div>
        return arr
    })
        return arrDiv
    }

    return(
    <div className='subCatC5'>
        
        <div className='headSubCat'>
            <h5>{props.header1}</h5>
            <h5>{props.header2}</h5>
        </div>
        <div className='questions'>
        {(props.isChecked)?<div className='mask'></div>:null}
            <div  >
                <Points quantity={props.quantity}
                        timerOfComponent={props.timerOfComponent}
                        isChecked={props.isChecked}
                        curRightPoints={props.curRightPoints}
                        points={props.points}
                        curCatReducer={'QuizCatC'}
                ></Points>
                <hr></hr>
            </div>
            <div className="variants">
                <p><b>{props.variants[0]}</b> <span>{props.variants[1]}</span></p>
            </div>
            {questionsDiv(props.quiz.text)}
        </div>
    </div>
)
}

const mapStateToProps=(state)=>{
return(
    {
    header1:state.QuizCatC.currentQuiz.header[0],
    header2:state.QuizCatC.currentQuiz.header[1],
    quiz:state.QuizCatC.currentQuiz,
    isChecked:state.QuizCatC.isChecked,
    hintMode:state.QuizCatC.hintMode,

    quantity:state.QuizCatC.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatC.timerOfComponent,
    curRightPoints:state.QuizCatC.curRightPoints,
    points:state.QuizCatC.currentQuiz.template.point,
    variants:state.QuizCatC.currentQuiz.variants
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
    inpAnsw:(value, countInput)=>dispatch(inpAnswC3(value, countInput))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC5)