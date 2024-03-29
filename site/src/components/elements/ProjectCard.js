
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../App.css';

const Styles = styled.div`
    .project-card {
        position: relative;
        background-color: var(--card-background);
        border-radius: 5px;
        color: transparent;
        cursor: pointer;
        width: 100%;
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
    @media screen and (min-width: 991px) {
        .card-container {
            height: 425px;
        }
    }
    @media screen and (min-width: 700px) and (max-width: 990px) {
        .card-container {
            height: 350px;
        }
    }
`;

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.scale = props.scale;
        this.demoLink = props.demoLink;
        this.state = {
            overlayVisible: false,
        };
        this.overlayData = props.overlayData;
    }
    showOverlay = () => (
        this.setState({ overlayVisible: true })
    )
    hideOverlay = () => (
        this.setState({ overlayVisible: false })
    )
    redirect = () => (
        window.open(
            this.overlayData[1],
            '_blank',
        )
    );
    redirectDemo = () => (
        window.open(
            this.demoLink,
            '_blank',
        )
    )

    // TODO: figure out src button placement
    render() {
        const titleValue = this.title[0],
            subTitleValue = this.title[1],
            altValue = this.title[2];

        const overlayBody = this.overlayData[0];

        return (
            <Styles>
                <div className="project-card" onClick={this.showOverlay}>
                    <div className="card-container">
                        <img className="card-img" src={this.img} alt={altValue} style={{ width: this.scale + "%" }} />
                        <span className="overlay" />
                    </div>
                    <div className="text-container">
                        <p id={"project-title"}>{titleValue}</p>
                        <p id={"project-sub-title"}>{subTitleValue}</p>
                    </div>
                </div>
                <Modal size="lg" scrollable={true} show={this.state.overlayVisible} onHide={this.hideOverlay}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>{titleValue}</h1>
                            <h2>{subTitleValue}</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {overlayBody}
                        <Button variant="primary" className="float-right src" onClick={this.redirect} style={{ visibility: (this.overlayData.length > 1 ? 'visible' : 'hidden') }}>
                            <div className="btn-content">
                                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                                <a className="src-link">src</a>
                            </div>
                        </Button>
                        <Button variant="primary" className="float-right demo" onClick={this.redirectDemo} style={{ display: (this.demoLink ? 'block' : 'none') }}>
                            <a>Demo</a>
                        </Button>
                    </Modal.Body>
                </Modal>
            </Styles>
        );
    }
}

export default ProjectCard;
