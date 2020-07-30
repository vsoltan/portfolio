
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import { SocialIcon } from 'react-social-icons';
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
    .scaling {
        width: 30%;
    }
    .no-scale {
        width: 70%;
    }
`;

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.scale = props.scale; // change this 
        this.state = {
            overlayState: false,
        };
        this.overlayData = props.overlayData;
    }
    showOverlay = () => (
        // const cardOverlay = this.props.children; 
        this.setState({ overlayState : true})
    )
    hideOverlay = () => (
        this.setState({ overlayState : false })
    )
    redirect = () => (
        window.open(
            this.overlayData[1],
            '_blank',
        )
    );
    render() {
        const scaling = this.scale ? "no-scale" : "scaling";
        const titleValue = this.title[0], 
            subTitleValue = this.title[1], 
            altValue = this.title[2];

        const overlayBody = this.overlayData[0], 
            overlayRedirectURL = this.overlayData[1];

        return (
            <Styles>
                <div className="project-card" onClick={this.showOverlay}>
                    <div className="card-container">
                        <img className="card-img" className={scaling} src={this.img} alt={altValue}/>
                        <span className="overlay"/>
                    </div>
                    <div className="text-container">
                        <p id={"project-title"}>{titleValue}</p>
                        <p id={"project-sub-title"}>{subTitleValue}</p>
                    </div>
                </div>
                <Modal size ="lg" scrollable={true} show={this.state.overlayState} onHide={this.hideOverlay}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h1>{titleValue}</h1>
                            <h2>{subTitleValue}</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{overlayBody}</Modal.Body>
                    <Modal.Footer>
                        <SocialIcon url={overlayRedirectURL} target="_blank" bgColor="#000000"/>
                    </Modal.Footer>
                </Modal>
            </Styles>
        );
    }
}

export default ProjectCard;
