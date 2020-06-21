import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import Editor from '@monaco-editor/react';
import { Pane, Heading } from 'evergreen-ui';
import { AppContext } from '../context/AppContext';
import { ToolboxHeading } from './style';
import { withTheme } from 'styled-components';

const OutputArea = ({ ...props }) => {
    const { output } = useContext(AppContext);
    return (
        <div
            style={{
                height: '100%',
                background: props.theme.bg,
                borderRadius: '2px',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                width: '100%',
            }}
        >
            <ToolboxHeading>
                <Heading
                    size={600}
                    style={{ lineHeight: '1rem', display: 'flex', flexGrow: 2 }}
                >
                    Output
                </Heading>
            </ToolboxHeading>
            <Pane
                style={{ padding: '1rem' }}
                height={'100%'}
                width={'100%'}
                display="flex"
            >
                <Editor
                    height="50rem"
                    theme={props.theme || 'dark'}
                    language={'css'}
                    loading={<span>loading</span>}
                    value={output}
                    options={{ lineNumbers: 'on' }}
                />
            </Pane>
        </div>
    );
};

export default withTheme(OutputArea);
