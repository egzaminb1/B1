import React from 'react'
import { connect } from "react-redux";
//import { MyContext } from '../../context/MyContext'
// import Timer from '../../exercises/Timer';
import Timer from '../Timer/Timer';

  //------------------------------------------------
  var formatTime= function(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
//------------------------------------------------

 const Points=(props)=>{
    // const {state}=useContext(MyContext)
    let sumPoints=props.quantity*props.points;
    //console.log(sumPoints, props.quantity, props.points)
    //let timer=formatTime(100)
     let timer=formatTime(props.timerOfComponent)
    return(
        <div className='points'>
            <span className='placePoints'>
                {/* {(props.isChecked)?2+'p.':'......'} /{' '} */}
                {(props.isChecked)?props.curRightPoints+' iłość punktów ':'......'} /{' '}
            </span>
            <span>
                {sumPoints} maksymalna iłość punktów ({props.quantity} pytania x {props.points} punktów) {' '}
            </span>
            <span>
                Czas: {(props.isChecked)?timer:<Timer numQuestion={props.numQuestion}></Timer>}
            </span>
        </div>
    )
}

const mapStateToProps=(state, props)=>{
    //console.log(state)
return(
    {
        quantity:props.quantity,
        timerOfComponent:props.timerOfComponent,
        isChecked:props.isChecked,
        curRightPoints:props.curRightPoints,
        points:props.points,
        numQuestion:state.QuizCatA.numQuestion
        // timerOfComponent:state.QuizCatA.timerOfComponent,
        // isChecked:state.QuizCatA.isChecked,
        // curRightPoints:state.QuizCatA.curRightPoints,
        // points:state.QuizCatA.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Points)