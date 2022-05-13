import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent'
import React,{Component} from 'react';
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
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hello World</NavbarBrand>
          </div>
        </Navbar>
        <div className="row">
        <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}

export default App;
