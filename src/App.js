import React, { Component } from 'react';
import RegisterMaaling from './RegisterMaaling'
// import logo from './logo.svg';
import './App.css';
//import aaa from './RegisterMaaling';

// const App = () => {
//     return (
//         <div className="App">Hello World ssssss!
//             <RegisterMaaling/>
//         </div>);
// };

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
         <RegisterMaaling maalerNummer='237283092' maalingHovedValue='10000' maalingLeietakerValue='2000' />
      </div>
    );
  }
}

export default App;
