import React, { Component } from 'react';
import './style.css';

var interval;

class Timer extends Component {
    constructor(){
        super();
        this.state = {
          time: new Date().toLocaleTimeString(),
          counter: 10,
          hour: 0,
          minute: 0,
          second: 0,
          isStarted: false,
        }
      }

      start = () =>{

        if(this.state.isStarted === false){
          this.setState({
            isStarted: true,
          })
        interval = setInterval(() => {
          // this.setState({
          //   time : new Date().toLocaleTimeString()
          // })         
            this.setState({
              second: this.state.second+1,
            })
            if(this.state.second===60){
              this.setState({
                minute: this.state.minute+1,
                second: 0,
              })
            }
            if(this.state.minute===60){
              this.setState({
                hour: this.state.hour+1,
                minute: 0,
              })
                      
            }          
          },1000)
        }
      }
      stop = () =>{
        clearInterval(interval);
        this.setState({
          isStarted: false,
        })
      }
      reset = () => {
        this.stop();
        this.setState({
          second: 0,
          minute: 0,
          hour: 0,
        })
      }

      

      render(){
        // setInterval(() => {
        //   this.setState({
        //     time : new Date().toLocaleTimeString()
        //   })
        // },1000)
        const{second,minute,hour} = this.state;
        return(
          <>
            <h2  className='timer'>
              {`${hour < 10 ? "0"+hour : hour} : ${minute < 10 ? "0"+minute : minute} : ${second < 10 ? "0"+second : second}`}
            </h2>
            <div className={this.btnContainer}>
              <button onClick={this.start} className="start">start</button>
              <button onClick={this.stop} className="stop">stop</button>
              <button onClick={this.reset} className="reset">reset</button>
            </div>
           </>
        )
      }
}

export default Timer;
