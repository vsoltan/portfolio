
import React from 'react';
import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

import resume from '../../assetts/soltan-swe.pdf';

import '../../App.css';
import '../../Overlay.css';
import '../../Contact.css';
import "bootstrap/js/src/collapse.js";

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

const redirect = (e) => (
  window.open(
      e.currentTarget.getAttribute('value'),
      '_blank',
  )
);

class NavigationBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactFormVisible: false,
			copiedOverlayVisible: true, 
		}
		this.emailButton = React.createRef();
	}
	showContactForm = () => (
		this.setState({ contactFormVisible : true })
	)
	hideContactForm = () => (
		this.setState({ contactFormVisible : false })
	)
	toggleOverlayPopup = () => (
		this.setState({ copiedOverlayVisible : !this.state.copiedOverlayVisible })
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
									<a className="nav-link" onClick={redirect} value={"https://github.com/vsoltan"}>GitHub<span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" onClick={redirect} value={"https://www.linkedin.com/in/valeriy-soltan"}>LinkedIn</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href={resume} download='soltan-swe.pdf'>Resume</a>
								</li>
								<li className="nav-item">
									<a className="nav-link last" onClick={this.showContactForm}>Contact</a>
								</li>
							</ul>
				  		</div>

						<Modal size ="lg" scrollable={true} show={this.state.contactFormVisible} onHide={this.hideContactForm}>
							<Modal.Header closeButton>
                        		<Modal.Title>
                            		<h1>Contact</h1>
                        		</Modal.Title>
                    		</Modal.Header>
                    		<Modal.Body>
								<div>
									<p>Please send all inquiries to the following address: </p>
									<span>
										<InputGroup.Text id="email-text">vsoltan@umass.edu</InputGroup.Text>
										<Button className="float-right" id="email-app-button">
											<a href="mailto:vsoltan@umass.edu">Open in App</a>
										</Button>
										<Button className="float-right">Copy</Button>
										{/* <OverlayTrigger overlay={(<Tooltip id="hi">Copied to Clipboard!</Tooltip>)} trigger={"click"} placement="left">
											<Button className="float-right" onClick={() => {navigator.clipboard.writeText("vsoltan@umass.edu")}}>Copy</Button>
										</OverlayTrigger> */}
									</span>
								</div>
                    		</Modal.Body>    
                		</Modal>
					</Container>
			  	</nav>
			</Styles>
		);
	}
}

export default NavigationBar;