import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import zonked from './zonked_100-speed.gif';

class App extends React.Component {
    render() {
        return (
            <BorderedContainer>
                <StyledImg src={zonked} />
                <span>
                    <NamePartJake>Jake</NamePartJake>
                    <NamePartLiza>Liza</NamePartLiza>
                    <NamePartDrubin>Drubin</NamePartDrubin>
                </span>
            </BorderedContainer>
        );
    }
}

const NamePart = styled.h1`
    display: inline-block;
`;

const NamePartJake = styled(NamePart)`
    color: #794848;
`;

const NamePartLiza = styled(NamePart)`
    color: #e91e63;
`;
const NamePartDrubin = styled(NamePart)`
    color: #ffc107;
`;

const StyledImg = styled.img`
`;

const BorderedContainer = styled.div`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: coral;
    border-radius: 60px;
    padding: 5px;

    background-image: url(${zonked});
    background-repeat: repeat;
    background-size: 90px;
    background-color: steelblue;

    font-family: 'Roboto', sans-serif;
    font-size: 23px;
`;

let el = document.getElementById("app");

ReactDOM.render(<App />, el);