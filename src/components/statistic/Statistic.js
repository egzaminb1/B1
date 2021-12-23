
import React, { useState } from 'react'
import { connect } from "react-redux";
import './statistic.css'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

//------------------------------------------------
var formatTime= function(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
//------------------------------------------------

 const Statistic=(props)=>{
     const[open, setOpen]=useState(true)
     const[showDetail, setShowDetail]=useState(false)

     const showDetailStatist=()=>{
        // let divMore=document.getElementById('moreStatistic')
        // divMore.className=(divMore.className==='active')?'':'active'
        (showDetail)?setShowDetail(false):setShowDetail(true)
     }

    let fullTime=0
    let sumRightPoints=0
    let sumAllPoints=0
    let x
    for(x of props.arrStatistic){
        fullTime+=x.timerOfComponent
        sumRightPoints+=x.curRightPoints
        sumAllPoints+=x.sumPoints
    }
    
    return(
        <Modal isOpen={open} toggle={() => setOpen(false)}>
  <ModalHeader>
    Statystyka
    <button  type="button" className="btn-close" onClick={() => setOpen(false)}  ></button>
  </ModalHeader>
  <ModalBody>
            <div className='headerStatistic'>
                
                <table>
                    <tbody>
                    <tr>
                        <td>Liczba wykonanych zadań :</td>
                        <td>{props.arrStatistic.length}</td>
                    </tr>
                    <tr>
                        <td>Ilość zdobytych punktów / z możliwych :</td>
                        <td> {sumRightPoints} / {sumAllPoints}</td>
                    </tr>
                    <tr>
                        <td>Procent skuteczności :</td>
                        <td>{(sumAllPoints===0)?'0':Math.round((sumRightPoints/sumAllPoints)*100)}%</td>
                    </tr>
                    <tr>
                        <td>Całkowity czas wykonywania zadań :</td>
                        <td>{formatTime(fullTime)}</td>
                    </tr>
                    </tbody>
                </table>
                <hr/>
                
                {/* {(props.arrStatistic.length===0)?null:<button onClick={showDetailStatist}> Dokładnie </button>} */}
            </div>
            <div id='moreStatistic' className={(showDetail)?'active':''}>
                <h5>{props.arrStatistic[0].catHeader[0]}
                    <span> ( {props.arrStatistic[0].catHeader[1]} )</span>
                </h5>
                {props.arrStatistic.map((item,i)=>{
                    return(
                        <table key={i}>
                            <thead>
                                <tr>
                                    <th colSpan={2}>{item.selectSubCat+1}.{item.numQuestion+1}. {props.arrStatistic[i].headQuiz}</th>
                                </tr>
                            </thead>
                    <tbody>
                    <tr>
                        <td>Liczba pytań w zadaniu:</td>
                        <td>{item.quantity}</td>
                    </tr>
                    <tr>
                        <td>Liczba punktów za jedno pytanie :</td>
                        <td> {item.points}</td>
                    </tr>
                    <tr>
                        <td>Ilość zdobytych punktów / z możliwych :</td>
                        <td> {item.curRightPoints} / {item.sumPoints}</td>
                    </tr>
                    <tr>
                        <td>Procent skuteczności :</td>
                        <td>{(item.sumPoints===0)?'0':(item.curRightPoints/item.sumPoints)*100}%</td>
                    </tr>
                    <tr>
                        <td>Czas wykonywania :</td>
                        <td>{formatTime(item.timerOfComponent)}</td>
                    </tr>
                    </tbody>
                </table>
                    )
                   
                })}
               
            </div>
            {/* <div className='contBtn'><button className='myBtn' onClick={showDetailStatist}> Rozwiń </button></div> */}
            <div className='contBtn'><button className='myBtn' onClick={showDetailStatist}>{(showDetail)?'Zwiń':'Rozwiń'} </button></div>
  </ModalBody>
</Modal>
    )
}

const mapStateToProps=(state)=>{
return(
    {
        arrStatistic:state.Statistic.arrStatistic
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
       
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Statistic)