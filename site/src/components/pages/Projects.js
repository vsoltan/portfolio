
import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../elements/ProjectCard';
import styled from 'styled-components';
import dog from '../../assetts/images/aubri.jpg';
import vball from '../../assetts/images/volleyball.jpg';
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

const Featured = () => (
    <Styles>
        <Container>
            <h1 id={"title"}>My Work.</h1> 
            <div className={"project-feature"}>
                <ProjectCard title={["OpenSprinkler", "Internship"]} img={vball} />
                <ProjectCard title={["Raytracing Accelerator", "Coursework Extension"]} img={vball} />
                <ProjectCard title={["Simple Watch", "Semester Project"]} img={vball} />
                <ProjectCard title={["Slide Business Card", "Personal Project"]} img={vball} />
            </div>
        </Container>
    </Styles>
);

export default Featured;