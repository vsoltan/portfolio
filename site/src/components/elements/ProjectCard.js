
import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import '../../App.css';

const Styles = styled.div`}
    // .project-card {
    //     position: relative;
    //     background-color: var(--card-background);
    //     color: transparent;
    //     height: 500px;
    //     border-radius: 5px;
    //     text-align: left;
    //     font-family: Metropolis-Bold;
    //     transition: all .2s ease-in;
    // }
    // .project-card:hover {
    //     background-color: var(--highlight-reduced-opacity);
    //     color: white;
    //     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    //     opacity: 0.5;
    // }
    // #project-title {
    //     position: absolute;
    //     font-size: 20px;
    //     padding: 0px;
    //     margin-bottom: 0px;
    // }
    // #project-sub-title {
    //     position: absolute;
    //     font-size: 15px;
    //     top: 25px;
    //     font-family: Metropolis-Light;
    // }
    // img {
    //     position: absolute;
    //     top: 0;
    //     left: 20%;
    //     height: 80%;
    // }
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--card-background);
      }
      .imgwrap {
         width: 70%; /*or whatever you choose*/
         margin: auto;
      }
      .imgwrap img {
         display: block;
         width: 100%;
         max-width: 500px; /*actual image width*/
         height: auto; /* maintain aspect ratio*/
        //  margin: auto; /*optional centering of image*/
        margin-top: 100px;
        margin-bottom: 100px;
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
                {/* <div className={"project-card"}>
                    <div className={"img-container"}><Image src={this.img} className={"img-fluid"}/></div>
                    {/* <div className={"text-container"}>
                        <p id={"project-title"}>{this.title[0]}</p>
                        <p id={"project-sub-title"}>{this.title[1]}</p>
                    </div>
                </div> */}
                <div class="box">
                    <div class="imgwrap">
                        <img src={this.img}/>
                    </div>
                </div>
            </Styles>
        );
    }
}

export default ProjectCard;
