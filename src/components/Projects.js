import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/discord-music-bot.png";
import projImg2 from "../assets/img/mock-shop-project.png";
import projImg3 from "../assets/img/sign-up-project.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const personalProjects = [
        {
            title: "Signup Form",
            description: "Developed a Discord bot using Python and the Discord.py library to provide music and music recommendations to users.",
            imgUrl: projImg3,
        },
        {
            title: "Cart Web App",
            description: "Developed a React-based shopping cart web app that integrates the FakeStore API for product data.",
            imgUrl: projImg2,
        
        },
    ];

    const hackathonProjects = [
        {
            title: "Discord Music Recc Bot",
            description: "Developed a Discord bot using Python and the Discord.py library to provide music and music recommendations to users.",
            imgUrl: projImg1,
        },
        
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible? "animate__animated animate__slideInUp": ""}>
                    <h2>Projects</h2>
                    <p>These projects have shaped me to be the coder I am today from school projects to self-teaching web development!</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web Dev Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Hackathons</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">School Projects/Courses</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        personalProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key = {index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        hackathonProjects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key = {index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Lorem Ipsum
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}