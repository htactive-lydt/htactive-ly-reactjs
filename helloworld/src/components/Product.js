import React, {Component} from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ly",
      lastName: "Doan Thi"
    };
  }

  sendToParent = () => {
    this.props.onReceiveData(this.props);
  };

  render() {
    const {img, title, description} = this.props.card;
    return (
      <div className="col-sm-3">
        <Card>
          <CardImg
            top
            width="100%"
            src={img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>
              {description}
            </CardText>
            <Button onClick={this.sendToParent}>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
