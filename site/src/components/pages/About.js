
import React from 'react';
import styled from 'styled-components';
import me from '../../assetts/images/me.jpg';
import dog from '../../assetts/images/aubri.jpg';
import school from '../../assetts/images/umass.jpg';
import vball from '../../assetts/images/volleyball.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import '../../App.css';

const Styles = styled.div`
    .container {
        margin-top: 5%;
    }
    p {
        padding: 10px 0px 10px 0px;
        font-family: Metropolis-Regular;
        font-size: 17px;
    }
    u {
        font-family: Metropolis-Bold;
        font-size: 20px;
    }
    a { 
        color: var(--highlight-color); 
        text-decoration: none;
        position: relative;
    }
    a.link:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: var(--highlight-color);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }

    a.link:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }
    a.contact {
        margin-top: 100px;
        background-color: var(--highlight-color);
        font-family: Metropolis-Regular;
        color: white;
        border-radius: 10px;
        padding: 10px 15px 10px 15px;
        text-align: center;
    }
    img {
        object-fit: cover;
        width: 80%;
        height: 80%;
        border-radius: 50% 50%;
        // margin-bottom: 10px; /* vertical gutter */
    }
    .about-gallery-grid {
        display: -webkit-box; 
        display: -ms-flexbox; 
        display: flex;
        margin-left: -10px; 
        width: auto;
    }
    .about-gallery-column {
        // padding-left: 10px; /* gutter size */
        background-clip: padding-box;
    }
    .about {
        margin-bottom: 1.5rem;
    }
`;

const images = [
    <Image key="img1" alt="Me" src={me} className={"img-fluid img1"} />,
    <Image key="img3" alt="Doggo" src={dog} className={"img-fluid img3"}/>,
    <Image key="img2" alt="Alma Mater" src={school} className={"img-fluid img2"}/>,
    <Image key="img4" alt="Spike!" src={vball} className={"img-fluid img4"}/>
];

const AboutGallery = () => (
    <Masonry
        breakpointCols={2}
        className="about-gallery-grid"
        columnClassName="about-gallery-column">
            {images}
    </Masonry>
);

const About = () => (
    <Styles>
        <Container>
            <Row>
                <Col className="col-sm">
                    <h1>Hey, I'm Valeriy Soltan, a Firmware Intern at <a className="link" href="https://openthings.io/" target="_blank">OpenThings.</a></h1>
                    <div className="about">
                        <p>Currently working towards a B.S in Computer Science and Statistics at the University of Massachusetts—Amherst.</p>
                        <p>Interested in the <b>how</b> behind why things work. Passionate about systems programming, numerical optimization, and building
                            accessible software for everyone.</p>
                        <p>Actively looking for Summer 2021 opportunities. I have a breadth of experience working in dynamic environments across embedded and mobile platforms.</p>
                    </div>
                    <a className={"contact"} href="mailto:vsoltan@umass.edu">reach out</a>
                </Col>
                <Col className="col-sm">
                    {/* <Image src={me} className={"img-fluid"}/> */}
                </Col>
            </Row>
            <Row>
                <Col className="col-sm"></Col>
                <Col></Col>
            </Row>
        </Container>
    </Styles>
);


export default About;

