import React from "react";
import styled from "styled-components";

const Styles = styled.div`

`

class ProjectOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render() {
        return (
            <Styles>

            </Styles>
        );
    }
}

export default ProjectOverlay;