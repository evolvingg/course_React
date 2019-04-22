import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props){
        super(props);
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

    renderComments(dish) {
        if(dish!==null) {
            let com = dish.comments.map((comments)=>
                
                <li key={comments.id}>
                    <div className="comment">{comments.comment}</div>
                    
                    <ul class="list-inline">
                        <li class="list-inline-item">-- {comments.author} , </li>
                        <li class="list-inline-item">{comments.date}</li>
                    </ul>
                    <br/>
                </li>);
            
            return (
                <div>
                    <h4 className="text-left">Comments</h4>
                    <ul className="list-unstyled text-left">{com}</ul>
                </div>
                );
        }
        else {
            return (<ul></ul>);
        }
    }

    render(){
       return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
       );
    }
}

export default DishDetail;
