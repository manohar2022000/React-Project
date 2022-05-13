import React, { Component } from "react";
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
class Dishdetail extends Component {
    constructor(props) {
        super(props);
        


    }
    render() {
        const chooseddish=this.props.dish.comments;
        const sdish=chooseddish.map((cdish)=>{
            return(
                <div className="m-1"><p>{cdish.comment}</p>
                <p>--{cdish.author} , {cdish.date}</p></div>
            )

        });
        return (
            <div className="row">
<div className="col-md-5">
                <Card>
                    {/* {console.log(chooseddish)} */}
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-md-5 m-3">
<Card>
<CardTitle>Comments</CardTitle>
<CardText>
    {sdish}
</CardText>

</Card>
                </div>
            </div>)

    }
}
export default Dishdetail;


// function Dishdetail(props)
// { return (
//     <div className="row">
//         <div className="col-md-6"></div>
//     <Card>
//         <CardImg top src={props.dish.image} alt={props.dish.name} />
//         <CardBody>
//             <CardTitle>{props.dish.name}</CardTitle>
//             <CardText>{props.dish.description}</CardText>
//         </CardBody>
//     </Card>
//     </div>)}

//     export default Dishdetail;