import React, { Component } from 'react';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputVal: '',
    inputValArr:[]
  }
  
  inputChangeHandler = (event) => {
    let tempVal = event.target.value
    this.setState({
      inputVal: tempVal,
      inputValArr: tempVal.split('')
    })
  }

  clickRemoveHandler = (index) =>{
    let tempValArray = [...this.state.inputValArr]
    tempValArray.splice(index,1)
    let tempVal = tempValArray.join('')

    this.setState({
      inputVal: tempVal,
      inputValArr: tempValArray
    })
  }

  render() {

    let chars = []
    if (this.state.inputVal) {
      chars = this.state.inputValArr.map( (el,index) => {
        return (
          <CharComponent 
            letter={el}
            ind = {index}
            click = {() => this.clickRemoveHandler(index)}/>
        )
      })
      
      // chars.push(
      //   this.state.inputVal.map( (char)=> {
      //     return <CharComponent letter={char} />
      //   }) 
      // )
    }
    return (
      <div className="App">
        <input 
          type="text" 
          onChange={ (event) => {this.inputChangeHandler(event)} } 
          value={this.state.inputVal}  />  
          <p>Current value: {this.state.inputVal}</p> 
        <Validation 
          textLength = {this.state.inputVal? this.state.inputVal.length : 0}/>
        {chars}
      </div>
    );
  }
}

export default App;
