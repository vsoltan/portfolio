
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

import ballShadow from '../../assetts/images/project-pics/ball-shadow.png';
import cowAccel from '../../assetts/images/project-pics/cow-acceled.png';
import teapot from '../../assetts/images/project-pics/teapot.png';
import ballAray from '../../assetts/images/project-pics/ball-array.png';

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
        "Internship 2020", 
        "OpenSprinkler Dashboard"
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={OPS} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    OpenSprinkler is an open source, web-based smart sprinkler controller for lawn and plant watering. 
                    As a firmware intern, I am working on implementing user-requested features while maintaining and 
                    improving the functionality of the OpenSprinkler platform. So far, my work has included working 
                    on adding MQTT integration, expanding time-keeping and job-queue restructuring capabilities, 
                    and improving home automation hub compatability. 
                </p>
            </div>
        </React.Fragment>
    );
    const OSOverlay = [
        overlayContent, 
        "https://github.com/OpenSprinkler/OpenSprinkler-Firmware", 
    ];
    return (
        <ProjectCard title={OSTitle} img={OPS} scale={75} overlayData={OSOverlay} demoLink={"http://demo.opensprinkler.com"}/>
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
                <p>
                    Capstone project for UMASS course CICS 290M: Physical Computing (now CS 256). My partner, 
                    <a className="link" href="https://github.com/DenizGuler" target="_blank" rel="noopener noreferrer"> Deniz Guler </a> 
                    and I decided to create an affordable and most importantly, capable wearable time-keeping device. Built on the Espressif 
                    esp32 platform and costing less than $15 in parts, we opted to create a device that not only tells the time, but provides some 
                    connectivity with our personal devices.
                </p>
                <p>
                    I worked on the firmware that would power the watch, building out the wirless infrastructure, 
                    applets (media controls, stopwatch, and weather), and navigation system. In collaboration with our professor, we designed a custom 
                    PCB that allowed us to place the battery header on the bottom of the board and solder the display, reducing the thickness of the design. 
                    The 3D-printed enclosure has a cutout for the rotary encoder that drives the navigation system, cycling through the applets and their 
                    respective options, made available through the home screen.
                </p>
                <p>
                    This was truly a one of a kind experience in the scope of my undergraduate education. Although we had to make some compromises given our 
                    target price point, we had complete control over every element of our project and we built it entirely from the ground up. Looking back, 
                    the end product surpassed all expectations: media controls have very low latency, the battery life is enough to get you through the day, 
                    and the navigation is pretty intuitive. Check it out in action: 
                </p>
            </div>
        </React.Fragment>
    );
    const WatchOverlay = [
        overlayContent,
        "https://github.com/vsoltan/SimpleOS",
    ];
    return (
        <ProjectCard title={WatchTitle} img={board} scale={40} overlayData={WatchOverlay} demoLink={"https://www.youtube.com/watch?v=erve9Y-6WI4&feature=youtu.be"} />
    );
}

//cow accelerated: 25 lighting sources, 1000 triangle model, 4x4 grid supersampling: numcomparisons: 1645216850, time to trace: 21.5 minutes
function AcceleratorCard() {
    const AccTitle = [
        "Raytracing Accelerator", 
        "Coursework Extension", 
        "Ball Array Render"
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={cowAccel} className="img-fluid gallery-item" />
                <Image src={ballShadow} className="img-fluid gallery-item" />
                <Image src={teapot} className="img-fluid gallery-item" />
                <Image src={ballAray} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    As part of my Introduction to Graphics course (CS 373), we were required to implement a rudimentary raytracer using THREE.js
                    and webGL. In computer graphics, raytracing is an alternative to rasterization for rendering, where lighting dynamics are simulated
                    in real-time. While the lighting of the image is more accurate, this is a very computationally intensive task, limited by the number 
                    of (light) ray-shape intersections that the renderer has to compute. 
                </p>
                <p>
                    An acceleration structure can leverage the locality of geometry 
                    in the scene to determine which ray-shape intersections are worth computing. In a bounding volume heirarchy tree, 
                    an example of such a structure and the one used in my implementation, each ray is first checked against a bounding 
                    box or container: if the ray doesn't intersect with the box, then it is impossible for it to intersect with the shapes 
                    that it contains. This drastically reduces the computational requirements for rendering a scene and enables more 
                    complex lighting arrangements as well as super-sampled and higher fidelity images. 
                </p>
                <p>
                    The optimization gains were incredible. The cow model from the first image (above), took 2 minutes to render at 400x400 
                    resolution with acceleration turned off. With acceleration enabled, it completed in 4 seconds. The rest of the images
                    in the gallery are scenes from the original assignment but supersampled, with additional lighting sources included, and 
                    rendered at higher resolutions: these configurations would take hours without acceleration turned on. 
                </p>
            </div>
        </React.Fragment>
    );
    const AccOverlay = [
        overlayContent,
        "https://github.com/vsoltan/CS-373/tree/master/CS373HW7",
    ];
    return (
        <ProjectCard title={AccTitle} img={RTX} scale={75} overlayData={AccOverlay}/>
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
                { SimpleWatchCard() }
                { AcceleratorCard() }
                { SlideCard() }
            </div>
        </Container>
    </Styles>
);

export default Featured;