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
    }

    .navbar-brand {
      color: black;
      font-size: 20px;
      font-family: Metropolis-Bold;
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
    <nav class="navbar navbar-expand-lg fixed-top">
      <Container>
        <a class="navbar-brand" href="#">vsoltan</a>
        <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" onClick={redirect} value={"https://github.com/vsoltan"}>GitHub<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={redirect} value={"https://www.linkedin.com/in/valeriy-soltan"}>LinkedIn</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:vsoltan@umass.edu">Hire Me</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  </Styles>
);

export default NavigationBar;