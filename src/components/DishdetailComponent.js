import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class Dishdetail extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const chooseddish = this.props.dish.comments;
        const renderComments = chooseddish.map((cdish) => {
            return (
                <div>
<ul className="list-unstyled">
    <li>{cdish.comment}</li>

                    
                    <li>--{cdish.author} , {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(cdish.date))}</li></ul></div>
            )
        });
        return (
            <div className="row row-cols-md-2">
                <div className="col-md-5 m-1">
                    <Card>
                        {/* {console.log(chooseddish)} */}
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle tag="h4">{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-5 m-1">
                    <CardTitle tag="h4">Comments</CardTitle>
                    <CardText> {renderComments}</CardText>
                </div>
            </div>)
    }
}
export default Dishdetail;

