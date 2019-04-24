import React, { Component } from 'react';
import { Navbar , NavbarBrand ,Jumbotron } from 'reactstrap';


class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">Ristorante con fe</NavbarBrand>
            </div>
            </Navbar>
            <Jumbotron>
              <div className="container">
                <div className="row row-header">
                  <div className="col-12 col-sm-6">
                    <h1>Ristorante con fusion</h1>
                    <p>some textv trivial unimp unimp unimp some textv trivial unimp unimp unimp some textv trivial unimp unimp unimp some textv trivial unimp unimp unimp</p>
                  </div>
                </div>
              </div>   
            </Jumbotron>
        </React.Fragment>
    );
  }
}

export default Header;
