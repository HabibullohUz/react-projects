// import uniqid from 'uniqid'
import { Card, Button } from "react-bootstrap";
import { cardsInfo } from "./cards-info";

function Main() {
  return (
    <>
      <div className="main__wrapper">
        <div className="pricing__main">
          <h1>Pricing</h1>
          <div className="pricing__main-p">
            <p>
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It's built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
        </div>

        <div className="card__wrapper">
          {cardsInfo.map((info, index) => {
            return (
              <Card key={index} style={{ width: "18rem" }} className="d-flex">
                <Card.Header className="cardHeader">{info.title}</Card.Header>
                <Card.Body className="card-body">
                  <div className="card__title-wrapper">
                    <Card.Title className="card-price">
                      ${info.price} <span>/ mo </span>
                    </Card.Title>
                    <Card.Text className="card-text">
                      {info.users} users included
                    </Card.Text>
                    <Card.Text className="card-text">
                      {info.storage} GB of storage
                    </Card.Text>
                    <Card.Text className="card-text mb-4">
                      {info.support}
                    </Card.Text>
                  </div>
                  <Button className="cardBtn" variant="outline-primary">
                    {info.cardBtn}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
