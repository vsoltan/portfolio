
import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../elements/ProjectCard';
import styled from 'styled-components';
import vball from '../../assetts/images/volleyball.jpg';
import OPS from '../../assetts/images/project-pics/ops-tile.png';
import RTX from '../../assetts/images/project-pics/rtx-tile.png';
import '../../App.css';

const Styles = styled.div`
    .container {
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

const Featured = () => (
    <Styles>
        <Container>
            <h1 id={"title"}>My Work.</h1> 
            <div className="project-feature">
                <ProjectCard title={["OpenSprinkler", "Internship"]} img={OPS} />
                <ProjectCard title={["Raytracing Accelerator", "Coursework Extension"]} img={RTX} />
                <ProjectCard title={["Simple Watch", "Semester Project"]} img={vball} />
                <ProjectCard title={["Slide Business Card", "Personal Project"]} img={vball} />
            </div>
        </Container>
    </Styles>
);

export default Featured;