import React from "react";
import { connect } from "react-redux";
import {inpAnswC3} from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC6.css";

 const SubCatC6 =(props)=>{
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
            if(arrCount[num][i]===0){
                arr=(<div key={i}>{item}
                (0.
                <input  className='inp' type='text' size='1' value={props.quiz.arrAnswer[arrCount[num][i]].answ} readOnly={true} ></input>
                )
                </div>)
            }else{
                let val=props.quiz.arrAnswer[arrCount[num][i]].inpWord
                let cls=props.quiz.arrAnswer[arrCount[num][i]].cls
                if(props.isChecked){
                    if(props.quiz.arrAnswer[arrCount[num][i]].cls==='bGreen')
                    val=props.quiz.arrAnswer[arrCount[num][i]].answ
                    else if(props.hintMode){
                        val=props.quiz.arrAnswer[arrCount[num][i]].answ
                        cls='fontHint'
                    }
                }

                arr=(<div key={i}>{item}<p>
                    ({arrCount[num][i]}.
                    <input  className={cls} type='text' placeholder='...' size='1' maxLength={1}  value={val} onChange={(e)=>(props.inpAnsw(e.target.value, arrCount[num][i]))}></input>
                    )
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
    <div className='subCatC6'>
        
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
            {questionsDiv(props.quiz.text)}
            <div className="variants">
                {props.variants.map((item, i)=>{
                    let letter=String.fromCharCode(65+i)
                    return <p key={i}>{(letter===props.quiz.answer[0])?<b>{letter}. {item}</b>:letter+'. '+ item}</p>
                })}
            </div>
            
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

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC6)