import React from "react";
// import "./catD.css"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Timer, { UpdateTimer } from "../components/Timer/Timer";
import { useState } from "react";

//------------------------------------------------
var formatTime= function(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
//------------------------------------------------
 export const ExerciseD =(props)=>{
    
    let initState=[]
    const paternState={count:[[0,0],[0,0],[0,0]],
        viewTime:[[true,true],[true,true],[true,true]],
        arrWords:[['',''],['',''],['','']],
        class:[['',''],['',''],['','']]
        }
     const initialState=()=>{
         for(let i=1;i<props.arrQuizes; i++){
            initState[i]=paternState
         }
         return initState
        }

     const [state, setState]=useState(initialState())

    //  const Char=(z)=>{
    //      let charArr=[]
    //      for(let x=0 ; x<z.length; x++){
    //         charArr[x]=z.charCodeAt(x)
    //      }
    //      return charArr.join()
    //  }

     const focusArea=(exer, num)=>{
        let newState=[...state]
        newState[props.selectExe]={...state[props.selectExe]}
        newState[props.selectExe].viewTime=[...state[props.selectExe].viewTime]
        newState[props.selectExe].viewTime[exer]=[...state[props.selectExe].viewTime[exer]]
        newState[props.selectExe].viewTime[exer][num]=false
        return setState(newState)
     }
     const blurArea=(exer, num)=>{
        let newState=[...state]
        newState[props.selectExe]={...state[props.selectExe]}
        newState[props.selectExe].viewTime=[...state[props.selectExe].viewTime]
        newState[props.selectExe].viewTime[exer]=[...state[props.selectExe].viewTime[exer]]
        newState[props.selectExe].viewTime[exer][num]=true
        newState[props.selectExe].count=[...state[props.selectExe].count]
        newState[props.selectExe].count[exer]=[...state[props.selectExe].count[exer]]
        newState[props.selectExe].count[exer][num]=newState[props.selectExe].count[exer][num]+UpdateTimer()-1
        return setState(newState)
     }
     const changeArea=(e, exer, num, exerStr)=>{
        let newState=[...state]
        newState[props.selectExe]={...state[props.selectExe]}
        newState[props.selectExe].arrWords=[...state[props.selectExe].arrWords]
        newState[props.selectExe].arrWords[exer]=[...state[props.selectExe].arrWords[exer]]
        newState[props.selectExe].arrWords[exer][num]=e.target.value

        newState[props.selectExe].class=[...state[props.selectExe].class]
        newState[props.selectExe].class[exer]=[...state[props.selectExe].class[exer]]
        let w=props.currentQuiz[exerStr][num][1]
        let cls=newState[props.selectExe].class[exer]
        let words=counWords(e.target.value)
        if(words>=w && !(words>w+2)){
            cls[num]='green'
        }else cls[num]='red'
        return setState(newState)
     }

     function counWords(str) {
        let words=str.split(' ')
        .filter(function(n) { return n !== '' && n !== '"' && n !== `'` && n !== `,` && n !== `;` && n !== `:`  && n !== `.`})
        .length;
        return words
   }

    return(
<div className='exerciseD'>
    {Object.keys(props.currentQuiz).map((item,i)=>{
    return <table key={i}>
        <thead>
            <tr>
                <td colSpan={2}><h5>Zestaw {i+1}</h5></td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>a. {props.currentQuiz[item][0][0]} {(props.currentQuiz[item][0][2])?<img alt='' src={props.currentQuiz[item][0][2]}></img>:null}</td>
                <td>{(counWords(state[props.selectExe].arrWords[i][0])===0)?'...':<span className={state[props.selectExe].class[i][0]}>{counWords(state[props.selectExe].arrWords[i][0])}</span>}/{props.currentQuiz[item][0][1]} słów</td>
            </tr>
            <tr>
                <td className={state[props.selectExe].class[i][0]}><TextareaAutosize aria-label="empty textarea" placeholder="Wpisz odpowiedź" style={{resize: 'none'}} onFocus={()=>focusArea(i, 0)} onBlur={()=>blurArea(i, 0)} onChange={(e)=>changeArea(e, i, 0, item)} value={state[props.selectExe].arrWords[i][0]}/></td>
                <td><p>Czas {(state[props.selectExe].viewTime[i][0])?formatTime(state[props.selectExe].count[i][0]):<Timer startTime={state[props.selectExe].count[i][0]}></Timer>}</p>
                </td>
            </tr>
            <tr>
                {/* <td>b. {props.currentQuiz[item][1][0]} {(props.currentQuiz[item][1][2])?<img alt='' src={props.currentQuiz[item][1][2]}></img>:(props.selectExe===2 && i===2)?Char(state[props.selectExe].arrWords[i][1]):null}</td> */}
                <td>b. {props.currentQuiz[item][1][0]} {(props.currentQuiz[item][1][2])?<img alt='' src={props.currentQuiz[item][1][2]}></img>:null}</td>
                <td>{(counWords(state[props.selectExe].arrWords[i][1])===0)?'...':<span className={state[props.selectExe].class[i][1]}>{counWords(state[props.selectExe].arrWords[i][1])}</span>}/{props.currentQuiz[item][1][1]} słów</td>
            </tr>
            <tr>
                <td className={state[props.selectExe].class[i][1]}><TextareaAutosize aria-label="empty textarea" placeholder="Wpisz odpowiedź" style={{resize: 'none'}} onFocus={()=>focusArea(i, 1)} onBlur={()=>blurArea(i, 1)} onChange={(e)=>changeArea(e, i, 1, item)} value={state[props.selectExe].arrWords[i][1]}/></td>
                <td><p>Czas {(state[props.selectExe].viewTime[i][1])?formatTime(state[props.selectExe].count[i][1]):<Timer startTime={state[props.selectExe].count[i][1]}></Timer>}</p>
                </td>
            </tr>
        </tbody>
    </table>
})}

</div>
)}
