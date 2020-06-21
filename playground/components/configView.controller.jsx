import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import CodeMirror from 'react-codemirror';
import { AppContext } from '../context/AppContext';

const Editor = styled(CodeMirror)`
    background: ${(props) => props.theme.bg};
    height: 100%;
    width: 100%;
    border: none;
    box-shadow: 'none';
    font-size: ${(props) => props.theme.fontSize};
`;

const options = {
    lineNumbers: true,
    mode: 'json',
};
class ConfigViewController extends Component {
    static contextType = AppContext;
    render() {
        return (
            <Editor
                value={JSON.stringify(this.context.config, null, 4)}
                style={{ width: '100%', height: '100%' }}
                justifyContent="center"
                onChange={(val) => this.context.setConfig(JSON.stringify(val))}
                options={options}
            />
        );
    }
}
export default withTheme(ConfigViewController);
