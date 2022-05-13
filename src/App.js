import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import React, { Component } from 'react';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App" >
        <div class="container-auto">
          <div class="row text-center">
            <div class="col">
              <Navbar dark color="primary">
                <NavbarBrand  href="/">Dishes List</NavbarBrand>
              </Navbar>
            </div>
          </div>
        </div>

<div class="container-auto">
          <Menu dishes={this.state.dishes} />
</div>
       
      </div>
    );
  }
}

export default App;
