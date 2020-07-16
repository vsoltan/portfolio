import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import '../../App.css';
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

    .navbar-brand {
      color: black;
      font-size: 20px;
      font-family: Metropolis-Bold;
    }

    .nav-item { // to get collapse bar to the right
      text-align: right;
  }
`;

const redirect = (e) => (
  window.open(
      e.currentTarget.getAttribute('value'),
      '_blank',
  )
);

const NavigationBar = () => (
  <Styles>
    <nav className="navbar navbar-expand-lg fixed-top">
      <Container>
        <a className="navbar-brand" href="#">valeriy soltan</a>
        <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={redirect} value={"https://github.com/vsoltan"}>GitHub<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={redirect} value={"https://www.linkedin.com/in/valeriy-soltan"}>LinkedIn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:vsoltan@umass.edu">Hire Me</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  </Styles>
);

export default NavigationBar;