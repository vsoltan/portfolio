
import React from 'react';
import { Container, Overlay } from 'react-bootstrap';
import ProjectCard from '../elements/ProjectCard';
import ProjectOverlay from '../elements/Overlay';
import styled from 'styled-components';
import OPS from '../../assetts/images/project-pics/ops-tile.png';
import RTX from '../../assetts/images/project-pics/rtx-tile.png';
import SW from '../../assetts/images/project-pics/sw-tile.png';
import SLE from '../../assetts/images/project-pics/slide-tile.png';
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


const OpenSprinklerCard = () => (
    <ProjectCard title={["OpenSprinkler", "Internship", "OpenSprinkler Dashboard"]} img={OPS} scale={1}>
        <Overlay />
    </ProjectCard>
);

const AcceleratorCard = () => (
    <ProjectCard title={["Raytracing Accelerator", "Coursework Extension", "Ball Array Render"]} img={RTX} scale={1}>
        <Overlay />
    </ProjectCard>
);

const SimpleWatchCard = () => (
    <ProjectCard title={["Simple Watch", "Semester Project", "Project Schematic"]} img={SW} scale={1} />
);

const SlideCard = () => (
    <ProjectCard className="HELLO" title={["Slide Business Card", "Personal Project", "App Landing Page"]} img={SLE} scale={0} />
);

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