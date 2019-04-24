import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  showImg(imgText) {
    this.setState({
        selectedDish: imgText
    });
    console.log('inshow:',this.state);
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con fe</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => {console.log(dishId);return this.showImg(dishId)}}/>
        {(this.state.selectedDish !== null) && (<DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)}/>)}
      </div>
    );
  }
}

export default Main;
