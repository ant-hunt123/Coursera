import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent' ;
import Contact from './ContactComponent' ;
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments:COMMENTS,
        leaders:LEADERS ,
        promotions:PROMOTIONS
    };
  }

 
  render() {
    const HomePage = () => {
      return(
        <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
    );
      }
    return (
      <div>
          <Header />
        
           <Switch>
              <Route path='/home' component={Home} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route exact path="/aboutus" component={About} />
              <Route exact path='/contactus' component={Contact} />} />

              <Redirect to="/home" /> 
        
          </Switch>
        
        <Footer />
      
       

      </div>
    );
  }
}

export default Main;


// redirect means its a default route if we not connected home or dishes 