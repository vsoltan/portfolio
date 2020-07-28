
import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../elements/ProjectCard';
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

// dynammically change the scaling: pass in prop 70 or 30 and then in the class element say 
// style={this.props.scale + "%"}           
const Featured = () => (
    <Styles>
        <Container>
            <h1 id={"title"}>My Work.</h1> 
            <div className="project-feature">
                <ProjectCard title={["OpenSprinkler", "Internship"]} img={OPS} scale={1} />
                <ProjectCard title={["Raytracing Accelerator", "Coursework Extension"]} img={RTX} scale={1} />
                <ProjectCard title={["Simple Watch", "Semester Project"]} img={SW} scale={1} />
                <ProjectCard className="HELLO" title={["Slide Business Card", "Personal Project"]} img={SLE} scale={0} />
            </div>
        </Container>
    </Styles>
);

export default Featured;