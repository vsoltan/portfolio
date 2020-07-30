
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';

import ProjectCard from '../elements/ProjectCard';
import ImageGallery from '../elements/ImageGallery';

// tile images 
import OPS from '../../assetts/images/project-pics/ops-tile.png';
import RTX from '../../assetts/images/project-pics/rtx-tile.png';
import SW from '../../assetts/images/project-pics/sw-tile.png';
import SLE from '../../assetts/images/project-pics/slide-tile.png';

// overlay image collections 
import board from '../../assetts/images/project-pics/board.png';
import watchApp from '../../assetts/images/project-pics/watch-app.jpeg';
import watchMusic from '../../assetts/images/project-pics/watch-music.jpeg';
import watchTimer from '../../assetts/images/project-pics/watch-timer.jpeg';
import watchWear from '../../assetts/images/project-pics/watch-wear.jpeg';



import '../../App.css';

const Styles = styled.div`
    .container {
        margin-top: 5%;
        margin-bottom: 5%;
    }
    #title {
        margin-bottom: 1.5rem;
    }
    .project-feature {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        grid-gap: 20px;
    }
`;

function OpenSprinklerCard() {
    const OSTitle = [
        "OpenSprinkler", 
        "Internship", 
        "OpenSprinkler Dashboard"
    ];
    const overlayContent = (
        <div>
            <p>hello</p>
        </div>
    );
    const OSOverlay = [
        overlayContent, 
        "https://github.com/OpenSprinkler/OpenSprinkler-Firmware", 
    ];
    return (
        <ProjectCard title={OSTitle} img={OPS} scale={75} overlayData={OSOverlay}/>
    );
}

function AcceleratorCard() {
    const AccTitle = [
        "Raytracing Accelerator", 
        "Coursework Extension", 
        "Ball Array Render"
    ];
    const overlayContent = (
        <div>
            <p>yo</p>
        </div>
    );
    const AccOverlay = [
        overlayContent,
        "https://github.com/vsoltan/CS-373/tree/master/CS373HW7",
    ];
    return (
        <ProjectCard title={AccTitle} img={RTX} scale={75} overlayData={AccOverlay}/>
    );
}

function SimpleWatchCard() {
    const WatchTitle = [
        "Simple Watch",
        "Semester Project",
        "Project Schematic",
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={watchWear} className="img-fluid gallery-item"/>
                <Image src={watchMusic} className="img-fluid gallery-item"/>
                <Image src={watchTimer} className="img-fluid gallery-item"/>
                <Image src={watchApp} className="img-fluid gallery-item"/>
            </div>
            <div className="project-description">
                <p></p>
            </div>
        </React.Fragment>
    );
    const WatchOverlay = [
        overlayContent,
        "https://github.com/vsoltan/SimpleOS",
    ];
    return (
        <ProjectCard title={WatchTitle} img={board} scale={50} overlayData={WatchOverlay} />
    );
}

function SlideCard() {
    const SlideTitle = [
        "Slide Business Card", 
        "Personal Project", 
        "App Landing Page"
    ];
    const overlayContent = (
        <div>
            <p>slide</p>
        </div>
    );
    const SlideOverlay = [
        overlayContent, 
        "https://github.com/vsoltan/Slide",
    ];
    return (
        <ProjectCard title={SlideTitle} img={SLE} scale={30} overlayData={SlideOverlay}/>
    )
} 

// dynammically change the scaling: pass in prop 70 or 30 and then in the class element say 
// style={this.props.scale + "%"}           
const Featured = () => (
    <Styles>
        <Container>
            <h1 id={"title"}>My Work.</h1> 
            <div className="project-feature">
                { OpenSprinklerCard() }
                { AcceleratorCard() }
                { SimpleWatchCard() }
                { SlideCard() }
            </div>
        </Container>
    </Styles>
);

export default Featured;