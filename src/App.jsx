import React from 'react';
import { Route } from 'react-router-dom'
// import { ReactComponent } from '*.svg';
// import './App.css';

// import components
import NavbarReactstrap from './components/navbar'

//import pages
import Home from './pages/home'
import RequestAPI from './pages/reqAPI'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavbarReactstrap/>
        <Route path='/' component={Home} exact/>
        <Route path='/generate-news' component={RequestAPI}/>
    </div>
  );
  }
}

export default App;
