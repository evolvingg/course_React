import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            selectedDish : null
        }
    }

    showImg(imgText) {
        this.setState({
            selectedDish: imgText
        });
        console.log(this.state);
    }
    renderDish(dish){
        if(dish!==null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (<div></div>);
        }
    }

    render(){
        const menu = this.props.dishes.map((dish)=>{
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>this.showImg(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}


export default Menu;