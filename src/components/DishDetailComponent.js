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
                    {comments.comment}
                    <div>
                        --
                    <span> {comments.author} , </span>
                    <span>{comments.date}</span>
                    </div>
                </li>);
            
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{com}</ul>
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
