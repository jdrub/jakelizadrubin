import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';

class HelloMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 10
        };
    }

    handleClick() {
        const { count } = this.state;

        this.setState({
            count: count + 1
        });
    }

    render() {
        const { count } = this.state;

        return (
            <BorderedContainer>
                <h1>Hello {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>count!</button>
                <h2>Count: {count}</h2>
            </BorderedContainer>
        );
    }
}

const BorderedContainer = styled.div`
    border-width: 1px;
    border-style: solid;
    border-color: coral;
    border-radius: 3px;
    padding: 5px;
`;

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="World" />, App);