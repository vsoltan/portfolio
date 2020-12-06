
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import styled from 'styled-components';

import ProjectCard from '../elements/ProjectCard';

// tile images 
import PRO from '../../assetts/images/project-page/portfolio/user.png';
import OPS from '../../assetts/images/project-page/opensprinkler/ops-tile.png';
import RTX from '../../assetts/images/project-page/accel/rtx-tile.png';
import SLI from '../../assetts/images/project-page/slide/slide-tile.png';

// overlay image collections 
import ultsoft from '../../assetts/images/project-page/ultimate/ultsoft.png';

import pong from '../../assetts/images/project-page/mbed-pong/pong.png';
import gamePong from '../../assetts/images/project-page/mbed-pong/game.png';
import sidePong from '../../assetts/images/project-page/mbed-pong/side.png';
import topPong from '../../assetts/images/project-page/mbed-pong/top.png';
import serverPong from '../../assetts/images/project-page/mbed-pong/server.png';

import iter1 from '../../assetts/images/project-page/portfolio/iter1.png';

import board from '../../assetts/images/project-page/watch/board.png';
import watchApp from '../../assetts/images/project-page/watch/watch-app.png';
import watchMusic from '../../assetts/images/project-page/watch/watch-music.png';
import watchTimer from '../../assetts/images/project-page/watch/watch-timer.png';
import watchWear from '../../assetts/images/project-page/watch/watch-wear.png';

import ballShadow from '../../assetts/images/project-page/accel/ball-shadow.png';
import cowAccel from '../../assetts/images/project-page/accel/cow-acceled.png';
import teapot from '../../assetts/images/project-page/accel/teapot.png';
import ballAray from '../../assetts/images/project-page/accel/ball-array.png';

import slideConfig from '../../assetts/images/project-page/slide/slide-config.png';
import slideQR from '../../assetts/images/project-page/slide/slide-qr.png';

import '../../App.css';
import '../../Overlay.css';

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
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 20px;
    }
    @media screen and (min-width: 320px) and (max-width: 449px) {
        .project-feature {
            grid-template-columns: 1fr;
        }
    }
    @media screen and (min-width: 1200px) {
        .project-feature {
            grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
        }
    }
`;

function UltimateCard() {
    const UHRTitle = [
        "Co-Op Project",
        "Full Stack Application",
        "Ultimate Software Logo"
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={ultsoft} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    work in progress!
                </p>
            </div>
        </React.Fragment>
    );
    const UHROverlay = [
        overlayContent,
        "https://github.com/vsoltan"
    ];
    return (
        <ProjectCard title={UHRTitle} img={ultsoft} scale={50} overlayData={UHROverlay} />
    );

}

function PongCard() {
    const MBPTitle = [
        "Mbed-Pong",
        "Semester Project",
        "To be decided" // TODO 
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={serverPong} className="img-fluid gallery-item" />
                <Image src={topPong} className="img-fluid gallery-item" />
                <Image src={sidePong} className="img-fluid gallery-item" />
                <Image src={gamePong} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    work in progress!
                </p>
            </div>
        </React.Fragment>
    );

    const MBPOverlay = [
        overlayContent,
        "https://github.com/Mbed-Pong"
    ];
    return (
        <ProjectCard title={MBPTitle} img={pong} scale={50} overlayData={MBPOverlay} />
    );
}

// faceid logo: https://macteo.it/ios/2017/09/28/face-id.html
function PortfolioCard() {
    const PFTitle = [
        "Personal Website",
        "React App",
        "Description",
    ];
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={iter1} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    I've always wanted to get experience with web development; it seemed like the ultimate creative outlet,
                    an immediate extension of your personality and ideas. But every time I sat down and tried to make something, the end result was frustration.
                    Any deviation from online tutorials resulted in total disaster, with CSS doing things that I didn't want or not doing anything at all.
                    More recently, I reckoned it was time that I built a proper showcase for the projects that I've been working on over the years, with
                    the intent of giving viewers a comprehensive rundown of each experience, the lessons learned, and the hitches experienced along the way.
                </p>
                <p>
                    So, I buckled down and started working, drafting layouts and experimenting with Flexbox and CSS grid. The first iteration, I was committed
                    to keeping the project "pure", hoping to write it entirely in React.js with no libraries. I also opted for a multi-page design, dedicating
                    each project its own page and custom content. Pretty soon, I scrapped that idea in favor of a single-page design, with a gallery of reusable
                    project templates and a static navigation bar. At that point, I was struggling with responsiveness and decided to migrate the project to Bootstrap
                    and, swallowing my pride, started using libraries.
                </p>
                <p>
                    However, what kept it interesting the whole time was that, throughout every iteration of the project, I was learning something new. The first time
                    around, I was getting comfortable with React components and basic CSS. The next attempt, I shifted my focus to modular design, sass style sheets,
                    and media queries. Finally, upon implementing Bootstrap, I shifted to styled components and started familiarizing myself with the component lifecycle
                    and conditional rendering. I'm looking forward to all the things I'll learn while maintaining this site in the future!
                </p>
            </div>
        </React.Fragment>
    );
    const PFOverlay = [
        overlayContent,
        "https://github.com/vsoltan/portfolio",
    ];
    return (
        <ProjectCard title={PFTitle} img={PRO} scale={25} overlayData={PFOverlay} />
    );
}

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
                    improving the functionality of the OpenSprinkler platform. So far, my work has included adding MQTT
                    integration, expanding time-keeping and job-queue restructuring capabilities,
                    and improving home automation hub compatibility.
                </p>
            </div>
        </React.Fragment>
    );
    const OSOverlay = [
        overlayContent,
        "https://github.com/OpenSprinkler/OpenSprinkler-Firmware",
    ];
    return (
        <ProjectCard title={OSTitle} img={OPS} scale={75} overlayData={OSOverlay} demoLink={"http://demo.opensprinkler.com"} />
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
                <Image src={watchWear} className="img-fluid gallery-item" />
                <Image src={watchMusic} className="img-fluid gallery-item" />
                <Image src={watchTimer} className="img-fluid gallery-item" />
                <Image src={watchApp} className="img-fluid gallery-item" />
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
                    I worked on the firmware that would power the watch, building out the wireless infrastructure,
                    applets (media controls, stopwatch, and weather), and navigation system. In collaboration with our professor, we designed a custom
                    PCB that allowed us to place the battery header on the bottom of the board and solder the display, reducing the thickness of the design.
                    The 3D-printed enclosure has a cutout for the rotary encoder that drives the navigation system, cycling through the applets and their
                    respective options, made available through the home screen.
                </p>
                <p>
                    This was truly a one of a kind experience in the scope of my undergraduate education. Although we had to make some compromises given our
                    target price point, we had complete control over every element of our project and we built it entirely from the ground up. Looking back,
                    the only issue that we weren't able to resolve was related to Bluetooth throughput on our SOC. Occasionally, OpenWeatherMap API would send
                    more data than usual, and the device wouldn't be able to read the entire JSON string, resulting in incomplete data. Otherwise, the end product
                    surpassed all expectations: media controls have very low latency, the battery life is enough to get you through the day, and the navigation is
                    pretty intuitive. Check it out in action:
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
                    As part of my Introduction to Graphics course (CS 373), we were asked to implement a rudimentary ray tracer using THREE.js
                    and webGL. In computer graphics, ray tracing is an alternative to rasterization for rendering, where lighting dynamics are simulated
                    in real-time. While the lighting of the image is more accurate, this is a very computationally intensive task, limited by the number
                    of (light) ray-shape intersections that the renderer has to compute.
                </p>
                <p>
                    We can use an acceleration structure to drastically reduce the computational requirements for rendering a scene, enabling more
                    complex lighting arrangements as well as super-sampled and higher fidelity images. An example of an acceleration structure, and
                    the one used in my implementation, is a bounding volume hierarchy (BVH) tree. Before the raytracer runs, we can construct a tree which,
                    at every level, uses a bounding box to specify which geometry is contained in a particular area of the scene. Therefore, if a ray
                    doesn't intersect a bounding box at some level in the tree, we can forego calculating intersections with the geometry contained within
                    that bounding box.
                </p>
                <p>
                    The optimization gains were incredible. The cow model from the first image (above), took 9 minutes to render at 400x400
                    resolution with acceleration turned off. With acceleration enabled, it completed in 15 seconds. The rest of the images
                    in the gallery are scenes from the original assignment but super-sampled, with additional lighting sources included, and
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
        <ProjectCard title={AccTitle} img={RTX} scale={75} overlayData={AccOverlay} demoLink={"https://www.youtube.com/watch?v=pj4oyJgUgVc&feature=youtu.be"} />
    );
}

function SlideCard() {
    const SlideTitle = [
        "Slide Business Card",
        "Personal Project",
        "App Landing Page"
    ];
    // https://app-mockup.com/ios/# to create image
    const overlayContent = (
        <React.Fragment>
            <div className="project-gallery">
                <Image src={slideConfig} className="img-fluid gallery-item" />
                <Image src={slideQR} className="img-fluid gallery-item" />
            </div>
            <div className="project-description">
                <p>
                    After my first year in university, a group of my friends and I decided to spend the summer creating a mobile
                    application with the goal of simplifying the process of sharing social media and personal information. We envisioned an application
                    that would seamlessly encode your emails, social media profiles, even resumes into one easy-to-share code.
                </p>
                <p>
                    Since this was our first time developing for mobile, we had to clear a large learning curve before we could translate the nuances
                    of our idea to the actual project. Starting with storyboards and YouTube tutorials we created the fundamental components of
                    the application: a QR scanner, segues between views, and the general layout of a login page. As we became more comfortable, we
                    started building out the back end using Firebase, adding alternative forms of authentication through Google and Facebook, and fleshing
                    out the general functionality of the app: JSON encoding/decoding, data retrieval, and contact creation upon scanning a code. At this
                    point, I decided to refactor the entire project to follow the Model-View-Controller (MVC) design pattern and while rewriting a large chunk
                    of the project code, opted to ditch storyboards in favor of a programmatic approach.
                </p>
                <p>
                    Although the end result fell short of our initial expectations, I learned a lot about version control, asynchronous programming,
                    and design methodology. In fact, we recently decided to give the app another shot using flutter, with a more cohesive direction,
                    multi-platform support, and a lot more experience under our belts.
                </p>
            </div>
        </React.Fragment>
    );
    const SlideOverlay = [
        overlayContent,
        "https://github.com/vsoltan/Slide",
    ];
    return (
        <ProjectCard title={SlideTitle} img={SLI} scale={30} overlayData={SlideOverlay} />
    )
}

// TODO: create a pinned area where the tiles are bigger and the rest are smaller
const Featured = () => (
    <Styles>
        <Container>
            <h1 id={"title"}>My Work.</h1>
            <div className="project-feature">
                {UltimateCard()}
                {PongCard()}
                {SimpleWatchCard()}
                {AcceleratorCard()}
                {PortfolioCard()}
                {OpenSprinklerCard()}
                {SlideCard()}
            </div>
        </Container>
    </Styles>
);

export default Featured;