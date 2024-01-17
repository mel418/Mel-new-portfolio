import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/cute-panda-with-korean-love-sign-hand-cartoon.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Engineer", "Web Developer", "Python Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible? "animate__animated animate__fadeIn": ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Melody a `}<span className="wrap">{text}</span></h1>
                            <p>Hello! I'm a second-year computer science major at CSULB with a passion for coding and technology. Currently, I'm working at Target and actively seeking an internship in the field of computer science to further enhance my skills.</p>
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className="header-img">
                        <img src={headerImg} alt="Header Img" />
                        <p className="attribute">
                            Image by <a href="https://www.freepik.com/author/catalyststuff">catalyststuff</a> on Freepik
                        </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}