import React from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import drubin from './drubin.gif';
import liza from './liza.gif';
import jake from './jake.gif';
import tile from './bg_tile.gif';

const isMobile = () => window.innerWidth < 768;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        };
    }

    isMobile() {
        window.innerWidth < 768;
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({ isMobile: isMobile() })
        });

        this.setState({ isMobile: isMobile() });
    }

    renderHeadsAndNames() {
        const { isMobile } = this.state;

        if (isMobile) {
            return (
                <>
                    <MobileHeadNameRow>
                        <StyledImg isMobile={isMobile} src={jake} />
                        <NamePartJake>Jake</NamePartJake>
                    </MobileHeadNameRow>
                    <MobileHeadNameRow>
                        <StyledImg isMobile={isMobile} src={liza} />
                        <NamePartLiza>Liza</NamePartLiza>
                    </MobileHeadNameRow>
                    <MobileHeadNameRow>
                        <StyledImg isMobile={isMobile} src={drubin} />
                        <NamePartDrubin>Drubin</NamePartDrubin>
                    </MobileHeadNameRow>
                </>
            );
        } else {
            return (
                <>
                    <HeadContainer isMobile={isMobile}>
                        <StyledImg src={jake} />
                        <StyledImg src={liza} />
                        <StyledImg src={drubin} />
                    </HeadContainer>
                    <NameContainer isMobile={isMobile}>
                        <NamePartJake isMobile={isMobile}>Jake</NamePartJake>
                        <NamePartLiza isMobile={isMobile}>Liza</NamePartLiza>
                        <NamePartDrubin isMobile={isMobile}>Drubin</NamePartDrubin>
                    </NameContainer>
                </>
            );
        }
    }

    render() {
        const { isMobile } = this.state;

        return (
            <BorderedContainer isMobile={isMobile}>
                {this.renderHeadsAndNames()}
            </BorderedContainer>
        );
    }
}

const MobileHeadNameRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
`;


const NameContainer = styled.div`
    width: ${p => p.isMobile ? '50%' : '100%'}
    display: ${p => p.isMobile ? 'inline-block' : 'block'}

    ${p => p.isMobile
        ? `
            display: inline-block;
            width: 50%;
        `
        : `
            width: 100%;
            text-align: center;
        `
    }
`;

const HeadContainer = styled.div`
    width: 100%;
    display: flex
    justify-content: center;
`;

const StyledImg = styled.img`
    ${p => p.isMobile
        ? `
            width: 200px;
            height: 200px;
        `
        : `
            width: 250px;
            height: 250px;
        `
    }
`;

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

const BorderedContainer = styled.div`
    box-sizing: border-box;

    ${p => p.isMobile
        ? ''
        : `
            display: flex;
            align-items: center;
            flex-direction: column;
        `
    }

    height: 100%;
    width: 100%;
    border-width: 1px;
    border-style: solid;
    border-color: coral;
    border-radius: 60px;
    padding: 5px;

    background-image: url(${tile});
    background-repeat: repeat;
    background-size: 165px;
    background-color: steelblue;

    font-family: 'Roboto', sans-serif;
    font-size: ${p => p.isMobile ? '27px' : '35px'};
`;

let el = document.getElementById("app");

ReactDOM.render(<App />, el);