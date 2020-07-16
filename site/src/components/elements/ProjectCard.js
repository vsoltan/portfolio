
import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import '../../App.css';

const Styles = styled.div`
    .project-card {
        position: relative;
        background-color: var(--card-background);
        border-radius: 5px;
        // color: transparent;
        color: white;
    }
    .project-card:hover {
        color: white;
    }
    .card-container {
        height: 425px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-img {
        width: 50%;
        height: auto;
        max-height: 100%;
    }
    .overlay {
        background-color: var(--highlight-reduced-opacity);
        opacity: 0;
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 5px;
    }
    .overlay:hover {
        opacity: 1;
    }
    .text-container {
        position: absolute;
        top: 0;
    }
    #project-title {
        font-family: Metropolis-Bold;
        font-size: 20px;
        margin: 20px 0px 0px 20px;
    }
    #project-sub-title {
        font-family: Metropolis-Light;
        font-size: 15px;
        margin: 0px 0px 0px 20px;
    }
`;

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.img = props.img;
        this.title = props.title;
    }
    render() {
        return (
            <Styles>
                <div className="project-card">
                    <div className="card-container">
                        <img className="card-img" src={this.img}/>
                        <span className="overlay"/>
                    </div>
                    <div className={"text-container"}>
                        <p id={"project-title"}>{this.title[0]}</p>
                        <p id={"project-sub-title"}>{this.title[1]}</p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProjectCard;
