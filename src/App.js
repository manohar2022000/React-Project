import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent'
import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore';
class App extends Component {
  render() {
    const store=ConfigureStore();
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App" >
        <Main />
      </div></BrowserRouter>
      </Provider>
      
    );
  }
}
export default App;
