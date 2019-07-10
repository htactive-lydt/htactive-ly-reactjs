import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

export default function Product(props) {
  const { id, img, title, price, promotionPrice } = props.product;
  return (
    <div className="col-sm-3 product">
      <Card>
        <Link to={`product/${id}`}>
          <CardImg top width="100%" src={img} alt="Card image cap" />
        </Link>

        <CardBody>
          <CardTitle>{title}</CardTitle>
            <div className="row">
              {promotionPrice ? (
                <div className="col-sm-6">
                  <NumberFormat
                    value={promotionPrice}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              ) : (
                ""
              )}
              <div className={`col-sm-6 ${promotionPrice ? "hasPromo" : ""}`}>
                <NumberFormat
                  value={price}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </div>
          <Link to={`product/${id}`}>
            {" "}
            <Button>Detail</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
