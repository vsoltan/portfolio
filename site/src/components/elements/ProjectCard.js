
import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import '../../App.css';

const Styles = styled.div`
    .project-card {
        position: relative;
        background-color: var(--card-background);
        border-radius: 5px;
        color: transparent;
        cursor: pointer;
    }
    .project-card:hover {
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .project-card:hover .overlay {
        opacity: 1;
    }
    .card-container {
        height: 425px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-img {
        width: 70%;
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
    .text-container {
        position: absolute;
        top: 0;
    }
    #project-title {
        font-family: Metropolis-Bold;
        font-size: 22px;
        margin: 20px 0px 0px 20px;
    }
    #project-sub-title {
        font-family: Metropolis-Regular;
        font-size: 18px;
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
                    <div className="text-container">
                        <p id={"project-title"}>{this.title[0]}</p>
                        <p id={"project-sub-title"}>{this.title[1]}</p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProjectCard;
