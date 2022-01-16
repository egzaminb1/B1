import React  from "react";
import { connect } from "react-redux";
import { boldClassB4} from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatB4.css";

 const SubCatB4 =(props)=>{
    let count=0
    let arrCount=[]

    const par=(par, num)=>{
        let arrInp=[]
        let str=''
        let arrAsist=[]
        let arrText=par.split(' ')

        arrText.map((item,i)=>{
            if(item==='()'){
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
            let words=props.quiz.arrAnswer[arrCount[num][i]]
            // if(i===0 && num===0){
            if(arrCount[num][i]===0){
                arr=(<div key={i}>{item} ({(words[0].answ)?<b><i>{words[0].word}</i></b>:<i>{words[0].word}</i>}, {(words[1].answ)?<b><i>{words[1].word}</i></b>:<i>{words[1].word}</i>}, {(words[2].answ)?<b><i>{words[2].word}</i></b>:<i>{words[2].word}</i>})
                </div>)
            }else{
                arr=(<div key={i}>{item} (
                    <span className={words[0].cls} onClick={()=>props.boldClass(arrCount[num][i],0)}><i>{words[0].word}, </i></span>
                    <span className={words[1].cls} onClick={()=>props.boldClass(arrCount[num][i],1)}><i>{words[1].word}, </i></span>
                    <span className={words[2].cls} onClick={()=>props.boldClass(arrCount[num][i],2)}><i>{words[2].word}</i></span>
                )
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
    <div className='subCatB4'>
        
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
                        curCatReducer={'QuizCatB'}
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
    header1:state.QuizCatB.currentQuiz.header[0],
    header2:state.QuizCatB.currentQuiz.header[1],
    quiz:state.QuizCatB.currentQuiz,
    isChecked:state.QuizCatB.isChecked,
    hintMode:state.QuizCatB.hintMode,

    quantity:state.QuizCatB.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatB.timerOfComponent,
    curRightPoints:state.QuizCatB.curRightPoints,
    points:state.QuizCatB.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
    boldClass:(numArr,i)=>dispatch(boldClassB4(numArr,i))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatB4)