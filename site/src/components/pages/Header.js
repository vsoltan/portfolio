
import React from 'react';
import styled from 'styled-components';
import profPic from '../../assets/images/about-page/profPic.jpeg';
import { Container, Image } from 'react-bootstrap';

import '../../App.css';
import SocialTab from '../elements/SocialTab';

const Styles = styled.div`
    .container {
        margin-top: 5%;
    }
    p {
        margin-bottom: 1.2rem;
    }
    .portrait {
        object-fit: cover;
        width: 100%;
        box-sizing: border-box;
        max-height: 450px;
        border-radius: 5px;
    }
    #wrap-around {
        display: none;
    }
    .header {
        margin-bottom: 1.2rem;
    }
    @media screen and (min-width: 0px) and (max-width: 767px) {
        #wrap-display { display: block; }
        #sm-display-hide { display: block; }
        #sm-display-reveal { display: none; }
        .col-images { display: none; }  /* hide images on small screens */
        
    }
    @media screen and (min-width: 768px) and (max-width: 991px) {
        #wrap-display { 
            display: none; 
        }
        #sm-display-hide {
            display: none; 
        }
        #sm-display-reveal {
            display: block; 
        }
        #wrap-around { 
            display: block;
            padding-top: 1.5em; 
        }
    }
    @media screen and (min-width: 992px) {
        #sm-display-hide {
            display: block; 
        }
        #sm-display-reveal {
            display: none; 
        }
    }
    .custom-col {
        display: flex; 
    }
    .custom-row-1 {
        margin-right: 15px; 
        position: relative; 
        flex: 1;
    }
    .custom-row-2 {
        flex: 1;
    }
`;

const positionTitle = "Software Intern";
const companyName = "Electronic Arts";
const companyURL = "https://www.ea.com/";

// const jobSearchYear = 2021; 

const wrappedContent = [`Passionate about systems programming, clever algorithms, and distributed systems.`, `Enjoy playing beach volleyball, cooking, and gaming.`]

const Header = () => (
    <Styles>
        <div id="page-top">
            <Container className="container">
                <div className="custom-col">
                    <div className="custom-row-1">
                    <div className="header">
                            <h1>Hey, I'm Valeriy, a {positionTitle} at <a className="link" href={companyURL} target="_blank" rel="noopener noreferrer">{companyName}.</a></h1>
                        </div>
                        <SocialTab />
                        <div className="about">
                            <p>Currently working towards a B.S in Computer Science and a minor in Mathematics at the University of Massachusetts—Amherst.</p>
                            <p id="sm-display-hide"> Interested in deconstructing the way things work. Passionate about systems programming, clever algorithms, and distributed systems.</p>
                            <p id="sm-display-reveal">Interested in deconstructing the way things work. </p>
                            
                        </div>
                        <div id="wrap-display">
                            <p>{wrappedContent[1]}</p>
                            {/* <p>{wrappedContent[1]}</p> */}
                        </div>
                        
                    </div>
                    <div className="custom-row-2 col-images">
                        <Image src={profPic} className="portrait" />
                        <div id="wrap-around">
                            <p>{wrappedContent[0]}</p>
                            <p>{wrappedContent[1]}</p>
                        </div> 
                    </div>
                </div>
            </Container>
        </div>
    </Styles>
);


export default Header;

