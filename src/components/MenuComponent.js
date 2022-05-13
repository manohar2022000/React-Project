import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null)
      return (

        <Dishdetail dish={dish} />
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col col-12 col-sm-12 col-md-5   m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle tag="h4">{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container-auto'>
        <div className="container-auto">
          <div className="row">
            {menu}
          </div>
        </div>
        <div class="container-auto m-1">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;