import React from 'react';
import Mode from './Mode';
import Form from './Form';
import List from './List';

class App extends React.Component{
  render(){
    return (
      <div className="header">
        <div className="container">
            <Mode />
            <Form 
              inputText={this.inputText}
            />
            <List />
          </div>
      </div>
    )
  }
}

export default App;