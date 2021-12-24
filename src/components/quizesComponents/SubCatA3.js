import React from "react";
import { connect } from "react-redux";
import { inpAnsw } from "../../store/actions/actionCreaters";
import AudioPlayer from '../audio/player/AudioPlayer'
import  Points  from "../points/Points";
import "./subCatA3.css";

 const SubCatA3 =(props)=>{
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
            if(i===0 && num===0){
                arr=(<div key={i}>{item}
                <input  className='inp' type='text' size='8' value={props.quiz.arrAnswer[arrCount[num][i]].answ} readOnly={true} ></input>
                </div>)
            }else{
                let val=(props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='bGreen')?props.quiz.arrAnswer[arrCount[num][i]].answ:props.quiz.arrAnswer[arrCount[num][i]].inpWord

                let hint=(props.hintMode && props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='red')?props.quiz.arrAnswer[arrCount[num][i]].answ:''
                let rO=(props.isChecked)?true:false

                arr=(<div key={i}>{item}<p>
                    <i className='hint'>{hint}</i>
                    <input  className={props.quiz.arrAnswer[arrCount[num][i]].cls} type='text' placeholder='.................' size='11' readOnly={rO} value={val} onChange={(e)=>(props.inpAnsw(e.target.value, arrCount[num][i]))}></input>
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
    <div className='subCatA3'>
        
        <div className='headSubCat'>
            <h5>{props.header1}</h5>
            <h5>{props.header2}</h5>
        </div>
        <AudioPlayer tracks={props.trackA1} iterate={props.iterate} ></AudioPlayer>
        <div className='questions'>
        {(props.isChecked)?<div className='mask'></div>:null}
            <div  >
                <Points quantity={props.quantity}
                        timerOfComponent={props.timerOfComponent}
                        isChecked={props.isChecked}
                        curRightPoints={props.curRightPoints}
                        points={props.points}
                        curCatReducer={'QuizCatA'}
                ></Points>
                <hr></hr>
            </div>
            {questionsDiv(props.quiz.text)}
        </div>
    </div>
)
}

const mapStateToProps=(state)=>{
return(
    {
    iterate:state.QuizCatA.currentQuiz.template.iterate,
    trackA1:state.QuizCatA.currentQuiz.tracks,
    header1:state.QuizCatA.currentQuiz.header[0],
    header2:state.QuizCatA.currentQuiz.header[1],
    quiz:state.QuizCatA.currentQuiz,
    isChecked:state.QuizCatA.isChecked,
    hintMode:state.QuizCatA.hintMode,

    quantity:state.QuizCatA.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatA.timerOfComponent,
    curRightPoints:state.QuizCatA.curRightPoints,
    points:state.QuizCatA.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        //boldClass:(divid,i)=>dispatch(boldClass(divid,i))
    inpAnsw:(value, countInput)=>dispatch(inpAnsw(value, countInput))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatA3)