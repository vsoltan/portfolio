
import React from "react";
import { Container } from 'react-bootstrap';
import styled from "styled-components";

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.images = props.images;
    }
    render() {
        return (
            <div className="gallery-container">
                {this.images}
            </div>
        )
    }
}

export default ImageGallery;
