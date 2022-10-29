import React, { Component } from 'react';
import './style.css';
import Hello from './Hello';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title : "سلام دوستان"
    }
  }

    handleSetTitle = () => {
      this.setState ({
        title: "helllllooooo"
      })
    }

    render(){
        return(
          <div className='main'>
            <Hello title={this.state.title} />
            <Timer />
          </div>
        )
      }
}

export default App;
