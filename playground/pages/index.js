import React, { useState } from 'react';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Main from '../components/main';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    overflow: hidden;
    height: 100vh;
    flex-direction: column;
    background-color: ${(props) => props.theme.bg};
    font-family: Lato, sans-serif;
`;

function Index() {
    const initialConfig = {
        format: 'expanded',
        indentSize: 4,
        indentChar: ' ',
        maxAtRuleLength: 80,
        maxSelectorLength: 80,
        maxValueLength: 80,
        trimLeadingZero: true,
        trimTrailingZeros: true,
        cascade: true,
        colorCase: 'lower',
        colorShorthand: true,
        zeroLengthNoUnit: true,
    };
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [formatting, setFormatting] = useState(false);
    const [configPanel, setConfigPanel] = useState(false);
    const [config, setConfig] = useState(JSON.stringify(initialConfig));
    const [playgroundInfo, setPlaygroundInfo] = useState({});
    const [controllerItem, setControllerItem] = useState('configView');

    return (
        <AppContext.Provider
            value={{
                controllerItem,
                setControllerItem,
                playgroundInfo,
                setPlaygroundInfo,
                config,
                setConfig,
                input,
                setInput,
                output,
                setOutput,
                formatting,
                setFormatting,
                configPanel,
                setConfigPanel,
            }}
        >
            <Container>
                <Header />
                <Main />
                <Footer />
            </Container>
        </AppContext.Provider>
    );
}
export default Index;
