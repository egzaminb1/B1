import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearStateA } from "../store/actions/actionCreaters";

 const Navbar =(props)=>(
    <nav className=" navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
        <div className="navbar-brand" >
        Egzamin B1
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link" onClick={props.clearStateA}>Słuchanie</NavLink>
            </li>
            <li className="nav-item"><span className="nav-link">-</span></li>
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link" onClick={props.clearStateA}>Gramatyka</NavLink>
            </li>
            <li className="nav-item"><span className="nav-link">-</span></li>
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link" onClick={props.clearStateA}>Сzytanie</NavLink>
            </li>
            <li className="nav-item"><span className="nav-link">-</span></li>
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link" onClick={props.clearStateA}>Pisanie</NavLink>
            </li>
            <li className="nav-item"><span className="nav-link">-</span></li>
            <li className="nav-item">
                <NavLink to="/examinA" className="nav-link" onClick={props.clearStateA}>Mówienie</NavLink>
            </li>
        </ul>

    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" href="./" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul> */}
        </div>
        </div>
    </nav>
)

const mapStateToProps=(state)=>{
    //console.log(state)
return(
    {
        // arrStatistic:state.Statistic.arrStatistic
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        clearStateA:()=>dispatch(clearStateA())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)