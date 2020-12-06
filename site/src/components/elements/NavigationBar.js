
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

import ContactForm from "../elements/ContactForm";

import resume from '../../assetts/soltan-swe.pdf';

import '../../App.css';
import '../../Overlay.css';
import "bootstrap/js/src/collapse.js";

// about me modal assetts 
import umasscs from '../../assetts/images/about-page/umass-cs.png';
import aubri from '../../assetts/images/about-page/aubri.png';


const Styles = styled.div`
    .navbar {
      background-color: white;
      padding: 1rem 1rem;
      border-bottom-style: solid;
      border-width: 1px;
      border-color: black;
    }
    .navbar-nav .nav-link {
      color: black;
      font-size: 17px;
      font-family: Metropolis-Bold;
      padding: 0 1.5em 0 1.5em;
      cursor: pointer;
    }
    .nav-link.last {
      padding-right: 0em;
    }
    .navbar-brand {
      color: black;
      font-size: 20px;
      font-family: Metropolis-Bold;
      cursor: pointer;
	}
    .nav-item { // to get collapse bar to the right
      text-align: right;
    }
    @media screen and (min-width: 0px) and (max-width: 991px) {
      .nav-link.last { 
        padding-right: 1.5rem;
      }
    }
`;

const scrollToTop = () => {
	scroll.scrollToTop();
};

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactFormVisible: false,
			copiedOverlayVisible: true,
			aboutPageVisible: false,
		}
		this.emailButton = React.createRef();
	}
	showContactForm = () => (
		this.setState({ contactFormVisible: true })
	)
	hideContactForm = () => (
		this.setState({ contactFormVisible: false })
	)
	showAboutPage = () => (
		this.setState({ aboutPageVisible: true })
	)
	hideAboutPage = () => (
		this.setState({ aboutPageVisible: false })
	)
	toggleOverlayPopup = () => (
		this.setState({ copiedOverlayVisible: !this.state.copiedOverlayVisible })
	)
	render() {
		return (
			<Styles>
				<nav className="navbar navbar-expand-lg fixed-top">
					<Container>
						<a className="navbar-brand" onClick={scrollToTop}>valeriy soltan</a>
						<button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
							<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
								<li className="nav-item active">
									<a className="nav-link" onClick={this.showAboutPage}>About</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href={resume} download='soltan-swe.pdf'>Resume</a>
								</li>
								<li className="nav-item">
									<a className="nav-link last" onClick={this.showContactForm}>Contact</a>
								</li>
							</ul>
						</div>

						<Modal size="lg" scrollable={true} show={this.state.contactFormVisible} onHide={this.hideContactForm}>
							<Modal.Header closeButton>
								<Modal.Title>
									<h1>Contact</h1>
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<ContactForm />
							</Modal.Body>
						</Modal>

						{/* About me, should probably make this its own component */}
						<Modal size="lg" scrollable={true} show={this.state.aboutPageVisible} onHide={this.hideAboutPage}>
							<Modal.Header closeButton>
								<Modal.Title>
									<h1>About Me</h1>
								</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<div className="project-gallery">
									<Image src={umasscs} className="img-fluid gallery-item" />
									<Image src={aubri} className="img-fluid gallery-item" />
								</div>
								This is a work in progress!
							</Modal.Body>
						</Modal>


					</Container>
				</nav>
			</Styles>
		);
	}
}

export default NavigationBar;