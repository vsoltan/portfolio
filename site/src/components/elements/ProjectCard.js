
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
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

function Example() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.scale = props.scale; // change this 
    }
    componentDidMount() {
        // not supported in strict mode... (use ref)
        ReactDOM.findDOMNode(this).addEventListener("click", this.showOverlay);
    }
    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener("click", this.hideOverlay);
    }
    showOverlay() {
        // const cardOverlay = this.props.children; 
        // render Example for a start!
    }
    hideOverlay() {

    }
    render() {
        const scaling = this.scale ? "no-scale" : "scaling";
        const titleValue = this.title[0], subTitleValue = this.title[1], altValue = this.title[2];

        return (
            <Styles>
                <div className="project-card">
                    <div className="card-container">
                        <img className="card-img" className={scaling} src={this.img} alt={altValue}/>
                        <span className="overlay"/>
                    </div>
                    <div className="text-container">
                        <p id={"project-title"}>{titleValue}</p>
                        <p id={"project-sub-title"}>{subTitleValue}</p>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProjectCard;
