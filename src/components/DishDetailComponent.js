import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends React.Component {
    constructor(props){
        super(props);
    }

    renderDish(dish){
        
        if(dish&&dish.length!==0 && dish!==null){
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
        if(dish && dish.length!==0) {
            console.log('Dish:',dish);
            let com = dish.comments.map((comments)=>
                
                <li key={comments.id}>
                    <div className="comment">{comments.comment}</div>
                    
                    <ul className="list-inline">
                        <li className="list-inline-item">-- {comments.author} , </li>
                        <li className="list-inline-item">{comments.date}</li>
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
        console.log('props',this.props.dish);
       return (
           <div className="container">
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish[0])}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish[0])}
                </div>
            </div>
           </div>
       );
    }
}

export default DishDetail;
