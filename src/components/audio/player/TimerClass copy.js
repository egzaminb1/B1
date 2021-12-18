
import React from 'react'

  
// let x=10
// let iterate
class TimeClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: this.props.count};
    }

    // iterate=this.props.iterate

    tick(iterate) {
      //debugger
      let x=this.state.seconds
      if(this.props.timeEnd && x>0 && this.props.iterate>0){
        console.log('tick'+x)
        x--
        this.setState({seconds:x})
      }
        if(x===0 ){
          if(this.props.iterate>0){
            x--
          this.setState({seconds:x})
          }
          this.props.onPlay(true)
        }

        if(this.props.initial){
          this.setState({seconds:this.props.count})
          this.props.resInitial()
        }
    }
 

    componentDidMount() {
      this.interval = setInterval(() => this.tick(this.props.iterate), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      // console.log('render')
      return (
        <div id='playTimer'>
            <p>
            {(this.props.iterate===2 && this.state.seconds===10)?'Odczyt: 1':null }
            {(this.props.iterate===1 &&  this.state.seconds>0)?this.state.seconds:null }
            {(this.props.iterate===1 && this.state.seconds<0)?'Odczyt: 2':null }
            {(this.props.iterate<1 )?'Odczyt: 2':null }
            </p>
        </div>
      );
    }
  }

  export default TimeClass