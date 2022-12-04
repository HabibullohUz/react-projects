import { Card } from "react-bootstrap";

export default function Footer() {
    return (
        <>
            <div className="footer__wrapper">
                <div className="footer">
                    <div className="img__wrapper">
                        <a href="https://getbootstrap.com/docs/5.2/getting-started/download/"><img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" /></a>
                        <p>© 2017-2018</p>
                    </div>
                    <div className="div">
                        <Card.Title className="footer__title">Features</Card.Title>
                        <Card.Text className="footer__nav"> <a href="1">Cool stuff</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Random feature</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Team feature</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Stuff for developers</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Another one</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Last time</a></Card.Text>
                    </div>
                    <div className="div">
                        <Card.Title className="footer__title">Resources </Card.Title>
                        <Card.Text className="footer__nav"> <a href="2">Resource</a></Card.Text>
                        <Card.Text className="footer__nav"><a href="2"> Resource name</a></Card.Text>
                        <Card.Text className="footer__nav"><a href="2"> Another resource</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Final resource</a></Card.Text>
                    </div>
                    <div className="div">
                        <Card.Title className="footer__title">About </Card.Title>
                        <Card.Text className="footer__nav"> <a href="2">Team</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Locations</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Privacy</a></Card.Text>
                        <Card.Text className="footer__nav"> <a href="2">Terms</a></Card.Text>
                    </div>
                </div>
            </div>
        </>
    )
}
