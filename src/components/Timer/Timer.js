import React from 'react'

   //------------------------------------------------
   var formatTime= function(secs) {
    var minutes = Math.floor(secs / 60) || 0;
    var seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
//------------------------------------------------
let sec =0;
export const UpdateTimer=()=>{
    return sec;
}

//------------------------------------------------

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0,
                    compare:this.props.numQuestion };
    }
    
  
    tick() {
      if(this.state.compare !== this.props.numQuestion){
        this.setState({compare:this.props.numQuestion, seconds:0})
      }

      this.setState(state => ({
        seconds: state.seconds + 1
      }));
      this.x= formatTime(this.state.seconds)
      this.y= formatTime(this.state.seconds+this.props.startTime)
      sec=this.state.seconds
    }
 

    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <span id='timer'>
          {/* Секунды: {this.state.seconds} */}
          {/* Czas: {this.x} */}
          {/* {(this.props.startTime)?this.y:this.x} */}
          {(this.props.startTime)?(this.y)?this.y:formatTime(this.props.startTime):this.x}
          {/* {this.x} */}
        </span>
      );
    }
  }

  export default Timer