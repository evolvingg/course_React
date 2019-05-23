import React, { Component } from 'react';
import { Navbar , NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
      <div>

        <Header/>
        <Switch>
          <Route path='/home' component={() => <Home dish={this.state.dishes} promotion={this.state.promotions} leader={this.state.leaders}/>} />
          <Route exact path='/menu' component={ ()=> <Menu dishes={this.state.dishes}/>} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        </Switch>
          <Menu dishes={this.state.dishes} onClick={(dish) => {console.log('dishID',dish);return this.showImg(dish)}}/>
          {this.state.selectedDish && (<DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)}/>)}
        <Footer/>

      </div>
    );
  }
}

export default Main;
