import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';

class Menu extends React.Component {
    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        {menu}
                    </div>
                </div>
            
            {/* // <div className="container">
            //     <div className="row">
                        // {menu}
                // </div>
                {/* <div className="row"> */}
                    {/* <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div> */}
                    {/* <DishDetailComponent selectedDish ={this.props.selected} /> */}
                {/* </div> */}
             {/* </div>  */}
            </React.Fragment>
        );
    }

}


export default Menu;