
import React from "react";
import styled from "styled-components"

const Styles = styled.div`
   .contactForm {
        margin-top: 5px; 
        margin-bottom: 5px; 
        display: grid; 
        grid-template-columns: 100px 1fr 75px;
        grid-gap: 5px;
   }
   label {
        grid-column: 1 / 2;
        font-family: Metropolis-Regular;
   }
   input, textarea {
        grid-column: 2 / 4;
        border-style: solid;
        border-color: rgb(235, 235, 235); 
        border-width: 1px; 
   }
   button {
        grid-column: 3 / 4;
        background-color: var(--highlight-color);
        border-radius: 5px; 
        border-style: solid; 
        border-color: var(--highlight-color);
        color: white; 
        margin: 15px 0 15px 0;
   }
   .alert {
        grid-column: 2 / 3; 
        text-align: left; 
        padding: 0px;
        margin-top: 1.2rem; 
        color: rgb(201, 87, 79);
   }
   .success {
        grid-column: 3 / 4;
        margin-top: 1.2rem; 
        color: rgb(19, 186, 4);
   }
`;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        let errorMessage = <p></p>
        let submitButton = <button>Submit</button>;

        if (status === "SUCCESS") {
            // offset the button margin with inline styling 
            errorMessage = (
                <p className="success" style={{"margin-bottom": "15px"}}>Thanks!</p>
            );
            submitButton = (
                <button style={{display: "none"}}>Submit</button>
            );
        } else if (status === "ERROR") {
            if (status === "ERROR") {
                errorMessage = (
                    <p className="alert">Ooops! There was an error.</p>
                );
            }
        }

        return (
            <Styles>
                <form
                    className="contactForm"
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/xvovwpae"
                    method="POST"
                >
                    <label>Email:</label>
                    <input type="email" name="email" />

                    <label>Message:</label>
                    <textarea name="message" cols="40" rows="5"></textarea>

                    { errorMessage }
                    { submitButton }
                    <div></div>
                    {/* <p className="alert" ></p>
                    <button>Submit</button> */}


                    {/* {status === "SUCCESS" ? <p className="alert">Thanks!</p> : <button>Submit</button>}
                    {status === "ERROR" && <p className="alert">Ooops! There was an error.</p>} */}
                </form>
            </Styles>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

export default ContactForm;